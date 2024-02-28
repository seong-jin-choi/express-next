import express from "express";

const apiRouter = express.Router();

apiRouter.post("/auth", (req, res) => {
  console.log(req.user);
  res.send("ok");
});

export default apiRouter;
