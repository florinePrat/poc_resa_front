import axios from "axios";
import { tokenHeaders } from "../http_common";

export function getBookingByUserByDate(trigramme, date) {

    let burl = process.env.VUE_APP_API;
    return axios({
        method: 'get',
        url: burl + '/api/booking/?trigramme='+trigramme+'&date='+date,
        headers: tokenHeaders
    })
}