//JS Commun
//HEADER
var menuHeader = [{
    url: "news.html",
    libelle: "ACTUS/"
  },
  {
    url: "members.html",
    libelle: "MEMBRES/"
  },
  {
    url: "recruiters.html",
    libelle: "RECRUTEURS/"
  },
  {
    url: "contact.html",
    libelle: "CONTACT/"
  },
];

var menuHeaderSocial = [{
    url: "https://www.facebook.com",
    icone: "fa fa-facebook fa-lg",
    target: true,
  },
  {
    url: "https://www.linkedin.com",
    icone: "fa fa-linkedin fa-lg",
    target: true,
  },
  {
    url: "https://www.twitter.com",
    icone: "fa fa-twitter fa-lg",
    target: true,
  },
  {
    url: "https://www.instagram.com",
    icone: "fa fa-instagram fa-lg",
    target: true,
  },
];

function htmlLogo() {
  var htmlMenu = "<div class='col-m-2 col-2'>";
  htmlMenu += "<a href='index.html' id='logo'>"
  htmlMenu += "</a>";
  htmlMenu += "</div>";
  return htmlMenu;
}

var pageEnCours = window.location.href.split("/");
var nomPageHtml = pageEnCours[pageEnCours.lenght - 1];

function htmlMenuTop(menuHeader) {
  var htmlMenu = "<div id='menuHeader'>";
  htmlMenu += "<ul>"; //id='menu'
  for (var i in menuHeader) {
    if (menuHeader[i].url === nomPageHtml) {
      htmlMenu += "<li class='active'>";
    } else {
      htmlMenu += "<li>";
    } //ce if permet de récup le nom de la page
    htmlMenu += "<a href='" + menuHeader[i].url + "'>";
    htmlMenu += menuHeader[i].libelle + "</a>" + "</li>";
  }
  htmlMenu += "</ul></div>";
  return htmlMenu;
}

function htmlSocial(menuHeaderSocial) {
  var htmlMenu = "<div id='menuSocial'>";
  htmlMenu += "<ul>";
  for (var i in menuHeaderSocial) {
    htmlMenu += "<li>";
    if (menuHeaderSocial[i].target == true) {
      htmlMenu += "<a href='" + menuHeaderSocial[i].url + "' target='_blank'>";
    } else {
      htmlMenu += "<a href='" + menuHeaderSocial[i].url + "'>";
    }
    htmlMenu += "<i class='" + menuHeaderSocial[i].icone + "'>";
    htmlMenu += "</i></a></li>";
  }
  htmlMenu += "</ul></div>";
  return htmlMenu;
}


function htmlSearchCo() {
  var htmlMenu = "<div class='header-co'>";
  htmlMenu += "<a href='signup.html' class='button button-sign-up'>S'inscrire</a>";
  htmlMenu += "<a href='signin.html' class='button button-sign-in'>Se connecter</a>";
  htmlMenu += "</div>"
  return htmlMenu;
}

function htmlMenuHamburger() {

  var htmlMenu = "<button id='hamburger-button'>&#9776;</button>";
  htmlMenu += "<div id='hamburger-sidebar'>";
  htmlMenu += "<div id='hamburger-sidebar-header'></div>";
  htmlMenu += "<div id='hamburger-sidebar-body'></div>";
  htmlMenu += "</div>";
  htmlMenu += "<div id='hamburger-overlay'></div>";
  return htmlMenu;
}

function clear() {
  return "<div class='clear'></div>";
}



var htmlMenu = "";
var menu = document.querySelector('#headerMain');
htmlMenu += htmlLogo();
htmlMenu += "<div id='hamburger'>";
htmlMenu += "<div id='hamburger-content'>";
htmlMenu += "<nav id='navHeader'>";
htmlMenu += "<h4>Silence ça tourne !</h4>";
htmlMenu += htmlMenuTop(menuHeader);
htmlMenu += "</nav>";
htmlMenu += htmlSearchCo();
htmlMenu += htmlSocial(menuHeaderSocial);
htmlMenu += "</div>";
htmlMenu += htmlMenuHamburger();
htmlMenu += "</div>";
htmlMenu += clear();

menu.innerHTML = htmlMenu;

var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
console.log(sidebarBody);

var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var menu = document.querySelector("#headerMain");
var activatedClass = 'hamburger-activated';
// ajout/retrait de la class hamburger actif
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var activatedClass = 'hamburger-activated';

button.addEventListener('click', function(e) {
  e.preventDefault();

  this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
  if (this.parentNode.classList.contains(activatedClass)) {
    if (e.repeat === false && e.which === 27)
      this.parentNode.classList.remove(activatedClass);
  }
});

overlay.addEventListener('click', function(e) {
  e.preventDefault();

  this.parentNode.classList.remove(activatedClass);
});
// sidebarBody.innerHTML = 'OK'
// console.log(content.innerHTML)
sidebarBody.innerHTML = content.innerHTML;


// FIN DU HEADER

//FOOTER
var menuFooter = document.querySelector("footer");

var menuAPropos = [{
    url: "members.html",
    libelle: "Concept Membres",
  },
  {
    url: "recruiters.html",
    libelle: "Concept Recruteurs"
  },
  {
    url: "legalNotice.html",
    libelle: "Mentions légales",
  },
  {
    url: "cgu.html",
    libelle: "C.G.U.",
  },
  {
    url: "sitemap.html",
    libelle: "Plan du site",
  },
];

var menuNousRecontrer = [{
    url: "news.html",
    libelle: "Nos actualités"
  },
  {
    url: "access.html",
    libelle: "Plan d'accés"
  },
  {
    url: "contact.html",
    libelle: "Contactez-nous"
  },
];

var menuFooterSocial = [{
    url: "https://www.facebook.com",
    icone: "fa fa-facebook fa-lg",
    target: true,
  },
  {
    url: "https://www.linkedin.com",
    icone: "fa fa-linkedin fa-lg",
    target: true,
  },
  {
    url: "https://www.twitter.com",
    icone: "fa fa-twitter fa-lg",
    target: true,
  },
  {
    url: "https://www.instagram.com",
    icone: "fa fa-instagram fa-lg",
    target: true,
  },

];

function htmlLogoFooter() {
  var htmlFooter = "<div class='col-1 col-m-2'>";
  htmlFooter += "<a href='index.html' id='logo'>";
  htmlFooter += "</a></div>";
  return htmlFooter;
}

function htmlAPropos(menuAPropos) {
  var htmlFooter = "<div class='menuAPropos col-3 col-m-3'>";
  htmlFooter += "<h3>A Propos</h3>";
  htmlFooter += "<ul>";
  for (var i in menuAPropos) {
    htmlFooter += "<li>";
    htmlFooter += "<a href='" + menuAPropos[i].url + "'>";
    htmlFooter += menuAPropos[i].libelle + "</a>" + "</li>";
  }
  htmlFooter += "</ul></div>";
  return htmlFooter;
}

function htmlNousRencontrer(menuNousRecontrer) {
  var htmlFooter = "<div class='menuNousRecontrer col-3 col-m-3'>";
  htmlFooter += "<h3>Nous Rencontrer</h3>";
  htmlFooter += "<ul>";
  for (var i in menuNousRecontrer) {
    htmlFooter += "<li>";
    htmlFooter += "<a href='" + menuNousRecontrer[i].url + "'>";
    htmlFooter += menuNousRecontrer[i].libelle + "</a>" + "</li>";
  }
  htmlFooter += "</ul>";
  htmlFooter += "</div>";
  return htmlFooter;
}

function htmlFooterSocial(menuFooterSocial) {
  var htmlFooter = "<div class='menuFooterSocial col-3 col-m-3'>";
  htmlFooter += "<h3>Réseaux sociaux</h3>";
  htmlFooter += "<ul>";
  for (var i in menuFooterSocial) {
    htmlFooter += "<li>";
    if (menuFooterSocial[i].target == true) { //if de gestion des linkFooter
      htmlFooter += "<a href='" + menuFooterSocial[i].url + "' target='_blank'>";
    } else {
      htmlFooter += "<a href='" + menuFooterSocial[i].url + "'>";
    }
    htmlFooter += "<i class='" + menuFooterSocial[i].icone + "'>";
    htmlFooter += "</i></a></li>";
  }
  htmlFooter += "</ul>";
  htmlFooter += "<h3>Restez informé</h3>";
  htmlFooter += "<p>Inscrivez-vous à notre Newsletter</p>";
  htmlFooter += "<form class='ajax-form newsletter-form form-inline' format='json' accept-charset='UTF-8' data-remote='true' method='post'><input name='utf8' type='hidden'>";
  htmlFooter += "<div class='newsLetterContainer'>";
  htmlFooter += "<input type='email' name='email' id='email' value='' class='newsletter-form-input form-input' placeholder='Votre adresse email' required='required'>";
  htmlFooter += "<button name='button' type='submit' class='btn btn-submit btn-primary'>Go</button>"
  htmlFooter += "</div></div></form>";
  return htmlFooter;
}

// CONKAT FONCTIONS
var htmlFooter = "<div class='footerContainer col-12 col-m-12'>";
htmlFooter += htmlLogoFooter();
htmlFooter += htmlAPropos(menuAPropos)
htmlFooter += htmlNousRencontrer(menuNousRecontrer);
htmlFooter += htmlFooterSocial(menuFooterSocial);
htmlFooter += clear();
htmlFooter += "</div>";

menuFooter.innerHTML = htmlFooter;
//FIN DU FOOTER
