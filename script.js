export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // falls es ein e ist nicht an Liste hängen
    }

    if (currentElement.toLowerCase() !== "e"){
      result.push(currentElement)
    }

    
   
  }
  return result.join("")
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
if (currentElement === "und" ) 
  return true}

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