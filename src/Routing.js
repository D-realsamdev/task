// import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Task from './views/Task';
import { useEffect } from 'react'

const Routing = () => {
useEffect(()=>{
	window.scrollTo(0, 0)
})

	return (
		<AnimatePresence>
			<Router>
				<Routes>
					<Route exact path="/" element={<Task />} />
					{/* <Route path="*" element={<NotFound/>}/> */}
				</Routes>
			</Router>
		</AnimatePresence>
	);
};
export default Routing;
