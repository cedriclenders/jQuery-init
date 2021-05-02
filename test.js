$(function() {
    
    $( "form" ).on( "submit", function( event ) {
        // stopt de default tasks van de event, namelijk form submitten
        event.preventDefault();
        $("#outputField").append($("#ftext").val()+" ");
        $('#ftext').val('');
        $('#submit').prop('disabled', true);
      });

      $('#ftext').on('input change', function () {
        if ($('#ftext').val() == '') {
            $('#submit').prop('disabled', true);
            
        }
        else {
            $('#submit').prop('disabled', false);
        }
    });
})
