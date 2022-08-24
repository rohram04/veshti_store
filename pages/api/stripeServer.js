const stripe = require("stripe")(process.env.STRIPE_SDK);
import NextCors from "nextjs-cors";

const YOUR_DOMAIN = "http://localhost:3000";

export default async function handler(req, res) {
  // await NextCors(req, res, {
  //   // Options
  //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  //   origin: "*",
  //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  // });
  // return res.status(404).json({ msg: "yolo" });
  if (req.method === "POST") {
    try {
      const line_items = req.body.prices.map((price) => {
        return { price: `${price.id}`, quantity: price.quantity };
      });
      console.log(line_items);
      const session = await stripe.checkout.sessions.create({
        line_items: line_items,
        mode: "payment",
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      });

      res.status("303").json({ url: session.url });
    } catch (err) {
      res.status("500").json({ msg: err });
    }
  }
}
