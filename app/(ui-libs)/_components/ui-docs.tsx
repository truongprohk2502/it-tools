import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface UIField {
  name: string;
  required: boolean;
  description: string;
  typeLabel?: string;
  default: string | null;
  type: "string" | "number" | "boolean" | "radio" | "none";
  radioList?: string[];
}

interface Props<T> {
  fields: UIField[];
  fieldState: T;
  onChange: (value: T) => void;
}

function UIDocs<T>({ fields, fieldState, onChange }: Props<T>) {
  const changeValue = (key: string, value: string | boolean) => {
    onChange({ ...fieldState, [key]: value });
  };

  return (
    <div>
      <h2 className="mb-2 mt-12 text-lg font-semibold">Docs</h2>
      <Table>
        <TableHeader className="text-sm">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Control</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs">
          {fields.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="align-top font-semibold">
                <span>{item.name}</span>
                {item.required && <span className="text-red-500">{" *"}</span>}
              </TableCell>
              <TableCell className="align-top">
                {item.description}
                {item.typeLabel && (
                  <>
                    <br />
                    <code>{item.typeLabel}</code>
                  </>
                )}
              </TableCell>
              <TableCell className="align-top italic">
                {item.default || "-"}
              </TableCell>
              <TableCell className="w-60 align-top">
                {item.type === "radio" ? (
                  <RadioGroup
                    value={fieldState[item.name as keyof T] as string}
                    onValueChange={(val) => changeValue(item.name, val)}
                  >
                    {(item.radioList || []).map((radio) => (
                      <div key={radio} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={radio}
                          id={`${item.name}-${radio}`}
                        />
                        <Label
                          htmlFor={`${item.name}-${radio}`}
                          className="text-xs"
                        >
                          {radio}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : item.type === "string" ? (
                  <Input
                    value={fieldState[item.name as keyof T] as string}
                    onChange={(e) => changeValue(item.name, e.target.value)}
                    className="text-xs"
                  />
                ) : item.type === "number" ? (
                  <Input
                    type="number"
                    value={fieldState[item.name as keyof T] as string}
                    onChange={(e) => changeValue(item.name, e.target.value)}
                    className="text-xs"
                  />
                ) : item.type === "boolean" ? (
                  <div className="flex items-center">
                    <span
                      className={cn(
                        "cursor-pointer select-none text-xs",
                        !fieldState[item.name as keyof T]
                          ? "text-neutral-700"
                          : "text-neutral-300",
                      )}
                      onClick={() => changeValue(item.name, false)}
                    >
                      false
                    </span>
                    <Switch
                      className="mx-1"
                      checked={fieldState[item.name as keyof T] as boolean}
                      onCheckedChange={(val) => changeValue(item.name, val)}
                    />
                    <span
                      className={cn(
                        "cursor-pointer select-none text-xs",
                        fieldState[item.name as keyof T]
                          ? "text-neutral-700"
                          : "text-neutral-300",
                      )}
                      onClick={() => changeValue(item.name, true)}
                    >
                      true
                    </span>
                  </div>
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UIDocs;
