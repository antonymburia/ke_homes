// t.js
function filterresults(){
  var room = document.getElementById('rooms').value;
  var location = document.getElementById('location').value;
  var maxprice = document.getElementById('price').value;
  var studioapt = 15000;
  var onebr = 20000;
  var twobr = 30000;
  var threebr = 40000;

  // filter results
  if (room == 'studio' && location == 'juja' && maxprice >= studioapt) {
    var result = document.getElementById("studio");
    
   } 
   else {
     if (room == 'house3' && location == 'kahawa' && maxprice >= onebr) {
      var result = document.getElementById("1");
     } else {
       if (room == 'house2' && location == 'kilimani' && maxprice >= twobr) {
        var result = document.getElementById("2");
       } else {
         if (room == 'House1' && location == 'ngong' && maxprice >= threebr) {
          var result = document.getElementById("3");
         } else {
           document.getElementById("results").innerHTML = 'Sorry there are no results matching your search';
           return false;
         }
       }
     }
   }
  //  display results
  document.getElementById("results").innerHTML =  result.innerHTML
}