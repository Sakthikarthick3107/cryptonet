import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[data , setData] = useState([]);
  const getApi = async() =>{
    const data = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
    const responseData = await data.json();
    console.log(responseData.results)
    setData(responseData.results);
  }

  useEffect(() => {
    getApi();
  },[])

  return (
    <div className="App">
      {data.length>0 && data.map((details , index) => (
        <div className='card' key={index}>
          <div className='left'>
            <img src={details.picture.large} alt='Profile Pic'/>
          </div>
          <div className='right'>
            <h2>
            {details.name.first}&nbsp; {details.name.last}
            </h2>
            <h3>{details.gender[0].toUpperCase() + details.gender.slice(1)}</h3>
            <h4>{details.phone}</h4>
            <h5>{details.email}</h5>

          </div>
      </div>
      ))}
      
      
    </div>
  );
}

export default App;
