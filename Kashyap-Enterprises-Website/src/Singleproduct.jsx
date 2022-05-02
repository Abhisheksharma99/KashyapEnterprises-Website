import React, { useState } from 'react';
import { useEffect } from 'react';
import productimg from "./images/50-ltr-rocket-can-500x500.jpg"
const Singleproduct = ({value}) => {
    const productdetails = [{
    name:'CATALYST AF ECO - Economy Silicone Defoamer/Antifoam',
    desc:'Defoamers & Antifoams',
    summary:"Defoamer is a water-dilutable silicone emulsion containing silicone 30% active Defoamer. It is formulated with carefully selected ingredients, which, at the prescribed level, are suitable for use in food. UNI- DEFOAMER - S has excellent emulsion stability. Even diluted emulsions need only an occasional stirring to remain dispersed."
    }]
    const [data, setdata] = useState([]);
    useEffect(() => {
      console.log(value)
    }, []);
    
    console.log(value)
  return <div className='mt-3'>
      <div className='row'>
          <div className='col-lg'>
              <img id="single" className=' mb-3 border' src={productimg} alt="" />
          </div>
            <div className='col-lg'>
            <h1 className='fw-bolder fs-1 mt-5 producthead'>{productdetails[0].name}</h1>
            <p className='fw-bold text-muted productdesc h1style'>{productdetails[0].desc}</p>
            <p className='text-dark'>{productdetails[0].summary}</p>
            </div>
      </div>
  </div>;
};

export default Singleproduct;
