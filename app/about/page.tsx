import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - IT Tools",
  description:
    "IT Tools application for developers. Easy to use and is open source.",
};

export default function Page() {
  return (
    <div className="font-inter mx-auto max-w-[38rem] px-4 py-10">
      <h1 className="text-3xl font-bold">About IT-Tools</h1>
      <p className="mt-4 text-sm">
        This wonderful website, made with{" "}
        <span className="text-red-500">❤</span> by{" "}
        <span className="text-blue-500">Nguyen Dinh Truong</span> , aggregates
        useful tools for developer and people working in IT. If you find it
        useful, please feel free to share it to people you think may find it
        useful too and don&apos;t forget to bookmark it in your shortcut bar! IT
        Tools is open-source and free, and will always be, but it costs me money
        to host and renew the domain name. If you want to support my work, and
        encourage me to add more tools, please consider supporting by{" "}
        <a
          href="https://buymeacoffee.com/truongnguyen98"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          sponsoring me
        </a>
        .
      </p>
      <h1 className="mt-10 text-3xl font-bold">Technologies</h1>
      <p className="mt-4 text-sm">
        IT Tools is made in NextJS (Next 15) with the the shadcn UI component
        library and is hosted and continuously deployed by Netlify. Third-party
        open-source libraries are used in some tools, you may find the complete
        list in the{" "}
        <a
          href="https://github.com/truongprohk2502/it-tools/blob/main/package.json"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          package.json
        </a>{" "}
        file of the repository.
      </p>
      <h1 className="mt-10 text-3xl font-bold">
        Found a bug? A tool is missing?
      </h1>
      <p className="mt-4 text-sm">
        If you need a tool that is currently not present here, and you think can
        be useful, you are welcome to submit a feature request in the{" "}
        <a
          href="https://github.com/truongprohk2502/it-tools/issues"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          issues section
        </a>{" "}
        in the GitHub repository. And if you found a bug, or something
        doesn&apos;t work as expected, please file a bug report in the{" "}
        <a
          href="https://github.com/truongprohk2502/it-tools/issues"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          issues section
        </a>{" "}
        in the GitHub repository.
      </p>
    </div>
  );
}
