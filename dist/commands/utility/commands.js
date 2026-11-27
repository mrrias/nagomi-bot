"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const seyfert_1 = require("seyfert");
const varMain_1 = require("../../components/variables/varMain");
const varCmds_1 = require("../../components/variables/varCmds");
//   command information  //
let SlashCommandsCommand = class SlashCommandsCommand extends seyfert_1.Command {
    async run(ctx) {
        const categories = ["Utility", "Tickets"];
        const container = new seyfert_1.Container()
            .setColor(varMain_1.embedColor);
        container.addComponents(new seyfert_1.TextDisplay().setContent("# Nagomi Slash Commands\n\n" +
            "Use these commands in this server."), new seyfert_1.Separator().setDivider(true));
        for (const category of categories) {
            const commands = varCmds_1.slashCommands.filter(command => command.category === category);
            const commandList = commands.map(command => {
                const permission = command.permissions
                    ? ` - *${command.permissions}*`
                    : "";
                return `\`${command.usage}\` — ${command.description}${permission}`;
            }).join("\n");
            container.addComponents(new seyfert_1.TextDisplay().setContent(`### ${category}\n${commandList}`));
        }
        await ctx.write({
            components: [container],
            flags: seyfert_1.MessageFlags.IsComponentsV2 | seyfert_1.MessageFlags.Ephemeral
        });
    }
};
SlashCommandsCommand = __decorate([
    (0, seyfert_1.Declare)({
        name: "commands",
        description: "View a list of every slash command."
    })
    //   command execution  //
], SlashCommandsCommand);
exports.default = SlashCommandsCommand;
