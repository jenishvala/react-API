import React, { useState } from 'react';
import Photo from "./component/Photo";
import Bfilt from "./component/Bfilt";


function App() {
  const [logo, setlogo] = useState(Photo);

  const filters = (cat) => {
    const filt = Photo.filter((map) => {
      return (
        map.check === cat
      )
    })
      ;
    setlogo(filt)
  }

  return (

    <>
      {/* <div>
        <input type='checkbox' onClick={()=>{filters("one")}} /><br />
        <input type='checkbox' onClick={()=>{filters("two")}} /><br />
        <input type='checkbox' onClick={()=>{filters("three")}} /><br />
      </div> */}
      <Bfilt filter={filters}/>

      <div className='gallary'>
        {logo.map((value) => {
          return (
            <div className='photos' alt="load">
              <img src={value.Img} />
            </div>
          )
        })
        }


      </div>
    </>

  );
}

export default App;
