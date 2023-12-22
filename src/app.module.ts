import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RegisterModule } from './modules/register/register.module';

@Module({
  imports: [UserModule, RegisterModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
