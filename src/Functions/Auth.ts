import { Cookies } from 'react-cookie';
import { getExpireDate } from './functions';

export const TOKEN = '_e_token_';
const TOKEN_EXPIRY = '_e_token_expire';
const REFRESH = '_r_token_';
const REFRESH_EXPIRY = '_r_token_expire';

export const secondsInADay = 86400;

const cookies = new Cookies();

// Helper to set a cookie
const setCookie = (name: string, value: string, expires: Date) => {
  cookies.set(name, value, {
    path: '/',
    expires,
    sameSite: 'strict',
  });
};

// Helper to get a cookie
const getCookie = (name: string): string | null => {
  const val = cookies.get(name);
  return val || null;
};

export const isAuth = (): boolean => {
  const token = getCookie(TOKEN);
  return !!token;
};

export const saveToken = (Token: string, expiresInSeconds:any): void => {
  const expiry = getExpireDate(expiresInSeconds / (60 * 60 * 24)); // convert seconds to days
  if (Token) {
    setCookie(TOKEN, Token, expiry);
    setCookie(TOKEN_EXPIRY, expiry.toISOString(), expiry);
  }
};

export const saveRefreshToken = (Token: string, expiresInSeconds = secondsInADay * 30): void => {
  const expiry = getExpireDate(expiresInSeconds / (60 * 60 * 24));
  if (Token) {
    setCookie(REFRESH, Token, expiry);
    setCookie(REFRESH_EXPIRY, expiry.toISOString(), expiry);
  }
};

export const getToken = (): string | null => {
  return getCookie(TOKEN);
};

export const getRefreshToken = (): string | null => {
  return getCookie(REFRESH);
};

export const removeToken = (): void => {
  const expired = new Date(0);
  setCookie(TOKEN, '', expired);
  setCookie(TOKEN_EXPIRY, '', expired);
  setCookie(REFRESH, '', expired);
  setCookie(REFRESH_EXPIRY, '', expired);
};
