import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import { useState, useEffect } from "react";
import { clearState } from "../hooks/actions";
import { error } from "../hooks/error";
import { useRouter } from "next/router";

export default function Layout({ children, cart, remove }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const errorState = useSelector((state) => state.error);
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      dispatch(clearState());
      setPaymentSuccess(true);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Modal
        open={paymentSuccess}
        headerText="Payment Successful"
        bodyText="Thank you for shopping with us!"
        headerColor="bg-green-100"
        onClose={() => {
          router.push("/");
          setPaymentSuccess(false);
        }}
      />
      <Modal
        open={errorState.status}
        headerText={`Error ${errorState.code}`}
        bodyText={errorState.msg}
        headerColor="bg-red-100"
        onClose={() => {
          router.push("/");
          dispatch(error({}));
        }}
      />
      <main>{children}</main>
    </>
  );
}
