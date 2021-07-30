import  {FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    console.log('fetching')
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
            console.log(posts)
        dispatch({
            type: FETCH_POSTS,
            payload: posts.data
        })
    })
}

export const addPost = (postData) => dispatch => {
    console.log("posting")
    axios.post('https://jsonplaceholder.typicode.com/posts',postData )
    .then(res => {
        console.log(res)
        dispatch({
            type: NEW_POST,
            payload: res.data
        })
    })
}