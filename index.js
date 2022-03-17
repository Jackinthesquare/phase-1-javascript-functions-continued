// code your solution here
const saturdayFun = (activity = "roller-skate") => {
        return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}


const wrapAdjective = function(para1 = "*"){
    const innerFunction = function (para2 = "special"){
        return `You are ${para2}`
    }
    return innerFunction();
}