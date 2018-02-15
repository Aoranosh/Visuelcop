var contact = document.querySelector('.main');

var casesContact = [
  {
    label:"nom",
    content:"Nom:",
    id:"nom"
  },
  {
    label:"prenom",
    content:"Prénom:",
    id:"prenom"
  },
  {
    label:"mail",
    content:"Adresse e-mail:",
    id:"mail"
  },
];

var htmlContact = "<form class='formulaire'>";
    htmlContact += "<div class='col-6 col-m-6'>";
    htmlContact += "<h3>Ecrivez-nous</h3>";
    for (var i in casesContact) {
      htmlContact += "<label for='"+casesContact[i].label+"'>";
      htmlContact += casesContact[i].content;
      // console.log(casesContact);//CTRL
      htmlContact += "</label>";
      htmlContact += "<input type='text' id='"+casesContact[i].id+"'>";
    }
    htmlContact += "<label for='message'>Message :</label>"
    htmlContact += "<textarea rows='4' cols='50' name='comment' form='form'></textarea>"
    htmlContact += "</div>";
    htmlContact += "</form>";
    htmlContact += "<br>";
    htmlContact += "<div class='envoyer'>";
    htmlContact += "<input type='submit' id='submit' value='Envoyer'>";
    htmlContact += "</div>";
    htmlContact += "<br>";

contact.innerHTML = htmlContact;

var submit = document.querySelector("#submit");
submit.addEventListener("click",function(e) {
  e.preventDefault();//obligatoire en cas de bug
  //lecture des entrées
  var nom =  document.querySelector("#nom");
  var prenom =  document.querySelector("#prenom");
  var mail =  document.querySelector("#mail");
  var commentaire =  document.querySelector("#commentaire");
  //console.log("htmlContact");
  if (nom.value.length > 0 && commentaire.value.length > 0 && mail.value.lenght > 0) {
    alert('Merci pour votre message ! A bientot');
    nom.value="";//reset
    prenom.value="";
    commentaire.value="";
    mail.value="";
  } else {
    alert('Veuillez completer les champs obligatoires SVP ! Merci !');
  }
})
