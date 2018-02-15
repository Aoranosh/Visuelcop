var Profile = document.querySelector('.formulaire');

var casesProfile = [
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

var htmlProfile = "<div class='col-6 col-m-4'>";
    htmlProfile += "<h3>Ecrivez-moi</h3>";
    for (var i in casesProfile) {
      htmlProfile += "<label for='"+casesProfile[i].label+"'>";
      htmlProfile += casesProfile[i].content;
      // console.log(casesProfile);//CTRL
      htmlProfile += "</label><br>";
      htmlProfile += "<input type='text' id='"+casesProfile[i].id+"'><br>";
    }
    htmlProfile += "<label for='message'>Message :</label>"
    htmlProfile += "<textarea rows='4' cols='30' name='comment' form='form'></textarea>"
    htmlProfile += "</div>";
    htmlProfile += "<br>";
    htmlProfile += "<div class='envoyer'>";
    htmlProfile += "<input type='submit' id='submit' value='Envoyer'>";
    htmlProfile += "</div>";
    htmlProfile += "<br>";

Profile.innerHTML = htmlProfile;

var submit = document.querySelector("#submit");
submit.addEventListener("click",function(e) {
  e.preventDefault();//obligatoire en cas de bug
  //lecture des entrées
  var nom =  document.querySelector("#nom");
  var prenom =  document.querySelector("#prenom");
  var mail =  document.querySelector("#mail");
  var commentaire =  document.querySelector("#commentaire");
  //console.log("htmlProfile");
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
