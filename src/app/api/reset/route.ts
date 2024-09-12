import _ from "lodash";
import { DB, originalDB } from "@lib/DB";
import { NextResponse } from "next/server";

//this route is for grading only
//in case of DB is messed up.

export const POST = () => {
  DB.students = _.cloneDeep(originalDB.students);
  return NextResponse.json({ ok: true, message: "DB has been reset" });
};
