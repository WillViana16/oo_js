// Base Class
function Videogame(marca, modelo, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
};

Videogame.prototype.displayInfo = function() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Valor: ${this.valor}`);
};

// Classe Playstation que herda de Videogame
function Playstation(marca, modelo, valor) {
    Videogame.call(this, marca, modelo, valor);
    
}

Playstation.prototype = Object.create(Videogame.prototype);
Playstation.prototype.constructor = Playstation;

Playstation.prototype.displayInfo = function() {
    Videogame.prototype.displayInfo.call(this);
    
};

// Classe XBOX que herda de Videogame
function Xbox(marca, modelo, valor) {
    Videogame.call(this, marca, modelo, valor);
    
}

Xbox.prototype = Object.create(Videogame.prototype);
Xbox.prototype.constructor = Xbox;

Xbox.prototype.displayInfo = function() {
    Videogame.prototype.displayInfo.call(this);
    
};

// Instanciando objetos
const ps5 = new Playstation('Sony', 'Playstation 5', 4000);
const ps4 = new Playstation('Sony', 'Playstation 4', 2000);
const xbox = new Xbox('Microsoft', 'Series X', 3500);

// Exibindo informações
ps5.displayInfo();
ps4.displayInfo();
xbox.displayInfo();