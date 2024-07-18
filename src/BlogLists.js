const BlogLists = ({ blogs , title }) => {
    // const blogs=props.blogs
    // const title=props.title
    // console.log(props)
    return (  
        <div className="home">
        {blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <h2>{title}</h2>
                <h2>{blog.title}</h2>
                <p>{blog.author}</p>
            </div>
        ))}
        </div>
    );
}
 
export default BlogLists;