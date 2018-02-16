import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
	//initializing state
	constructor(props) {
		super(props); 

		this.state={term: ''};

		//Need to bind this function to SearchBar component so it will
		//replace this with onInputChange.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	//defining the onInputChange function
	onInputChange(event) {
		console.log(event.target.value);
		//remember to set state in the function
		this.setState({ term: event.target.value });
	}

	//Since we are using form tags(users input) then we need to do the following
	//create a new onFormSubmit function to handle the form submission
	//event.preventDefault() will stop it from submitting itself
	onFormSubmit(event) {
		event.preventDefault(); 
		//when we hit the submit button we need it to go fetch data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});


	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
			<input 
				placeholder="Get a five-day forecast in your favorite cities!"
				className="form-control"
				value={this.state.term}
				onChange={this.onInputChange} />
			<span className="input-group-btn">
				<button type="submit" className="btn btn-secondary">Submit</button>
			</span>
			</form>
		);
	}
}

//Bind the action creator 
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather}, dispatch);
}

// connect the API call to the SearchBar container through the function mapDispatchToProps 
export default connect(null, mapDispatchToProps)(SearchBar);














