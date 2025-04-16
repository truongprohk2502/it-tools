"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CodeIcon,
  DownloadIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  HeadingIcon,
  HighlighterIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  RedoIcon,
  SquareCodeIcon,
  StrikethroughIcon,
  SubscriptIcon,
  SuperscriptIcon,
  TextQuoteIcon,
  UnderlineIcon,
  UndoIcon,
} from "lucide-react";
import { downloadFile } from "../../utils/download-file";
import AnchorPopover from "./_components/anchor-popover";
import ToggleButton from "./_components/tool-button";
import ToolSelect from "./_components/tool-select";
import ToolToggle from "./_components/tool-toggle";
import { INIT_SOURCE } from "./constants";
import { formatHtmlCode } from "./helpers";
import "./styles.css";

type Level = 1 | 2 | 3 | 4;
type ListType = "Bullet" | "Ordered" | "Task";

const RichTextEditorPage: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      Subscript,
      Superscript,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        defaultAlignment: "left",
        types: ["heading", "paragraph"],
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: INIT_SOURCE,
  });

  if (!editor) return null;

  const getActiveHeading = () => {
    for (let i = 1; i <= 5; i++) {
      if (editor.isActive("heading", { level: i })) return i as Level;
    }
    return null;
  };

  const getActiveListType = () => {
    if (editor.isActive("bulletList")) return "Bullet" as ListType;
    if (editor.isActive("orderedList")) return "Ordered" as ListType;
    if (editor.isActive("taskList")) return "Task" as ListType;
    return null;
  };

  const checkCanToggleList = () => {
    if (editor.can().toggleBulletList()) return true;
    if (editor.can().toggleOrderedList()) return true;
    if (editor.can().toggleTaskList()) return true;
    return false;
  };

  const handleToggleList = (newType: ListType, oldType: ListType | null) => {
    switch (oldType) {
      case "Bullet":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "Ordered":
        editor.chain().focus().toggleOrderedList().run();
        break;
      case "Task":
        editor.chain().focus().toggleTaskList().run();
        break;
      default:
        break;
    }
    if (newType === oldType) return;
    switch (newType) {
      case "Bullet":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "Ordered":
        editor.chain().focus().toggleOrderedList().run();
        break;
      case "Task":
        editor.chain().focus().toggleTaskList().run();
        break;
      default:
        break;
    }
  };

  const handleDownload = () => {
    const htmlCode = formatHtmlCode(editor.getHTML());
    downloadFile(htmlCode, "html");
  };

  return (
    <div className="-mx-6 -my-8 h-[calc(100vh-4rem)] min-w-[60rem]">
      <div className="flex h-[3rem] items-center justify-center gap-2 border-b border-neutral-200 px-2 py-2 dark:border-neutral-800">
        <ToggleButton
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <UndoIcon />
        </ToggleButton>
        <ToggleButton
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <RedoIcon />
        </ToggleButton>
        <Separator orientation="vertical" className="mx-2" />
        <ToolSelect<ListType>
          active={getActiveListType()}
          options={[
            { icon: ListIcon, value: "Bullet" as ListType },
            { icon: ListOrderedIcon, value: "Ordered" as ListType },
            { icon: ListTodoIcon, value: "Task" as ListType },
          ]}
          defaultIcon={<ListIcon />}
          disabled={!checkCanToggleList()}
          onToggle={handleToggleList}
        />
        <ToolSelect<Level>
          active={getActiveHeading()}
          options={[
            { icon: Heading1Icon, value: 1 as Level },
            { icon: Heading2Icon, value: 2 as Level },
            { icon: Heading3Icon, value: 3 as Level },
            { icon: Heading4Icon, value: 4 as Level },
          ]}
          defaultIcon={<HeadingIcon />}
          disabled={!editor.can().toggleHeading({ level: 1 })}
          onToggle={(level) =>
            editor.chain().focus().toggleHeading({ level }).run()
          }
        />
        <ToolToggle
          pressed={editor.isActive("blockquote")}
          onPressedChange={() =>
            editor.chain().focus().toggleBlockquote().run()
          }
          disabled={!editor.can().toggleBlockquote()}
        >
          <TextQuoteIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("codeBlock")}
          onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
          disabled={!editor.can().toggleCodeBlock()}
        >
          <SquareCodeIcon />
        </ToolToggle>
        <Separator orientation="vertical" className="mx-2" />
        <ToolToggle
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().toggleBold()}
        >
          <BoldIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().toggleItalic()}
        >
          <ItalicIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().toggleStrike()}
        >
          <StrikethroughIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().toggleUnderline()}
        >
          <UnderlineIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("code")}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().toggleCode()}
        >
          <CodeIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("highlight")}
          onPressedChange={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().toggleHighlight()}
        >
          <HighlighterIcon />
        </ToolToggle>
        <AnchorPopover
          defaultValue={editor.getAttributes("link").href || ""}
          active={editor.isActive("link")}
          disabled={!editor.can().unsetLink()}
          onChangeLink={(url) =>
            url
              ? editor.chain().focus().setLink({ href: url }).run()
              : editor.chain().focus().unsetLink().run()
          }
        />
        <Separator orientation="vertical" className="mx-2" />
        <ToolToggle
          pressed={editor.isActive("subscript")}
          onPressedChange={() => editor.chain().focus().toggleSubscript().run()}
          disabled={!editor.can().toggleSubscript()}
        >
          <SubscriptIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive("superscript")}
          onPressedChange={() =>
            editor.chain().focus().toggleSuperscript().run()
          }
          disabled={!editor.can().toggleSuperscript()}
        >
          <SuperscriptIcon />
        </ToolToggle>
        <Separator orientation="vertical" className="mx-2" />
        <ToolToggle
          pressed={editor.isActive({ textAlign: "left" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
          disabled={!editor.can().setTextAlign("left")}
        >
          <AlignLeftIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive({ textAlign: "center" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
          disabled={!editor.can().setTextAlign("center")}
        >
          <AlignCenterIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive({ textAlign: "right" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
          disabled={!editor.can().setTextAlign("right")}
        >
          <AlignRightIcon />
        </ToolToggle>
        <ToolToggle
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("justify").run()
          }
          disabled={!editor.can().setTextAlign("justify")}
        >
          <AlignJustifyIcon />
        </ToolToggle>
        <Separator orientation="vertical" className="mx-2" />
        <Button size="icon" variant="ghost" onClick={handleDownload}>
          <DownloadIcon />
        </Button>
      </div>
      <div className="h-[calc(100vh-7rem)]">
        <ScrollArea className="h-full w-full">
          <EditorContent
            editor={editor}
            className="mx-auto h-full w-full max-w-[64rem] px-3 py-8"
          />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default RichTextEditorPage;
