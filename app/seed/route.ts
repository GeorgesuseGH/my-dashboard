import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";

const sql=neon(`${process.env.DATABASE_URL}`)


