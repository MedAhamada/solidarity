import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class InsuranceCompany{

    @PrimaryGeneratedColumn()
    @ApiProperty({required: false})
    id: number;

    @Column({ unique: true })
    @ApiProperty()
    name: string;

    @Column({nullable: true})
    @ApiProperty({required: false})
    description: string;

    @Column({ unique: true })
    @ApiProperty()
    contactEmail: string;

    @Column({nullable: true})
    @ApiProperty({required: false})
    address: string;

    @Column({nullable: true})
    @ApiProperty({required: false})
    phone: string;

    @Column({nullable: true})
    @ApiProperty({required: false})
    fax: string;
}
