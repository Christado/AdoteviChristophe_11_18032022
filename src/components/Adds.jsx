import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Adds extends Component {
    
	//State initialisation
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	//Recovery data thanks to fetch() and state modification with this data
	componentDidMount() {
		fetch('data.json')
			.then(response => response.json())
			.then(data => {
				this.setState({ data: data });
			})
			.catch(e => console.log(e));
	}
    
	render() {
		return (
			<div className="Adds">
				{/* For each card link to corresponding adds thanks to ID */}
				{this.state.data.map(data => {
					return <Link key={data.id} to={{ pathname:'/housing', search:`?id=${data.id}` }}>
						<article>
							<h2>{data.title}</h2>
							<img src={data.cover} alt='house'></img>
							<span></span>
						</article>
					</Link>;
				})}
			</div>
		);
	}
}
