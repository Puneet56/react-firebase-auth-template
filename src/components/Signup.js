import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const { signup, currentUser } = useAuth();

	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setEnteredEmail('');
		setEnteredPassword('');

		try {
			setError('');
			setLoading(true);
			await signup(enteredEmail, enteredPassword);
			history.push('/');
		} catch (error) {
			setError('Failed to SignIn');
			console.log(error);
		}

		setLoading(false);
	};

	console.log('signup', currentUser);

	return (
		<div className='h-screen flex items-center justify-center flex-col'>
			{error !== '' && <h1>{error}</h1>}
			<form className='w-96 h-96 bg-green-200 flex items-center justify-around flex-col border-2 border-solid border-black shadow-2xl mx-auto'>
				<h1>SignUp</h1>
				{<h1>{currentUser !== null && currentUser.email}</h1>}
				<label>Enter Email</label>
				<input
					className='w-3/4 h-8 border-black border border-solid rounded-sm'
					type='text'
					placeholder='Enter email'
					value={enteredEmail}
					onChange={(event) => setEnteredEmail(event.target.value)}
				></input>
				<label>Enter Password</label>
				<input
					className='w-3/4 h-8 border-black border border-solid rounded-sm'
					type='password'
					placeholder='Enter password'
					value={enteredPassword}
					onChange={(event) => setEnteredPassword(event.target.value)}
				></input>
				<button
					type='submit'
					disabled={loading}
					className='w-36 h-8 rounded-sm bg-blue-700 text-center border-solid border border-blue-700'
					onClick={handleSubmit}
				>
					SignUp
				</button>
			</form>
			<Link to='/login'>Login</Link>
		</div>
	);
};

export default Signup;
