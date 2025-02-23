export enum Level {
  All = "all",
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export enum Completion {
  All = "all",
  Complete = "complete",
  Incomplete = "incomplete",
}

export enum SqlKeyword {
  All = "all",
  Case = "case",
  Distinct = "distinct",
  GroupBy = "group by",
  Having = "having",
  OrderBy = "order by",
  In = "in",
  Join = "join",
  Like = "like",
  Null = "null",
  Union = "union",
  Count = "count",
  Avg = "avg",
  Sum = "sum",
  Max = "max",
  Min = "min",
}

export enum QuestionStatus {
  Correct = "correct",
  Incorrect = "incorrect",
  Unanswered = "unanswered",
}

export const SQL_DEFAULT = `

/*
  Start by selecting a question by pressing 'Start' or 'View All Questions'.
  Use the resources and information about the database from the left panel to help.
  Press the run button to execute the query.
  Question is automatically validated every time you execute the query.
  Make your output match the expected output.
 
 
  Keybinds:
    [ctrl + f]: Auto-format the SQL
*/`;
