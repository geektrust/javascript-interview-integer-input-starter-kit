
/*
* This is the main entry point for the program. It will parse the input for you.
* You don't need to change this.
*/
function main() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        throw new Error("No argument passed")
    }
    handle(parseInt(input[0]))
}


/*
 * Use this method to write your solution. 
 */
function handle(input) {
    console.log(input)
    //TODO: implement the logic to handle each input
}

main()