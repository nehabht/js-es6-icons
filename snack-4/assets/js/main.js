/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, 
una frase con il nome e cognome 
e l’indicazione se può guidare, in base all’età.
*/


const persone = [
    {
        nome: "Anthony",
        cognome: "Bridgerton",
        età: 30
    },
    {
        nome: "Eloise",
        cognome: "Bridgerton",
        età: 18
    },
    {
        nome: "Hyacinth",
        cognome: "Bridgerton",
        età: 11
    },
    {
        nome: "Penelope",
        cognome: "Featherington",
        età: 18
    },

];



console.log(persone.map(x => x.età))

let maggiorenni = []

let maggiorenne = persone.filter((person) => {
    if(person.età >= 18 ){
        maggiorenni.push(`${person.nome} può guidare`);
        return
    }
    // in array anche chi non può guidare
    maggiorenni.push (`${person.nome} non può guidare`)

})
console.log(maggiorenni)
