import { fields } from "./fields";

// מזהה, שם משתמש, סיסמה, תחום חיפוש עבודה.
export interface user{
    id:number,
    name:string,
    password:string,
    field:fields
}