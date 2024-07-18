import {useState} from 'react'

const Home = () => {
    const [count,setCount] = useState(0)
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
        <button onClick={()=>setCount(count+1)}> the count is {count}</button>
        <button onClick={(e) => handleClickAgain('mario',e)}>Click me again</button>
        </div>
    );
  }
   
  export default Home;