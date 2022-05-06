const Router = require("express");
const router = Router();
const { PostActivity, getAllActivities } = require("../controllers/activity");

router.post("/", async (req, res) => {
  const { difficulty, name, duration, season, countrys } = req.body;
  res
    .status(200)
    .send(await PostActivity(name, difficulty, duration, season, countrys));
});

router.get("/", async (req, res) => {
  res.status(200).send(await getAllActivities());
});

module.exports = router;
