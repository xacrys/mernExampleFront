import {isUndefined} from 'util';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function expiredSession(){
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession(){
    return isUndefined(cookies.get("token"))?false:cookies.get("token");
}