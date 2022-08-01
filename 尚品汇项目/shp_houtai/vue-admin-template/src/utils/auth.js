import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  // 获取tocken
  // console.log("获取tocken");
  // console.log(TokenKey);
  // console.log(Cookies.get(TokenKey));
  return Cookies.get(TokenKey)
  
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
