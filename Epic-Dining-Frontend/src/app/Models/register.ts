import { Cart } from "./cart";
import { Order } from "./order";


export type Register = {
    firstName: string;
    lastName: string;
    userEmail: string;
    mobileNumber: number;
    userPassword: string;
    gender: string;

    cart : Cart[];
    order : Order[];

}