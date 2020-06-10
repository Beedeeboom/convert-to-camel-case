function toCamelCase(str) { 
    let array = str.split("")
    array.forEach((character, index) => {
        if (character == "-" || character == "_"){
            array.splice(index, 1)
            array[index] = array[index].toUpperCase()
        }
    })
    return array.join("")
}

console.log(toCamelCase("foo-bar"))
// iterate through string 
// delete - charaters
// capitalize next letter