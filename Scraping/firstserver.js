// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://aacc.net')
    //.type()
    .click('body > div.top-header-nav > ul > li:nth-child(6) > a')
    .click('#single-page-left-inner-bg > div:nth-child(4) > a:nth-child(1) > img')
    .wait('#main')
        //.click('#main > form:nth-child(5) > input')
         //.type('form[action*="ccn_search.php"] [value=I Agree]')
        //.click('form[action*="ccn_search.php"] [value=I Agree]')
        // .mousedown('.right')
        // .mouseup('.right')
    .click('#prehead > a:nth-child(1)')
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

        .wait('#main')

    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {

        // pass data from the nightmare browser back to this express app
        return document.querySelector('#main .right').value
    })

    // close the browser window
    .end()
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