import { Button, Card, Grid } from "@material-ui/core";
import React from "react";
import { IPost } from "../types/posts";

import { useRouter } from "next/router";

interface PostItemProps {
  post: IPost;
}

const PostItem: React.FC<PostItemProps> = ({post}) => {
  const router = useRouter();
  return (
    <Card style={{margin: "12px 0px", cursor:'pointer', paddingBottom:20}} onClick={() => router.push('/posts/' + post.id)}>
      <Grid container direction='column' alignItems='center' >
        <h3 style={{borderBottom:'1px solid lightgray'}}>{post.title}</h3>
      
        <div style={{fontSize: 12, color: 'gray', maxWidth: 600}}>{post.body}</div>
      </Grid>
    </Card>
  );
};

export default PostItem;
