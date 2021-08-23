/**
 * =======================================================
 * jQuery.swap - Swap two DOM with animation
 * Author: Teja Sophista
 * Version: 1.00
 * Date: April 21st, 2012
 * Fork me on GitHub: github.com/tejanium/jquery.swap
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * =======================================================
 **/

(function( $ ) {
    $.fn.swap = function(a, b) {
        t = this
        if(t.length == 1 && a.length == 1 && b == undefined ){
            return _swap(t, a);
        }else if(t.length > 1 && typeof(a) == "number" && typeof(b) == "number" ){
            _swap(t[a], t[b])
            return t;
        }else{
            $.error( 'Argument Error!' );
        }
    };

    function _swap(a, b){
        var from = $(a),
            dest = $(b),
            from_pos = from.offset(),
            dest_pos = dest.offset(),
            from_clone = from.clone(),
            dest_clone = dest.clone(),
            total_route_vertical   = dest_pos.top + dest.height() - from_pos.top,
            route_from_vertical    = 0,
            route_dest_vertical    = 0,
            total_route_horizontal = dest_pos.left + dest.width() - from_pos.left,
            route_from_horizontal  = 0,
            route_dest_horizontal  = 0

        from.css("opacity", 0);
        dest.css("opacity", 0);

        from_clone.insertAfter(from).css({position: "absolute", width: from.outerWidth(), height: from.outerHeight()}).offset(from_pos).css("z-index", "999")
        dest_clone.insertAfter(dest).css({position: "absolute", width: dest.outerWidth(), height: dest.outerHeight()}).offset(dest_pos).css("z-index", "999")

        if(from_pos.top != dest_pos.top)
            route_from_vertical = total_route_vertical - from.height()
        route_dest_vertical = total_route_vertical - dest.height()
        if(from_pos.left != dest_pos.left)
            route_from_horizontal = total_route_horizontal - from.width()
        route_dest_horizontal = total_route_horizontal - dest.width()

        from_clone.animate({
                top: "+=" + route_from_vertical + "px",
                left: "+=" + route_from_horizontal + "px",
            },
            "slow",
            function(){
                dest.insertBefore(this).css("opacity", 1);
                $(this).remove();
            });

        dest_clone.animate({
                top: "-=" + route_dest_vertical + "px",
                left: "-=" + route_dest_horizontal + "px"
            },
            "slow",
            function(){
                from.insertBefore(this).css("opacity", 1);
                $(this).remove();
            });

        return from;
    }
})( jQuery );
