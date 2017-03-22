// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('https://store.aacc.net/ccn/ccn_disclaimer.php')
    //.type()
        // .click('#main > form:nth-child(5) > input')
         //.type('form[action*="ccn_search.php"] [value=I Agree]')
        //.click('form[action*="ccn_search.php"] [value=I Agree]')
        .click('#main [value="I Agree"]')
        .wait('#search')
        .wait(2000)
        .click('#search > form [title="CheckAll"]')
        .wait('#search')
        .wait(2000)
        .click('#search > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="submit"]')
          .wait('#search')
          .wait(2000)
        .click('#search > form > table > tbody > tr:nth-child(2) > td:nth-child(3) > select')
       
        //    for(var i = 0; i < .length-15; i++){
        //       .click('#search > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="submit"]')
        //    }
          
        //    .check('input [type=checkbox][value="IBC-BCPCC"]')
        //    .check('input [type=checkbox][value="IBC-BCCC"]')
        //    .check('input [type=checkbox][value="IBC-BCPC"]')
        //    .check('input [type=checkbox][value="IBC-BCBC"]')
        //    .wait('#main')



        // .mouseup('.right')
    
        // .type('input[type=submit]')
        // .evaluate(function() {
        //   console.log(document.querySelector('input'));
        // })
        
        //.type('input[value="I Agree"]')
        // .mousedown('.right')
        //.click('.right')
    
        
        // .type('form[action*="ccn_search.php"] [value=Disagree]')
        //   .click('form[action*="ccn_search.php"] [value=Disagree]')
        //    .exists('form[action*="ccn_search.php"] [value=Disagree]')
       // .type('input[value=I Agree]')
    //.click('submit')

      
    .wait('#results')
    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {
    //    var info =[]
        // pass data from the nightmare browser back to this express app
      //console.log(document.body.querySelectorAll("#results tr td")[0]).innerText
      console.log(document.body.querySelectorAll("#results tr td")[0].innerHTML)
    
      return document.body.querySelectorAll("#results tr td")[0].innerHTML
       //return document.body.querySelectorAll("#results tr")[1].innerHTML
      
    
        
    })

    // close the browser window
    //.end()
    // the result passed into this function is the value we returned from evaluate
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });


// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window

// var protectionData = [];
// for (var i=0; i<32; i++) {
//     var nightmare = Nightmare({ show: true });

//     var scraperURL = 'https://www.mountainproject.com/v/the-bastille---n-face/105744723'
//     var scraperClick = '#leftNavRoutes > tbody > tr:nth-child('+(i+1).toString()+') > td:nth-child(3) > a'
//       nightmare
//           .goto(scraperURL)
//           .wait(8000)
//           .click(scraperClick)
//           .wait(8000)

//           // evaluate code IN THE NIGHTMARE BROWSER
//           .evaluate(function () {

//               // pass data from the nightmare browser back to this express app
//               return $('#rspCol800').text();
//           })

//           // close the browser window
//           .end()
//           // the result passed into this function is the value we returned from evaluate
//           .then(function (result) {
//               console.log(result)
//               protectionData[i] = result
//           })
//           .catch(function (error) {
//               console.error('Search failed:', error);
//           });
//   }