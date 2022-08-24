const stripe = require("stripe")(process.env.STRIPE_SDK);

export default async function handler(req, res) {
  try {
    const result = await stripe.products.list({
      ids: req.query.ids,
      expand: ["data.default_price"],
    });
    return res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

// const stripe = require("stripe")(
//   "sk_test_51HlIUdJ0MpGFz2EFBhklX1FSJBkaVVxJChXMhRiSR1WH4VxEIBOyPUCQ73qhDSCIArM1CGBaTulvNMtc3qMp530x00VIFkWDsa"
// );

// export default async function handler(req, res) {
//   try {
//     console.log("fetching products");
//     const result = await stripe.products.list({
//       expand: ["data.default_price"],
//     });
//     return res.status(200).json({ result });
//   } catch (err) {
//     res.status("500").json({ msg: err });
//   }
// }

// const stripe = require("stripe")(
//   "sk_test_51HlIUdJ0MpGFz2EFBhklX1FSJBkaVVxJChXMhRiSR1WH4VxEIBOyPUCQ73qhDSCIArM1CGBaTulvNMtc3qMp530x00VIFkWDsa"
// );
// export default async function handler(req, res) {
//   try {
//     console.log("fetching product");
//     console.log(req.query);
//     if (req.query.id === "undefined") return res.status(404);
//     const result = await stripe.products.retrieve(req.query.id, {
//       expand: ["default_price"],
//     });
//     console.log(result);
//     res.status(200).json({ result });
//   } catch (err) {
//     console.log(err);
//   }
// }
