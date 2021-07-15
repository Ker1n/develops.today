import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { IPost } from "../../types/posts";

const PostPage = ({ ...serverPost }) => {
  const [post, setPost] = React.useState<any>(serverPost);
  const [comment, setComment] = React.useState("");
  const router = useRouter();
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };

  const addComment = () => {
    axios.post("https://simple-blog-api.crew.red/comments", {
        postId: Number(router.query.id),
        body: comment,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

      setComment('')
  };

  return (
    <div className="app">
      <MainLayout>
        <Grid style={{ width: 900 }}>
          <Card style={{ margin: "12px 0px", paddingBottom: 20 }}>
            <Grid container direction="column" alignItems="center">
              <h3 style={{ borderBottom: "1px solid lightgray" }}>
                {post.serverPost.title}
              </h3>

              <div style={{ fontSize: 12, color: "gray", width: 600 }}>
                {post.serverPost.body}
              </div>
            </Grid>
          </Card>
        </Grid>
        <h4>Comments</h4>
        {post.serverPost.comments.length ? (
          <Container maxWidth="sm">
            {post.serverPost.comments.map((comment: any) => (
              <List key={comment.id}>
                <ListItem style={{ borderBottom: "1px solid lightgray" }}>
                  <ListItemText>{comment.body}</ListItemText>
                </ListItem>
              </List>
            ))}
          </Container>
        ) : (
          <h5>No comments yet</h5>
        )}
        <Container maxWidth="sm">
          <Grid
            container
            direction={"column"}
            style={{ padding: 20, maxWidth: 700 }}
          >
            <h3>Add your comment </h3>
            <TextField
              onChange={titleHandler}
              style={{ marginTop: 10 }}
              label={"Text"}
              multiline
              rows={3}
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button
              onClick={addComment}
              disabled={comment.length === 0}
              style={{ marginRight: 20 }}
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Container>
      </MainLayout>
      <style jsx>
        {`
          .app {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await axios.get(
    `https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`
  );

  return {
    props: {
      serverPost: response.data,
    },
  };
};
