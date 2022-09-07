export const basicHeaders = {'Content-Type': 'application/json'};
import {getCookie} from "./cookies";

export const tokenHeaders = {
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + getCookie('token')
};