import axios from "axios";
import { getCookie } from "../cookie";

class WorkBooks {
  constructor() {
    this.workBooks = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
  }

  async showBooks(page) {
    // 내 문제집 보기
    const response = await this.workBooks.get("workbooks/me", {
      params: {
        page: page,
        limit: 4,
      },
    });
    return response.data.items;
  }

  async deleteBook(id) {
    // 내 문제집 삭제하기
    await this.workBooks.delete(`workbooks/${id}`);
  }

  async addBook(title) {
    // 내 문제집 추가하기
    await this.workBooks.post("workbooks", {
      title: title,
    });
  }

  async showCards(id) {
    // 내 카드 보기
    const response = await this.workBooks.get(`workbooks/${id}`);
    return response.data.cards;
  }

  async addCard(question, result, bookId) {
    // 내 카드 만들기
    const response = await this.workBooks.post(`workbooks/${bookId}/cards`, {
      question: question,
      result: result,
    });
    return response.data;
  }

  async updateCard(id, question, result) {
    // 내 카드 수정하기
    const response = await this.workBooks.patch(`workbooks/cards/${id}`, {
      question: question,
      result: result,
    });
    return response;
  }

  async deleteCard(id) {
    // 내 카드 삭제하기
    await this.workBooks.delete(`workbooks/cards/${id}`);
  }
}

export default WorkBooks;
