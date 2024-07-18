import { useState } from "react";
import BlogLists from "./BlogLists";

const Home = () => {
  // const [count,setCount] = useState(0)
  // const handleClick=()=>{
  //     console.log('clicked')
  // }
  const [blogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  // const handleClickAgain=(name,e)=>{
  //     console.log('clicked again by'+ name,e.target)
  // }
  return (
    <div className="home">
      <BlogLists blogs={blogs} title='All Blogs!'/>
      {/* {blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
            </div>
        ))} */}

      {/* <h2>Homepage</h2> */}
      {/* <button onClick={handleClick}>Click me</button>
        <button onClick={()=>setCount(count+1)}> the count is {count}</button>
        <button onClick={(e) => handleClickAgain('mario',e)}>Click me again</button> */}
    </div>
  );
};

export default Home;
