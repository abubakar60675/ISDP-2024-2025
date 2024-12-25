const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PRODUCTS = "products";
const USER = "user";
const LOGIN = "login";

// AUTH

export const LOGIN_URL = `${API_BASE_URL}/${USER}/${LOGIN}`;

// PRODUCTS
export const PRODUCTS_URL = `${API_BASE_URL}/${PRODUCTS}`;

export const USER_URL = `${API_BASE_URL}/${USER}`;
