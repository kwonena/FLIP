import axios from "axios";
import { getCookie } from "../cookie";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${getCookie("accessToken")}`,
  },
});

// 내 문제집 보기
export const showBooks = async (page) => {
  const response = await client.get("workbooks/me", {
    params: {
      page: page,
      limit: 4,
    },
  });
  return response.data.data.items;
};

// 내 문제집 삭제하기
export const deleteBook = async (id) => {
  await client.delete(`workbooks/${id}`);
};

// 내 문제집 추가하기
export const addBook = async (title) => {
  await client.post("workbooks", {
    title: title,
  });
};

// 내 카드 보기
export const showCards = async (id, reverse) => {
  const response = await client.get(`workbooks/${id}`);
  if (reverse) {
    return [...response.data.data.cards].reverse();
  } else {
    return response.data.data.cards;
  }
};

// 내 카드 만들기
export const addCard = async (id, question, result) => {
  const response = await client.post(`workbooks/${id}/cards`, {
    question: question,
    result: result,
  });
  return response.data.data;
};

// 내 카드 수정하기
export const updateCard = async (id, question, result) => {
  const response = await client.patch(`workbooks/cards/${id}`, {
    question: question,
    result: result,
  });
  return response;
};

// 내 카드 삭제하기
export const deleteCard = async (id) => {
  await client.delete(`workbooks/cards/${id}`);
};
