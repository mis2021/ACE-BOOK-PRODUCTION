import { TicketVarType } from "@/types/tickets/ticketType";

export const TICKET_TYPE: TicketVarType[] = [
    { name: "Equipment Maintenance", code: "EquipmentMaintenance" },
    { name: "CCTV Review", code: "CCTVReview" },
    { name: "HIS Client Concern", code: "HISClientConcern" },
    { name: "HIS Development Request", code: "HISDevelopmentRequest" },
]

export const TICKET_STATUS: TicketVarType[] = [
    { name: "Draft", code: "draft", color: "#eeeeee", textColor: "#bcbcbc" },
    { name: "Returned", code: "returned", color: "#f1c232", textColor: "#7f6000" },
    { name: "Pending", code: "pending", color: "#b6d7a8", textColor: "#6aa84f" },
    { name: "Approved", code: "approved", color: "#38761d", textColor: "#ffffff" },
    { name: "Disapproved", code: "disapproved", color: "#cc0000", textColor: "#ffffff" },
    { name: "Working", code: "working", color: "#cd5400", textColor: "#ffffff" },
    { name: "Completed", code: "completed", color: "#effffe", textColor: "#9fc5e8" },
]


export const ticketTypeIdentifier = (code: string, type: string) => {
    let ticket = TICKET_TYPE.filter((item: TicketVarType) => {
        return item.code === code
    })
    console.log("ticket type", ticket)
    switch (type) {
        case "name":
            return ticket[0].name
            break;
        case "object":
            return ticket[0]
            break;
        default:
            break;
    }

    return ''

    // return ticket[0].name
}

export const ticketStatusIdentifier = (code: string, type: string) => {
    let ticket = TICKET_STATUS.filter((item: TicketVarType) => {
        return item.code === code
    })

    switch (type) {
        case "name":
            return ticket[0].name
            break;
        case "color":
            return ticket[0].color
            break;
        case "textColor":
            return ticket[0].textColor
            break;
        case "object":
            return ticket[0]
            break;
        default:
            break;
    }

}