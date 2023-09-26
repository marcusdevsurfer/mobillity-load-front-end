import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const CarrierProfile = () => {
    const [carrierProfileData,setCarrierProfileData] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8080/carriers/query/transportes salac')
        .then(function (response) {
          // manejar respuesta exitosa
          console.log(response);
          setCarrierProfileData(response.data)
          console.log(response.data)
        })
        .catch(function (error) {
          // manejar error
          console.log(error);
        })
        .finally(function () {
          // siempre sera executado
        });
    }, [])
    
    return (
        <div className='container'>

            <div className='row'>
                
                <div className='text-center my-3'>
                    <h2>{carrierProfileData.name}</h2>
                </div>

                <div className='col-sm-12 col-md-4 text-center'>
                    <div className='my-1'>
                        <button className='btn btn-success'>Function 1</button>
                    </div>

                    <div className='my-1'>
                        <button className='btn btn-primary'>Function 2</button>
                    </div>

                </div>

                <div className='col-sm-12 col-md-8 text-center'>
                    <div>
                        <p>Carrier direction</p>
                        <p>{carrierProfileData.email}</p>
                        <p>Carrier description</p>
                    </div>
                    <div>
                        <h2>Unit's</h2>
                        <ul>
                            <li>Unidad 1</li>
                        </ul>
                    </div>
                </div>



            </div>



        </div>
    )
}
