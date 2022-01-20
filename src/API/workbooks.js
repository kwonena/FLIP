import axios from 'axios';

class WorkBooks {
    constructor() {
        this.workBooks = axios.create({
            baseURL: 'http://54.180.103.35:3000/api/v1',
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1va2hzMDBAbmF2ZXIuY29tIiwiaWF0IjoxNjQyNTAwODY0LCJleHAiOjE2NDMxMDU2NjR9.opVYGMcjDA18JNqDpdXHQfSJ7PCklVCLKDrtc0WzVBU',
            },
        });
    }

    async showBooks() {
        const response = await this.workBooks.get('workbooks', {
            params: {
                page: 1,
                limit: 4,
            },
        });
        return response.data.items;
    }
}

export default WorkBooks;
