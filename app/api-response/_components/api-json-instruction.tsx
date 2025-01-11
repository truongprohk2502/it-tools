import JSONPrettyView from "@/components/shared/json-pretty-view";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const rootObject = {
  name: "string",
  age: "number",
  isMale: "boolean",
  location: {
    x: "number",
    y: "number",
  },
  certificates: [{ name: "string", score: "number" }],
};

const ApiJsonInstruction: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show instruction</Button>
      </DialogTrigger>
      <DialogContent className="w-[40rem] max-sm:w-full">
        <DialogHeader>
          <DialogTitle>JSON format types</DialogTitle>
          <DialogDescription>
            Generate API response based on field name and field value of JSON
            schema object.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[30rem] overflow-auto">
          <p className="font-bold">Root object</p>
          <p className="mb-4 text-sm">
            We will create API response schema by an object that defining fields
            and the value types of them.
          </p>
          <JSONPrettyView transparentBackground data={rootObject} />
          <p className="mt-4 font-bold">String type</p>
          <p className="mb-4 text-sm">
            We will define string type by passing{" "}
            <span className="font-bold italic">{'"string"'}</span> as value of
            property.
          </p>
          <JSONPrettyView transparentBackground data={{ fullName: "string" }} />
          <p className="mt-4 font-bold">Number type</p>
          <p className="mb-4 text-sm">
            We will define number type by passing{" "}
            <span className="font-bold italic">{'"number"'}</span> as value of
            property.
          </p>
          <JSONPrettyView transparentBackground data={{ age: "number" }} />
          <p className="mt-4 font-bold">Boolean type</p>
          <p className="mb-4 text-sm">
            We will define boolean type by passing{" "}
            <span className="font-bold italic">{'"boolean"'}</span> as value of
            property.
          </p>
          <JSONPrettyView transparentBackground data={{ isMale: "boolean" }} />
          <p className="mt-4 font-bold">Object type</p>
          <p className="mb-4 text-sm">
            We will define object type by passing{" "}
            <span className="font-bold italic">{'"another object"'}</span> to
            define value of property.
          </p>
          <JSONPrettyView
            transparentBackground
            data={{ location: { x: "number", y: "number" } }}
          />
          <p className="mt-4 font-bold">Array type</p>
          <p className="mb-4 text-sm">
            We will define array type by passing{" "}
            <span className="font-bold italic">
              {'"an array with only one item"'}
            </span>{" "}
            to define value of array.
          </p>
          <JSONPrettyView
            transparentBackground
            data={{
              hobbits: ["string"],
              certificates: [{ name: "string", score: "number" }],
            }}
          />
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiJsonInstruction;
