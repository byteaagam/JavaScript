//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aagam",
    "full name": "Aagam Jain",
    [mySym]: "mykey1",
    age:20,
    location: "Jaipur",
    email:"aagam@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "aagam@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "aagam@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")

}
console.log(JsUser.greeting())
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
