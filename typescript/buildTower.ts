
// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
export const towerBuilder = (nFloors: number): string[] => {
  return Array.from({length: nFloors}, (_, i) => `${" ".repeat(nFloors - i - 1)}${"*".repeat(2 * i + 1)}${" ".repeat(nFloors - i - 1)}`)
}