import axios from "axios";
import { basicHeaders } from "../http_common";

export function login(mail, password) {

    console.log("function is called");
    let burl = process.env.VUE_APP_API;
    console.log(process.env.VUE_APP_API)
    return axios({
        method: 'post',
        url: burl + '/api/auth/login',
        data: { 'mail': mail, 'password': password },
        headers: basicHeaders
    })
}