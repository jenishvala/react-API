import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink} from 'react-router-dom'
import { useParams } from "react-router-dom";

const Data = () => {
  const {id} = useParams();
  const [database, setdatabase] = useState([])

    useEffect(() => {
      const include = async () => {
        axios.get(`http://localhost:3000/data?id=${id}`).then((response) => {
          return setdatabase(response.data)
        }
        )
      }
      include()
    }, [id])
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          {

            database.map((value, index) => {  
              return (
                <>
                  <div className="col-md-6 col-lg-4 my-4" >
                      <div className="card">
                        <img src={`../${value.img}`} className="card-img-top" alt="load" />
                        <div className="card-body">
                          <h1>{value.h1}</h1>
                          <p className="card-text">{value.pera}</p>
                        </div>
                      </div>
                  </div>
                </>
              )
            })

          }
        </div>
      </div>
    </>
  )
}

export default Data