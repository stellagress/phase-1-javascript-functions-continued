// code your solution here

function saturdayFun(activity = "roller-skate"){
    const phrase = "This Saturday, I want to" 
    return `${phrase} ${activity}!`
}

function mondayWork(activity = "go to the office"){
    const phrase = "This Monday, I will"
    return `${phrase} ${activity}.`
}

function wrapAdjective(calling) {
    return function(adjective = "special"){
        return `You are ${calling}${adjective}${calling}!`


    }

}













