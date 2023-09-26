import React, { useState } from 'react'

export const LoginForm = () => {
    const [username, setUsername] = useState("");

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center'>
                <form className='text-center' action="">
                    <h2>Iniciar sesion</h2>
                    <div className='my-3'>
                        <input className='form-control' name='username' value={username} type="text" placeholder='Usuario' />
                    </div>
                    <div className='my-3'>
                        <input className='form-control' type="text" name="" id="" placeholder='Contraseña' />
                    </div>
                </form>
            </div>

        </div>
    )
}
