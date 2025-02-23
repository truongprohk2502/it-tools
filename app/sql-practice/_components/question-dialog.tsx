"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";
import { hospitalQuestions } from "../_questions/hospital";
import { Completion, Level, SqlKeyword } from "../constants";
import type { Question } from "../types";
import QuestionItem from "./question-item";

interface Props {
  completeSqlQuestions: number[];
  onSelect: (questionId: number) => void;
}

const QuestionDialog: React.FC<Props> = ({
  completeSqlQuestions,
  onSelect,
}) => {
  const [keyword, setKeyword] = useState<SqlKeyword>(SqlKeyword.All);
  const [difficulty, setDifficulty] = useState<Level>(Level.All);
  const [completion, setCompletion] = useState<Completion>(Completion.All);
  const [open, setOpen] = useState<boolean>(false);

  const filteredQuestions = useMemo(() => {
    const checkCompletion = (question: Question) => {
      if (completion === Completion.All) return true;
      const isComplete = completeSqlQuestions.includes(question.id);
      return completion === Completion.Complete ? isComplete : !isComplete;
    };

    const checkDifficulty = (question: Question) => {
      if (difficulty === Level.All) return true;
      return question.level === difficulty;
    };

    const checkKeyword = (question: Question) => {
      if (keyword === SqlKeyword.All) return true;
      return question.keywords.includes(keyword);
    };

    return hospitalQuestions.filter(
      (question) =>
        checkCompletion(question) &&
        checkDifficulty(question) &&
        checkKeyword(question),
    );
  }, [keyword, difficulty, completion, completeSqlQuestions]);

  const handleSelect = (questionId: number) => {
    onSelect(questionId);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="w-full">
          View all questions
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[45rem]">
        <DialogHeader>
          <DialogTitle>All questions</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p>Keywords</p>
            <Select
              value={keyword}
              onValueChange={(val) => setKeyword(val as SqlKeyword)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={SqlKeyword.All}>All</SelectItem>
                  <SelectItem value={SqlKeyword.Case}>Case</SelectItem>
                  <SelectItem value={SqlKeyword.Distinct}>Distinct</SelectItem>
                  <SelectItem value={SqlKeyword.GroupBy}>Group By</SelectItem>
                  <SelectItem value={SqlKeyword.Having}>Having</SelectItem>
                  <SelectItem value={SqlKeyword.OrderBy}>Order By</SelectItem>
                  <SelectItem value={SqlKeyword.In}>In</SelectItem>
                  <SelectItem value={SqlKeyword.Join}>Join</SelectItem>
                  <SelectItem value={SqlKeyword.Like}>Like</SelectItem>
                  <SelectItem value={SqlKeyword.Null}>Null</SelectItem>
                  <SelectItem value={SqlKeyword.Union}>Union</SelectItem>
                  <SelectItem value={SqlKeyword.Count}>Count</SelectItem>
                  <SelectItem value={SqlKeyword.Avg}>Avg</SelectItem>
                  <SelectItem value={SqlKeyword.Sum}>Sum</SelectItem>
                  <SelectItem value={SqlKeyword.Max}>Max</SelectItem>
                  <SelectItem value={SqlKeyword.Min}>Min</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>Difficulty</p>
            <Select
              value={difficulty}
              onValueChange={(val) => setDifficulty(val as Level)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={Level.All}>All</SelectItem>
                  <SelectItem value={Level.Easy}>Easy</SelectItem>
                  <SelectItem value={Level.Medium}>Medium</SelectItem>
                  <SelectItem value={Level.Hard}>Hard</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p>Completion</p>
            <Select
              value={completion}
              onValueChange={(val) => setCompletion(val as Completion)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={Completion.All}>All</SelectItem>
                  <SelectItem value={Completion.Complete}>Complete</SelectItem>
                  <SelectItem value={Completion.Incomplete}>
                    Incomplete
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-20rem)]">
          <div className="grid grid-cols-1 gap-4">
            {filteredQuestions.map((question) => (
              <QuestionItem
                key={question.id}
                data={question}
                complete={completeSqlQuestions.includes(question.id)}
                onClick={handleSelect}
              />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
