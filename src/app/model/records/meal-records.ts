import { Breakfast } from "./breakfast";
import { Dinner } from "./dinner";
import { Lunch } from "./lunch";
import { Snack } from "./snack";

export class MealRecords {
    day!:number;
    month!:number;
    year!:number;
    month_name!:string;
    record_id!:string;
    user_id!:string;
    water_count!:number;
    weight!:number;
    notes!:string;
    breakfast!:Breakfast;
    lunch!:Lunch;
    snack!:Snack;
    dinner!:Dinner;
}
