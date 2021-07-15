import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  post: {},
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload.reverse(),
      };

    default:
      return state;
  }
};
