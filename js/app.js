function search(searchTerm, numberRecords, startYear, endYear){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "5d3a9bcfadb54279992fc16bcdd6bc1a",
            'q': searchTerm,
            'begin_date': startYear + "0101",
            'end_date': endYear + "0101"
        });
    $.ajax({
        url: url,
        method: 'GET'
    }).done(function(result) {
        printArticles(result.response.docs, numberRecords)
    })
}
function printArticles(jsonInput, numberRecords){
for (var i = 0; i < numberRecords; i++){
    //cozzxxzzzsxz
    try {
    var headline = jsonInput[i].headline.main;
    var author = jsonInput[i].byline.original;
    var section = jsonInput[i].type_of_material;
    var pubDate = jsonInput[i].pub_date;
    var url = jsonInput[i].web_url;
    // console.log(jsonInput[i])
    console.log("1", headline)
    console.log("2", author)
    console.log("3", section)
    console.log("4", pubDate)
    console.log("5", url)
    console.log("")

    
//     <div class="panel panel-default">
//     <div class="panel-body">A Basic Panel</div>
// </div>
    var content1 = $("<div>").attr("class", "panel panel-default");
    var content2 = $("<div>").attr("class", "panel-body");
    content2.append($("<p>").html(headline))
    content2.append($("<p>").html(author))
    content2.append($("<p>").html(section))
    content2.append($("<p>").html(pubDate))
    content2.append($("<p>").html(url))
    content1.html(content2)

    $("#content").append(content1);
 

    }catch(err){

    }

}
 
}
//search("burritos", 10, 2000, 2005);
$("#searchBtn").click(function(){
    var searchTerm = $("#searchTerm").val();
    var numberRecords = $("#numRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    console.log(searchTerm, numberRecords, startYear, endYear)
    search(searchTerm, numberRecords, startYear, endYear)
});
$("#clearBtn").click(function(){
    $("#content").empty();
});