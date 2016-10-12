


var tempKey = 'AIzaSyA65-Sh9YNrebyKSOY4SX9wf8cbzmbxMn4';

var $currentLoc = '';
var $destination;
var lat; 
var log; 
var test = function ()

var getAddress = function (callback) {
    $currentLoc += $('#txtJob').val();
    $('#txtJob').val('');
   var datas; 

    //gets array of address bits
	var currentArray = $currentLoc.split(" ");
	
  console.log(currentArray);
	
	//create link for googleMaps 
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + currentArray[0] + '+' + currentArray[1] + '+' + currentArray[2]  + ',+' + currentArray[3]  + '+' + currentArray[4]  + ',+' + currentArray[5] + '&key=' + tempKey;
	
  $.ajax({
    url: url,
    type: "GET",
    data: url,
    success: function(res){
      findData(res);
      console.log(res.results, 'hi')
    },
    error: function (error){
      console.error(error);
    }
  });

  function findData (data){
    console.log(data.results[0].geometry.location.lat, 'helo')
    lat = data.results[0].geometry.location.lat
    log = data.results[0].geometry.location.lng

  }
}



//AIzaSyCakg-HLvsKzGW4r7kAial_t8ORIaHbY5k

//sending url that i built to express where express gets that url and does a get request to it 
//and passing info back to 


//     key: tempKey,
//     q: query,
//     maxResults: max,
    
//   })
//   .done(({items}) => {
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     );
//   });
// });









// var getUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + (number)
// // need to get content from submitted user

//  https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY'








// $("submit").click(function(prev){
// 	input+= $(".Adr").text();
// });
// console.log(input);
// 	//need to split that submitted input into 
// var number = $("Input");


// var getUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + (number)
// need to get content from submitted user

// 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY'


// create a get request to google maps API building the get lin up to match address 
// $("submit").click(function(){
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     key: tempKey,
//     q: query,
//     maxResults: max,
    
//   })
//   .done(({items}) => {
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     );
//   });
// });




// AIzaSyCJMBoIxon4GcNCuyKV69BiE7pMakxRbm0


