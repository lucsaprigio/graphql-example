import { ApolloServer, gql } from "apollo-server";

import { randomUUID } from "node:crypto";

/* 
*   Under fetching
    - Rota HTTP que retorna dados de menos

*   Over fetching
    - Rota HTTP que retorna dados de mais do que o necessário
*/

/* 
    Schema first Approach
*/

/* 
    Query: Quando formos consultar
    Mutation: Quando formos alterar
*/

const typeDefs = gql`
    type User {
        id: String!
        name: String!
    }

    type Query {
        users: [User!]!
    }

     type Mutation {
        createUser(name: String!): User!
     }
`;

interface User {
    id: string;
    name: string;
}

const users: User[] = [];

const server = new ApolloServer({
    typeDefs,
    // Como se fossem os controllers
    resolvers: {
        Query: {
            users: () => {
                return users;
            }
        },

        Mutation: {
            createUser: (_, args) => {
                const user = {
                    id: randomUUID(),
                    name: args.name
                }

                users.push(user);// Adicionando o usuário ao array

                return user; // Retornando o nome do usuário
            }
        }
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});