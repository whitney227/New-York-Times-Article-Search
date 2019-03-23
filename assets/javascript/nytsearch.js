
//"search" is just a placeholder for whatever the submit button id will be

$("#search").on("click", function(){

    var search = $("#search-form").val()

    //again "search-form" is just a placeholder for whatever the form ID is

    var entryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "s&api-key=KxrAwEmYuev5f6ywZ8AP9McEYX7yXHac"

    $.ajax({
        url: entryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
    });


})