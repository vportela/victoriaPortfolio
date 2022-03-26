const name = "lucas"
console.log("hello my name is: ", name)

const rootElement = document.getElementById("root")
console.log("rootElement ", rootElement)

const divElement = document.createElement("div")
divElement.innerHTML = "this is the inner element!!"
rootElement.appendChild(divElement)

const divTags = document.getElementsByTagName("div")
console.log("divTags", divTags)