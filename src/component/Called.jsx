import React, { useEffect, useState } from 'react'
import Jsondata from './Jsondata'
import axios from 'axios'

const Called = (props) => {
    const [database, setdatabase] = useState([])



    useEffect(() => {
        const include = async () => {
            axios.get('http://localhost:3000/data').then((response) => {
                return setdatabase(response.data)
            }

            )
            // return setdatabase(json)
        }
        include()
    })



    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        database.map((value, index) => {
                            return (
                                <>
                                    <div className="col-md-6 col-lg-4 my-4">
                                        <div className="card">
                                            <img src={value.img} className="card-img-top" alt="load" />
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

export default Called