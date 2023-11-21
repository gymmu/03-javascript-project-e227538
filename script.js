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
  result.push (currentElement.toUpperCase())
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
if (currentElement === "u" ) {
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

  let len = 0

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