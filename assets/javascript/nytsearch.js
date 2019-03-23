

$("#search-button").on("click", function(){

    var search = $(".form-control").val()


    var entryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "s&api-key=KxrAwEmYuev5f6ywZ8AP9McEYX7yXHac"

    $.ajax({
        url: entryURL,
        method: "GET"
    })
    .then(function(data) {
        console.log(data)
        var newArticle = $("<div>")
        var newHeadline = $("<h3>")
        var newArtBody = $("<p>")
        console.log(data.response.docs[0].headline.main)

        newHeadline.text(data.response.docs[0].headline.main)
        newArtBody.text(data.response.docs[0].lead_paragraph)
        newArticle.append(newHeadline)
        newArticle.append(newArtBody)
        $("#media-headings").append(newArticle)


    });


})

$("#clear-button").on("click", function(){
    $("#media-headings").empty()
})