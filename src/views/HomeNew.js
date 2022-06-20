import { useState, useEffect } from 'react';
import { Col, Alert, Card, Row, Badge, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar/Sidebar';
import '../index.css';
// import './CandidateDashboard/CandidateDashboard.css';
import { useNavigate } from 'react-router-dom';

const IntegrityTestNew = () => {
	const sideNavLinks = {
		name: "Test",
		email: "test@example.com",
		role_applied_for: "Teller"
	}
	const transformData = (arr) => {
		const results = []
	
		Object.entries(arr).map(val => results.push({
		  title: val[0].split(/(?=[A-Z])|[_]/).join(" "),
		  value: val[1]
		}))
	
		return results
	}
	return (
		<div className="layout candidateDashboard">
			<Sidebar />

		</div>
	);
};

export default IntegrityTestNew;

const customButtonStyling = {
	background: 'var(--orange)',
	color: 'var(--white)',
	padding: '.7rem 2rem',
	border: 'none',
};
const commonStyles = {
	borderRadius: '10px',
	borderstyle: 'solid',
	borderwidth: '10px',
	borderColor: '#87AA62',
	textAlign: 'left',
	margin: 'auto'
};