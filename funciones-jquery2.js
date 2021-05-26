// hide - show -toggle
$(".hide h3").click(function () { 
    $(".hide img").hide();
});

$(".show img").hide(); //desaparecer la imagen de show para poder aparecerla con show..
$(".show h3").click(function () { 
    $(".show img").show();
});

$(".toggle h3").click(function () { 
    $(".toggle img").toggle();
});

// slideup - slidedown
$(".slideup h3").click(function () { 
    $(".slideup img").slideUp();
});

$(".slidedown img").hide(); //desaparecer la imagen de show para poder aparecerla con slideup..
$(".slidedown h3").click(function () { 
    $(".slidedown img").slideDown();
});

$(".slidetoggle h3").click(function () { 
    $(".slidetoggle img").slideToggle();
});

// fadein - fadeout
$(".fadeout h3").click(function () { 
    $(".fadeout img").fadeOut();
});

$(".fadein img").hide(); //desaparecer la imagen de show para poder aparecerla con slideup..
$(".fadein h3").click(function () { 
    $(".fadein img").fadeIn();
});

$(".fades h3").click(function () { 
    if ($(".fades img").css("display") != "none"){ //ocupamos css
        $(".fades img").fadeOut();
    }
    else{
        $(".fades img").fadeIn();
    }
});

// html - text
$(".html h3").click(function() { 
    alert($(".html h3").html());
});

$(".text h3").click(function() { 
    alert($(".text h3").text());
});

// addclass - val - attr
$(".addclass h3").click(function() { 
    $(".addclass h3").addClass("fondo-verde");
});

$(".val h3").click(function() { 
    $(".val input").val("val(Se hizo click)");
});

$(".attr .arreglar-attr").click(function() { 
    $(".attr .link-attr a").attr("href", "https://www.google.com/");
})

// before - prepend - append - after 
$(".parrafos h3").click(function (e) { 
    $(this).before("before");
    $(this).prepend("prepend ");   
    $(this).append(" append");
    $(this).after("after");
});