import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/index.css';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<PrivateRoute exact path='/' component={DashBoard} />
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
				</Switch>
			</AuthProvider>
		</Router>
	);
};

export default App;
