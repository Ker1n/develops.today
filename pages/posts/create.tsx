import { Button, TextField, Grid, Container } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";



const Create = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const router = useRouter();

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const bodyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };

  const createPost = () => { 
    
    axios.post('https://simple-blog-api.crew.red/posts', {
      "title": title,
      "body": body
    })
        .then(res=> router.push('/'))
        .catch(e=>console.log(e))
  }

  return (
    <MainLayout>
      <Container maxWidth="sm">
        <Grid
          container
          direction={"column"}
          style={{ padding: 20, maxWidth: 700 }}
        >
          <h1>Create new post</h1>
          <TextField
            style={{ marginTop: 10 }}
            label={"Title"}
            onChange={titleHandler}
          />
          <TextField
            onChange={bodyHandler}
            style={{ marginTop: 10 }}
            label={"Text"}
            multiline
            rows={3}
          />
        </Grid>
        <Grid container justifyContent="flex-end">
          <Button
            disabled={title.length === 0 || body.length === 0}
            style={{ marginRight: 20 }}
            variant="contained"
            onClick={createPost}
          >
            Create
          </Button>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Create;
