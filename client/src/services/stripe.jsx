import React from 'react';
import Shoppingbag from '../pages/ShoppingBag/ShoppingbagPage.jsx';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

console.log(import.meta.env);
const Stripe = (props) => {
	return (

			<Elements stripe={stripePromise}>
				<Shoppingbag {...props} />
			</Elements>

	);
};

export default Stripe;