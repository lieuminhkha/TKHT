import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import UserProfilePage from "./pages/UserProfilePage"
import DropdownAddress from "./pages/DropdownAddress"
import ProtectedRoute from "./auth/ProtectedRoute"

const AppRoutes = () => {
	return (
		<Routes>
			<Route 
				path="/" 
				element={ 
					<Layout showHero>
						<HomePage />
					</Layout> 
				}/>
			<Route path="/auth-callback" element={ <AuthCallbackPage/> }/>
			<Route path="/drop-down" element={ <DropdownAddress/> }/>
			<Route element={< ProtectedRoute />}>
				<Route 
					path="/user-profile" 
					element={ 
					<Layout>
						<UserProfilePage />
					</Layout>  }
				/>
			</Route>
			<Route path="/*" element={ <Navigate to="/" /> }/>
		</Routes>
	)
}

export default AppRoutes