const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    authorId: String
  }

  type Author {
    id: ID!
    name: String
    books: [Book]
  }

  type Query {
    authors: [Author]
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String, authorId: String): Book
    addAuthor(name: String): Author
  }
`;

const books = [
  {
    id: '1',
    title: 'The Awakening',
    authorId: '1',
  },
  {
    id: '2',
    title: 'City of Glass',
    authorId: '2',
  },
];

const authors = [
  {
    id: '1',
    name: 'Kate Chopin' 
  },
  {
    id: '2',
    name: 'Paul Auster' 
  }
]

const resolvers = {
  Author: {
    books: (author) => {
      return books.filter((book) => book.authorId === author.id)
    }
  },
  Query: {
    authors: () => authors,
    books: () => books,
    book(_, args) {
      return books.find(book => book.id === args.id);
    }
  },
  Mutation: {
    addBook(_, args) {
      let book = {
        id: (books.length + 1).toString(),
        title: args.title,
        authorId: args.authorId
      }
      books.push(book)
      return book
    },
    addAuthor(_, args) {
      let author = {
        id: (authors.length + 1).toString(),
        name: args.name
      }
      authors.push(author)
      return author
    }
  }
};

const {
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});