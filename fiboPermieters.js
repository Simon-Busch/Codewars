// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

function perimeter(n) {
  var a = 1, b = 0, temp, total = 0, fiboArray = [];
  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    fiboArray.push(b)
    n--;
  }
  
  fiboArray.forEach(el => total += el);
  return(4*total)
}