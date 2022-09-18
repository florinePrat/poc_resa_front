import axios from "axios";
import { tokenHeaders } from "../http_common";

export function createBooking(idDesk, date) {

    let burl = process.env.VUE_APP_API;
    return axios({
        method: 'post',
        url: burl + '/api/booking/',
        data:{idDesk,date},
        headers: tokenHeaders
    })
}