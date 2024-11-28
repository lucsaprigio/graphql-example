import { Field, InputType } from "type-graphql";

/* 
    Inputs no GraphQL seriam os Parâmetros passados para a Mutation
*/

@InputType() // Para criar o appointment quais são os dados necessários
export class CreateAppointmentInput {
    /* 
        Nessa classe, ele dará erro, porém o Typescript não deixa declarar propriedades sem algum constructor

        - Alterar o tsconfig.json
        "strictPropertyInitialization": false,   
    */

    @Field()
    customedId: string;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}