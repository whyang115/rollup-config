import path from "path"
import Test from "./test"
import info from "../package.json"

const test = new Test()

console.log(info)
console.log(path)
console.log(test())