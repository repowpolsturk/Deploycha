import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030
    await app.listen(PORT, ()=>{
      console.log("Server ishga tushdi")
    });
    
  } catch (error) {
    console.log(error)
    
  }
}
bootstrap();
