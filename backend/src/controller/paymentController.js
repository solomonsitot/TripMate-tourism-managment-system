var request = require("request");
const Users = require("../model/user_db");
const dotenv = require("dotenv");
const { Chapa } = require("chapa-nodejs");
module.exports.chapaPayment = async (req, res) => {
  const { id, first_name, last_name, email, quantity, rid } = req.info;
  // console.log(id)
  const user = await Users.find({ _id: id });
  // console.log(user)
  const sub_id = user[0].payment_detail.subaccount_id;
  console.log(sub_id);
  const chapa = new Chapa({
    secretKey: process.env.CHAPA_SECRET_KEY,
  });
  const auth = `${"Bearer " + process.env.CHAPA_SECRET_KEY}`;
  console.log(auth);
  const tx_ref = await chapa.generateTransactionReference();
  var options = {
    method: "POST",
    url: "https://api.chapa.co/v1/transaction/initialize",
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: "100",
      currency: "ETB",
      email: email,
      first_name: first_name,
      last_name: last_name,
      // phone_number: "0912345678",
      tx_ref: tx_ref,
      // callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      return_url: "https://www.google.com/",
      "customization[title]": "Payment for my favourite merchant",
      "customization[description]": "I love online payments.",
      "subaccounts[id]": sub_id,
    }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.json(response.body);
    console.log(response.body);
    // next();
  });

  // const Users = require("../model/user_db");
  // const dotenv = require("dotenv");
  // const { Chapa } = require("chapa-nodejs");

  // module.exports.chapaPayment = async (req, res, next) => {
  //   const { uid, first_name, last_name, email, quantity, rid } = req.info;

  //   // Validate data (consider using a library like joi for more robust validation)
  //   if (!uid || !first_name || !last_name || !email || !quantity || !rid) {
  //     return res.status(400).json({ error: "Missing required data in request" });
  //   }

  //   const user = await Users.find({ _id: uid });

  //   // Check if user exists and has subaccount ID
  //   if (!user[0] || !user[0].payment_detail || !user[0].payment_detail.subaccount_id) {
  //     console.error("Missing or invalid user or subaccount ID");
  //     return res.status(400).json({ error: "User or subaccount ID not found" });
  //   }

  //   const sub_id = user[0].payment_detail.subaccount_id;
  //   console.log(sub_id); // For debugging

  //   const chapa = new Chapa({
  //     secretKey: process.env.CHAPA_SECRET_KEY,
  //   });

  //   const tx_ref = await chapa.generateTransactionReference();
  //   const response = await chapa.initialize({
  //     first_name: first_name,
  //     last_name: last_name,
  //     email: email,
  //     currency: "ETB",
  //     amount: "200", // Assuming the amount is always 200 for now, adjust if needed
  //     tx_ref: tx_ref,
  //     // callback_url: "https://example.com/", (optional)
  //     return_url: "https://google.com/", // Update with your actual return URL
  //     customization: {
  //       title: "Test Title",
  //       description: "Test Description",
  //     },
  //     subaccounts: [
  //       {
  //         id: 'baeb09cf-5e91-4657-bec2-f8f0366f3dd2',
  //       },
  //     ],
  //   });

  //   // Log the API response message for further debugging
  //   console.log(response.data);

  //   res.json(response.data); // Assuming you want to send the response back to the client

  //   // ... (Optional) Handle verification logic after payment (commented out for now)
  //   /*
  //   try {
  //     const result = await chapa.verify({
  //       tx_ref: tx_ref,
  //     });
  //     console.log(result);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  //   */
  // };

  // const response = await chapa.initialize({
  //   first_name: first_name,
  //   last_name: last_name,
  //   email: email,
  //   currency: "ETB",
  //   amount: "200",
  //   tx_ref: tx_ref,
  //   // // callback_url: "https://example.com/",
  //   // return_url: "https://google.com/",
  //   // customization: {
  //   //   title: "Test Title",
  //   //   description: "Test Description",
  //   // },
  //   subaccounts: {
  //     id: sub_id,
  //   },
  // });
  // console.log(response.data.message);
  // res.json(response);
  // try {
  //   const result = await chapa.verify({
  //     tx_ref: tx_ref,
  //   });
  //   console.log(result);
  // } catch (e) {
  //   console.log(e.message);
  // }
  // const status = result.status;
  // const info = {
  //   status: status,
  //   rid: rid,
  //   quantity: quantity,
  // };
  // req.payment = info;
  // next();
};
