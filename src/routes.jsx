import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PetProfile from './pages/PetProfile'

export default function AppRoutes() {
	return (
		//  basename='/petmatch-front'
		<Router basename='/petmatch-front'>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/petprofile" element={<PetProfile />} />

			</Routes>
		</Router>
	);
}
