import React from 'react';
import {
	HashRouter as Router,
	NavLink
} from 'react-router-dom';
import AppRoutes from '../../routes';
import './App.scss';
import NotificationContainer from 'components/Notification';
import Modal from 'components/Modal';
import content from '../../data/content.json';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: {
				display: true,
				title: 'THIS IS A MODAL',
				content: content.text[Math.floor(Math.random() * content.text.length)]
			}
		};
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	showModal(title= '', content = '') {
		this.setState({
			modal: {
				display: true,
				title: title,
				content: content
			}
		});
	}

	hideModal() {
		this.setState({ modal: {display: false }});
	}

	render() {
		return (
			<Router>
				<div className="app-container">
					<h1>React Redux Jumpstart</h1>
					<div className="app-navigation">
						<ul>
							<li><NavLink to="/">Home</NavLink></li>
							<li><NavLink to="/about">About</NavLink></li>
							<li><NavLink to="/buttons">Buttons</NavLink></li>
							<li><NavLink to="/cards">Cards</NavLink></li>
							<li><NavLink to="/contact">Contact</NavLink></li>
						</ul>
					</div>
					<div className="app-content">
						<AppRoutes />
					</div>
					{this.state.modal.display && <Modal title={this.state.modal.title} content={this.state.modal.content} onDismissClick={this.hideModal} />}
					<NotificationContainer />
				</div>
			</Router>
		);
	}
}

export default App;
