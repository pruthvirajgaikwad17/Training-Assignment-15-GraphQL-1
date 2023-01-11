import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: String
    individualUser(id: ID!): User
    individualQuote(by: ID!): [Quote]
    allUsers: [User]
    allQuotes: [Quote]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    quotes: [Quote]
  }

  type Quote {
    by: ID
    quote: String
  }
`;

export default typeDefs;
