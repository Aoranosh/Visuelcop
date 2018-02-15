var main = document.querySelector('main');

var dataNews = [
  {
    titre: "Article 1",
    urlImg: "../images/news1.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 2",
    urlImg: "../images/news2.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 3",
    urlImg: "../images/news3.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 4",
    urlImg: "../images/news4.jpg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 5",
    urlImg: "../images/news5.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 6",
    urlImg: "../images/news4.jpg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 7",
    urlImg: "../images/news2.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 8",
    urlImg: "../images/news3.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 9",
    urlImg: "../images/news1.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 10",
    urlImg: "../images/news2.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 11",
    urlImg: "../images/news3.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 12",
    urlImg: "../images/news4.jpg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 13",
    urlImg: "../images/news5.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 14",
    urlImg: "../images/news4.jpg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 15",
    urlImg: "../images/news2.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
  {
    titre: "Article 16",
    urlImg: "../images/news3.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-xlg'></i></a>"
  },
];

function generateText(nb){
  var result ="";
  for (var i = 0; i < nb; i++) {
    result += "VISUELCOP ";
  }
  return result;
};

var htmlNews = "<h1>Nos Actualités</h1><br>";
    htmlNews += "<div class='col-12 col-m-12'>";
for (var i in dataNews) {
    htmlNews += "<article class='col-11 col-m-11'>";
    htmlNews += "<figure class='col-4 col-m-4'>";
    htmlNews += "<a href='articleGenerator.html'>";
    htmlNews += "<img src='"+dataNews[i].urlImg+"' alt=''></a>";
    htmlNews += "<figcaption>"+dataNews[i].figcaption+"</figcaption>";
    htmlNews += "</figure>"
    htmlNews += "<div class='resumeNews col-7 col-m-7'>";
    htmlNews += "<a href='articleGenerator.html'>";
    htmlNews += "<h3>"+dataNews[i].titre+"</h3></a>";
    htmlNews += "<p>"+generateText(30)+"</p>";
    htmlNews += "<a class='lireSuite' href='articleGenerator.html'>Lire la suite...</a>";
    htmlNews += "</div>";
    htmlNews += "</article><hr>";
    }
    htmlNews += "</div>";

main.innerHTML= htmlNews;
