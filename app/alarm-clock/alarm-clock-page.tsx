"use client";

import AlarmIcon from "@/assets/icons/alarm.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import useDomLoaded from "@/hooks/use-dom-loaded";
import useSystemTheme from "@/hooks/use-system-theme";
import dayjs from "dayjs";
import padStart from "lodash/padStart";
import range from "lodash/range";
import { useState } from "react";
import Clock from "react-clock";
import ReactCountdown from "react-countdown";
import Countdown from "./_components/countdown";
import "./styles.css";

const AlarmClockPage: React.FC = () => {
  const [hour, setHour] = useState<string>("12");
  const [minute, setMinute] = useState<string>("00");
  const [meridiem, setMeridiem] = useState<string>("AM");
  const [alarmDate, setAlarmDate] = useState<Date | null>(null);
  const [notificationGranted, setNotificationGranted] =
    useState<boolean>(false);

  const theme = useSystemTheme();
  const domLoaded = useDomLoaded();

  const setAlarmDateTime = () => {
    const currentDate = dayjs();
    const selectedDate = dayjs(
      `${currentDate.format("YYYY-MM-DD")} ${hour}:${minute} ${meridiem}`,
      "YYYY-MM-DD hh:mm A",
    );

    if (selectedDate.isAfter(currentDate)) {
      setAlarmDate(selectedDate.toDate());
    } else {
      const nextDaySelected = selectedDate.add(1, "day");
      setAlarmDate(nextDaySelected.toDate());
    }
  };

  const handleSetAlarm = () => {
    if (!window.Notification) {
      setNotificationGranted(false);
      setAlarmDateTime();
      return;
    }

    if (Notification.permission === "granted") {
      setNotificationGranted(true);
      setAlarmDateTime();
      return;
    }

    if (Notification.permission === "denied") {
      setNotificationGranted(false);
      setAlarmDateTime();
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        setNotificationGranted(true);
      } else {
        setNotificationGranted(false);
      }
      setAlarmDateTime();
    });
  };

  const handleShowAlarm = () => {
    if (notificationGranted) {
      new Notification("IT Tools: Alarm Clock", {
        body: "Your alarm is ringing!",
        silent: false,
      });
    } else {
      alert("Your alarm is ringing!");
    }
  };

  return (
    <div className="mx-auto min-w-[50rem] max-w-[70rem] px-6">
      <ToolHeader
        title="Alarm Clock"
        description="Set an alarm to notify you at a specific time."
        href={Route.AlarmClock}
        icon={AlarmIcon}
      />
      {domLoaded && (
        <div className="flex w-full justify-center gap-16">
          <Clock
            value={alarmDate ?? new Date()}
            renderNumbers
            size="25rem"
            hourHandOppositeLength={0}
            minuteHandOppositeLength={0}
            secondHandOppositeLength={0}
            hourHandLength={50}
            minuteHandLength={60}
            secondHandLength={0}
            className={`react-clock__${theme}`}
          />
          <div className="mt-6">
            {alarmDate ? (
              <ReactCountdown
                date={alarmDate}
                renderer={(props) => <Countdown {...props} />}
                onComplete={handleShowAlarm}
              />
            ) : (
              <Countdown hours={0} minutes={0} seconds={0} />
            )}
            <div className="my-4 grid grid-cols-3 gap-4">
              <Select value={hour} onValueChange={setHour}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {range(1, 13).map((num) => {
                      const value = padStart(num.toString(), 2, "0");
                      return (
                        <SelectItem key={num} value={value}>
                          {value}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select value={minute} onValueChange={setMinute}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {range(0, 60).map((num) => {
                      const value = padStart(num.toString(), 2, "0");
                      return (
                        <SelectItem key={num} value={value}>
                          {value}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select value={meridiem} onValueChange={setMeridiem}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {["AM", "PM"].map((period) => (
                      <SelectItem key={period} value={period}>
                        {period}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className="mt-8 w-full" onClick={handleSetAlarm}>
              Set Alarm
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmClockPage;
