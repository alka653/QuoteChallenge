import React from 'react'
import './quote.css'

export default function QuoteLayout(props){
	const quotes = props.data.quotes
	return(
		<div className="container" style={{ background: `linear-gradient(rgba(2,48,70,0.5),rgba(0,0,0,1)),url(${quotes.background}) center center no-repeat` }}>
			<h1>
				<small>{quotes.title}</small>
				"{quotes.quote}"
				<small><a href={quotes.permalink} target="_blank"><b>Author:</b> {quotes.author}</a></small>
			</h1>
			{props.children}
		</div>
	)
}