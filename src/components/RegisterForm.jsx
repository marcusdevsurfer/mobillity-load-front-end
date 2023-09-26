import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const RegisterForm = () => {

    const [carrierName, setCarrierName] = useState('')
    const [carrierEmail, setCarrierEmail] = useState('')
    const [carrierAddress, setCarrierAddress] = useState('')
    const [carrierCity, setCarrierCity] = useState('')

    const validateForm = (e) => {
        if(carrierName === '' || carrierEmail === '' || carrierAddress === '' || carrierCity === ''){
            alert('Campos vacios, por favor revisar.')
        }
        carrierEmail.trim()
    } 

    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        validateForm()
        axios.post('http://localhost:8080/carriers',
        {
            'name': carrierName,
            'email': carrierEmail,
            'address':carrierAddress,
            'city': carrierCity
        })
        .then((response) => {
            if(response.status===201){
                alert('Se registro con exito')
                setCarrierName('')
                setCarrierEmail('')
                setCarrierAddress('')
                setCarrierCity('')
            }else{
                console.log('Ocurrio un error' + response.status)
            } 
        })
        .catch((error) => console.log(error))
    }


    return (
        <div className='container'>

            <div className='row'>
                <div className='col my-3 text-center'>
                    <h5>Formulario de registro</h5>
                </div>
            </div>

            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <div className='w-50 '>
                        <form onSubmit={handleFormSubmit}>
                            <div className='form-floating my-2'>
                                <input id='name' className='form-control' required type="text" placeholder='Nombre' value={carrierName} onChange={(e) => setCarrierName(e.target.value)} />
                                <label htmlFor="name">Nombre</label>
                            </div>

                            <div className='form-floating my-2'>
                                <input id='email' className='form-control' required type="email" placeholder='Email' value={carrierEmail} onChange={(e) => setCarrierEmail(e.target.value)} />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className='form-floating my-2'>
                                <input id='address' className='form-control' required type="text" placeholder='Direccion' value={carrierAddress} onChange={(e) => setCarrierAddress(e.target.value)} />
                                <label htmlFor="address">Direccion</label>
                            </div>

                            <div className='form-floating my-2'>
                                <input id='city' className='form-control' required type="text" placeholder='Ciudad' value={carrierCity} onChange={(e) => setCarrierCity(e.target.value)} />
                                <label htmlFor="city">Ciudad</label>
                            </div>

                            <div className='text-center'>
                                <button type='submit' className='btn btn-primary'>Registrate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
