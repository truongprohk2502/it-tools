"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getIntrospectionQuery, type IntrospectionQuery } from "graphql";
import { request } from "graphql-request";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  onGetSchema: (schema: IntrospectionQuery) => void;
}

const InputForm: React.FC<Props> = ({ onGetSchema }) => {
  const [endpoint, setEndpoint] = useState<string>(
    "https://countries.trevorblades.com/",
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const schema = await request(endpoint, getIntrospectionQuery());
      onGetSchema(schema as IntrospectionQuery);
    } catch {
      toast.error("Cannot fetch GraphQL schema.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-shrink-0 gap-2 px-2 py-2">
      <Input
        placeholder="GraphQL Endpoint"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <Button disabled={loading} onClick={handleSubmit}>
        Fetch Schema
      </Button>
    </div>
  );
};

export default InputForm;
