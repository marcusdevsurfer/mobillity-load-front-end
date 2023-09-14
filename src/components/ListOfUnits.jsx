import React from 'react'

export const ListOfUnits = () => {
    return (
        <div className='container my-2'>
            <div className='row'>

                <div className=' col-sm-12 col-md-6'>

                    <div className='d-flex align-items-center justify-content-between'>
                        <h5>Ordenar por</h5>
                        <button type='reset' className='btn btn-primary'>Borrar todo</button>
                    </div>

                    <div className='my-3 mx-5'>
                        <div className='d-flex justify-content-between'>
                            <label htmlFor="lessPrice">Menor precio</label>
                            <input type="radio" name="" id="lessPrice" />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary'>Buscar</button>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>

                    <div>
                        <h5>Hoy</h5>
                        <p>Viajes disponibles : </p>
                    </div>

                    <div className=''>
                        <div className='bg-secondary'>
                            <img src="" alt="Foto perfil" />
                            <h4>Transporte</h4>
                        </div>
                        <div className='bg-secondary'>
                            <img src="" alt="Foto perfil" />
                            <h4>Transporte</h4>
                        </div>
                        <div className='bg-secondary'>
                            <img src="" alt="Foto perfil" />
                            <h4>Transporte</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
