const BlogLists = (props) => {
    const blogs=props.blogs
    const tittle=props.title
    console.log(props)
    return (  
        <div className="home">
        <h2 style={{color:"black"}}>{ tittle }</h2>
        {blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
            </div>
        ))}
        </div>
    );
}
 
export default BlogLists;