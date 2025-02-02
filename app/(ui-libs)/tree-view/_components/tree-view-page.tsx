"use client";

import UIComponent from "@/app/(ui-libs)/_components/ui-component";
import UIDocs from "@/app/(ui-libs)/_components/ui-docs";
import { TreeView, type TreeViewProps } from "@/components/ui-lib/tree-view";
import { ImageIcon, VideoIcon } from "lucide-react";
import { useState } from "react";
import { treeViewProperties } from "./constant";

const generateCode = (props: TreeViewProps) => `<TreeView
  expandAll={${props.expandAll}}
  showIcon={${props.showIcon}}
  showVerticalLine={${props.showVerticalLine}}
  data={[
    {
      key: "0",
      label: "Documents",
      childNodes: [
        {
          key: "0-0",
          label: "Media",
          childNodes: [
            {
              key: "0-1-1",
              label: "preview.mp4",
              iconType: "video",
            },
            {
              key: "0-1-2",
              label: "beautiful_girl.png",
              iconType: "image",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      childNodes: [
        {
          key: "1-0",
          label: "document1.doc",
        },
        {
          key: "0-0",
          label: "document-2.doc",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      childNodes: [],
    },
  ]}
  icons={{
    video: <VideoIcon width={16} height={16} />,
    image: <ImageIcon width={16} height={16} />,
  }}
/>
`;

export default function TreeViewPage() {
  const [treeViewProps, setTreeViewProps] = useState<TreeViewProps>({
    expandAll: true,
    showIcon: true,
    showVerticalLine: true,
    data: [
      {
        key: "0",
        label: "Documents",
        childNodes: [
          {
            key: "0-0",
            label: "Media",
            childNodes: [
              {
                key: "0-1-1",
                label: "preview.mp4",
                iconType: "video",
              },
              {
                key: "0-1-2",
                label: "beautiful_girl.png",
                iconType: "image",
              },
            ],
          },
        ],
      },
      {
        key: "1",
        label: "Desktop",
        childNodes: [
          {
            key: "1-0",
            label: "document1.doc",
          },
          {
            key: "0-0",
            label: "document-2.doc",
          },
        ],
      },
      {
        key: "2",
        label: "Downloads",
        childNodes: [],
      },
    ],
    icons: {
      video: <VideoIcon width={16} height={16} />,
      image: <ImageIcon width={16} height={16} />,
    },
  });

  return (
    <div>
      <UIComponent title="TreeView" code={generateCode(treeViewProps)}>
        <TreeView {...treeViewProps} />
      </UIComponent>
      <UIDocs<TreeViewProps>
        fields={treeViewProperties}
        fieldState={treeViewProps}
        onChange={setTreeViewProps}
      />
    </div>
  );
}
