"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketQuestions = exports.STAFF_ROLE_ID = exports.ticketTypeLabels = void 0;
exports.isTicketType = isTicketType;
const seyfert_1 = require("seyfert");
exports.ticketTypeLabels = {
    apply: "Apply",
    report: "Report",
    partner: "Partner",
    help: "Help"
};
exports.STAFF_ROLE_ID = "1573628588349980764";
exports.ticketQuestions = {
    apply: [
        {
            id: "ticket:role",
            label: "What role are you applying for?",
            placeholder: "Mod, Support, Positivity, Partner Manager",
            style: seyfert_1.TextInputStyle.Short,
            maxLength: 100
        },
        {
            id: "ticket:reason",
            label: "Why are you applying for this position?",
            placeholder: "I want to be staff because...",
            style: seyfert_1.TextInputStyle.Paragraph,
            maxLength: 1500
        },
        {
            id: "ticket:experience",
            label: "What prior experience do you have?",
            placeholder: "List any prior experience you have had being staff.",
            style: seyfert_1.TextInputStyle.Paragraph,
            maxLength: 1500
        },
        {
            id: "ticket:availability",
            label: "How active are you in Nagomi?",
            placeholder: "Please state how many times a day/week/month you are active.",
            style: seyfert_1.TextInputStyle.Paragraph,
            maxLength: 1000
        }
    ],
    report: [
        {
            id: "ticket:reason",
            label: "What happened?",
            placeholder: "Describe what happened.",
            style: seyfert_1.TextInputStyle.Paragraph,
            maxLength: 1000
        },
        {
            id: "ticket:reported-user-id",
            label: "Discord user ID of the person being reported",
            placeholder: "Enter the user's Discord ID.",
            style: seyfert_1.TextInputStyle.Short,
            maxLength: 20
        }
    ],
    partner: [
        {
            id: "ticket:member-count",
            label: "Does your server have 100+ human members?",
            placeholder: "Yes, No, Unsure",
            style: seyfert_1.TextInputStyle.Short,
            maxLength: 20
        },
        {
            id: "ticket:sfw",
            label: "Is your server SFW?",
            placeholder: "Yes, No, Unsure",
            style: seyfert_1.TextInputStyle.Short,
            maxLength: 20
        },
        {
            id: "ticket:nontoxic",
            label: "Is your server non-toxic?",
            placeholder: "Yes, No, Unsure",
            style: seyfert_1.TextInputStyle.Short,
            maxLength: 20
        }
    ],
    help: [
        {
            id: "ticket:reason",
            label: "What do you need help with?",
            placeholder: "Describe what you need help with.",
            style: seyfert_1.TextInputStyle.Paragraph,
            maxLength: 1000
        }
    ]
};
function isTicketType(value) {
    return Object.prototype.hasOwnProperty.call(exports.ticketTypeLabels, value);
}
