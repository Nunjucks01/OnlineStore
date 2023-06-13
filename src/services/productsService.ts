import axios from "axios";
import type { Params, Product } from "../types";

const PRODUCTS_URL = "http://localhost:3000/products";

export const getProducts = (params: Params) => {
  return axios.get(PRODUCTS_URL, {
    params: {
      _limit: 12,
      ...params,
    },
  });
};

export const getProduct = (productId: number) => {
  return axios.get(`${PRODUCTS_URL}/${productId}`);
};

export const createProduct = (product: Product) => {
  return axios.post(PRODUCTS_URL, product);
};

export const editProduct = (productId: number, product: Product) => {
  return axios.patch(`${PRODUCTS_URL}/${productId}`, product);
};

export const deleteProduct = (productId: number) => {
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
};

export const fetchLocalStorage = () => {
  return JSON.parse(localStorage.getItem("products") as string);
};
