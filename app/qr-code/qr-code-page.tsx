"use client";

import QrIcon from "@/assets/icons/qr.icon";
import ToolHeader from "@/components/shared/tool-header";
import { Route } from "@/constants/routes";
import { useState } from "react";
import EmailForm from "./_components/forms/email-form";
import GeoForm from "./_components/forms/geo-form";
import PhoneForm from "./_components/forms/phone-form";
import SmsForm from "./_components/forms/sms-form";
import TextForm from "./_components/forms/text-form";
import UrlForm from "./_components/forms/url-form";
import VCardForm from "./_components/forms/v-card-form";
import WifiForm from "./_components/forms/wifi-form";
import QrCodeResult from "./_components/qr-code-result";
import QrFormSelection from "./_components/qr-form-selection";
import { QRFormatType } from "./constants";

const QrCodePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<QRFormatType>(
    QRFormatType.URL,
  );
  const [value, setValue] = useState<string>("");

  const getFormTitle = () => {
    switch (selectedType) {
      case QRFormatType.URL:
        return "URL form";
      case QRFormatType.TEXT:
        return "Text form";
      case QRFormatType.EMAIL:
        return "Email form";
      case QRFormatType.PHONE:
        return "Phone call form";
      case QRFormatType.SMS:
        return "SMS form";
      case QRFormatType.WIFI:
        return "Wifi form";
      case QRFormatType.GEO:
        return "Geography form";
      case QRFormatType.VCARD:
        return "VCard form";
      default:
        return "Form";
    }
  };

  return (
    <div className="mx-auto min-w-[65rem] max-w-[70rem] px-6 pb-16">
      <ToolHeader
        title="Generate QR Code"
        description="Create and download QR Code with various format and beautiful frame."
        href={Route.GenerateQrCode}
        icon={QrIcon}
      />
      <div className="flex">
        <div className="flex-1 items-center rounded-lg border border-neutral-400 dark:border-neutral-700">
          <QrFormSelection
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <div className="p-4">
            <h1 className="mt-8 text-xl font-bold">{getFormTitle()}</h1>
            {selectedType === QRFormatType.URL ? (
              <UrlForm onChange={setValue} />
            ) : selectedType === QRFormatType.TEXT ? (
              <TextForm onChange={setValue} />
            ) : selectedType === QRFormatType.EMAIL ? (
              <EmailForm onChange={setValue} />
            ) : selectedType === QRFormatType.PHONE ? (
              <PhoneForm onChange={setValue} />
            ) : selectedType === QRFormatType.SMS ? (
              <SmsForm onChange={setValue} />
            ) : selectedType === QRFormatType.WIFI ? (
              <WifiForm onChange={setValue} />
            ) : selectedType === QRFormatType.GEO ? (
              <GeoForm onChange={setValue} />
            ) : (
              <VCardForm onChange={setValue} />
            )}
          </div>
        </div>
        <QrCodeResult value={value} />
      </div>
    </div>
  );
};

export default QrCodePage;
