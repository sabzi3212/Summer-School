import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation, useParams } from 'react-router-dom';
import useInstructors from '../../../hooks/UseInstructors';
import useBookings from '../../../hooks/useBookings';

const Payment = () => {
    const [bookings] = useBookings();
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const location = useLocation();
    const item = location?.state?.item;
    const price = location?.state?.item?.price;
    console.log(location);
    // const { location } = props;
    // const { price } = location?.state;

    return (
        <div>
            <Helmet>
                <title>Summer School | My Payment</title>

            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">Please Pay ${price} to enroll now</h1>

            <h2>Payment</h2>
            <h1>Press Enter to procced payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} item={item}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;