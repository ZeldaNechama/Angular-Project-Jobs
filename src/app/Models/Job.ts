import { fields } from "./fields";

// •	משרה: תחום המשרה, שם משרה, היקף שעות, אזור, דרישות, עבודה מהבית?
export interface job{
    field:fields,
    name:string,
    hours:number,
    area:string,
    requirements:string,
    fromHome:boolean

}