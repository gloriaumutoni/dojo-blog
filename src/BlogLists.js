const BlogLists = (props) => {
    const blogs=props.blogs
    return (  
        <div className="home">
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