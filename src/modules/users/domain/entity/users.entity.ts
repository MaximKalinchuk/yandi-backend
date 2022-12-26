import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    username: string;

    @Column()
    role: string;
}