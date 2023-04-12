import React from 'react';

function Store ( {data}){
  const {calories,totalNutrients,totalDaily } = data;
    return(
        <div>
            <div >
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
              <th>Calories {calories}</th>
            </tr>
            {  totalNutrients.FAT &&
            <tr>
              <td>FAT { totalNutrients.FAT.quantity.toFixed(1)}mg </td>
              <td>{ totalDaily.FAT.quantity.toFixed(2)}%</td>
            </tr>
            }
            { totalNutrients.NA &&
            <tr>
              <td>Sodium {totalNutrients.NA.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.NA.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.CA &&
            <tr>
              <td>Calcium {totalNutrients.CA.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.CA.quantity.toFixed(2)}%</td>
            </tr>  
          }
          {  totalNutrients.CHOCDF &&
            <tr>
              <td>Carbs {totalNutrients.CHOCDF.quantity.toFixed(1)}mg </td> 
              <td> {totalDaily.CHOCDF.quantity.toFixed(2)}%</td>
            </tr> 
          }
          { totalNutrients.FE &&
            <tr> 
              <td>Iron {totalNutrients.FE.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.FE.quantity.toFixed(2)}%</td>
            </tr>
          }   
          {  totalNutrients.FIBTG &&  
            <tr> 
              <td>Fiber {totalNutrients.FIBTG.quantity.toFixed(1)}mg </td> 
              <td>{totalDaily.FIBTG.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.K &&
            <tr>
              <td>Potassium {totalNutrients.K.quantity.toFixed(1)}mg</td>
              <td> {totalDaily.K.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.THIA &&
            <tr>
              <td>Thiamin B1 {totalNutrients.THIA.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.THIA.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.TOCPHA &&
        <tr>
              <td>Vitamin E  {totalNutrients.TOCPHA.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.TOCPHA.quantity.toFixed(2)}%</td>
            </tr> 
          }
          {  totalNutrients.VITA_RAE &&
            <tr>
              <td>Vitamin A {totalNutrients.VITA_RAE.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.VITA_RAE.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.VITB6A &&
            <tr>
              <td>Vitamin B6 {totalNutrients.VITB6A.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.VITB6A.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.VITB12 &&
            <tr>
              <td>Vitamin B12 {totalNutrients.VITB12.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.VITB12.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.VITC &&
            <tr>
              <td>Vitamin C {totalNutrients.VITC.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.VITC.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.VITD &&
            <tr>
              <td>Vitamin D {totalNutrients.VITD.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.VITD.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.VITK1 &&
            <tr>
              <td>Vitamin K {totalNutrients.VITK1.quantity.toFixed(1)}mg  </td>
              <td>{totalDaily.VITK1.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.ZN &&
            <tr>
              <td>Zink {totalNutrients.ZN.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.ZN.quantity.toFixed(2)}%</td>
            </tr>
          }
          {  totalNutrients.PROCNT&&
            <tr>
              <td>Protein {totalNutrients.PROCNT.quantity.toFixed(1)}mg </td>
              <td>{totalDaily.PROCNT.quantity.toFixed(2)}%</td>
            </tr>
          }
            </tbody>
            
            </table>
            </div>
            
        </div>
  
  </div>
  )
  
}

export default Store;