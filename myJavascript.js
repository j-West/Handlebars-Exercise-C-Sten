


var promise1 = new Promise(function(resolve, reject) {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      resolve(data)
    }
  })
});

promise1
  .then(function(data) {
//handlebars step one: grap the html from the script tag
var source   = $("#entryData").html();

//handlebars step two: compile it into a template
var template = Handlebars.compile(source);


//handlebars step three:render the HTML by passing the data to the template
var finished = template(data);

//handlebars step four: put the complete HTML into the DOM
$(".outputDiv").append(finished);

});


$("button").click(function() {
  location.reload();
})
