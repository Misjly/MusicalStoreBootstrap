$(function() {
    $("#findButton").on("click", function() {
        $("#findModal").modal();
    })

    $("#labelYes").on("click", function(){
        $(this).addClass("activated");
        $("#labelNo").removeClass("activated");
     });

     $("#labelNo").on("click", function(){
        $(this).addClass("activated");
        $("#labelYes").removeClass("activated");
     });
})