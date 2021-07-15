import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import PostsList from "../components/PostsList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import MainLayout from "../layouts/MainLayout";

import { NextThunkDispatch, wrapper } from "../store/index";
import { fetchPosts } from "../store/actions-creators/posts";

const Index = () => {
  const router = useRouter();
  const { posts } = useTypedSelector((state) => state.posts);

  return (
    <div className="app">
      <MainLayout>
        <Grid justifyContent="center">
          <Card style={{ width: 900 }}>
            <Box p={3}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <h1 style={{ margin: 0 }}>Blog</h1>
                <Button
                  onClick={() => router.push("posts/create/")}
                  variant="contained"
                  style={{ height: 40 }}
                >
                  Create Post
                </Button>
              </Grid>
            </Box>
          </Card>
        </Grid>
        <PostsList posts={posts} />
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

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchPosts());
  }
);
