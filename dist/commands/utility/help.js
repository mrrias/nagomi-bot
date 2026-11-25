"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
//   command information  //
const guideContainer = new seyfert_1.Container()
    .setColor(0xff99e9)
    .addComponents(new seyfert_1.TextDisplay().setContent("# Welcome to the Nagomi!\n\n" +
    "Here is everything you need to know to get started and navigate your way around."), new seyfert_1.Separator().setDivider(true), new seyfert_1.TextDisplay().setContent("### Useful Channels\n" +
    "* https://discord.com/channels/1376928479160963083/1551550700373278801 \n" +
    "* https://discord.com/channels/1376928479160963083/1379535229278097661 \n" +
    "* https://discord.com/channels/1376928479160963083/1376928550371725422 \n" +
    "* https://discord.com/channels/1376928479160963083/1461377727994138664 \n" +
    "* https://discord.com/channels/1376928479160963083/1574987129887400026"), new seyfert_1.Separator().setDivider(true), new seyfert_1.TextDisplay().setContent("### Useful Bot Commands \n" +
    "* `/help` brings up a general guide. \n" +
    "* `/commands` brings up a list of all slash commands. (under development) \n" +
    "* `/bug-report` notifies developers if you have found a bug in the bot.\n"), new seyfert_1.Separator().setDivider(true), new seyfert_1.TextDisplay().setContent("### Links \n" +
    "* [**Server Website**](https://mrrias.github.io/nagomi/) \n" +
    "* [**Github Repo**](https://github.com/mrrias/nagomi-bot) \n" +
    "* [**Head Developer**](https://github.com/mrrias) \n"));
let ServerGuideCommand = class ServerGuideCommand extends seyfert_1.Command {
    async run(ctx) {
        await ctx.write({
            components: [guideContainer],
            flags: seyfert_1.MessageFlags.IsComponentsV2 | seyfert_1.MessageFlags.Ephemeral
        });
    }
};
ServerGuideCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "help",
        description: "Get a general guide for Prism."
    })
    //   command execution  //
], ServerGuideCommand);
exports.default = ServerGuideCommand;
