import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}

export default App;
