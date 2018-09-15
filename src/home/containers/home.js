import HandleError from '../../error/handle-error'
import Quote from '../../quote/containers/quote'
import { bindActionCreators } from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import API from '../../utils/API'
import './index.css'

class Home extends Component{
	state = {
		push_button: false
	}
	async componentDidMount(){
		const category_quote_list = await API.getCategoriesQuote()
		this.props.dispatch({
			type: 'SET_CATEGORY_QUOTE_LIST',
			payload: {
				category_quote_list
			}
		})
		const quote_day = await API.getQuoteDay()
		this.props.dispatch({
			type: 'SET_QUOTE_DAY',
			payload: {
				quote_day
			}
		})
	}
	onPushButton = () => {
		this.setState({
			push_button: true
		})
	}
	render(){
		return(
			<HandleError>
				{
					this.state.push_button ?
						<Quote />
					:
						<div className="container-button">
							<button type="button" className="btn btn-press" onClick={this.onPushButton}>Get a quote</button>
						</div>
				}
			</HandleError>
		)
	}
}

export default connect(null)(Home)