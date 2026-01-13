import { PATH_BASE } from "./uri-path";

const FE_BASE = `${PATH_BASE}api`;

export const FE_AUTH_LOGIN = `${FE_BASE}/auth/login`;
export const FE_AUTH_LOGIN_VERIFY = `${FE_BASE}/auth/login/verify`;
export const FE_AUTH_LOGOUT = `${FE_BASE}/auth/auth/logout`;
export const FE_AUTH_REFRESH = `${FE_BASE}/auth/auth/refresh`;

export const FE_PRODUCTS = `${FE_BASE}/products`;
export const FE_PRODUCTS_CONTACT = `${FE_BASE}/products/contact`;
export const FE_PRODUCTS_IDENTITY = `${FE_BASE}/products/identity`;
