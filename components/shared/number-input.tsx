import { Input } from "../ui/input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  onChangeNumber: (val: string) => void;
}

const NumberInput: React.FC<Props> = ({
  value,
  min,
  max,
  onBlur,
  onChangeNumber,
  ...props
}) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (!e.target.value.trim()) onChangeNumber(min.toString());
    onBlur?.(e);
  };

  const handleChange = (val: string) => {
    if (!val.trim()) onChangeNumber("");
    const num = Number(val);
    if (!Number.isInteger(num) || num < min || num > max) return;
    onChangeNumber(val);
  };

  return (
    <Input
      type="number"
      value={value}
      min={min}
      max={max}
      onBlur={handleBlur}
      onChange={(e) => handleChange(e.target.value)}
      {...props}
    />
  );
};

export default NumberInput;
