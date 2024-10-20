import { Module, Param } from '@nestjs/common';
import { ParamController } from './param.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamSchema } from './schemas/param.schema';
import { ParamService } from './param.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Param.name, schema: ParamSchema }]),
  ],
  controllers: [ParamController],
  providers: [ParamService]
})
export class ParamModule {}
