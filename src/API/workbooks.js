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

  async deleteBooks(id) {
    // 내 문제집 삭제하기
    const response = await this.workBooks.delete(`workbooks/${id}`);
    return response.status;
  }

  async showCards(page) {
    // 내 문제집 보기
    const response = await this.workBooks.get("workbooks/cards", {
      params: {
        page: page,
        limit: 4,
      },
    });
    return response.data.items.cards;
  }

  async createCard(card, id) {
    // 내 카드 만들기
    const response = await this.workBooks.post(`workbooks/${id}/cards`, {
      data: {
        qusetion: card.question,
        result: card.result,
      },
    });

    return response.data.items;
  }

  async modifyCard(card) {
    // 내 카드 수정하기
    const response = await this.workBooks.patch("workbooks/cards", {
      params: {
        question: card.question,
        result: card.result,
      },
    });
    return response.data.items;
  }

  async deleteCard(id) {
    // 내 카드 삭제하기
    const response = await this.workBooks.delete(`workbooks/cards/${id}`);
    return response.data.items;
  }
}

export default WorkBooks;
