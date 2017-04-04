function test(x, a) {
    for (var j = 0; j < a.length; i++) {
        for (var i = 0; i < a.length; i++) {
            if(j[i] + a[i] + a[i+1] === x){
                console.log(j[i] + a[i] + a[i+1] === x)
                return true
            }

        }
    }
 return false
}
console.log(test(165, [5, 2, 3, 60, 3, 4, 100]))