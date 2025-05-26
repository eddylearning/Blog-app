import useFetch from './usseFetch';
import BlogList from './BlogList';


const Home = () => {
  const {data}=useFetch('http://localhost:4000/blogs');
  return (
  // <div>
  //   <p>Hello, this is my Home!</p>
    <div className='home'>
      {data && <BlogList blogs={data} title="All blogs"/>}
    </div>

  // </div>
   );
};

export default Home;
