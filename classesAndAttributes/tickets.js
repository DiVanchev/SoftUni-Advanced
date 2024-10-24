class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
    }
}

function manageTickets(ticketDescriptions, sortingCriterion) {
    const tickets = ticketDescriptions.map(description => {
        const [destination, price, status] = description.split('|');
        return new Ticket(destination, price, status);
    });

    return tickets.sort((a, b) => {
        if (sortingCriterion === 'price') {
            return a.price - b.price;
        }
        return a[sortingCriterion].localeCompare(b[sortingCriterion]);
    });
}


let tickets = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

let sortedByDestination = manageTickets(tickets, 'destination');
console.log(sortedByDestination);

let sortedByPrice = manageTickets(tickets, 'price');
console.log(sortedByPrice);

let sortedByStatus = manageTickets(tickets, 'status');
console.log(sortedByStatus);
