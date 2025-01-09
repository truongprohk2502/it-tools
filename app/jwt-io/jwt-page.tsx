"use client";

import JwtIcon from "@/assets/icons/jwt.icon";
import ToolHeader from "@/components/shared/tool-header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Route } from "@/constants/routes";
import { cn } from "@/lib/utils";
import base64 from "base-64";
import EncBase64 from "crypto-js/enc-base64";
import HmacSHA256 from "crypto-js/hmac-sha256";
import HmacSHA384 from "crypto-js/hmac-sha384";
import HmacSHA512 from "crypto-js/hmac-sha512";
import { CircleCheck, CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import JwtHeader from "./_components/jwt-header";
import JwtPayload from "./_components/jwt-payload";
import JwtSignature from "./_components/jwt-signature";
import JwtTextarea from "./_components/jwt-textarea";
import { JWT_INIT_DATA, JwtAlgorithm } from "./constants";
import {
  formatBase64String,
  getDecodeObjectString,
  getHeaderToken,
  getPayloadToken,
  getSignatureToken,
} from "./helpers";

const JwtIOPage: React.FC = () => {
  const [algorithm, setAlgorithm] = useState<JwtAlgorithm>(JwtAlgorithm.HS256);
  const [jwtText, setJwtText] = useState<string>(JWT_INIT_DATA[0].defaultToken);
  const [secret, setSecret] = useState<string>(JWT_INIT_DATA[0].defaultSecret);
  const [isInvalidJwt, setIsInvalidJwt] = useState<boolean>(false);

  const headerToken = getHeaderToken(jwtText);
  const payloadToken = getPayloadToken(jwtText);

  const [headerValue, setHeaderValue] = useState<string>(
    getDecodeObjectString(headerToken),
  );
  const [payloadValue, setPayloadValue] = useState<string>(
    getDecodeObjectString(payloadToken),
  );

  useEffect(() => {
    setHeaderValue(getDecodeObjectString(headerToken));
  }, [headerToken]);

  useEffect(() => {
    setPayloadValue(getDecodeObjectString(payloadToken));
  }, [payloadToken]);

  const getSignedToken = (header: string, payload: string, secret: string) => {
    return algorithm === JwtAlgorithm.HS256
      ? HmacSHA256(`${header}.${payload}`, secret)
      : algorithm === JwtAlgorithm.HS384
        ? HmacSHA384(`${header}.${payload}`, secret)
        : HmacSHA512(`${header}.${payload}`, secret);
  };

  const getSignedJwt = (header: string, payload: string, secret: string) => {
    const token = getSignedToken(header, payload, secret);
    const signature = formatBase64String(EncBase64.stringify(token));
    return `${header}.${payload}.${signature}`;
  };

  const changeJwtStatus = (value: string) => {
    const headerToken = getHeaderToken(value);
    const payloadToken = getPayloadToken(value);
    const signatureToken = getSignatureToken(value);
    const token = getSignedToken(headerToken, payloadToken, secret);
    const signature = formatBase64String(EncBase64.stringify(token));
    setIsInvalidJwt(signature !== signatureToken);
  };

  const changeHeaderToken = (token: string) => {
    if (!jwtText.trim()) {
      setIsInvalidJwt(true);
      return;
    }
    const firstDotIndex = jwtText.indexOf(".");
    if (firstDotIndex < 0) {
      setJwtText(token);
      setIsInvalidJwt(true);
      return;
    }
    const newJwt = getSignedJwt(token, payloadToken, secret);
    setJwtText(newJwt);
    changeJwtStatus(newJwt);
  };

  const changePayloadToken = (token: string) => {
    const secondDotIndex = jwtText.indexOf(".", headerToken.length + 1);
    if (secondDotIndex < 0) {
      setJwtText(headerToken + "." + token);
      setIsInvalidJwt(true);
      return;
    }
    const newJwt = getSignedJwt(headerToken, token, secret);
    setJwtText(newJwt);
    changeJwtStatus(newJwt);
  };

  const handleChangeHeader = (value: string | undefined) => {
    if (!value) value = "";
    try {
      setHeaderValue(value);
      const formattedJson = JSON.parse(value);
      const encodedString = formatBase64String(
        base64.encode(JSON.stringify(formattedJson)),
      );
      changeHeaderToken(encodedString);
    } catch {
      setIsInvalidJwt(true);
    }
  };

  const handleChangePayload = (value: string | undefined) => {
    if (!value) value = "";
    try {
      setPayloadValue(value);
      const formattedJson = JSON.parse(value);
      const encodedString = formatBase64String(
        base64.encode(JSON.stringify(formattedJson)),
      );
      changePayloadToken(encodedString);
    } catch {
      setIsInvalidJwt(true);
    }
  };

  const handleChangeSecret = (secret: string) => {
    setSecret(secret);
    const newJwt = getSignedJwt(headerToken, payloadToken, secret);
    setJwtText(newJwt);
  };

  const handleChangeJwt = (value: string) => {
    setJwtText(value);
    changeJwtStatus(value);
  };

  const handleChangeAlgorithm = (value: JwtAlgorithm) => {
    const algorithm = JWT_INIT_DATA.find((item) => item.value === value)!;
    setAlgorithm(value);
    setJwtText(algorithm.defaultToken);
    setSecret(algorithm.defaultSecret);
    setIsInvalidJwt(false);
  };

  return (
    <div className="mx-auto min-w-[50rem] max-w-[65rem]">
      <ToolHeader
        title="JWT IO"
        description="Allows you to decode, verify and generate JWT."
        href={Route.JwtIO}
        icon={JwtIcon}
      />
      <div className="mb-4 flex items-center gap-6">
        <p
          className={cn(
            "flex flex-1 items-center gap-2 text-lg font-medium",
            isInvalidJwt ? "text-red-500" : "text-blue-500",
          )}
        >
          {isInvalidJwt ? (
            <>
              <CircleX width={24} height={24} />
              <span>Invalid signature</span>
            </>
          ) : (
            <>
              <CircleCheck width={24} height={24} />
              <span>Signature verified</span>
            </>
          )}
        </p>
        <div className="flex w-[28rem] flex-shrink-0 items-center">
          <p className="mr-4 text-sm font-semibold">Algorithm</p>
          <Select
            value={algorithm as string}
            onValueChange={(val) => handleChangeAlgorithm(val as JwtAlgorithm)}
          >
            <SelectTrigger className="w-[8rem] flex-shrink-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {JWT_INIT_DATA.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-stretch gap-6">
        <JwtTextarea value={jwtText} onChange={handleChangeJwt} />
        <div className="w-[28rem] flex-shrink-0 rounded-md border border-neutral-400">
          <JwtHeader value={headerValue} onChange={handleChangeHeader} />
          <JwtPayload value={payloadValue} onChange={handleChangePayload} />
          <JwtSignature
            algorithm={algorithm}
            secret={secret}
            onChange={handleChangeSecret}
          />
        </div>
      </div>
    </div>
  );
};

export default JwtIOPage;
