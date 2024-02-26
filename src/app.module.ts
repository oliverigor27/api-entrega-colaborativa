import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { RegisterModule } from './modules/register/register.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(), UserModule, RegisterModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
