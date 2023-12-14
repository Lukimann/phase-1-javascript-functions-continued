// code your solution here
function saturdayFun(swimming) {
    let activity = swimming || "roller-skate";
    return ("This Saturday, I want to " + activity + "!")
} 
//to default custom activity i set it as a parameter in our function, then add it as a second option in variable activity//

function mondayWork(sleeping) {
    let activity = sleeping || "go to the office";
    return ("This Monday, I will " + activity + ".")
}

let wrapAdjective = function(sign="||") {
    return function(adjective="a programmer") {
        return`You are ${sign}${adjective}${sign}!`;
    }
}
