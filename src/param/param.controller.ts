import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ParamService } from './param.service';

@Controller('params')
export class ParamController {
    constructor(private readonly paramService: ParamService) { }

    @Get()
    findAll(@Query() category: string) {
        return this.paramService.queryParams(category);
    }

}
