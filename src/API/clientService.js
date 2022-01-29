import axios from "axios";

class ClientService {
  constructor() {
    this.clientService = axios.create({
      baseURL: "http://54.180.103.35:3000/api/v1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQzMTIyNzg5LCJleHAiOjE2NDM3Mjc1ODl9.s6Hu-TP12Ewo3eSEpQ0Hrd0tD-wB8R9AZmb--kVTtX8",
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
