import React, { useState } from 'react'

export const AddUnitForm = () => {
    const [unitType, setUnitType] = useState("")
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-12 d-flex justify-content-center'>
                    <form action="">
                        <div className='text-center'>

                            <div className='my-3'>
                                <h1 className='display-6'>Agregar unidad</h1>
                            </div>

                            <div className='my-3 d-flex align-items-center justify-content-center'>
                                <input type="image" />
                            </div>

                            <div className=' my-3'>

                                <div className='form-floating my-2'>
                                    <input id='form' className='form-control' type="text" placeholder='Nombre' />
                                    <label htmlFor="form">Nombre</label>
                                </div>

                                <div className='form-floating my-2'>
                                    <input id='form' className='form-control' type="text" placeholder='Nombre' />
                                    <label htmlFor="form">Nombre</label>
                                </div>

                                <div className='form-floating my-2'>
                                    <input id='form' className='form-control' type="text" placeholder='Nombre' />
                                    <label htmlFor="form">Nombre</label>
                                </div>

                                <div className='my-3'>
                                    <button className='btn btn-primary' type='submit'>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
