import React, { useEffect, useState, Component } from 'react'
import axios from 'axios'

const Called = (props) => {
    const [database, setdatabase] = useState([])

    useEffect(() => {
        const include = async () => {
            axios.get(`http://localhost:3000/data`).then((response) => {
                return setdatabase(response.data)
            }
            )
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
                                    <div className="col-md-6 col-lg-4 my-4" onClick={() => {
                                            window.location.href=`/data/${value.id}`;   
                                    }
                                    }>
                                        <div className="card" >
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