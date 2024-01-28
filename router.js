const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.listProduct"), [BotController, "product"]);
router.menu(f("menu.chatCS"), [BotController, "chatCS"]);
router.keyword("youtube", [BotController, 'downloadYoutube'])

// router.button("buy", [BotController, 'buy'])
router.keyword("*", [BotController, "introduction"]);

module.exports = router;