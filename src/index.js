import Home from './home/containers/home'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'

const store = createStore(reducer, {
	quote_day: {
		quotes: {
			author: '',
			background: '',
			quote: '',
			title: '',
			permalink: ''
		}
	},
	category_quote_list: {}
})

const content = document.getElementById('content')

render(
	<Provider store={store}>
		<Home />
	</Provider>
, content)