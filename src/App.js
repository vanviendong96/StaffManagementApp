import React, { Component } from 'react';
import './App.css';
import StaffList from './components/StaffComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			staffs: STAFFS
		};
	}

	render() {
		return (
			<div className="App">
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">
							Staff Management Application v1.0
						</NavbarBrand>
					</div>
				</Navbar>
				<StaffList staffs={this.state.staffs}/>
			</div>
		);
	}
}

export default App;