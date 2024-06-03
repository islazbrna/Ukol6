const justFood = (pocetLidi) => {
    return `Catering od Just Food byl dodan pro ${pocetLidi} lidi za ${Number(pocetLidi)*500} Kč`
  }
  
  const yourMama = (pocetLidi) => {
    return `Catering od Your Mama byl dodan pro ${pocetLidi} lidi za ${Number(pocetLidi)*1000} Kč`
  }

  const flavourHaven = (pocetLidi) => {
    return `Catering od Flavour Haven byl dodan pro ${pocetLidi} lidi za ${Number(pocetLidi)*5000} Kč`
  }

const createEvent = (nazevUdalosti, catering, pocetLidi) => {
  if (catering == justFood) {
  return `Událost ${nazevUdalosti} s ${justFood(pocetLidi)} `
}
else if (catering == yourMama) {
  return `Událost ${nazevUdalosti} s ${yourMama(pocetLidi)} `
}  
else if (catering == flavourHaven) {
 return `Událost ${nazevUdalosti} s ${flavourHaven(pocetLidi)} `
}}

console.log(createEvent('inaugurace prezidenta', flavourHaven, 10))