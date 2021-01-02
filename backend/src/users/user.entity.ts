import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    @ApiProperty({required: false})
    id: number;

    @Column({ unique: true })
    @ApiProperty()
    username: string;

    @Column({ unique: true })
    @ApiProperty()
    email: string;

    @Column({nullable: true})
    @ApiProperty({required: false})
    firstName: string;

    @Column({nullable: true})
    @ApiProperty({required: false})
    lastName: string;

    @Column({nullable: true})
    password: string;

    plainPassword: string;

    @Column({ default: true })
    @ApiProperty()
    enabled: boolean;
}
