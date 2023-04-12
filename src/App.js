import './App.css';
import { useEffect, useState } from 'react';
import Store from './Store';


function App() {

  const [mySearch, setMySearch] = useState ('');
  const [myNutrition, setMyNutrition] = useState ();
  const [wordSubmitted, setWordSubmitted] = useState(" avocado");

  const API_URL = 'https://api.edamam.com/api/';
  const MY_ID = 'b01c9c99';
  const MY_KEY = '8affcd444faf510c38c1720c909b6f84';


  useEffect (  () =>{
    let ingr = wordSubmitted.split(/[,,;,\n,\r]/);

    const getProduct = async () =>{ 
    const response = await fetch(`${API_URL}nutrition-data?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=cooking&ingr=${ingr}`);
    const data = await response.json();
    setMyNutrition (data)
  }
  getProduct()
}, [wordSubmitted] )


const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}

const finalSearch = (e) =>{
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (
    <div className="App">

      <div className="container" >
        <h1>Find a your nutrition facts</h1>
      </div>

      <div className='container'>
          <form onSubmit={finalSearch}>
            <input className='search' placeholder='1 avocado, 100 gr salmon etc ... ' onChange={myRecipeSearch} value={mySearch}>
            </input>
            </form>
      </div>

        <div className='container'>
          <button> ANALYZE </button>
        </div>
<br></br>
{
  myNutrition&& 
  <Store data={myNutrition}/>
}

    </div>
  );
} 

export default App;
