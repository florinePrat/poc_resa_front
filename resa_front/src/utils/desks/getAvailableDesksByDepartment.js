import axios from "axios";
import { tokenHeaders } from "../http_common";

export function getavailableDesksByDepartment(date, department) {

    let burl = process.env.VUE_APP_API;
    return axios({
        method: 'get',
        url: burl + '/api/desk/department/?date='+date+'?department='+department,
        headers: tokenHeaders
    })
}