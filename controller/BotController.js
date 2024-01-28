const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");
let isChatCS = false;
module.exports = class BotController extends Controller {

    async introduction(request) {
      if ([request.menu] == "/menu")
      {
        isChatCS = false;
      }
      if (!isChatCS){
        await this.reply(Response.image.fromURL("https://hannarchy.store/assets/logo/hannarchy_logo%20ls.jpg"));
        return Response.menu.fromArrayOfString(
          [
            f("menu.listProduct"),
            f("menu.chatCS")
          ],
          f("intro", [request.name]),
          // f("topup"),
          // f("open"),
          f("template.menu"),
          f("footer.menu")
        );
      }
    }
    // async introduction(request) {
    //   return f("intro", [request.name]);
    // }

    async product(request) {
      if (!isChatCS)
        await this.reply("Top Up Game Favoritmu termurah dengan proses cepat dan otomatis, bisa dikunjungi di https://hannarchy.store")
        await this.reply("*⚠️COMING SOON⚠️*\nTOP UP OTOMATIS VIA WHATSAPP")

    }

    async chatCS(request) {
      isChatCS = true;
      await this.reply("Terimakasih telah menghubungi CS Hannarchy Store. Ada yang dapat saya bantu?")
      await this.reply("Silahkan ketik */menu* untuk kembali ke menu utama.")

      // return this.reply("Poll: What's your favorite color?\n1. Red\n2. Blue\n3. Green\nReply with the number of your choice.")
    }

    async showMenu(request) {
      await this.reply(Response.image.fromURL("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png", "caption"));
      return Response.menu.fromArrayOfString(["menu 4", "menu 5"]);
    }

    async downloadYoutube(request) {
      const url = request.text
      const youtube = await download(url)
      return [
          Response.video.fromBuffer(youtube.video),
          youtube.title
      ]
    }

    /**
     * Bot will reply button "yes" and "cancel"
     * with "Are you sure?" text.
     */
    // buy() {
    //   const buttons = ["yes", "cancel"]
    //   return Response.button.fromArrayOfString(buttons, "Are you sure?")
    // }

}