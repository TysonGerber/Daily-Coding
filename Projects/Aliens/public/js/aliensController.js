angular.module('alienApp',[])
    .controller('aliensController', alienFunction);

    function alienFunction(){
        var aCtrl = this;

        var aliens = [{
            name: "Detheus",
            eyes: 6,
            arms: 4,
            planet: "Klub"

        },
        {
          name: "Tukkar",
          eyes: 3,
          arms: 2,
          planet: "Yujsta"  
        },
        {
          name: "Riaja",
          eyes: 5,
          arms: 4,
          planet: "Ahepska"
        }]
    };










// angular.module('alienApp', [])
//     .controller('aliensController', aliensFunction)

// function aliensFunction(){
// var aCtrl = this;
// console.log('loaded alienController')

// aCtrl.title = 'We have arrived.'

// var aliens = [
//     {
//     name: 'Predator',
//     color: 'camo',
//     numEyes: 2,
//     planet: 'Yautja Prime',
//     numArms: 2

// },
//   {
//     name: 'Aliens',
//     color: 'green',
//     numEyes: 0,
//     planet: 'Scary Place',
//     numArms: 4

//     }
// ]

// };
