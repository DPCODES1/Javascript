const ids = new Set([1,2,3,1,4])
console.log(ids.entries())
for(const entry of ids.entries()) {
    console.log(entry)
}

const map = new Map([["Hello","All"],["name","Deepak"]])
console.log(map.set("greet","Vanakam"))

//weakmap

const weakmap = new WeakMap([["Hello","All"]])
const weakset = new WeakSet([1,2,3])
