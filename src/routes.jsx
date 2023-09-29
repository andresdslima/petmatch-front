import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import PetProfile from './pages/PetProfile';
import FormularioAprovadoFinal from './pages/FormularioAprovadoFinal';
import About from './pages/About';
import Matches from './pages/Matches';
import Adoption from './pages/Adoption';
import Blog from './pages/Blog';
import ONGs from './pages/ONGs';
import RequireAuth from './RequiredAuth';
import GiveForAdoption from './pages/GiveForAdoption';
import ScrollToTop from './components/ScrollToTop';
import PetsBySpecie from './pages/PetsBySpecie';
import AllPets from './pages/AllPets';
import UserEdit from './pages/UserEdit';

export default function AppRoutes() {
	// let login = useSelector(state => state.persistedReducer.isLogged);

	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/petprofile" element={<PetProfile />} />
					<Route
						path="/formularioaprovadofinal"
						element={
							// <RequireAuth>
								<FormularioAprovadoFinal />
							// </RequireAuth>
						}
					/>
					<Route path="/sobre" element={<About />} />
					<Route path="/matches" element={
						// <RequireAuth>
							<Matches />
						// </RequireAuth>
					} />
					<Route
						path="/adoption"
						element={
							// <RequireAuth>
								<Adoption />
							// </RequireAuth>
						}
					/>
					<Route
						path="/giveforadoption"
						element={
							// <RequireAuth>
								<GiveForAdoption />
							// </RequireAuth>
						}
					/>
					<Route path="/blog" element={<Blog />} />
					<Route path="/ongs" element={<ONGs />} />
					<Route path="/petsbyspecie/:param" element={<PetsBySpecie />} />
					<Route path="/allpets" element={<AllPets />} />
					<Route path="/users" element={
						// <RequireAuth>
							<UserEdit />
						// </RequireAuth>
					} />
				</Routes>
			</ScrollToTop>
		</Router>
	);
}
