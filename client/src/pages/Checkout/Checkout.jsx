import React from "react";
import { useShoppingBag } from '../../context/ShoppingBagContext';
import axios from "axios";
import { URL } from "../../config.js";


import { useNavigate } from "react-router";

import { useStripe } from "@stripe/react-stripe-js";

const Checkout = (props) => {

    const {shoppingBagList} = useShoppingBag()
    const [finalAmount, setFinalAmount] = useState(0)

  const navigate = useNavigate();
  const stripe = useStripe();

  const calculate_total = () => {
    let total = 0;
    shoppingBagList.forEach((ele) => (total += ele.quantity * ele.price));
    return total;
  };

  // 1. When we click PAY button this function triggers first
  const createCheckoutSession = async () => {
    try {
    
      // 2. Sending request to the create_checkout_session controller and passing products to be paid for
      const response = await axios.post(
        `${URL}/payment/create-checkout-session`,
        { shoppingBagList }
      );
      return response.data.ok
        ? // we save session id in localStorage to get it later
          (localStorage.setItem(
            "sessionId",
            JSON.stringify(response.data.sessionId)
          ),
          // 9. If server returned ok after making a session we run redirect() and pass id of the session to the actual checkout / payment form
          redirect(response.data.sessionId))
        : navigate("/payment/error");
    } catch (error) {
      navigate("/payment/error");
    }
  };

  const redirect = (sessionId) => {
    
    // 10. This redirects to checkout.stripe.com and if charge/payment was successful send user to success url defined in create_checkout_session in the controller (which in our case renders payment_success.js)
    stripe
      .redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: sessionId,
      })
      .then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
  };
  //=====================================================================================
  //=====================================================================================
  //=====================================================================================
  return (
    <div className="checkout_container">
      <div className="header">Checkout - Check products before pay</div>
      <div className="products_list">
        {shoppingBagList.map((item, idx) => {
          return <div key={idx} {...item} />;
        })}
      </div>
      <div className="footer">
        <div className="total">Total : {calculate_total()} €</div>
        <button className="button" onClick={() => createCheckoutSession()}>
          PAY
        </button>
      </div>
    </div>
  );
};

export default Checkout;
