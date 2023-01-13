import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DbModule} from "./database/database.providers";

@Module({
    imports: [DbModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}