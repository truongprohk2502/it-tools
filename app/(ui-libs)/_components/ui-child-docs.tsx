import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface UIChildField {
  name: string;
  required: boolean;
  description: string;
  default: string | null;
}

interface Props {
  componentName: string;
  fields: UIChildField[];
}

function UIChildDocs({ componentName, fields }: Props) {
  return (
    <div>
      <p className="mb-2 mt-8 text-lg font-semibold">{componentName}</p>
      <Table>
        <TableHeader className="text-sm">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs">
          {fields.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="align-top font-semibold">
                <span>{item.name}</span>
                {item.required && <span className="text-red-500">{" *"}</span>}
              </TableCell>
              <TableCell className="align-top">{item.description}</TableCell>
              <TableCell className="align-top italic">
                {item.default || "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UIChildDocs;
