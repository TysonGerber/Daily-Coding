function findTime(s){
years =  (s / 31104000)
months =  (((years % 1) * 3110400) / 2592000)
weeks = (((months % 1) * 2592000) / 604800)
days = (((weeks % 1) * 604800) / 86400)
hours = (((days % 1) * 86400) / 3600)
minutes = (((hours % 1) * 3600) / 60)
seconds =   ((minutes % 1) * 60)

return (years).toFixed(0) + " years " + (months).toFixed(0) + " months " + (weeks).toFixed(0) + " weeks " + (days).toFixed(0) + " days " + (hours).toFixed(0) + " hours " + (minutes).toFixed(0) + " minutes " + (seconds).toFixed(0) + " seconds."

}

console.log(findTime(3110400))




num = [1,2,3,4,5]

total = []
function numbers(times2){
    for(var i = 0; i < times2.length; i++){
        console.log(times2)
        total.push(times2[i] * 2)
    }
return total
}

numbers(num)

numbers = [10,12,15,18,34,57]

function reverse(numArray){
    for(var i = numArray.length-1; i >= 0 ; i--){
        console.log(numArray[i])
    }
}
reverse(numbers)