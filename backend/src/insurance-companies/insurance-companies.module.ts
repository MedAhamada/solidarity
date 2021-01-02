import { Module } from '@nestjs/common';
import { InsuranceCompaniesService } from './insurance-companies.service';
import { InsuranceCompaniesController } from './insurance-companies.controller';

@Module({
  controllers: [InsuranceCompaniesController],
  providers: [InsuranceCompaniesService]
})
export class InsuranceCompaniesModule {}
