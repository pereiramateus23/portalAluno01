import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export type UserDocument = User & Document;


// Define o esquema do usuário com os campos necessários
@Schema()
export class User extends Document {
    @Prop({ required: true } )   
    nome: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    senha: string;

    @Prop({ required: true, unique: true })
    matricula: string;

    @Prop()
    resetToken?: string;

    @Prop()
    resetTokenExpira?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

