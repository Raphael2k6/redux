import axios from 'axios';
import React,{useState} from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';

const PostForm = (props) => {
    const[input, setInput] = useState('');
    

    const handleChange = (e) =>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            title: input.title,
            body: input.body,
        }
        console.log("hello", payload)
        props.addPost(payload)
        // axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        // .then(response => {
        //     console.log(response)
        // })
    }

    return (
        <div>
           <h2>Add posts</h2> 
           <form onSubmit={handleSubmit}>
               <div>
                   <label>Title:</label> <br/>
                   <input type="text" name="title" onChange={handleChange} value={input.name}/>
               </div><br/>
               <div>
                   <label>Body:</label> <br/>
                   <textarea type="text" name="body" onChange={handleChange} value={input.name}/>
               </div>
               <br/>
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}



export default connect(null, {addPost})(PostForm)
