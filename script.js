const pocetLidi = 200

const justFood = (pocetLidi) => {
    return `Catering od Just Food byl dodan pro ${pocetLidi} lidi za ${Number(pocetLidi)*500} Kč`
  }
  
  const yourMama = (pocetLidi) => {
    return `Catering od Your Mama byl dodan pro ${pocetLidi} lidi za ${Number(pocetLidi)*1000} Kč`
  }

  const flavourHaven = (pocetLidi) => {
    return `Catering od Flavour Haven byl dodan pro ${pocetLidi} lidi za ${Number(pocetLidi)*5000} Kč`
  }

  const createEvent = (nazevUdalosti, catering) => {
    return `Událost ${nazevUdalosti} s ${catering}`
  }


console.log(justFood(pocetLidi))
console.log(yourMama(pocetLidi))
console.log(flavourHaven(pocetLidi))

console.log(createEvent('inaugurace prezidenta', yourMama(pocetLidi)))