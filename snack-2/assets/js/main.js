//A partire da un array di stringhe, crea un secondo array formattando 
//le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
//Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke']

const bridgertons = ["anthony", "BENEDICT", "coLiN", "daPhne", "ELOIse",]


function capitalBridgies(lista) {
    return lista.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
}


console.log(capitalBridgies(bridgertons))