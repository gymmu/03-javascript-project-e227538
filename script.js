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
  let count = 0
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
}

if (currentElement === "special Character"){//den Text geb ich selber
  count =  count + 1
}


if (count = count + 1) {
  result.push(false)
}  





  return result.join("")
}
