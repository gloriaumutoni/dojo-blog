const Home = () => {
    const handleClick=()=>{
        console.log('clicked')
    }
    const handleClickAgain=(name,e)=>{
        console.log('clicked again by'+ name,e.target)
    }
    return (
      <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain('mario',e)}>Click me again</button>
        </div>
    );
  }
   
  export default Home;