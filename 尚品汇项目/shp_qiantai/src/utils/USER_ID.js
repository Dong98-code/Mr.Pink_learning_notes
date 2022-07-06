//利用uuid生成未登录用户临时标识符
import { v4 as uuidv4 } from 'uuid';
//封装函数:只能生成一次用户临时身份
let userId;
export const SET_USERID = () => {
    userId = localStorage.getItem('USERTEMPID');
    if (!userId) {
        userId = uuidv4();
        localStorage.setItem('USERTEMPID', userId);
    }
    return userId;
}
