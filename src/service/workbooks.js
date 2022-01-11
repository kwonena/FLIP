import axios from 'axios';

class WorkBooks {
    constructor() {
        this.workBooks = axios.create({
            baseURL: 'http://54.180.103.35:3000/api/v1',
        });
    }

    async showBooks() {
        const response = await this.workBooks.get('workbooks', {
            params: {
                page: 1,
                limit: 10,
            },
        });
        return response.data.items;
    }
}

export default WorkBooks;
