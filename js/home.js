var main = document.querySelector('.carrousel');

var htmlMain = "<div class=mainIMG col-12 col-m-12>";
    htmlMain += "<div id='myCarousel' class='carousel slide' data-ride='carousel'>";
    htmlMain += "<ol class='carousel-indicators'>";
    htmlMain += "<li data-target='#myCarousel' data-slide-to='0' class='active'></li>";
    htmlMain += "<li data-target='#myCarousel' data-slide-to='1'></li>";
    htmlMain += "<li data-target='#myCarousel' data-slide-to='2'></li>";
    htmlMain += "<li data-target='#myCarousel' data-slide-to='3'></li>";
    htmlMain += "</ol>";
    htmlMain += "<div class='carousel-inner' role='listbox'>";
    htmlMain += "<div class='item active'>";
    htmlMain += "<img src='../images/light-sign-typography-lighting.jpg' alt='Article-Picture' width='460' height='345'>";
    htmlMain += "<div class='carousel-caption'>";
    htmlMain += "<h2>Merci</h2>";
    htmlMain += "<p>Déjà 100000 Membres ! Silence, ça tourne !</p>";
    htmlMain += "</div>";
    htmlMain += "</div>";
    htmlMain += "<div class='item'>";
    htmlMain += "<img src='../images/pexels-photo-439857.jpeg' alt='Article-Picture' width='460' height='345'>";
    htmlMain += "<div class='carousel-caption'>";
    htmlMain += "<h2>Notre communauté internationale</h2>";
    htmlMain += "<p>Toujours disponible pour vous !</p>";
    htmlMain += "</div>";
    htmlMain += "</div>";
    htmlMain += "<div class='item'>";
    htmlMain += "<img src='../images/pexels-photo-109669.jpeg' alt='Article-Picture' width='460' height='345'>";
    htmlMain += "<div class='carousel-caption'>";
    htmlMain += "<h2>Meet-Up Magique</h2>";
    htmlMain += "<p>Rejoingnez notre Meet-Up</p>";
    htmlMain += "</div>";
    htmlMain += "</div>";
    htmlMain += "<div class='item'>";
    htmlMain += "<img src='../images/pexels-photo-156986.jpeg' alt='Article-Picture' width='460' height='345'>";
    htmlMain += "<div class='carousel-caption'>";
    htmlMain += "<h2>La tête dans les nuages</h2>";
    htmlMain += "<p>Co-réalisation de Pierre, Paul, Jack</p>";
    htmlMain += "</div>";
    htmlMain += "</div>";
    htmlMain += "</div>";
    htmlMain += "<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>";
    htmlMain += "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>";
    htmlMain += "<span class='sr-only'>Previous</span>";
    htmlMain += "</a>";
    htmlMain += "<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'>";
    htmlMain += "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>";
    htmlMain += "<span class='sr-only'>Next</span>";
    htmlMain += "</a>";
    htmlMain += "</div>";
    htmlMain += "</div>";

main.innerHTML = htmlMain;

var communaute = document.querySelector('.communaute');

var dataCommunaute = [
  {
    urlImg: "../images/woman1.jpeg",
    nom: "Madame A",
    job: "Scénariste",
    url: "profile.html",
  },
  {
    urlImg: "../images/woman2.jpeg",
    nom: "Madame B",
    job: "Coordinatrice de plateau",
    url: "profile.html",
  },
  {
    urlImg: "../images/man3.jpeg",
    nom: "Mister C ",
    job: "Producteur",
    url: "profile.html",
  },
]

var htmlCommunaute = "<div id='indexMembre'><h3><a href='members.html'>Nos derniers Membres</a></h3></div>"
    htmlCommunaute += "<section class='col-12 col-m-12'>";
for (var i in  dataCommunaute) {
    htmlCommunaute += "<div class='mainMembers col-3 col-m-3'>";
    htmlCommunaute += "<div class='profileImg'>";
    htmlCommunaute += "<a href='profile.html' target='_blank'>";
    htmlCommunaute += "<img src='"+ dataCommunaute[i].urlImg+"' alt='PhotoMembre'></a>";
    htmlCommunaute += "</div>";
    htmlCommunaute += "<div class='membersInfo'>";
    htmlCommunaute += "<ul>";
    htmlCommunaute += "<li>"+ dataCommunaute[i].nom+"</li><br>";
    htmlCommunaute += "<li>"+ dataCommunaute[i].job+"</li><br>";
    htmlCommunaute += "<li>";
    htmlCommunaute += "<a class='voirFiche' href='profile.html' target='_blank'>Voir la fiche détaillée</a>"
    htmlCommunaute += "</li></ul>"
    htmlCommunaute += "</div></div>";
    }
    htmlCommunaute += "</section>";

communaute.innerHTML= htmlCommunaute;

var media = document.querySelector('.media');

var dataNews = [
  {
    titre: "Article 1",
    urlImg: "../images/news1.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-lg'></i></a>"
  },
  {
    titre: "Article 2",
    urlImg: "../images/news2.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-lg'></i></a>"
  },
  {
    titre: "Article 3",
    urlImg: "../images/news3.jpeg",
    figcaption:"<a href='twitter.com'><i class='fa fa-twitter fa-lg'></i></a>"
  },
];

function generateText(nb){
  var result ="";
  for (var i = 0; i < nb; i++) {
    result += "Visuelcop ";
  }
  return result;
};

var htmlNews = "<div id='indexNews'><h3><a href='news.html'>Nos dernières actualités</a></h3></div>";
    htmlNews += "<div class='mediaArticle col-12 col-m-12'>";
for (var i in dataNews) {
    htmlNews += "<article>";
    htmlNews += "<figure class='col-2 col-m-2'>";
    htmlNews += "<a href='articleGenerator.html'>";
    htmlNews += "<img src='"+dataNews[i].urlImg+"' alt=''></a>";
    htmlNews += "<figcaption>"+dataNews[i].figcaption+"</figcaption>";
    htmlNews += "</figure>"
    htmlNews += "<div class='resumeNews col-7 col-m-7'>";
    htmlNews += "<a href='articleGenerator.html'>";
    htmlNews += "<h3>"+dataNews[i].titre+"</h3></a>";
    htmlNews += "<p>"+generateText(20)+"</p>";
    htmlNews += "<a class='lireSuite' href='articleGenerator.html'>Lire la suite...</a>";
    htmlNews += "</div>";
    htmlNews += "</article><br>";
    }
    htmlNews += "</div>";

media.innerHTML= htmlNews;
