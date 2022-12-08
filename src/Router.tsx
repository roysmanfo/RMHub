import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './pages/App';
import Navbar from './components/Navbar';



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
}