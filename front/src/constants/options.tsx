import { TicketVarType } from "@/types/tickets/ticketType";

export const TICKET_TYPE : TicketVarType[]= [
    {name: "Equipment Maintenance", code: "EquipmentMaintenance"},
    {name: "CCTV Review", code: "CCTVReview"},
    {name: "HIS Client Concern", code: "HISClientConcern"},
    {name: "HIS Development Request", code: "HISDevelopmentRequest"},
]

export const TICKET_STATUS : TicketVarType[]= [
    {name: "Draft", code: "draft"},
    {name: "Returned", code: "returned"},
    {name: "Pending", code: "pending"},
    {name: "Approved", code: "approved"},
    {name: "Disapproved", code: "disapproved"},
    {name: "Working", code: "working"},
    {name: "Completed", code: "completed"},
]


export const ticketTypeIdentifier=(type : string)=>{
    let ticket = TICKET_TYPE.filter((item:TicketVarType)=>{
        return item.code === type 
    })

    return ticket[0].name
}

export const ticketStatusIdentifier=(type : string)=>{
    let ticket = TICKET_STATUS.filter((item:TicketVarType)=>{
        return item.code === type 
    })

    return ticket[0].name
}