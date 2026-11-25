"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slashCommands = void 0;
exports.slashCommands = [
    {
        name: "help",
        description: "Get a general guide for Nagomi.",
        category: "Utility",
        usage: "/help"
    },
    {
        name: "commands",
        description: "View a list of every slash command.",
        category: "Utility",
        usage: "/commands"
    },
    {
        name: "bug-report",
        description: "Report a bug to the head developer.",
        category: "Utility",
        usage: "/bug-report <bug>"
    },
    {
        name: "panel",
        description: "Create the support ticket panel.",
        category: "Tickets",
        usage: "/panel",
        permissions: "Administrator"
    },
    {
        name: "close",
        description: "Close the current ticket.",
        category: "Tickets",
        usage: "/close",
        permissions: "Staff, Apply admin, or Administrator"
    }
];
