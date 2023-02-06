import './App.css';
import { useEffect, useState } from 'react';


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
    // console.log( data);
    setMyNutrition (data)
  }
  getProduct()
}, [wordSubmitted] )


const myRecipeSearch = (e) => {
  // console.log(e.target.value);
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
          <form> <button> ANALYZE </button></form>
        </div>
<br></br>
        {
          myNutrition&&
          <div className='box'>
          <table >

          <thead className='top'>
            <tr>
                <td>Nutrition Facts</td>
            </tr>
            <tr>
              <td>Amount Per Serving</td>
            </tr>
            <tr>
              <td>% Daily Value*</td>
            </tr>
          </thead>
          
          <tbody>
          <tr>
            <th>Calories {myNutrition.calories}</th>
          </tr>
          { myNutrition.totalNutrients.FAT &&
          <tr>
            <td>FAT {myNutrition.totalNutrients.FAT.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.FAT.quantity.toFixed(2)}%</td>
          </tr>
          }
          { myNutrition.totalNutrients.NA &&
          <tr>
            <td>Sodium {myNutrition.totalNutrients.NA.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.NA.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.CA &&
          <tr>
            <td>Calcium {myNutrition.totalNutrients.CA.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.CA.quantity.toFixed(2)}%</td>
          </tr>  
        }
        {  myNutrition.totalNutrients.CHOCDF &&
          <tr>
            <td>Carbs {myNutrition.totalNutrients.CHOCDF.quantity.toFixed(1)}mg </td> 
            <td> {myNutrition.totalDaily.CHOCDF.quantity.toFixed(2)}%</td>
          </tr> 
        }
        { myNutrition.totalNutrients.FE &&
          <tr> 
            <td>Iron {myNutrition.totalNutrients.FE.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.FE.quantity.toFixed(2)}%</td>
          </tr>
        }   
        {  myNutrition.totalNutrients.FIBTG &&  
          <tr> 
            <td>Fiber {myNutrition.totalNutrients.FIBTG.quantity.toFixed(1)}mg </td> 
            <td>{myNutrition.totalDaily.FIBTG.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.K &&
          <tr>
            <td>Potassium {myNutrition.totalNutrients.K.quantity.toFixed(1)}mg</td>
            <td> {myNutrition.totalDaily.K.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.THIA &&
          <tr>
            <td>Thiamin B1 {myNutrition.totalNutrients.THIA.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.THIA.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.TOCPHA &&
      <tr>
            <td>Vitamin E  {myNutrition.totalNutrients.TOCPHA.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.TOCPHA.quantity.toFixed(2)}%</td>
          </tr> 
        }
        {  myNutrition.totalNutrients.VITA_RAE &&
          <tr>
            <td>Vitamin A {myNutrition.totalNutrients.VITA_RAE.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.VITA_RAE.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.VITB6A &&
          <tr>
            <td>Vitamin B6 {myNutrition.totalNutrients.VITB6A.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.VITB6A.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.VITB12 &&
          <tr>
            <td>Vitamin B12 {myNutrition.totalNutrients.VITB12.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.VITB12.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.VITC &&
          <tr>
            <td>Vitamin C {myNutrition.totalNutrients.VITC.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.VITC.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.VITD &&
          <tr>
            <td>Vitamin D {myNutrition.totalNutrients.VITD.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.VITD.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.VITK1 &&
          <tr>
            <td>Vitamin K {myNutrition.totalNutrients.VITK1.quantity.toFixed(1)}mg  </td>
            <td>{myNutrition.totalDaily.VITK1.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.ZN &&
          <tr>
            <td>Zink {myNutrition.totalNutrients.ZN.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.ZN.quantity.toFixed(2)}%</td>
          </tr>
        }
        {  myNutrition.totalNutrients.PROCNT
       &&
          <tr>
            <td>Protein {myNutrition.totalNutrients.PROCNT.quantity.toFixed(1)}mg </td>
            <td>{myNutrition.totalDaily.PROCNT.quantity.toFixed(2)}%</td>
          </tr>
        }
          </tbody>
          
          </table>
          </div>
        }


    </div>
  );
}

export default App;
