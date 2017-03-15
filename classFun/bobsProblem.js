function findTime(s){
years =  (s / 31557600)
months =  (((years % 1) * 31557600) / 2628000)
weeks = (((months % 1) * 2628000) / 604800)
days = (((weeks % 1) * 604800) / 86400)
hours = (((days % 1) * 86400) / 3600)
minutes = (((hours % 1) * 3600) / 60)
seconds =   ((minutes % 1) * 60)

return (years).toFixed(0) + " years " + (months).toFixed(0) + " months " + (weeks).toFixed(0) + " weeks " + (days).toFixed(0) + " days " + (hours).toFixed(0) + " hours " + (minutes).toFixed(0) + " minutes " + (seconds).toFixed(0) + " seconds."

}

console.log(findTime(1489595940))