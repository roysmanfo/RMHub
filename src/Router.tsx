import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './pages/App'; 
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Minigiochi from "./pages/Minigiochi";
import Profile from "./pages/Profile";
import SCF from "./pages/SCF";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App root />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<App />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/minigiochi" element={<Minigiochi />} />
				<Route path="/minigiochi/sasso-carta-forbice" element={<SCF />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}