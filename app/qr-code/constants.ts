import {
  Contact,
  Link2,
  Mail,
  MapPin,
  NotebookText,
  Phone,
  Send,
  Wifi,
} from "lucide-react";
import QrFrame0 from "./_components/frames/qr-frame-0";
import QrFrame1 from "./_components/frames/qr-frame-1";
import QrFrame2 from "./_components/frames/qr-frame-2";
import QrFrame3 from "./_components/frames/qr-frame-3";
import QrFrame4 from "./_components/frames/qr-frame-4";
import QrFrame5 from "./_components/frames/qr-frame-5";
import QrFrame6 from "./_components/frames/qr-frame-6";
import QrFrame7 from "./_components/frames/qr-frame-7";

export enum EncriptionType {
  WEP = "WEP",
  WPA = "WPA",
  BLANK = "nopass",
}

export enum QRFormatType {
  URL,
  TEXT,
  EMAIL,
  PHONE,
  SMS,
  WIFI,
  GEO,
  VCARD,
}

export const QR_FORMATS = [
  {
    id: QRFormatType.URL,
    label: "URL",
    icon: Link2,
  },
  {
    id: QRFormatType.TEXT,
    label: "TEXT",
    icon: NotebookText,
  },
  {
    id: QRFormatType.EMAIL,
    label: "E-MAIL",
    icon: Mail,
  },
  {
    id: QRFormatType.PHONE,
    label: "PHONE",
    icon: Phone,
  },
  {
    id: QRFormatType.SMS,
    label: "SMS",
    icon: Send,
  },
  {
    id: QRFormatType.WIFI,
    label: "WIFI",
    icon: Wifi,
  },
  {
    id: QRFormatType.GEO,
    label: "GEOGRAPHY",
    icon: MapPin,
  },
  {
    id: QRFormatType.VCARD,
    label: "VCARD",
    icon: Contact,
  },
];

export const QR_FRAMES = [
  { frame: QrFrame0, x: 240, y: 240 },
  { frame: QrFrame1, x: 240, y: 210 },
  { frame: QrFrame2, x: 240, y: 200 },
  { frame: QrFrame3, x: 240, y: 180 },
  { frame: QrFrame4, x: 240, y: 180 },
  { frame: QrFrame5, x: 240, y: 210 },
  { frame: QrFrame6, x: 240, y: 196 },
  { frame: QrFrame7, x: 240, y: 240 },
];

export const QR_LOGOS = [
  null,
  "/qr-logo/qr_icon_1.png",
  "/qr-logo/qr_icon_2.png",
  "/qr-logo/qr_icon_3.png",
  "/qr-logo/qr_icon_4.png",
];

export const ERROR_CORRECTION_LEVELS = [
  { label: "Level L (Low)", value: "L" },
  { label: "Level H (High)", value: "H" },
];
