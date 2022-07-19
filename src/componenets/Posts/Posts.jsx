import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostError, getPostList, getPostLoading} from "../../redux/reducers/postsReducer/postsSelector";
import {loadPosts} from "../../redux/reducers/postsReducer/postsReducer";


const Posts = () => {
   const posts = useSelector(getPostList);
   const loading = useSelector(getPostLoading);
   const error = useSelector(getPostError);
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    },[dispatch])

    const reloadPosts = () => {
        dispatch(loadPosts());
    }

    if(loading) {
        return (
            <div>
                loading ....
            </div>
        )
    }
    if(error) {
        return (
            <div>
                Error
                <button onClick={reloadPosts}>Repeat</button>
            </div>
        )
    }

    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post=> (
                <div key = {post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>
            )))}
        </div>
    );
};

export default Posts;