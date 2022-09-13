import axios from "axios";
import {basicHeaders} from "../http_common";

export function signup(mail, name, password) {
    let burl = process.env.VUE_APP_API;
    return axios({
        method: 'post',
        url: burl + '/api/auth/signup',
        data : {'mail': mail,'password': password, 'name': name},
        headers : basicHeaders
    })
}