import React, { Component } from 'react'

export default class HandleError extends Component {
	state = {
		handleError: false
	}
	componentDidCatch(error, info) {
		this.setState({
			handleError: true
		})
	}
	render() {
		if(this.state.handleError){
			return (
				<h1>Ha ocurrido un error</h1>
			)
		}
		return this.props.children
	}
}