import React from 'react'

export const SearchBar = () => {
    return (
        <div className='container-fluid my-2'>
            <div className='row'>
                <div className='col-sm-12 d-flex justify-content-center'>
                    <form className='d-flex' action="">
                        <input type="date" />
                        <button type='submit' className='btn btn-primary p-1'>Buscar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
