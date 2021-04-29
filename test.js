$(function() {
    
    $( "form" ).on( "submit", function( event ) {
        // stopt de default tasks van de event, namelijk form submitten
        event.preventDefault();
        $("#outputField").append($("#ftext").val());
      });
})
