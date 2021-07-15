import axios from "axios";
import { Dispatch } from "react";
import { PostsAction, PostsActionTypes } from "../../types/posts";

export const fetchPosts = () => {
    return async (dispatch: Dispatch<PostsAction>) => { 
        try {
            const response  = await axios.get("https://simple-blog-api.crew.red/posts");
            dispatch({type: PostsActionTypes.GET_POSTS, payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }
}