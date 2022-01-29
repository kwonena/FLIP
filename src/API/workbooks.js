class WorkBooks {
  constructor(httpClient) {
    this.workBooks = httpClient;
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

  async createCard(card) {
    // 내 카드 만들기
    const response = await this.cards.post("cards", {
      params: {
        question: card.question,
        result: card.result,
      },
    });
    return response.data.items;
  }

  async modifyCard(card) {
    // 내 카드 수정하기
    const response = await this.cards.patch("cards", {
      params: {
        question: card.question,
        result: card.result,
      },
    });
    return response.data.items;
  }

  async deleteCard(id) {
    // 내 카드 삭제하기
    const response = await this.cards.delete(`cards/${id}`);
    return response.status;
  }
}

export default WorkBooks;
