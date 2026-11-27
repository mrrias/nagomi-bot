import {
    Declare,
    Command,
    type CommandContext,
    TextDisplay,
    Container,
    Separator,
    MessageFlags
} from "seyfert";
import { embedColor } from "../../components/variables/varMain";



//   command information  //

const guideContainer = new Container()
.setColor(embedColor)
.addComponents(
    new TextDisplay().setContent(
        "# Welcome to the Nagomi!\n\n" +
        "Here is everything you need to know to get started and navigate your way around."
    ),
    new Separator().setDivider(true),
    new TextDisplay().setContent(
        "### Useful Channels\n" +
        "* https://discord.com/channels/1376928479160963083/1551550700373278801 \n" +
        "* https://discord.com/channels/1376928479160963083/1379535229278097661 \n" +
        "* https://discord.com/channels/1376928479160963083/1376928550371725422 \n" +
        "* https://discord.com/channels/1376928479160963083/1461377727994138664 \n" +
        "* https://discord.com/channels/1376928479160963083/1574987129887400026"
    ),
    new Separator().setDivider(true),
    new TextDisplay().setContent(
        "### Useful Bot Commands \n" +
        "* `/help` brings up a general guide. \n" +
        "* `/commands` brings up a list of all slash commands. \n" +
        "* `/bug-report` notifies developers if you have found a bug in the bot.\n"
    ),
    new Separator().setDivider(true),
    new TextDisplay().setContent(
        "### Links \n" +
        "* [**Server Website**](https://mrrias.github.io/nagomi/) \n" +
        "* [**Github Repo**](https://github.com/mrrias/nagomi-bot) \n" + 
        "* [**Head Developer**](https://github.com/mrrias) \n"  
    )
);

@Declare({
    name: "help",
    description: "Get a general guide for Prism."
})



//   command execution  //

export default class ServerGuideCommand extends Command {
    async run(ctx: CommandContext) {

        await ctx.write({
            components: [guideContainer], 
            flags: MessageFlags.IsComponentsV2 | MessageFlags.Ephemeral
        })
    }
}