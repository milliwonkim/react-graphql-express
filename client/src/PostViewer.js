import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const GET_POSTS = gql`
  query {
    posts {
      id
      author
      body
    }
  }
`;

function PostViewer() {
  return (
    <Query query={GET_POSTS}>
      {({ loading, data }) => {
        console.log(data, loading);
        if (loading) return "loading...";
        return (
          <div>
            {data.posts.map((post) => (
              <div key={post.id}>
                <div>{post.author || "-"}</div>
                <div>{post.body || "-"}</div>
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default PostViewer;
