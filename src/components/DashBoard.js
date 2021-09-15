import { useAuth } from '../context/AuthContext';

const DashBoard = () => {
	const { currentUser, logout } = useAuth();

	const logoutHandler = async () => {
		await logout();
	};

	return (
		<div className='mx-auto flex items-center justify-center flex-col'>
			<h1>{currentUser.email}</h1>
			<button
				className='border border-solid border-red-500 bg-red-500'
				onClick={logoutHandler}
			>
				LOG OUT
			</button>
		</div>
	);
};

export default DashBoard;
