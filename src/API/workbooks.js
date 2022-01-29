import axios from "axios";

class WorkBooks {
  constructor() {
    this.workBooks = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQzMTIyNzg5LCJleHAiOjE2NDM3Mjc1ODl9.s6Hu-TP12Ewo3eSEpQ0Hrd0tD-wB8R9AZmb--kVTtX8",
      },
    });
  }

  async showBooks(page) {
    const response = await this.workBooks.get("workbooks/me", {
      params: {
        page: page,
        limit: 4,
      },
    });
    return response.data.items;
  }

  async deleteBooks(id) {
    const response = await this.workBooks.delete(`workbooks/${id}`);
    return response.status;
  }
}

export default WorkBooks;
