import React from 'react';

class BookSearch extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isbn: '',
			imageUrl: '',
			title: '',
		};
	}

	searchForBook() {
		fetch("https://openlibrary.org/api/books?format=json&bibkeys=ISBN:" + this.state.isbn)
			.then(res => res.json())
			.then(response => {
				const book = response[`ISBN:${this.state.isbn}`];
				const splitArray = book.info_url.split('/');

				this.setState({
					imageUrl: book.thumbnail_url,
					title: splitArray[splitArray.length - 1].replace('_', ' '),
				});
			});
	}

	setIsbn(event) {
		const value = event.target.value;

		this.setState({
			isbn: value,
		});
	}

	render = () => (
		<div>
			<input type="number" placeholder="Please enter ISBN" onChange={(e) => this.setIsbn(e)} />
			<button onClick={() => this.searchForBook()}>Search</button>
			<h1>{this.state.title}</h1>
			<img src={this.state.imageUrl} alt={this.state.title} />
		</div>
	);
}

export default BookSearch;

// ReactDOM.render(<BookApp />, document.getElementById('root'));