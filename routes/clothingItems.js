const { getClothingItems, createClothingItem, deleteClothingItem, likeItem, unlikeItem } = require("../controllers/clothingItems");

const router = require("express").Router();

router.get("/", getClothingItems);

router.post("/", createClothingItem);

router.delete("/:itemId", deleteClothingItem);

router.put("/:itemId/likes", likeItem);

router.delete("/:itemId/likes", unlikeItem);

module.exports = router;
