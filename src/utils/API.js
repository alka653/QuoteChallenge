import 'babel-polyfill'

const BASE_API = 'https://quotes.rest/qod'

class Api{
	async getQuoteDay(){
		const query = await fetch(BASE_API).then(response => response.json())
		let data = query.contents
		data.quotes = data.quotes[0]
		return data
	}
	async getCategoriesQuote(){
		const query = await fetch(`${BASE_API}/categories`).then(response => response.json())
		return await query.contents.categories
	}
}

export default new Api()