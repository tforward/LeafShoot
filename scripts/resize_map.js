
// Replace this.mapmargin tag with whatever ID DIV tag you use for the main container viewport
var resize_map = {};
resize_map.mapmargin = 0;
resize_map.minHeight = 415;
resize_map.getHeight = function() {
    this.mapmargin = $('.container-fluid').height();
};

resize_map.getHeight();
$(window).bind("resize", resize);
resize();

function resize(){
    if($(window).width() >= resize_map.minHeight){
        $('#map').css("height", ($(window).height() - resize_map.mapmargin));
        // setTimeout, to Handle using the Maximize button which needs more time to respond correctly
        setTimeout(function() {
            $('#map').css("height", ($(window).height() - resize_map.mapmargin));
          }, 150);
    // Set the map size cannot be smaller than the width on mobile devices.
    }else{
        if($(window).height() <= resize_map.minHeight){
            $('#map').css("height", resize_map.minHeight);
        }else{
            $('#map').css("height", ($(window).height() - resize_map.mapmargin));
        }
    }
}