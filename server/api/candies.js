const router = require("express").Router();
const Candy = require("../db/models/Candy");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const candy = await Candy.findAll();
    res.json(candy);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const candy = await Candy.findByPk(req.params.id);
    res.json(candy);
  } catch (err) {
    next(err);
  }
});
