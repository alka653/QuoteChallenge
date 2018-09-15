import React from 'react'
import './category.css'

export default function CategoryLayout(props){
	return(
		<div className="list-category">
			<div className="list">
				<h5>Get more quotes every day in topics like:</h5>
				{
					Object.keys(props.data).map(function(key, item){
						return <span key={key}>{props.data[key]}</span>
					})
				}
				<p><small>Obtenido de <a href="https://theysaidso.com/api" target="_blank">https://theysaidso.com/api</a></small></p>
			</div>
		</div>
	)
}