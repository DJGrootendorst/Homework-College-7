// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

function countCumLaude(grades) {
    //initieer een teller voor cum laude studenten
    let cumLaudeCount = 0;

    //itereer door de array
    for (let i = 0; i < grades.length; i++) {
        //controleer of het cijfer cum laude is
        if (grades[i] >= 8) {
            //verhoog de teller
            cumLaudeCount++;
        }
    }

    //retourneer of log het resultaat
    return cumLaudeCount;
}

//test de functie
const result = countCumLaude(grades);
console.log(`Aantal studenten cum laude: ${result}`); // Verwacht: 6

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(grades) {
    //initieer een teller coor cum Laude studenten
    let cumLaudeCount = 0;
    // Itereer door de array
    for (let i = 0; i < grades.length; i++) {
        // Controleer of het cijfer cum laude is
        if (grades[i] >= 8) {
            // Verhoog de teller
            cumLaudeCount++;
        }
    }

    // Retourneer het totaal aantal cum laude studenten
    return cumLaudeCount;
}

// ---- Test cases ----
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
console.log(cumLaude(grades)); // Verwacht: 6
console.log(cumLaude([6, 4, 5])); // Verwacht: 0
console.log(cumLaude([8, 9, 4, 6, 10])); // Verwacht: 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143
function calculateAverage(grades) {
    // Initieer een variabele voor de som van de cijfers
    let total = 0;

    // Itereer door de array en tel alle cijfers op
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    // Bereken het gemiddelde
    const average = total / grades.length;

    // Retourneer het gemiddelde
    return average;
}

// ---- Test de functie ----
const average = calculateAverage(grades);
console.log(`Het gemiddelde eindcijfer is: ${average}`); // Verwacht: 6.642857142857143

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4
function averageGrade(grades) {
    // Controleer of de array niet leeg is om deling door nul te voorkomen
    if (grades.length === 0) {
        return 0; // Geen cijfers, gemiddeld is 0
    }

    // Initieer een variabele voor de som van de cijfers
    let total = 0;

    // Itereer door de array en tel alle cijfers op
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    // Bereken het gemiddelde
    const average = total / grades.length;

    // Retourneer het gemiddelde
    return average;
}

// ---- Test cases ----
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
console.log(averageGrade(grades)); // Verwacht: 6.642857142857143
console.log(averageGrade([6, 4, 5])); // Verwacht: 5
console.log(averageGrade([8, 9, 4, 6, 10])); // Verwacht: 7.4

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
function averageGrade(grades) {
    // Controleer of de array niet leeg is om deling door nul te voorkomen
    if (grades.length === 0) {
        return 0; // Geen cijfers, gemiddeld is 0
    }

    // Initieer een variabele voor de som van de cijfers
    let total = 0;

    // Itereer door de array en tel alle cijfers op
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    // Bereken het gemiddelde
    const average = total / grades.length;

    // Rond het gemiddelde af op twee decimalen en retourneer het
    return parseFloat(average.toFixed(2));
}

// ---- Test cases ----
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
console.log(averageGrade(grades)); // Verwacht: 6.64
console.log(averageGrade([6, 4, 5])); // Verwacht: 5.00
console.log(averageGrade([8, 9, 4, 6, 10])); // Verwacht: 7.40


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
