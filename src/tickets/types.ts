import { TextInputStyle } from "seyfert";

export const ticketTypeLabels = {
    apply: "Apply",
    report: "Report",
    help: "Help"
} as const;

export const STAFF_ROLE_ID = "1573628588349980764";

export type TicketType = keyof typeof ticketTypeLabels;

export const ticketQuestions = {
    apply: [
        {
            id: "ticket:role",
            label: "What role are you applying for?",
            placeholder: "Mod, Support, Positivity, Partner Manager",
            style: TextInputStyle.Short,
            maxLength: 100
        },
        {
            id: "ticket:reason",
            label: "Why are you applying for this position?",
            placeholder: "I want to be staff because...",
            style: TextInputStyle.Paragraph,
            maxLength: 1500
        },
        {
            id: "ticket:experience",
            label: "What prior experience do you have?",
            placeholder: "List any prior experience you have had being staff.",
            style: TextInputStyle.Paragraph,
            maxLength: 1500
        },
        {
            id: "ticket:availability",
            label: "How active are you in Nagomi?",
            placeholder: "Please state how many times a day/week/month you are active.",
            style: TextInputStyle.Paragraph,
            maxLength: 1000
        }
    ],
    report: [
        {
            id: "ticket:reason",
            label: "What happened?",
            placeholder: "Describe what happened.",
            style: TextInputStyle.Paragraph,
            maxLength: 1000
        },
        {
            id: "ticket:reported-user-id",
            label: "Discord user ID of the person being reported",
            placeholder: "Enter the user's Discord ID.",
            style: TextInputStyle.Short,
            maxLength: 20
        }
    ],
    help: [
        {
            id: "ticket:reason",
            label: "What do you need help with?",
            placeholder: "Describe what you need help with.",
            style: TextInputStyle.Paragraph,
            maxLength: 1000
        }
    ]
} as const;

export function isTicketType(value: string): value is TicketType {
    return Object.prototype.hasOwnProperty.call(ticketTypeLabels, value);
}
