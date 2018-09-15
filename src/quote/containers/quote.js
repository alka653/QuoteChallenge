import Categories from '../../categories/containers/categories'
import QuoteLayout from '../components/quote_layout'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Quote extends Component{
	render(){
		return(
			<QuoteLayout data={this.props.data}>
				<Categories />
			</QuoteLayout>
		)
	}
}

function mapStateToProps(state, props){
	return {
		data: state.quote_day
	}
}

export default connect(mapStateToProps)(Quote)