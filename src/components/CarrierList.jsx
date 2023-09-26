import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const CarrierList = () => {

    const [carrierListData, setCarrierListData] = useState([])
    const [carriersFound, setCarriersFound] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const [isThereResults, setIsThereResults] = useState(false)

    useEffect(() => {

        const fetchData = () => {
            axios.get('http://localhost:8080/carriers')
                .then(function (response) {
                    // manejar respuesta exitosa
                    setCarrierListData(response.data)
                })
                .catch(function (error) {
                    // manejar error
                    console.log(error);
                })
                .finally(function () {
                    // siempre sera executado
                });
        }
        fetchData()
    }, [])


 


    const showFoundCarriers = () => {
        return (
            <table className='my-3 table w-75 text-center'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {carriersFound.map((carrier) => (
                    <tr key={carrier.id} className='bg-primary'>
                        <td>
                            {carrier.name}
                        </td>
                        <td>
                            {carrier.email}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

        )
    }

    const showFoundCarriersNotFoundMessage = () => {
        return (
            <div className='my-3 text-center'>
                <h5>No hay resultados sobre la busqueda.</h5>
            </div>
        )
    }



    const handleSearchResults = () => {
        const found = carrierListData.filter((carrier) => carrier.name.toLowerCase() == inputSearch.toLowerCase())
        if (found.length > 0) {
            setIsThereResults(true)
            setCarriersFound(found)
        } else {
            setIsThereResults(false)
            setCarriersFound([])
        }
    }


    return (
        <div className='container-fluid'>

            <div className='row'>
                <div className='col bg-secondary'>
                    <div className='my-3 d-flex justify-content-center'>
                        <input className='form-control w-50' type="text" onChange={(e) => setInputSearch(e.target.value)} />
                        <button className='btn btn-primary' onClick={handleSearchResults}>Buscar</button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        {isThereResults?showFoundCarriers():showFoundCarriersNotFoundMessage()}
                    </div>
                </div>
            </div>

        </div>



    )
}
