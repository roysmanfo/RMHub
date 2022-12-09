import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './pages/App'; 
import Categories from "./pages/Categories";



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App root />} />
				<Route path="/home" element={<App />} />
				<Route path="/categories" element={<Categories />} />
			</Routes>
		</BrowserRouter>
	);
}