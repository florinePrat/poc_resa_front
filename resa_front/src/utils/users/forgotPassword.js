import axios from "axios";
import {basicHeaders} from "../http_common";

export function forgetPassword(mail) {
    let burl = process.env.VUE_APP_API;
    return axios({
        method: 'post',
        url: burl + '/api/auth/forgetPassword',
        data : {'mail': mail},
        headers : basicHeaders
    })
}