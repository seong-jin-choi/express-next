import express from "express";

const apiRouter = express.Router();

apiRouter.post("/auth", (req, res) => {
  if (req.user) {
    const { userID, role, name } = req.user;
    res.status(200).json({ userID, role, name });
  } else {
    res.status(401);
  }
});

export default apiRouter;
