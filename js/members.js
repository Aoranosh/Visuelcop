var main = document.querySelector('.main');

var dataMembers = [
  {
    urlImg: "../images/woman1.jpeg",
    nom: "Madame A",
    job: "Scénariste",
    date: "Dispo: 01/01/2021",
    expert:"Thriller",
    url: "profile.html",
  },
  {
    urlImg: "../images/woman2.jpeg",
    nom: "Madame B",
    job: "Coordinatrice de plateau",
    date: "Dispo: 01/01/2021",
    expert:"Rien",
    url: "profile.html",
  },
  {
    urlImg: "../images/woman3.jpeg",
    nom: "Madame C",
    job: "Assistante Réalisatrice",
    date: "Dispo: 01/01/2021",
    expert:"Documentaire",
    url: "profile.html",
  },{
    urlImg: "../images/man1.jpeg",
    nom: "Monsieur A",
    job: "Rien",
    date: "Dispo: 01/01/2021",
    expert:"Expert",
    url: "profile.html",
  },
  {
    urlImg: "../images/man2.jpeg",
    nom: "Monsieur B ",
    job: "Photographe",
    date: "Dispo: 01/01/2021",
    expert:"Photos de nuit",
    url: "profile.html",
  },
  {
    urlImg: "../images/man3.jpeg",
    nom: "Mister C ",
    job: "Producteur",
    date: "Dispo: 01/01/2021",
    expert:"Oldfashioned",
    url: "profile.html",
  },
]

var htmlMembers = "<section class='col-12 col-m-12'>";
for (var i in dataMembers) {
    htmlMembers += "<div class='mainMembers col-3 col-m-3'>";
    htmlMembers += "<div class='profileImg'>";
    htmlMembers += "<a href='profile.html' target='_blank'>";
    htmlMembers += "<img src='"+dataMembers[i].urlImg+"' alt='PhotoMembre'></a>";
    htmlMembers += "</div>";
    htmlMembers += "<div class='membersInfo'>";
    htmlMembers += "<ul>";
    htmlMembers += "<li>"+dataMembers[i].nom+"</li>";
    htmlMembers += "<li>"+dataMembers[i].job+"</li>";
    htmlMembers += "<li>"+dataMembers[i].date+"</li>";
    htmlMembers += "<li>"+dataMembers[i].expert+"</li>";
    htmlMembers += "<li>";
    htmlMembers += "<a class='voirFiche' href='profile.html' target='_blank'>Voir la fiche détaillée</a>"
    htmlMembers += "</li>"
    htmlMembers += "</ul>";
    htmlMembers += "</div>";
    htmlMembers += "</div>";
    }
    htmlMembers += "</section>";

main.innerHTML= htmlMembers;
