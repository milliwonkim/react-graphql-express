const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const POSTS = [
  { author: "kiwon 1", body: "Hello world" },
  { author: "kiwon 2", body: "Hello world 2" },
];

const schema = buildSchema(`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

const mapPost = (post, id) => post && { id, ...post };
const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id),
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`BACKEND RUNNING AT ${PORT}`);
});
