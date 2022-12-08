import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './pages/App'; 



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App root />} />
				<Route path="/home" element={<App />} />
			</Routes>
		</BrowserRouter>
	);
}