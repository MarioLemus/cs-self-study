/*
* scape sequences for strings
*
*
* [x] \n: starts a new line
*
*
* [x] \t: adds a tab in the current line
*   - E.G: print hello world out there \t on console
*   - OUTPUT: print hello world out there   on console
*
*
* [x] \r: returns the line after this sequence
*   - E.G: print hello world out there \r on console
*   - OUTPUT:  on console
*
*
* [x] \": scape a unique quote in a string
*   - E.G: print hello world out there \" on console
*   - OUTPUT: print hello world out there " on console
*
*
* [x] \\: scape a slash, so can be added to the string
*   - E.G: print hello world out there \\ on console
*   - OUTPUT: print hello world out there \ on console
*
*
* [x] \b: deletes a character before the scape sequence
*   - E.G: print hello world out there\b on console
*   - OUTPUT: print hello world out ther on console
*
*
* [x] \f: works like "\v"
*   - E.G: print hello world out there \f on console
*   - OUTPUT: print hello world out there 
*                                          on console
*
*
* [x] \v: tab current line on other one, but without losing its previus position
*   - E.G: print hello world out there \v on console
*   - OUTPUT: print hello world out there 
*                                          on console
*
*/

console.log("print hello world out there \v on console")
console.log("print hello world out there \f on console")