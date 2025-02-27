"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StorageKeys } from "@/constants/storage";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocalStorage } from "react-use";
import { toast } from "sonner";
import initSqlJs, {
  QueryExecResult,
  type Database,
  type SqlJsStatic,
} from "sql.js";
import DbDiagram from "./_components/db-diagram";
import ExpectedResult from "./_components/expected-result";
import QuestionDialog from "./_components/question-dialog";
import ResultBadge from "./_components/result-badge";
import SqlEditor, { type SqlEditorRef } from "./_components/sql-editor";
import SqlResult from "./_components/sql-result";
import SqlSolution from "./_components/sql-solution";
import { initHospitalDatabaseFunctions } from "./_databases/hospital";
import { hospitalQuestions } from "./_questions/hospital";
import { Level, QuestionStatus } from "./constants";
import { checkQueryResultIsCorrect } from "./helpers";

const SqlPracticePage: React.FC = () => {
  const [openingDbDiagram, setOpeningDbDiagram] = useState<boolean>(false);
  const [openingSolution, setOpeningSolution] = useState<boolean>(false);
  const [queried, setQueried] = useState<boolean>(false);
  const [questionId, setQuestionId] = useState<number | null>(null);
  const [questionStatus, setQuestionStatus] = useState<QuestionStatus>(
    QuestionStatus.Unanswered,
  );
  const [level, setLevel] = useState<Level>(Level.Easy);
  const [data, setData] = useState<QueryExecResult | null>(null);

  const [completeSqlQuestions, setCompleteSqlQuestions] = useLocalStorage<
    number[]
  >(StorageKeys.CompleteSqlQuestions);

  const sql = useRef<SqlJsStatic>(null);
  const db = useRef<Database>(null);
  const sqlEditorRef = useRef<SqlEditorRef>(null);

  const currentQuestion = useMemo(
    () => hospitalQuestions.find((q) => q.id === questionId),
    [questionId],
  );

  const initDatabase = async () => {
    if (!sql.current) return;

    db.current = new sql.current!.Database();

    for (const createTable of initHospitalDatabaseFunctions) {
      try {
        await createTable(db.current);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    })
      .then((sqlInstance) => {
        sql.current = sqlInstance;
        initDatabase();
      })
      .catch((err: Error) => {
        throw err;
      });
  }, []);

  const handleOpenDbDiagram = () => setOpeningDbDiagram(true);

  const handleCloseDbDiagram = () => setOpeningDbDiagram(false);

  const handleChangeLevel = (value: string) => {
    setLevel(value as Level);
  };

  const checkResult = (result: QueryExecResult) => {
    if (!currentQuestion) return;

    if (result === null) {
      setQuestionStatus(QuestionStatus.Incorrect);
      return;
    }

    const isCorrect = checkQueryResultIsCorrect(
      result,
      currentQuestion.expectedResult,
    );

    setQuestionStatus(
      isCorrect ? QuestionStatus.Correct : QuestionStatus.Incorrect,
    );

    if (isCorrect)
      setCompleteSqlQuestions((prevQuestions) =>
        prevQuestions
          ? [...prevQuestions, currentQuestion.id]
          : [currentQuestion.id],
      );
  };

  const handleQuery = async () => {
    if (!db.current) return;

    try {
      setQueried(true);
      const query = sqlEditorRef.current!.getQueryString();
      const result = await db.current.exec(query);
      const data = result?.[0] || null;

      setData(data);
      checkResult(data);
    } catch (err: unknown) {
      setQuestionStatus(QuestionStatus.Incorrect);
      toast.error((err as Error)?.message || "An error occurred");
      setData(null);
    }
  };

  const findNextIncompleteQuestionId = () => {
    const filteredQuestions =
      level === Level.All
        ? hospitalQuestions
        : hospitalQuestions.filter((q) => q.level === level);

    if (questionId) {
      const currentIndex = hospitalQuestions.findIndex(
        (q) => q.id === questionId,
      );

      if (currentIndex >= 0 && currentIndex < hospitalQuestions.length - 1) {
        for (let i = currentIndex + 1; i < hospitalQuestions.length; i++) {
          const question = hospitalQuestions[i];
          if (
            question.level === level &&
            !completeSqlQuestions?.includes(question.id)
          )
            return question.id;
        }
      }
    }

    for (const question of filteredQuestions) {
      if (!completeSqlQuestions?.includes(question.id)) return question.id;
    }

    for (const question of hospitalQuestions) {
      if (!completeSqlQuestions?.includes(question.id)) return question.id;
    }

    return null;
  };

  const handleSelectQuestion = (questionId: number) => {
    setQuestionId(questionId);
    setData(null);
    setQueried(false);
    setOpeningSolution(false);
    setQuestionStatus(QuestionStatus.Unanswered);
    sqlEditorRef.current?.resetQueryString();
  };

  const handleOpenQuestion = () => {
    setData(null);
    setQueried(false);
    setOpeningSolution(false);
    setQuestionStatus(QuestionStatus.Unanswered);
    sqlEditorRef.current?.resetQueryString();
    const nextId = findNextIncompleteQuestionId();
    if (nextId) {
      setQuestionId(nextId);
    } else {
      setQuestionId(null);
      setQueried(false);
    }
  };

  return (
    <div className="relative -mx-6 -my-8 h-[calc(100vh-4rem)] min-w-[60rem]">
      <div className="absolute inset-y-0 left-0 right-[20rem] flex">
        <div className="h-[calc(100vh-4rem)] flex-auto">
          <div className="h-[calc(100%-16rem)]">
            <SqlEditor ref={sqlEditorRef} onQuery={handleQuery} />
          </div>
          <div className="h-[16rem]">
            <SqlResult queried={queried} data={data} />
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 w-[20rem] border-l border-gray-200 dark:border-[#1c1c1c]">
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="px-3 py-2">
            <div className="mb-2 grid grid-cols-2 gap-2">
              <Button size="lg" onClick={() => handleQuery()}>
                Run
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleOpenDbDiagram}
              >
                Show database
              </Button>
            </div>
            <QuestionDialog
              completeSqlQuestions={completeSqlQuestions || []}
              onSelect={handleSelectQuestion}
            />
            {!currentQuestion || questionStatus === QuestionStatus.Correct ? (
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-auto"
                  onClick={handleOpenQuestion}
                >
                  {questionId ? "Next question" : "Start practice"}
                </Button>
                <Select value={level} onValueChange={handleChangeLevel}>
                  <SelectTrigger className="h-10 w-28">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={Level.Easy}>Easy</SelectItem>
                      <SelectItem value={Level.Medium}>Medium</SelectItem>
                      <SelectItem value={Level.Hard}>Hard</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ) : (
              <SqlSolution
                result={currentQuestion.query}
                open={openingSolution}
                onToggle={() => setOpeningSolution(!openingSolution)}
              />
            )}
            {currentQuestion && (
              <div className="mt-2 rounded-md border border-input px-2 py-1 text-sm">
                {currentQuestion.question}
              </div>
            )}
            {currentQuestion &&
              questionStatus !== QuestionStatus.Unanswered && (
                <ResultBadge
                  correct={questionStatus === QuestionStatus.Correct}
                />
              )}
            {currentQuestion && questionStatus !== QuestionStatus.Correct && (
              <ExpectedResult data={currentQuestion.expectedResult} />
            )}
          </div>
        </ScrollArea>
      </div>
      <DbDiagram open={openingDbDiagram} onClose={handleCloseDbDiagram} />
    </div>
  );
};

export default SqlPracticePage;
