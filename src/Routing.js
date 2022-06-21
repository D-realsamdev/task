// import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeNew from './views/HomeNew';
import Login from './views/Login';
import SignUp from './views/SignUp';
import { useEffect } from 'react'
const Routing = () => {
useEffect(()=>{
	window.scrollTo(0, 0)
})

	return (
		<AnimatePresence>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomeNew />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<SignUp />} />
					
					{/* <Route path="*" element={<NotFound/>}/> */}
				</Routes>
			</Router>
		</AnimatePresence>
	);
};
export default Routing;
