import Cookies from 'universal-cookie';

const cookies = new Cookies();
//set Cookie
export const setCookie = (cname: string, cvalue: any, path: string) => {
  cookies.set(cname, cvalue);
};

// get Cookie
export const getCookie = (cname: string) => {
  return cookies.get(cname);
};

// remove Cookie
export const removeCookie = (cname: string) => {
  cookies.remove(cname, { path: '/' });
};

