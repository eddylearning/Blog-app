// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios'; 
// import { ToastContainer, toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'; 

// const Create = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     body: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:4000/blogs', formData)
//       .then(res => {
//         toast.success('New blog added successfully', {
//           position: "top-right",
//           autoClose: 3000
//         });
//         setFormData({ title: '', author: '', body: '' });
//       })
//       .catch(err => {
//         toast.error('An error occurred while adding the blog', {
//           // position: toast.POSITION.TOP_RIGHT,
//           position:"top-right",
//           autoClose: 3000,
//         });
//       });
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             name="title"
//             type="text"
//             placeholder="Enter blog title"
//             onChange={handleChange}
//             required
//             value={formData.title}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Author</Form.Label>
//           <Form.Control
//             name="author"
//             type="text"
//             placeholder="Enter author name"
//             onChange={handleChange}
//             required
//             value={formData.author}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Body</Form.Label>
//           <Form.Control
//             as="textarea"
//             name="body"
//             rows={4}
//             placeholder="Enter blog content"
//             onChange={handleChange}
//             value={formData.body}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">Save Blog</Button>
//       </Form>
//       <ToastContainer/>
//     </div>
//   );
// };

// export default Create;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isEmpty = (input) => !input || input.trim() === "";
const containsSpecialChars = (input) => /[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~-]/.test(input);

const Create = () => {
  const [formData, setFormData] = useState({ title: '', author: '', body: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateInput = ({ title, author, body }) => {
    if (isEmpty(title) || isEmpty(author) || isEmpty(body)) return "All fields are required!";
    if (containsSpecialChars(author)) return "Author name cannot contain special characters!";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationMessage = validateInput(formData);
    if (validationMessage) {
      toast.error(validationMessage, { position: "top-right", autoClose: 3000 });
      return;
    }

    axios.post('http://localhost:4000/blogs', formData)
      .then(() => {
        toast.success('New blog added successfully', { position: "top-right", autoClose: 3000 });
        setFormData({ title: '', author: '', body: '' });
      })
 //bloglist
     // .catch(() => {
       // toast.error('An error occurred while adding the blog', { position: "top-right", autoClose: 3000 });
    
      .catch(err => {
        toast.error('An error occurred while adding the blog', {
          position: "top-right",
          autoClose: 3000,
        });
 main
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="Enter blog title"
            onChange={handleChange}
           // required
            value={formData.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            type="text"
            placeholder="Enter author name"
            onChange={handleChange}
           // required
            value={formData.author}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            name="body"
            rows={4}
            placeholder="Enter blog content"
            onChange={handleChange}
            value={formData.body}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Save Blog</Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Create;
