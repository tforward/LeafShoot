function getHeight(){
  var $heightCheck = $('#map-holder');
  mapheight = $heightCheck.height()
  return mapheight;
}

var mapmargin = getHeight();
$('#map').css("height", ($(window).height() - mapmargin));
$(window).on("resize", resize);
resize();

function resize(){
    $('#map').css("height", ($(window).height() - mapmargin));
}

