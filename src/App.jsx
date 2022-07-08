import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<AppRoutes />
			</PersistGate>
		</Provider>
	);
}

export default App;
