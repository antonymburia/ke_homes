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
     if (room == '1bdr' && location == 'kahawa' && maxprice >= onebr) {
      var result = document.getElementById("1");
     } else {
       if (room == '2bdr' && location == 'kilimani' && maxprice >= twobr) {
        var result = document.getElementById("2");
       } else {
         if (room == '3bdr' && location == 'gong' && maxprice >= threebr) {
          var result = document.getElementById("3");
         } else {
           document.getElementById("results").innerHTML = 'Sorry there are no results matching your search';
           return false;
         }
       }
     }
   }
}