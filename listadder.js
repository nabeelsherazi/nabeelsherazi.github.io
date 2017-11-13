var NUM = 2

$(document).ready(function(){
    $("button#list-button").click(function(){
        $(".list").html(function(i, origHTML){
            NUM += 1
            return origHTML + "<li>List element " + NUM
        })
    })
})
