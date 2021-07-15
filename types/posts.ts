export interface IPost { 
    title: string;
    body: string;
    id: number;
    comments?: []
}

export interface PostsState {
    posts: any[];
    post: Object;
}

export enum PostsActionTypes { 
    GET_POSTS = "GET_POSTS"
}

interface getPostsAction { 
    type: PostsActionTypes.GET_POSTS;
    payload: IPost[];
}

export type PostsAction = getPostsAction;

  
