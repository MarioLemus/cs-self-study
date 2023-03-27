/*
* how to do debugging in vscode
* 
* 1 - use TS DEBUG (this will create a debug config file) 
* 2 - .vscode and node_modules should be on your project's root
* 3 - click on vscode run and debug
* 4 - install -> npm install ts-node --save-dev
* 5 - that's it!!
*
* suggestion:
* 
* create temp variables for those values you are testing,
* so they can be displayed in the debug section 
*/

let fruits: string[] | null = ['apple', 'peach', 'banana', 'cherries', 'avocado', 'orange', 'grapes']

for (let i = 0; i < 7; i++) {
    const a = fruits[i]
}

fruits = null