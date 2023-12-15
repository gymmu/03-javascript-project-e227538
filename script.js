export function aufgabe01(args) {
  const input = args
  const result = []//leere Liste

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // falls es ein e ist nicht an Liste hängen
    }

    if (currentElement.toLowerCase() !== "e"){// !=nicht gleich richtig
      result.push(currentElement)//wenn e nicht vorkommt wird current element angehängt
    }

    
   
  }
  return result.join("")//leere Liste wird angefügt
  }



export function aufgabe02 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
  result.push (currentElement.toUpperCase())//kleinbuchstaben werden gross geschrieben
  }
  return result.join("")
}


export function aufgabe03 (args) {
  const input = args
  const result = [] // leere Liste wird erstellt
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {  // wenn es e findet
     count = count + 1   
    }

    else if (currentElement === "E") {
      count = count + 1
    }

    }
  return count//liest den Text angenehm (sonst alle Zeichen mit ; abgegrenzt)

  }

  export function aufgabe04 (args) {
    const input = args
    const result = []
    let count = 1 // damit Wort als 2 Wörter gezählt wird obwohl es nur 1 Leerschlag gibt.


    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if (currentElement === " ") {  //Wenn es in Anführungszeichen steht, ist es Name den ich selber gebe.
      count = count + 1}

    }

    return count// Zahl zurückgeben mit result.joint würde es resultat von Code (Text) zurückgeben
  }

export function aufgabe05 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === currentElement.toUpperCase()) {//wenn current Element=current Element in Grussbuchstaben
      return true //true zurückgeben
    }
  }


  return false//wenn es die vorherige Funktion nicht durchläuft(das heisst keine Grossbuchstaben) dann faslch zurückgeben
}



export function aufgabe06 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {//Eine Klammer um alles, damit überall (auch das if...) das input [i]=current Element
  const currentElement = input[i]//um zu sagen dass Text [i] (immer diese Bezeichnung aber Current Element einfacher) gleich Current Element ist
if (currentElement === "." ) //wenn einzelnes Zeichen in Anführungszeichen steht, dann vergleicht er dieses einzelne Zeichen mit allen anderen
  return true}


return false
}  



export function aufgabe07 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
if (currentElement === "u" ) {//mit 3 Gleichheitszeichen prüfen wir ob es "irgendetwas" ist. Mit einem Gleichheitszeichen würde man jedes Element mit "irgendetwas" ersetzten
  if(input [i+1]=== "n"){//gelesene Element
    if(input [i+2]=== "d") {
      return true
    }
  }
}

}
return false
}

export function aufgabe09 (args) {
  const input = args
  const result = []//es ist bleicher, das heisst ich verwende es nicht

  let len = 0//len ist Abkürzung für length

  for (let i = 0; i < input.length; i++) { //Funktion sagt wenn man durch den Text geht bzw. liest, dann len plus 1
    const currentElement = input[i]//würde es nicht mal brauchen
    len++//gleich wie len = len + 1
  }
  
  if (len === 6){
  return true
 }
 return false
 
}


export function aufgabe11 (args) {
  const input = args
  const result = []

  if (input.length > 1){//functionguard
    return null
  }
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     
    return currentElement.charCodeAt(0)//gibt askii Wert an
  }
  
  return null//wenn nicht durch funktion geht (über 1) wird null wiedergegeben
}


export function aufgabe12 (args) {
  const input = args
  const result = []
 for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (currentElement === "e"){
    return i //ist eine Zählvariable und braucht keine Anführungszeichen
  }
 }
  
  return -1
}

  
export function aufgabe13 (args) {
  const input = args
  const result = []
  for (let i = (input.length-1); i >= 0; i--) {//von hinten zählen (lenght-1), i grösser oder gleich 0 (bedingung)wenn erfüllt schleife läuft weiter, und dann muss es minus zählen nicht mehr plus (i--), wichtigste zeile, man hat eignetlich Zeile umgekehrt
    const currentElement = input[i]
  if (currentElement === "e"){
    return i
  }
  
  }

  return -1
}

export function aufgabe08 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {//wenn Element=e 
      result.push(3)//dann 3 zurückgeben
    }
    else {
      result.push(currentElement)//gelesene element das nicht e ist wird angefügt
    }
    
  }
  
  return result.join("")
}

export function aufgabe10 (args) {
  const input = args
  const result = [] //brauchts nicht, weil ich keine Zeichen zurückgebe

  if (input.length !== 7) return false//functionguard
  if(input[0] !== "#") return false//functionguard
  
  
for (let i = 1; i < input.length; i++) {//i= 1 weil das erste zeichen schon auf # überprüft wurde
  const currentElement = input[i]//damit man nicht immer input[i] schreiben muss
  const ascii = currentElement.charCodeAt(0)//was ist ascii= ascii gleich "Zahl", vorstellen wie Notitz ascii= zb.76

  if (48 <= ascii && ascii <= 57){//wenn in diesem Spektrum ist dann Zifffer
  }//leer weil dann lässt man es
  else if (65 <= ascii && ascii<= 70){//wenn in diesem Spektrum ist dann A-F
  }
  else {
    return false
  }
}

  return true
}

export function aufgabe14 (args) {
  const input = args
  let pos = -1
  let countE = 0
  for (let i = 0; i < input.length; i++) {//i=Position, 
    const currentElement = input[i]//Position von Element Namen vereinfachen
    if (currentElement === "e"){
    countE++//e zählen
  if (countE === 3){//wenn man auf 3 gezählt hat
    return i//Position von 3. e angeben
  }
}
  }


  return -1//wenn keine 3 e dann -1 so viel wie 1 vor dem Text=gibts nicht
}

export function aufgabe15 (args) {
  const input = args
  const result = []
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (currentElement === " "){
    return result.join("")
  }
  result.push(currentElement)
}
  return result.join("")
}

export function aufgabe16 (args) {

  const text = args
let switchFirst = true//sagt aus wir sind bei ersten Liste am lesen setzt schalter (switch) auf die erste liste
const listFirst = []
const listSecond = []
for (let i = 0; i < text.length; i++) {
 
  if (text[i] === "$") {
    switchFirst = false//hier wird wenn Zeichen $ gelesen wird, der Schalter umgeschaltet
  }

  if (switchFirst === true) {
    listFirst.push(text[i])//wenn kein Dollar vorhanden ist, einfach 1. Liste anhängen
  } else {
    listSecond.push(text[i])//wenn switchFirst === false dann die 2. Liste anhängen
  }
}
const result = [listFirst.join(""), listSecond.join("")]
  return result.join("")//schreibt schön hin (sonst wäre es H,A,L,L,O)
}

export function aufgabe17 (args) {

const text = args
const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === ',') {
    phrases.push(currentPhrase.join(""))//Wir speichern den aktuellen Satz als eine Element in phrases 
    currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen ',' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
phrases.push(currentPhrase.join(""))
return phrases
}

export function aufgabe18 (args) {

  const text = args
let switchFirst = true
const listFirst = []// Liste wird erstellt
const listSecond = []// 2. Liste für Alter 
for (let i = 0; i < text.length; i++) {
 
  if (text[i] === " ") {//wenn der bis jetzt gelesene Text " " enthaltet
    switchFirst = false//Schalter auf falsch, damit nächste liste anfängt
  } else {
   if (switchFirst === true) {
    listFirst.push(text[i])//am Schluss wenn beides in 2 verschiedene Listen gelesen wurden anhängen
  } else {
    listSecond.push(text[i])
  }
}
}
const name = listFirst.join("")//geschweifte würden abschliessen
const age = listSecond.join("")//wandelt aneinandergerehite Zeichen zu lesbarem Text

return "Sie heissen " + name + " und sind " + age + " Jahre alt"
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)//es wird einfach 2 mal an Liste gehängt
  }
  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === ".") {
      // prüfe ob nächste Zeichen Leerzeichen ist
      if (input[i + 1] === " ") {//i steht für Position
        // Code to execute if the next character is a space
      return true
      }
      else {return false}
    }
}
  
  return result.join("")
}

export function aufgabe21 (args) {
  const input = args
  const result = []
  
  for (let i = input.length -1; i >= 0 ; i--) {//wird von hinten zurückgegeben
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}





export function aufgabe24 (args) {
  const input = args
  const result = []
  
if (input.length === 1) return input //functionguard, wenn nur 1 Element in der Liste ist, wird einfach das einte Element zurückgegeben

  const firstElement = input [0]//erste und letzte Element auswählen 
  const lastElement = input [input.length - 1]

  result.push(lastElement)
    for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)//diese Schleife braucht man für die restlichen Elemente der Liste (um sie auch anzuhängen)
  }
  result.push(firstElement)

  return result.join("")
}


export function aufgabe27 (args) {
  const input = args
  const result = []

  if (input.length === 0) return false//functionguard damit falls es keine Elemente gibt falsch angegeben wird
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57) {
      result.push(currentElement)
    } else {return false
    }
  }
  return true
}

export function bubbleSort (args) {
const text = args
const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.

for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]//Element der Liste wird gelesen
  const nextElement = list[i + 1]//das nächste element wird definiert
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {//hier wird geprüft, ob erste element grösser als nachfolgendes ist
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]//plätze werden vertauscht
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde, immer -1 für vorne
  }
}
const result = list.join("")//angenehm geschrieben (in Text anstatt aneinandergerehite Zeichen)
return(result)
}


export function aufgabe22 (args) {
  const text = args

let switchFirst = true
const listFirst = []// Liste wird erstellt
const listSecond = []// 2. Liste erstellt
  for (let i = 0; i < text.length; i++) {
 
  if (text[i] === "k") {//wenn der bis jetzt gelesene Text "k" enthaltet
    switchFirst = false//Schalter auf falsch, damit nächste Liste anfängt
  } else {
   if (switchFirst === true) {
    listFirst.push("_")//wenn nicht auf falsch geswitched wird, wird jedes Element mit "_" ersetzt
  } else {
    listSecond.push(text[i])
  }
}
}
return listFirst.join("") + listSecond.join("")//geschweifte würden abschliessen
//wandelt aneinandergerehite Zeichen zu lesbarem Text, mit + verbunden um Text aneindergereiht anzuhängen

}