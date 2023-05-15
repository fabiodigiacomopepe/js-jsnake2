/* RICHIESTA
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà:
marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel,
nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const automobili = [
    {
        "marca": "Fiat",
        "modello": "Uno",
        "alimentazione": "benzina"
    },
    {
        "marca": "Lancia",
        "modello": "Delta",
        "alimentazione": "benzina"
    },
    {
        "marca": "Renault",
        "modello": "Clio",
        "alimentazione": "diesel"
    },
    {
        "marca": "Fiat",
        "modello": "500",
        "alimentazione": "elettrico"
    },
    {
        "marca": "Audi",
        "modello": "A4",
        "alimentazione": "metano"
    },
    {
        "marca": "Lancia",
        "modello": "Ypsilon",
        "alimentazione": "gpl"
    },
    {
        "marca": "Ferrari",
        "modello": "LaFerrari",
        "alimentazione": "benzina"
    },
    {
        "marca": "Mercedes",
        "modello": "EQA",
        "alimentazione": "elettrico"
    },
    {
        "marca": "Peugeot",
        "modello": "106",
        "alimentazione": "gpl"
    },
    {
        "marca": "Fiat",
        "modello": "123",
        "alimentazione": "benzina"
    }
];

const autoBenzina = automobili.filter(automobili => automobili.alimentazione === "benzina");
console.log(autoBenzina);

const autoDiesel = automobili.filter(automobili => automobili.alimentazione === "diesel");
console.log(autoDiesel);

const restoAuto = automobili.filter(automobili => (automobili.alimentazione !== "benzina") && (automobili.alimentazione !== "diesel"));
console.log(restoAuto);