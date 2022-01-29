import axios from "axios";

class Cards {
  constructor() {
    this.cards = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQzMTIyNzg5LCJleHAiOjE2NDM3Mjc1ODl9.s6Hu-TP12Ewo3eSEpQ0Hrd0tD-wB8R9AZmb--kVTtX8",
      },
    });
  }

  async createCard(card) {
    const response = await this.cards.post("cards", {
      params: {
        question: card.question,
        result: card.result,
      },
    });
    return response.data.items;
  }

  async modifyCard(card) {
    const response = await this.cards.patch("cards", {
      params: {
        question: card.question,
        result: card.result,
      },
    });
    return response.data.items;
  }

  async deleteCard(id) {
    const response = await this.cards.delete(`cards/${id}`);
    return response.status;
  }
}

export default Cards;
