import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			savedList: []
		};
	}

	addToSavedList = (movie) => {
		const savedList = this.state.savedList;
		savedList.push(movie);
		this.setState({ savedList });
	};

	render() {
		return (
			<div>
				<div>
					<Route exact path="/" component={MovieList} />
					<Route exact path="/movies/:id" component={Movie} />
				</div>
				<SavedList list={this.state.savedList} />
				{/* <div>Replace this Div with your Routes</div> */}
			</div>
		);
	}
}
