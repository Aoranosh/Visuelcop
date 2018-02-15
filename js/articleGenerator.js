var main = document.querySelector('main');

function generateText(nb){
  var result ="";
  for (var i = 0; i < nb; i++) {
    result += "Visuelcop ";
  }
  return result;
};

var htmlArticle = "<h1>Article</h1><br>"
    htmlArticle += "<article class='col-10 col-m-10'>";
    htmlArticle += "<div class='col-6 col-m-6'>";
    htmlArticle += "<img src='../images/news1.jpeg' alt=''>";
    htmlArticle += "</div>"
    htmlArticle += "<div class='resumeArticle'>";
    htmlArticle += "<p>"+generateText(200)+"</p>";
    htmlArticle += "</div>";
    htmlArticle += "</article>";

main.innerHTML= htmlArticle;
