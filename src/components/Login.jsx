import { useState } from 'react'

const Login = ({setAlertApp}) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {

		e.preventDefault();

		if (email.trim() == 'desafio@correo.cl' && password.trim() == '123123') {
			setAlertApp({mensaje: 'Ingreso correcto', color: 'success'});
		} else {
			setAlertApp({mensaje: 'Credenciales inválidas', color: 'danger'});
		}
	}

	return (
		<form className="p-5" onSubmit={handleSubmit}>

			{/* -------Input del correo/email------- */}
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email:
				</label>
				<input 
					type="email" 
					className="form-control" 
					id="email" 
					placeholder="nombre@correo.com"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</div>

			{/* -------Input de la contraseña------- */}
			<div className="mb-3">
				<label htmlFor="password" className="form-label">
					Contraseña:
				</label>
				<input 
					type="password" 
					className="form-control" 
					id="password" 

					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>

			{/* -------boton submit------- */}
			<button className='btn btn-primary btn-lg' disabled={!email.trim() || !password.trim()}>Ingresar</button>
		</form>

	)
}

export default Login