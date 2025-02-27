import { hospitalQuestions } from "@/app/sql-practice/_questions/hospital";
import { checkQueryResultIsCorrect } from "@/app/sql-practice/helpers";
import type { Database } from "sql.js";

export const testSqlQuestions = async (db: Database) => {
  for (const question of hospitalQuestions) {
    console.log(`exec [id-${question.id}]: `, question.query);
    const result = await db.exec(question.query);
    const data = result?.[0] || null;
    const isCorrect = checkQueryResultIsCorrect(data, question.expectedResult);
    if (!isCorrect) throw Error();
    console.log(`passed [id-${question.id}]`);
  }
};
