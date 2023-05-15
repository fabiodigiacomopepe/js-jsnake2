/* RICHIESTA
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const listaPersone = [
    {
        "nome": "Carola",
        "cognome": "Rossi",
        "età": "22"
    },
    {
        "nome": "Marco",
        "cognome": "Gucci",
        "età": "17"
    },
    {
        "nome": "Luca",
        "cognome": "Gallo",
        "età": "20"
    },
    {
        "nome": "Dario",
        "cognome": "Ricci",
        "età": "15"
    },
    {
        "nome": "Pietro",
        "cognome": "Moro",
        "età": "12"
    }
    
];

const checkEtaGuidare = listaPersone.map((persona) => {
    if (persona.età >= "18") {
        return persona.nome + " " + persona.cognome + " può guidare perchè ha più di 18 anni";
      } else {
        return persona.nome + " " + persona.cognome + " NON può guidare perchè ha meno di 18 anni";
      }
});

console.log(checkEtaGuidare);