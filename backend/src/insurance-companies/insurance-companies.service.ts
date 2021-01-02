import { Injectable } from '@nestjs/common';
import { CreateInsuranceCompanyDto } from './dto/create-insurance-company.dto';
import { UpdateInsuranceCompanyDto } from './dto/update-insurance-company.dto';

@Injectable()
export class InsuranceCompaniesService {
  create(createInsuranceCompanyDto: CreateInsuranceCompanyDto) {
    return 'This action adds a new insuranceCompany';
  }

  findAll() {
    return `This action returns all insuranceCompanies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insuranceCompany`;
  }

  update(id: number, updateInsuranceCompanyDto: UpdateInsuranceCompanyDto) {
    return `This action updates a #${id} insuranceCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} insuranceCompany`;
  }
}
