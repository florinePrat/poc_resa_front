import axios from "axios";
import { tokenHeaders } from "../http_common";

export function getavailableDesks(date) {

    let burl = process.env.VUE_APP_API;
    return axios({
        method: 'get',
        url: burl + '/api/desk/?date='+date,
        headers: tokenHeaders
    })
}