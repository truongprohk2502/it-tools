export const downloadFile = (
  data: string,
  fileType: "json" | "xml" | "csv" | "yaml" | "markdown" | "html",
) => {
  const blobFormat = {
    json: "application/json",
    xml: "application/xml",
    csv: "text/plain",
    yaml: "text/yaml",
    markdown: "text/markdown",
    html: "text/html",
  };
  const fileExtension = {
    json: "json",
    xml: "xml",
    csv: "txt",
    yaml: "yaml",
    markdown: "md",
    html: "html",
  };

  const blob = new Blob([data], {
    type: blobFormat[fileType],
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `data.${fileExtension[fileType]}`;

  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};
