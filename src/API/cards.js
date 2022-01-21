import axios from "axios";

class Cards {
  constructor() {
    this.cards = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQyNTAwODY0LCJleHAiOjE2NDMxMDU2NjR9.opVYGMcjDA18JNqDpdXHQfSJ7PCklVCLKDrtc0WzVBU",
      },
    });
  }

  async showCards(id) {
    const response = await this.cards.get("cards", {
      params: {
        page: 1,
        limit: 10,
      },
    });
    return response.data.items;
  }

  async createCards() {
    const response = await this.cards.post("cards", {
      params: {
        question: "질문",
        result: "정답",
      },
    });
    return response.data.items;
  }

  async modifyCards() {
    const response = await this.cards.patch("cards", {
      params: {
        question: "질문",
        result: "정답",
      },
    });
    return response.data.items;
  }

  async deleteCards() {
    const response = await this.cards.del("cards", {
      params: {
        page: 1,
        limit: 10,
      },
    });
    return response.data.items;
  }
}

export default Cards;
