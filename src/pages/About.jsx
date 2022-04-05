import React, { Component } from 'react';
import Header from '../components/Header';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

export default class About extends Component {

	//Import Header, Accordion and Footer components + Transmission props to Accordion

	render() {
		return (
			<div className="About">
				<Header />
				<div className='Banner'>
					<img src='../img/banner_about.jpg' alt='banner'></img>
				</div>
				<Accordion title='Fiabilité' text='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'  classname='textDescription'/>
				<Accordion title='Respect' text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'  classname='textDescription'/>
				<Accordion title='Service' text={'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'ésitez pas à nous contacter si vous avez la moindre question.'}  classname='textDescription'/>
				<Accordion title='Sécurité' text={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'} classname='textDescription'/>
				<Footer />
			</div>
		);
	}
}
