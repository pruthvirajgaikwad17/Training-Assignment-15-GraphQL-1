import { quotes, users } from "./userData.js";

const resolvers = {
  Query: {
    greet: () => {
      return "Hello World";
    },
    allUsers: () => {
      return users;
    },
    allQuotes: () => {
      return quotes;
    },
    individualUser: (_, args) => {
      return users.find((ur) => args.id == ur.id);
    },
    individualQuote: (_, args) => {
      return quotes.filter((qt) => args.by == qt.by);
    },
  },
  User: {
    quotes: (ur) => {
      return quotes.filter((qt) => ur.id == qt.by);
    },
  },
};

export default resolvers;
