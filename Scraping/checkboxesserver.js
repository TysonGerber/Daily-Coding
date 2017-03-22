// require the nightmare library
var Nightmare = require('nightmare');

// create a new browser window
var nightmare = Nightmare({ show: true });

nightmare
    .goto('http://www.ironspider.ca/forms/checkradio.htm')
    //.type()
        // .click('#main > form:nth-child(5) > input')
         //.type('form[action*="ccn_search.php"] [value=I Agree]')
        //.click('form[action*="ccn_search.php"] [value=I Agree]')
         .check('#Content > div.CenterCol > blockquote:nth-child(17) > form > input[type="checkbox"]:nth-child(3)')
          .check('#Content > div.CenterCol > blockquote:nth-child(17) > form > input[type="checkbox"]:nth-child(9)')
           .check('#Content > div.CenterCol > blockquote:nth-child(33) > form > input[type="radio"]:nth-child(5)')
         
           .wait('#main')
          
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

      

    // evaluate code IN THE NIGHTMARE BROWSER
    .evaluate(function () {

        // pass data from the nightmare browser back to this express app
        return document.querySelector('#main [value="I Agree"]').type
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