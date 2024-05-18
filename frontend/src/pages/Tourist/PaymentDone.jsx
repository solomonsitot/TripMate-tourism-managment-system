import axios from "axios";
import React, { useEffect, useState } from "react";

function PaymentDone() {
  const [info, setInfo] = useState([]);
  async function check() {
    const response = await axios.post("https://webhook.site/payment_status");
    setInfo(response);
    if (info.status === "success") {
        window.alert("transaction completed successfully");
        await axios.post("http://localhost:8000/verify-payment",info)
      setTimeout(() => {
        Navigate("/");
      }, 4000);
    } else {
      window.alert("transaction was not successful");
    }
  }

  return (
    <div>
      <button
        onClick={check}
        className="bg-green-950 text-white px-4 py-2 rounded-md"
      >
        Payment Done
      </button>
    </div>
  );
}

export default PaymentDone;
