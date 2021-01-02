import {Controller, Get, Post, Body, Put, Param, Delete, Req} from '@nestjs/common';
import { InsuranceCompaniesService } from './insurance-companies.service';
import { CreateInsuranceCompanyDto } from './dto/create-insurance-company.dto';
import { UpdateInsuranceCompanyDto } from './dto/update-insurance-company.dto';

@Controller('insurance-companies')
export class InsuranceCompaniesController {
  constructor(private readonly insuranceCompaniesService: InsuranceCompaniesService) {}

  @Post()
  create(@Body() createInsuranceCompanyDto: CreateInsuranceCompanyDto) {
    return this.insuranceCompaniesService.create(createInsuranceCompanyDto);
  }

  @Get()
  findAll() {
    return this.insuranceCompaniesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insuranceCompaniesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInsuranceCompanyDto: UpdateInsuranceCompanyDto) {
    return this.insuranceCompaniesService.update(+id, updateInsuranceCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.insuranceCompaniesService.remove(+id);
  }
}
