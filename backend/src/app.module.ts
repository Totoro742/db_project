import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DbModule} from "./database/database.providers";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [DbModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
