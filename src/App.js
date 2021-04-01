import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Alamgir', 'Salman','Arifin shuvo','Sakib','Sumon']
  const friends = [
    {name:"Tonmoy", designation:"Player"},
    {name:"Kanti", designation:"pro"},
    {name:"Saha", designation:"ultrapro"},
    {name:"Tomy", designation:"maxpro"}
  ]

  // const productNames=products.map(product => product.name)
  // console.log(productNames)
  // const nayokNames=nayoks.map(nayok => nayok)
  // console.log(nayokNames)
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            friends.map(friend => <Friends friend ={friend}></Friends>)
          }
        </ul>
        {/* <Friends friend = {friends[0]}></Friends> */}

        {/* <Product Name={products[0].name} Price={products[0].price}></Product>
        <Product Name={products[1].name} Price={products[1].price}></Product>
        <Product Name={products[2].name} Price={products[2].price}></Product> */}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        {/* <Person name = "Munna" job= "Shooter"></Person>
        <Person name = "Junna" job = "Sola"></Person> */}
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10)
  const handleClick = () => setCount(count + 1)
  const handleDecreasse = () => setCount(count + 1)
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase me</button>
      <button onMouseLeave={() => setCount(count - 1)}>Decrease me</button>
    </div>
  )
}

function Users(){
  const[posts, setUser] = useState([])
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  }, [])
  return(
    <div>
      <h1>Dynamic users: {posts.length}</h1>
      <ul>
        {
          posts.map(post => <li>{post.username}</li>)
        }
        {
          console.log(posts)
        }
      </ul>
    </div>
  )
}

function Friends(props){
  const friendStyles={
    border:"2px solid gray",
    margin:"8px",
    borderRadius:"20px",
    backgroundColor:"lightgray",
    height:'400px',
    width:"300px"
  }

  const {name, designation} = props.friend
  console.log(name, designation)
  return(
    <div style={friendStyles}>
      <h1>{name}</h1>
      <h3>{designation}</h3>
      <button>Add Friend</button>
      <button>Ignore him</button>
    </div>
  )
}


function Person(props){
  return(
    <div style={{border:"5px solid aquamarine" , margin:"15px", width:"500px"}}>
      <h1>My Name:{props.name}</h1>
      <p>My Profession : {props.job}</p>
    </div>
  )
}


export default App;
