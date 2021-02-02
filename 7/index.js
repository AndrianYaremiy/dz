const City = function (name, mista, quantity, materuk) { 
    this.name = name;
    this.mista = mista;
    this.quantity = quantity;
    this.materuk = materuk;

    this.SayQuantity = function () {
        console.log("in this city live" + " " + this.quantity + " " + "people");
    };
};


const london = new City("London", 250, 22226, "europa");
const lviv = new City ("Lviv", 300, 23423536, "europa");
const odessa = new City("Odessa", 56, 556, "eurupa");

london.SayQuantity();
lviv.SayQuantity();
odessa.SayQuantity();