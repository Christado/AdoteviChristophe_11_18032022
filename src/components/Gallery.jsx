/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Gallery extends Component {

	//State initialisation
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	nextImage(){
		//If user is at last image, returns to first by pressing next arrow
		if (this.state.count === this.props.length - 1) {
			this.setState({ count: 0 });
		} else {
		//Else, go simply to the next image
			this.setState({ count: this.state.count + 1 });
		}
	}

	previousImage(){
		//If user is at first image, returns to last by pressing previous arrow
		if (this.state.count === 0) {
			this.setState({ count: this.props.length -1});
		} else {
		//Else, go simply to the previous image
			this.setState({ count: this.state.count -1 });
		}
	}

	render() {
		return (
			<div className="Gallery">
				{/* Arrows display only if props.length upper to 1  */}
				{this.props.length > 1 && <button type="button" className="nextMedia" onClick={ () => this.nextImage() }></button>}
				{this.props.length > 1 && <button type="button" className="previousMedia" onClick={ () => this.previousImage() }></button>}
				<div className='containerImage'>
					{/* Display image according to its index */}
					{this.props.data.pictures.map((picture, index) => {
						return (
							index === this.state.count && <img src={picture} alt="" key={index}/>
						);
					})}
				</div>
			</div>
		);
	}
}
