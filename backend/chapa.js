// const { Chapa } = require("chapa-nodejs");

// const chapa = new Chapa({
//   secretKey: "CHASECK_TEST-0bQ8f6c3eIoBzkIiCnbrRWTtqXkqPh2j",
// });

// async function chapapay() {
//   const tx_ref = await chapa.generateTransactionReference();

//   const response = await chapa.initialize({
//     first_name: "John",
//     last_name: "Doe",
//     email: "john@gmail.com",
//     currency: "ETB",
//     amount: "200",
//     tx_ref: tx_ref,
//     callback_url: "https://example.com/",
//     return_url: "https://example.com/",
//     customization: {
//       title: "Test Title",
//       description: "Test Description",
//     },
//     // Add this for split payment
//     // subaccounts: [
//     //   {
//     //     id: "b292b321-ee61-4ae1-a566-60148af889df",
//     //   },
//     // ],
//   });
//   console.log(response);
// }
// chapapay();

// // const Users = require("../model/user_db");
// // const dotenv = require("dotenv");
// // const { Chapa } = require("chapa-nodejs");
// // async function chapaPayment(req, res) {
// //   //   const { first_name, last_name, email } = req.body;
// //   const first_name = "abebe ";
// //   const last_name = "tesema";
// //   const email = "solotest922@gmail.com";
// // //   const sub_id = "7980e81e-7728-48de-b7f3-9b038b901cfb";
// //   const chapa = new Chapa({
// //     secretKey: 'CHASECK_TEST-0bQ8f6c3eIoBzkIiCnbrRWTtqXkqPh2j',
// //   });

// //   const tx_ref = await chapa.generateTransactionReference();
// //   const response = await chapa.initialize({
// //     first_name: first_name,
// //     last_name: last_name,
// //     email: email,
// //     currency: "ETB",
// //     amount: "200",
// //     tx_ref: tx_ref,
// //     subaccounts:[ {
// //       id: "7980e81e-7728-48de-b7f3-9b038b901cfb",
// //     },]
// //   });
// //   console.log(response);
// //   res.json(response);
// //   // try {
// //   //   const result = await chapa.verify({
// //   //     tx_ref: tx_ref,
// //   //   });
// //   //   console.log(result);
// //   // } catch (e) {
// //   //   console.log(e.message);
// //   // }
// //   // const status = result.status;
// //   // const info = {
// //   //   status: status,
// //   //   rid: rid,
// //   //   quantity: quantity,
// //   // };
// //   // req.payment = info;
// //   // next();
// // }
// // chapaPayment();

var request = require("request");
var options = {
  method: "POST",
  url: "https://api.chapa.co/v1/transaction/initialize",
  headers: {
    Authorization: "Bearer CHASECK_TEST-0bQ8f6c3eIoBzkIiCnbrRWTtqXkqPh2j",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: "100",
    currency: "ETB",
    email: "abebe@gmail.com",
    first_name: "Bilen",
    last_name: "Gizachew",
    phone_number: "0912345678",
    tx_ref: "chewafhthux-6018",
    callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
    return_url: "https://www.google.com/",
    "customization[title]": "Payment for my favourite merchant",
    "customization[description]": "I love online payments.",
    "subaccounts[id]": "cde48d6e-ed71-412d-85ca-e72b2d75c6c1",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
