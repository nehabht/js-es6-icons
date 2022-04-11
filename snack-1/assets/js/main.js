
const cars = [
    {
        marca: 'Jeep',
        modello: 'Renegade',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Audi',
        modello: 'Q2',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Toyota',
        modello: 'Rav',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Citroen',
        modello: 'Cactus',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Jeep',
        modello: 'Compass',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Jeep',
        modello: 'Cherokee',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Jeep',
        modello: 'Compass',
        alimentazione: 'GPL'
    },
    {
        marca: 'Fiat',
        modello: '500L',
        alimentazione: 'Diesel'
    },
    {
        marca: 'BMW',
        modello: 'Tourer',
        alimentazione: 'Metano'
    },
    {
        marca: 'Jeep',
        modello: 'Compass',
        alimentazione: 'Metano'
    },
    {
        marca: 'Jeep',
        modello: 'Gladiator',
        alimentazione: 'Diesel'
    },
]

// macchine a benzina
let carsBenzina = cars.filter(car => car.alimentazione === "Benzina");

console.log(carsBenzina)

//macchine a diesel
let carsDiesel = cars.filter(car => car.alimentazione === "Diesel");

console.log(carsDiesel)

//macchine ad altre alimentazioni
let carsAltre = cars.filter(car => car.alimentazione !== "Diesel" && car.alimentazione !== "Benzina");

console.log(carsAltre)
