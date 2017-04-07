function findTime(s) {
    years = (s / 31104000)
    months = (((years % 1) * 3110400) / 2592000)
    weeks = (((months % 1) * 2592000) / 604800)
    days = (((weeks % 1) * 604800) / 86400)
    hours = (((days % 1) * 86400) / 3600)
    minutes = (((hours % 1) * 3600) / 60)
    seconds = ((minutes % 1) * 60)

    return (years).toFixed(0) + " years " + (months).toFixed(0) + " months " + (weeks).toFixed(0) + " weeks " + (days).toFixed(0) + " days " + (hours).toFixed(0) + " hours " + (minutes).toFixed(0) + " minutes " + (seconds).toFixed(0) + " seconds."

}

console.log(findTime(3110400))




num = [1, 2, 3, 4, 5]

total = []
function numbers(times2) {
    for (var i = 0; i < times2.length; i++) {
        console.log(times2)
        total.push(times2[i] * 2)
    }
    return total
}

numbers(num)

numbers = [10, 12, 15, 18, 34, 57]

function reverse(numArray) {
    for (var i = numArray.length - 1; i >= 0; i--) {
        console.log(numArray[i])
    }
}
reverse(numbers)




function tripletSum(x, a) {

    for (var i = 0; i < a.length - 2; i++)
        console.log((a[i] + a[i + 1] + a[i + 2]))
    if ((a[i] + a[i + 1] + a[i + 2]) == x) {

        return true
    }
    return false
}
console.log(tripletSum(165, [142, 712, 254, 869, 548, 645, 663, 758, 38, 860, 724, 742, 530, 779, 317, 36, 191, 843, 289, 107, 41, 943, 265, 649, 447, 806, 891, 730, 371, 351, 7, 102, 394, 549, 630, 624, 85, 955, 757, 841, 967, 377, 932, 309, 945, 440, 627, 324, 538, 539, 119, 83, 930, 542, 834, 116, 640, 659, 705, 931, 978, 307, 674, 387, 22, 746, 925, 73, 271, 830, 778, 574, 98, 513]));

console.log(tripletSum(8, [1, 2, 1, 3, 1, 5]))
//console.log(tripletSum(8, [1, 1, 2, 4, 5, 2, 3]));

console.log(tripletSum(165, [142, 712, 254, 869, 548, 645, 663, 758, 38, 860, 724, 742, 530, 779, 317, 36, 191, 843, 289, 107, 41, 943, 265, 649, 447, 806, 891, 730, 371, 351, 7, 102, 394, 549, 630, 624, 85, 955, 757, 841, 967, 377, 932, 309, 945, 440, 627, 324, 538, 539, 119, 83, 930, 542, 834, 116, 640, 659, 705, 931, 978, 307, 674, 387, 22, 746, 925, 73, 271, 830, 778, 574, 98, 513]));

// O'riely Regular Expressions

console.log(tripletSum(1291, [162, 637, 356, 768, 656, 575, 32, 53, 351, 151, 942, 725, 967, 431, 108, 192, 8, 338, 458, 288, 754, 384, 946, 910, 210, 759, 222, 589, 423, 947, 507, 31, 414, 169, 901, 592, 763, 656, 411, 360, 625, 538, 549, 484, 596, 42, 603, 351, 292, 837, 375, 21, 597, 22, 349, 200, 669, 485, 282, 735, 54, 1000, 419, 939, 901, 789, 128, 468, 729, 894, 649, 484, 808, 422, 311, 618, 814, 515, 310, 617, 936, 452, 601, 250, 520, 557, 799, 304, 225, 9, 845, 610, 990, 703, 196, 486, 94, 344, 524, 588, 315, 504, 449, 201, 459, 619, 581, 797, 799, 282, 590, 799, 10, 158, 473, 623, 539, 293, 39, 180, 191, 658, 959, 192, 816, 889, 157, 512, 203, 635, 273, 56, 329, 647, 363, 887, 876, 434, 870, 143, 845, 417, 882, 999, 323, 652, 22, 700, 558, 477, 893, 390, 76, 713, 601, 511, 4, 870, 862, 689, 402, 790, 256, 424, 3, 586, 183, 286, 89, 427, 618, 758, 833, 933, 170, 155, 722, 190, 977, 330, 369, 693, 426, 556, 435, 550, 442]));



function tripletSum(x, arr) {

    for (var i = 0; i < arr.length - 2; i++) {

        if (arr[i] + arr[i + 1] + arr[i + 2] === x) {
            return true;
        }
    }

    return false;
}

console.log(tripletSum(165, [142, 712, 254, 869, 548, 645, 663, 758, 38, 860, 724, 742, 530, 779, 317, 36, 191, 843, 289, 107, 41, 943, 265, 649, 447, 806, 891, 730, 371, 351, 7, 102, 394, 549, 630, 624, 85, 955, 757, 841, 967, 377, 932, 309, 945, 440, 627, 324, 538, 539, 119, 83, 930, 542, 834, 116, 640, 659, 705, 931, 978, 307, 674, 387, 22, 746, 925, 73, 271, 830, 778, 574, 98, 513]));




function summyFace(x, arr) {

    for (var i = 0; i < arr.length - 2; i++) {

        var check = arr[i] + arr[i + 1] + arr[i + 2];
        //console.log(check);
        if (check === x) {
            return true;
        }
    }

    return false;
}

var x = 15;
var arr = [1, 4, 7, 3, 2];
console.log(summyFace(x, arr));
x = 7;
arr = [1, 1, 2, 4, 5, 2, 3];
console.log(summyFace(x, arr));
console.log(summyFace(165, [5, 2, 3, 60, 3, 4, 100]));





var testimonial = ['Rugby', 'Baseball', 'Cricket'];
var numTestimonials = testimonial.length;
var index = 0;

setInterval(function() {
    $('#testimonials p').text(testimonial[index]);        
    index = (index + 1) % numTestimonials;
}, 5000);








function test(x, a) {
    for (var f = 0; f < a.length; f++) {
        for (var j = 0; j < a.length; j++) {
            for (var i = 0; i < a.length; i++) {
                console.log("First", a[f])
                console.log("Second", a[j+1])
                console.log("Third", a[i+2])
                console.log(a[f] + a[j+1] + a[i+2])
               
                if (a[f] + a[j + 1] + a[i + 2] === x) {

                    return true
                }

            }
        }
    }
    return false
}
 console.log(test(165, [5, 2, 60, 3, 100]));
console.log(test(5, [2,3,1]));



function test(x, arr) {

    for (var i = arr.length % 1; i < arr.length+2; i++) {

        var check = arr[i] + arr[i + 1] + arr[i + 2];
        console.log("First", arr[i])
          console.log("Second", arr[i+1])
          console.log("Third", arr[i+2])
          console.log(arr[i] + arr[i+1] + arr[i+2])
        //console.log(check);
        if (check === x) {
            return true;
        }
    }

    return false;
}

console.log(test(165, [5, 2, 60, 3, 100]));
console.log(test(5, [2,3,1]));






//Not quite there
function tripletSum(x, arr) {


    for (var i = 0; i < arr.length+2; i++) {
          var k = i >= arr.length ? i % arr.length : i
          console.log(k)
          console.log("First", arr[k])
          console.log("Second", arr[k+1])
          console.log("Third", arr[k+2])
          console.log(arr[k] + arr[k+1] + arr[k+2])
           
        if(arr[k] + arr[k + 1] + arr[k + 2] === x) {
       
            return true;
        }
    }

    return false;
}

console.log(tripletSum(165, [5, 2, 3, 60, 100]));





//Not quite there
function tripletSum(x, arr) {


    for (var i = 0; i < arr.length+2; i++) {
          var k = i >= arr.length ? i % arr.length : i
           var j = i >= arr.length ? i % arr.length : i
            var m = i >= arr.length ? i % arr.length : i
          console.log(k)
          console.log("First", arr[k])
          console.log("Second", arr[j+1])
          console.log("Third", arr[m+2])
          console.log(arr[k] + arr[j+1] + arr[m+2])
           
        if(arr[k] + arr[j + 1] + arr[m + 2] === x) {
       
            return true;
        }
    }

    return false;
}

console.log(tripletSum(165, [5, 2, 3, 60, 100]));







function tripletSum(x, arr) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] + arr[i + 1] + arr[i + 2] === x) {
            return true;
        }
    }

    return false;
}

console.log(tripletSum(165, [142, 712, 254, 869, 548, 645, 663, 758, 38, 860, 724, 742, 530, 779, 317, 36, 191, 843, 289, 107, 41, 943, 265, 649, 447, 806, 891, 730, 371, 351, 7, 102, 394, 549, 630, 624, 85, 955, 757, 841, 967, 377, 932, 309, 945, 440, 627, 324, 538, 539, 119, 83, 930, 542, 834, 116, 640, 659, 705, 931, 978, 307, 674, 387, 22, 746, 925, 73, 271, 830, 778, 574, 98, 513]));







function test(x, a) {
    console.log("======START=========")
    for (var f = 0; f < a.length; f++) {
        for (var j = 0; j < a.length-1; j++) {
            for (var i = 0; i < a.length-2; i++) {
                console.log("First", a[f])
                console.log("Second", a[j+1])
                console.log("Third", a[i+2])
                console.log(a[f] + a[j+1] + a[i+2])
               
                if (a[f] + a[j+1] + a[i+2] === x) {

                    return true
                }

            }
        }
    }
    return false
}
 console.log(test(165, [1, 2, 3, 4, 5,]));
console.log(test(5, [2,3,1]));




var string = "Tania is awesome!"

var arr = string.split(" ")
// console.log(arr)
console.log(arr.reverse("").toString())

