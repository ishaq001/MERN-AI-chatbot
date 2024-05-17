import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.tsx"
import { Toaster } from "react-hot-toast"

import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000/api/v1"
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<Toaster  position="top-right"/>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
)
