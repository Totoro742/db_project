import {Inject, Injectable, Req} from '@nestjs/common';
import {PG_CONNECTION} from "./database/constants";

@Injectable()
export class AppService {
    constructor(@Inject(PG_CONNECTION) private conn : any) {}

    async getAllMovies() {
        const res = await this.conn.query('SELECT * FROM multikino.opis AS o, multikino.film AS f WHERE o.opis_id = f.opis_id');
        return res.rows;
    }

    async getMovie(id: number){
        const query = {
            text: 'SELECT * FROM multikino.opis AS o, multikino.film AS f WHERE o.opis_id = $1 ',
            values: [id]
        }
        const res = await this.conn.query(query)
        return res.rows;
    }

    async addMovie(@Req() req){
        const values = req.body;
        const query = {
            text: 'INSERT INTO multikono.opis VALUES ($1, $2)',
            values: [values]
        }
        console.log(values);
        return
    }
}
