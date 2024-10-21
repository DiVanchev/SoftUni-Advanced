class Hotel {
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
        this.roomAvailability = {};
        this.supplyStock = {};
    }

    restockSupplies(supplies) {
        let messages = [];
        for (let supply of supplies) {
            let [supplyName, supplyQuantity, supplyTotalPrice] = supply.split(" ");
            supplyQuantity = Number(supplyQuantity);
            supplyTotalPrice = Number(supplyTotalPrice);

            if (supplyTotalPrice <= this.initialBudget) {
                this.initialBudget -= supplyTotalPrice;
                if (this.supplyStock[supplyName]) {
                    this.supplyStock[supplyName] += supplyQuantity;
                } else {
                    this.supplyStock[supplyName] = supplyQuantity;
                }
                messages.push(`Successfully stocked ${supplyQuantity} ${supplyName}`);
            } else {
                messages.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`);
            }
        }
        return messages.join("\n");
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (this.roomAvailability[roomType]) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }
        this.roomAvailability[roomType] = {
            neededSupplies: neededSupplies.map(s => {
                let [name, quantity] = s.split(" ");
                return { name, quantity: Number(quantity) };
            }),
            pricePerNight: pricePerNight
        };
        return `Great idea! Now with the ${roomType}, we have ${Object.keys(this.roomAvailability).length} types of rooms available, any other ideas?`;
    }

    showAvailableRooms() {
        const rooms = Object.entries(this.roomAvailability)
            .map(([roomType, { pricePerNight }]) => `${roomType} - $ ${pricePerNight}`)
            .join("\n");
        return rooms || "Our rooms are not ready yet, please come back later...";
    }

    bookRoom(roomType) {
        if (!this.roomAvailability[roomType]) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }
        const { neededSupplies, pricePerNight } = this.roomAvailability[roomType];
        for (let { name, quantity } of neededSupplies) {
            if (!this.supplyStock[name] || this.supplyStock[name] < quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }
        return `Your booking for ${roomType} has been confirmed! The price is $${pricePerNight} per night.`;
    }
}

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());


