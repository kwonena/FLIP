import axios from "axios";

class ClientService {
  constructor() {
    this.clientService = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQyNTAwODY0LCJleHAiOjE2NDMxMDU2NjR9.opVYGMcjDA18JNqDpdXHQfSJ7PCklVCLKDrtc0WzVBU",
      },
    });
  }

  async signUp(email, password) {
    await this.clientService.post("signup", { email, password });
  }

  async login(email, password) {
    await this.clientService.post("login", { email, password });
  }
}

export default ClientService;
