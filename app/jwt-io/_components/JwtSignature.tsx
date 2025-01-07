"use client";

import { Input } from "@/components/ui/input";
import { JwtAlgorithm } from "../constants";

interface Props {
  algorithm: JwtAlgorithm;
  secret: string;
  onChange: (val: string) => void;
}

const JwtSignature: React.FC<Props> = ({ algorithm, secret, onChange }) => {
  const getText = () => {
    switch (algorithm) {
      case JwtAlgorithm.HS256:
        return 'HMACSHA256(\n\tbase64UrlEncode(header) + "." +\n\tbase64UrlEncode(payload),';
      case JwtAlgorithm.HS384:
        return 'HMACSHA384(\n\tbase64UrlEncode(header) + "." +\n\tbase64UrlEncode(payload),';
      case JwtAlgorithm.HS512:
        return 'HMACSHA512(\n\tbase64UrlEncode(header) + "." +\n\tbase64UrlEncode(payload),';
      default:
        break;
    }
  };

  return (
    <div>
      <div className="border-b border-neutral-400 bg-sky-500 px-2 py-1 text-lg font-medium text-white">
        VERIFY SIGNATURE
      </div>
      <div className="rounded-b-md bg-[#fffffe] p-4 dark:bg-[#1e1e1e]">
        <p className="whitespace-pre-wrap text-sky-500">{getText()}</p>
        <div className="py-1 pl-8">
          <Input
            value={secret}
            placeholder="jwt secret"
            className="placeholder:text-neutral-300"
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <p className="text-sky-500">{")"}</p>
      </div>
    </div>
  );
};

export default JwtSignature;
