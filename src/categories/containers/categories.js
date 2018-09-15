import CategoryLayout from '../components/category_layout'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component{
	render(){
		return(
			<CategoryLayout data={this.props.data} />
		)
	}
}

function mapStateToProps(state, props){
	return {
		data: state.category_quote_list
	}
}

export default connect(mapStateToProps)(Categories)