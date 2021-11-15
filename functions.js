$(document).ready(function(){

// https://developer.spotify.com/console/get-current-user/

var buscarSpotify = function(busquedaQ) {

  var template = Handlebars.compile($('#contenido-spotify').html());
 
  var accessToken = 'BQCR7ms94UkZOZOZT5G2e0O5l6eTMV6ILHJ_pZv-RkDDRqYSloW3t2449ijDQRp0abe3qegdJRffEEwhYh4V7rLI-6F6_xy1hr_8SUjbfu41AFrlrqsIMj4d_ED_Y6lTf6Ks3IlpwXX73pr1tPFvLZgSjXjkcAEHt-lqOkqkh15n3PY77To';

   $.ajax({
     url: 'https://api.spotify.com/v1/search',
     dataType: 'json',
     method: "GET",
     data: {q: busquedaQ, type: 'track,artist'},
     headers: {
         'Authorization': 'Bearer ' + accessToken
     },                    
     success: function(data) {   
        console.log(data);
        $('.content').append(template({sPreview : data.tracks.items}));
                      
     }
  }); 

}

    $('#buscadorC').on('keyup', function(e) {

      $('.content').html('');
      var busqueda = $(this).val();
      
      if (e.which === 13) {
        buscarSpotify(busqueda);
      }

  });


});