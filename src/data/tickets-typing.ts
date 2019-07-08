// Generated by https://quicktype.io and changed by me :)

export interface ISERVER_Tickets {
    tickets: ISERVER_Ticket[];
}

export interface ISERVER_Ticket {
    origin:           string;
    origin_name:      string;
    destination:      string;
    destination_name: string;
    departure_date:   string;
    departure_time:   string;
    arrival_date:     string;
    arrival_time:     string;
    carrier:          string;
    stops:            number;
    price:            number;
}