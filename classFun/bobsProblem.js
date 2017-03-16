


function findTime(s){
// years =  (s / 31557600)
// months =  (((years % 1) * 31557600) / 2628000)
 var display = false;

var days = s % 604800;
weeks = (s / 604800).toFixed(0);

var hours = days % 86400;
days = (days / 86400).toFixed(0);

var minutes = hours % 3600;
hours = (hours / 3600).toFixed(0);

var seconds = minutes % 60;
minutes = (minutes / 60).toFixed(0);


if(weeks != 0){ 
    display = true;
    weeks +=  " week" + (weeks == 1 ? "" : "s") + ", ";
}else{
    weeks = "";
}

if (display || days != 0){
    display = true;
    days +=  " day" + (days == 1 ? "" : "s") + ", ";
}else{
    days = "";
}

if (display || hours != 0){
    display = true;
    hours +=  " hour" + (hours == 1 ? "" : "s") + ", ";
}else{
    hours = "";
}

if (display || minutes != 0){
    display = true;
  minutes +=  " minute" + (minutes == 1 ? "" : "s") + " and ";
}else{
    minutes = "";
}

seconds +=  " second" + (seconds == 1 ? "" : "s");

return  weeks + days + hours + minutes + seconds
//+ (days).toFixed(0) + " days, " + (hours).toFixed(0) + " hours, " + (minutes).toFixed(0) + " minutes and " + (seconds).toFixed(0) + " seconds"

}

console.log(findTime(new Date().getTime()));


// if only 1 min 15 secs remove everything else weeks,, days, etc..
//carriage return line feed (is a new line.) \r \n
// weeks = weeks + 1



function findTime(s){

weeks = ( s / 604800)
days = (((weeks % 1) * 604800) / 86400)
hours = (((days % 1) * 86400) / 3600)
minutes = (((hours % 1) * 3600) / 60)
seconds =   ((minutes % 1) * 60)

return (weeks).toFixed(0) + " weeks " + (days).toFixed(0) + " days " + (hours).toFixed(0) + " hours " + (minutes).toFixed(0) + " minutes " + (seconds).toFixed(0) + " seconds."

}

console.log(findTime(604875))
