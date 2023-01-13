import {Controller, Get, Param, Post, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/movie')
    getAllMovies() {
        return this.appService.getAllMovies();
    }

    @Get('/movie/:id')
    getMovie(@Param() params){
        return this.appService.getMovie(params.id);
    }
    @Post('/movie')
    addMovie(@Req() req){
        return this.appService.addMovie(req);
    }
}
