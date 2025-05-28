import React from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './usseFetch';
import { Button } from 'bootstrap';


const BlogDetails = () => {
  const history = useHistory();

  const {id}=useParams()
  const {data: blog} =useFetch('http://localhost:4000/blog/'+id);

  const handleSubmit =(e)=>{
    e.preventDefault()

    axios.delete('http://localhost:4000/blog/'+id)
    .this(res =>{
      alert("bog deleted");
      history.push("/");
    })
    .catch(err=> console.log(err.message)
    )
  }

  
  return (
  <div className='details'>
    {/* <p>Hello, this is my BlogDetails!</p> */}
    {blog &&(
      <article>
        <h3>{blog.title}</h3>
        <p>Done by:{blog.author}</p>
        <div>{blog.body}</div>
        <Button onClick={handleSubmit}className="mt-3"variant="danger" type="submit">delete</Button>
      </article>
    )}
    </div>)
};


export default BlogDetails;
