import express from "express";
import db from "@repo/db/client";
import z from "zod";
const app = express();

app.post("/hdfcWebhook", async (req, res) => {
  const Validation = z.object({
    token: z.string(),
    userId: z.string(),
    amount: z.number(),
  });
  const paymentInformation: z.infer<typeof Validation> = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };
  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: Number(paymentInformation.amount),
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);
  } catch (err) {
    console.log(err);
    res.status(400).json({ messsage: "Error while processing webhook" });
  }
});

app.listen(3003);
