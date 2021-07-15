import { Box, Grid } from '@material-ui/core';
import React from 'react'
import {IPost} from '../types/posts';

import PostItem from './PostItem';


interface PostsListProps{ 
    posts: IPost[];
}

const PostsList:React.FC<PostsListProps> = ({posts}) => {
    return (
        <Grid>
            <Box p={2}>
                {posts.map(post => 
                    <PostItem 
                        key={post.id}
                        post={post}
                    />
                    )}
            </Box>
        </Grid>
    )
}

export default PostsList
