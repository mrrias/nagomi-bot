import {
    Declare,
    Command,
    Container,
    TextDisplay,
    Separator,
    MessageFlags,
    type CommandContext
} from "seyfert";
import { slashCommands } from "../../components/variables/varCmds";



//   command information  //

@Declare({
    name: "commands",
    description: "View a list of every slash command."
})



//   command execution  //

export default class SlashCommandsCommand extends Command {
    async run(ctx: CommandContext) {
        const categories = ["Utility", "Tickets"] as const;
        const container = new Container()
            .setColor(0xff99e9);

        container.addComponents(
            new TextDisplay().setContent(
                "# Nagomi Slash Commands\n\n" +
                "Use these commands in this server."
            ),
            new Separator().setDivider(true)
        );

        for (const category of categories) {
            const commands = slashCommands.filter(command => command.category === category);
            const commandList = commands.map(command => {
                const permission = command.permissions
                    ? ` - *${command.permissions}*`
                    : "";

                return `\`${command.usage}\` — ${command.description}${permission}`;
            }).join("\n");

            container.addComponents(
                new TextDisplay().setContent(`### ${category}\n${commandList}`)
            );
        }

        await ctx.write({
            components: [container],
            flags: MessageFlags.IsComponentsV2 | MessageFlags.Ephemeral
        });
    }
}
