import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './pages/App'; 
import Categories from "./pages/Categories";
import Login from "./pages/auth/Login";
import Minigiochi from "./pages/Minigiochi";
import Userpage from "./pages/User";
import Profile from "./pages/Profile";
import SCF from "./pages/SCF";
import Slots from "./pages/Slots";
import PasswordRecovery from "./pages/auth/PasswordRecovery";


export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App root />} />
				<Route path="/login" element={<Login />} />
				<Route path="/password-recovery" element={<PasswordRecovery />} />
				<Route path="/home" element={<App />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/minigiochi" element={<Minigiochi />} />
				<Route path="/minigiochi/sasso-carta-forbice" element={<SCF />} />
				<Route path="/minigiochi/slot-machine" element={<Slots />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/u/:username" element={<Userpage />} />
			</Routes>
		</BrowserRouter>
	);
}