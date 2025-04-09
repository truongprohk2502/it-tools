import type { IntrospectionQuery } from "graphql";
import type { FieldType, ObjectType, ParsedSchemaData } from "../types";

const builtInScalars = {
  Int: true,
  String: true,
  ID: true,
  Boolean: true,
  Float: true,
};

export const parseReceivedSchema = ({
  __schema: schema,
}: IntrospectionQuery) => {
  const { types } = schema;
  const parsedSchemaData: ParsedSchemaData = {
    mutationName: schema.mutationType,
    queryName: schema.queryType,
    objectTypes: [],
  };

  //access types key in schema obj. It's an array, so you'll have to iterate through all of the types
  types.forEach((type) => {
    //store to obj a key labeled 'name' with value ov type.name and create field key w/ array to put in fields. React FLow uses arrays with nested objects to create its nodes
    const objType: ObjectType = {
      name: type.name,
      fields: [],
    };
    // check to make sure we're only grabbing the types that are object kind and aren't subscriptions and other utility types
    if (
      type.kind === "OBJECT" &&
      !type.name.toLowerCase().includes("subscription") &&
      !type.name.includes("__")
    ) {
      //access the fields key in each type. fields is an array and we need to iterate through it storing a property to each objtype for each field. Each field will be a diff row in its corresponding node on the visualized.
      type.fields.forEach((field) => {
        const fieldObj: FieldType = {
          fieldName: field.name,
          args: [],
          returnType: "",
          relationship: "",
        };

        if (field.args.length) {
          const args = field.args.map((arg) => {
            const value = arg.type.kind === `NON_NULL` ? true : false;
            return {
              name: arg.name,
              nonNull: value,
            };
          });
          fieldObj.args = args;
        }

        // objType.fields.push(fieldObj);

        // below line needed if parsedSchema is desired w/ nested objects for each return type, as done in the received schema response
        let curObj = field.type;

        //create a stack and push the appropriate values into it so then you can use them to construct the returnType string value
        let relationship: string = "";
        const returnTypeStack = [];
        while (curObj) {
          if (curObj.kind !== "OBJECT" && curObj.kind !== "SCALAR") {
            returnTypeStack.push(curObj.kind);
          } else {
            returnTypeStack.push(curObj.name);
            relationship = curObj.name;
          }
          // @ts-expect-error missing ofType
          curObj = curObj.ofType;
        }

        fieldObj.returnType = returnTypeStack.reduceRight((acc, cur) => {
          if (cur === "NON_NULL") {
            return acc + "!";
          } else if (cur === "LIST") {
            return `[${acc}]`;
          } else {
            return acc + cur;
          }
        });
        // add relationship here
        if (!builtInScalars[relationship as keyof typeof builtInScalars]) {
          fieldObj.relationship = relationship;
        }

        //push entire fieldObj into fields array
        objType.fields.push(fieldObj);
      });
      // push type of objectTypes in parsedSchemaData
      parsedSchemaData.objectTypes.push(objType);
    }
  });

  return parsedSchemaData;
};
