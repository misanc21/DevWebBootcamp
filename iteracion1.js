let hacker1 = "Denisse"
console.log("The driver's name is " + hacker1)
let hacker2 = "JUan"
console.log("The navigator's name is " + hacker2)


if (hacker1.length > hacker2.length)
    console.log("the driver has the longest name, it has " + hacker1.length + " characters")
else if (hacker2.length > hacker1.length)
    console.log("it seems that the navigator has the longest name, it has " + hacker2.length + " characters")
else
    console.log("wow, you both have equally longname, " + hacker1.length + " characteres")

arrh = hacker1.split("")
let strh = ''
arrh.map(e => {
    strh += e.toUpperCase() + ' '
})

console.log(strh)

console.log(hacker2.split("").reverse().join(""))

if (hacker1.localeCompare(hacker2) < 0)
    console.log('the drivers name goes first')
else if (hacker2.localeCompare(hacker1) < 0)
    console.log('Yo, the navigator name goes first definitely.')
else if (hacker2.localeCompare(hacker1) === 0)
    console.log('what? you both have the same name')