/*
	Fichier: date.js
	Nom: Gabriel Marrero
	Date: La date de remise
	But: Librairie de fonctions sur les dates
*/

/*
|-----------------------------------------------------------------------------|
| er: 
| Retourne er si intJour = 1 et binExposant = false                                       
| Retourne er en exposant si intJour = 1 et binExposant = true
| Retourne la chaîne vide dans tous les autres cas                              
|-----------------------------------------------------------------------------|
*/
function er(intJour, binExposant) {
      /* Entrez le code ici */

      // var objdate = new Date();
      // var strRetour = "";
      // var intjour = parseInt(objdate.getDay());

      if (intJour == 1 && binExposant == false)
            strRetour = "er"
      else if (intJour == 1 && binExposant == true)
            strRetour = "<sup>er</sup>"
      else
            strRetour = ""





      return strRetour;
}

/*
|-----------------------------------------------------------------------------|
| jourSemaineEnLitteral: 
| Retourne le jour de la semaine en littéral (1=Dimanche,...,7=Samedi)        
| Retourne la première lettre en majuscule si binMajuscule vaut true          
| Retourne la chaîne vide si le numéro du jour n'est pas entre 1 et 7         
|-----------------------------------------------------------------------------|
*/
function jourSemaineEnLitteral(intJourSem, binMajuscule) {
      /* Entrez le code ici */


      var strRetour = "";

      switch (intJourSem) {
            case 1:
                  if (binMajuscule == true)
                        strRetour = "Dimanche"
                  else
                        strRetour = "dimanche"
                  break;
            case 2:
                  if (binMajuscule == true)
                        strRetour = "Lundi"
                  else
                        strRetour = "lundi"
                  break;
            case 3:
                  if (binMajuscule == true)
                        strRetour = "Mardi"
                  else
                        strRetour = "mardi"
                  break;
            case 4:
                  if (binMajuscule == true)
                        strRetour = "Mercredi"
                  else
                        strRetour = "mercredi"
                  break;
            case 5:
                  if (binMajuscule == true)
                        strRetour = "Jeudi"
                  else
                        strRetour = "jeudi"
                  break;
            case 6:
                  if (binMajuscule == true)
                        strRetour = "Vendredi"
                  else
                        strRetour = "vendredi"
                  break;
            case 7:
                  if (binMajuscule == true)
                        strRetour = "Samedi"
                  else
                        strRetour = "samedi"
                  break;
            default:
                  strRetour = ""
                  break;
      }

      return strRetour;

}

/*
|-----------------------------------------------------------------------------|
| moisEnLitteral: 
| Retourne le mois en littéral (1=Janvier,...,12=Décembre)                    
| Retourne la première lettre en majuscule si binMajuscule vaut true
| Retourne la chaîne vide si le numéro du mois n'est pas entre 1 et 12
|-----------------------------------------------------------------------------|
*/
function moisEnLitteral(intMois, binMajuscule) {
      /* Entrez le code ici */
      var strRetour = "";

      switch (intMois) {
            case 1:
                  if (binMajuscule == true)
                        strRetour = "Janvier"
                  else
                        strRetour = "janvier"
                  break;
            case 2:
                  if (binMajuscule == true)
                        strRetour = "Fevrier"
                  else
                        strRetour = "fevrier"
                  break;
            case 3:
                  if (binMajuscule == true)
                        strRetour = "Mars"
                  else
                        strRetour = "mars"
                  break;
            case 4:
                  if (binMajuscule == true)
                        strRetour = "Avril"
                  else
                        strRetour = "avril"
                  break;
            case 5:
                  if (binMajuscule == true)
                        strRetour = "Mais"
                  else
                        strRetour = "mais"
                  break;
            case 6:
                  if (binMajuscule == true)
                        strRetour = "Juin"
                  else
                        strRetour = "juin"
                  break;
            case 7:
                  if (binMajuscule == true)
                        strRetour = "Juillet"
                  else
                        strRetour = "juillet"
                  break;
            case 8:
                  if (binMajuscule == true)
                        strRetour = "Aout"
                  else
                        strRetour = "aout"
                  break;
            case 9:
                  if (binMajuscule == true)
                        strRetour = "Septembre"
                  else
                        strRetour = "septembre"
                  break;
            case 10:
                  if (binMajuscule == true)
                        strRetour = "Octobre"
                  else
                        strRetour = "octobre"
                  break;
            case 11:
                  if (binMajuscule == true)
                        strRetour = "Novembre"
                  else
                        strRetour = "novembre"
                  break;
            case 12:
                  if (binMajuscule == true)
                        strRetour = "Decembre"
                  else
                        strRetour = "decembre"
                  break;
            default:
                  strRetour = ""
                  break;
      }

      return strRetour;

}

/*
|-----------------------------------------------------------------------------|
| bissextile: 
| Retourne true si l'année est bissextile sinon retourne false  
|-----------------------------------------------------------------------------|
*/
function bissextile(intAnnee) {
      /* Entrez le code ici */
      var binBix = false;
      if ((intAnnee % 4 == 0 && intAnnee % 100 != 0) || intAnnee % 400 == 0)
            binBix = true;

      return binBix;
}

/*
|-----------------------------------------------------------------------------|
| nombreJoursAnnee: 
| Retourne le nombre de jours qu'il y a dans l'année          
|-----------------------------------------------------------------------------|
*/
function nombreJoursAnnee(intAnnee) {
      /* Entrez le code ici */

      var intJours = 0;

      if (bissextile(intAnnee) == true)
            intJours = 366;
      else
            intJours = 365;


      return intJours;

}

/*
|-----------------------------------------------------------------------------|
| nombreJoursMois: 
| Retourne le nombre de jours dans un mois pour une année donnée       
| Retourne 0 si le mois n'est pas entre 1 et 12    
|-----------------------------------------------------------------------------|
*/
function nombreJoursMois(intMois, intAnnee) {
      /* Entrez le code ici */
      var intRetour = 0;

      switch (intMois) {
            case 1:
                  intRetour = 31;
                  break;
            case 2:
                  if (bissextile(intAnnee) == true)
                        intRetour = 29;
                  else
                        intRetour = 28

                  break;
            case 3:
                  intRetour = 31;
                  break;
            case 4:
                  intRetour = 30;
                  break;
            case 5:
                  intRetour = 31;
                  break;
            case 6:
                  intRetour = 30;
                  break;
            case 7:
                  intRetour = 31;
                  break;
            case 8:
                  intRetour = 31;
                  break;
            case 9:
                  intRetour = 30;
                  break;
            case 10:
                  intRetour = 31;
                  break;
            case 11:
                  intRetour = 30;
                  break;
            case 12:
                  intRetour = 31;
                  break;
            default:
                  intRetour = 0;
                  break;
      }

      return intRetour;

}

/*
|-----------------------------------------------------------------------------|
| dateValide: 
| Retourne true si la date est valide
| Retourne false dans le cas contraire
|-----------------------------------------------------------------------------|
*/
function dateValide(intJour, intMois, intAnnee) {
      /* Entrez le code ici */

      var binvalide = false;

      /*Retourne true si la date passée en argument (sous la forme de trois nombres) est valide; sinon retourne false. 
      Retourne false si l’année n’est pas entre 1900 et 2199.
      Retourne false si le mois n’est pas entre 1 et 12.
      Retourne false si le jour n’est pas entre 1 et le nombre de jours dans le mois.*/

      if (intAnnee >= 1900 && intAnnee <= 2199) {
            if (intMois >= 1 && intMois <= 12) {
                  if (intJour >= 1 && intJour <= parseInt(nombreJoursMois(intMois, intAnnee))) {
                        binvalide = true;
                  }
            }
      }

      return binvalide;
}

/*
|-----------------------------------------------------------------------------|
| dateEnNoSerie:
| Convertis une date en numéro de série et retourne ce numéro de série
| (Numéro de série: le numéro du jour à partir du 1er janvier 1900)  
| Retourne 0 si la date n'est pas valide
|-----------------------------------------------------------------------------|
*/
function dateEnNoSerie(intJour, intMois, intAnnee) {
      /* Entrez le code ici */

      /*But : Convertis une date, à partir du 1
   er janvier 1900 au 31 décembre 2199, en un numéro de série variant de 1 à
   109573.
   
   Retourne 0 si la date n’est pas valide.
   
   Note : Le numéro de série représente le numéro du jour depuis le 1er janvier 1900.
   Par exemple, le 1er janvier 1900 est le jour no 1, le 31 janvier 1900 est le jour no 31, le 1er février1900 est le jour no
   32, le 2 février 1900 est le jour no 33 et ainsi de suite.
   
   Syntaxe : function dateEnNoSerie(intJour, intMois, intAnnee)
   
   Contrainte : Utiliser les fonctions dateValide(intJour, intMois, intAnnee), nombreJoursAnnee(intAnnee) et nombreJoursMois(intMois, intAnnee)
   
   Exemples :
   dateEnNoSerie( 1, 1,1900) retourne 1
   dateEnNoSerie(21, 3,2012) retourne 40988
   dateEnNoSerie(31,12,2199) retourne 109573
   dateEnNoSerie(31,12,1899) retourne 0
   dateEnNoSerie(31,13,2000) retourne 0
   dateEnNoSerie(29, 2,1991) retourne 0 */

      var intNoSerie = 0;


      if (dateValide(intJour, intMois, intAnnee)) {

            for (var i = 1900; i <= intAnnee - 1; i++) {

                  intNoSerie += nombreJoursAnnee(i);


            }
            for (var j = 1; j <= intMois - 1; j++) {

                  intNoSerie += nombreJoursMois(j, intAnnee);


            }
            intNoSerie += intJour


      }
      return intNoSerie;
}

/*
|-----------------------------------------------------------------------------|
| noSerieValide: 
| Retourne true si le numéro de série est valide
| Retourne false dans le cas contraire
|-----------------------------------------------------------------------------|
*/
function noSerieValide(intNoSerie) {
      /* Entrez le code ici */

      /*But : Retourne true si le numéro de série est valide (entre 1 et 109573); autrement retourne false */

      return (intNoSerie >= 1 && intNoSerie <= 109573)

}

/*
|-----------------------------------------------------------------------------|
| noSerieEnJourSemaine:
| Retourne le no du jour de la semaine (entre 1 et 7) 
| qui correspond à un numéro de série
| Retourne 0 si le numéro de série n'est pas valide
|-----------------------------------------------------------------------------|
*/
function noSerieEnJourSemaine(intNoSerie) {
      /* Entrez le code ici */
      /* But : Retourne le jour de la semaine correspondant à la date entrée sous forme d’un numéro de série (1 à 109573).
Retourne 0 si le numéro de série n’est pas valide.
Note : Le 1er janvier 1900 est un Lundi (jour de la semaine no 2).
Cela est très simple à programmer si vous utilisez un modulo (ça se programme en une ligne).
Syntaxe : function noSerieEnJourSemaine(intNoSerie)
Contrainte : Utiliser la fonction noSerieValide(intNoSerie)*/

      return (noSerieValide(intNoSerie) && ((intNoSerie % 7) + 1))


}

/*
|-----------------------------------------------------------------------------|
| dateEnJourSemaine:
| Retourne le no du jour de la semaine (entre 1 et 7) 
| qui correspond à une date
| Retourne 0 si la date n'est pas valide
|-----------------------------------------------------------------------------|
*/
function dateEnJourSemaine(intJour, intMois, intAnnee) {
      /* Entrez le code ici */
      /*  But : En sachant que le 1er janvier 1900 est un Lundi (JourSemaine=2), retourne le jour de la semaine correspondant à
      la date entrée sous forme de trois nombres (Jour, Mois et Année).
      
      Retourne 0 si la date n’est pas valide.
      
      Syntaxe : function dateEnJourSemaine(intJour, intMois, intAnnee)
      
      Contrainte : Utiliser les fonctions dateValide(intJour, intMois, intAnnee), dateEnNoSerie(intJour, intMois, intAnnee) et noSerieEnJourSemaine(intNoSerie)*/

      var dateJourSemaine = 0;
      var intNoSerie = dateEnNoSerie(intJour, intMois, intAnnee);
      if (dateValide(intJour, intMois, intAnnee)) {
            dateJourSemaine = noSerieEnJourSemaine(intNoSerie)
      }

      return dateJourSemaine;


}

/*
|-----------------------------------------------------------------------------|
| noSerieEnJourDansDate:
| Retourne le no du jour dans une date
| qui correspond à un numéro de série
| Retourne 0 si le numéro de série n'est pas valide
|-----------------------------------------------------------------------------|
*/
function noSerieEnJourDansDate(intNoSerie) {
      /* Entrez le code ici */
      /* But : Convertis un numéro de série de 1 à 109573 en un jour à l’intérieur d’une date.
Retourne 0 si le numéro de série n’est pas valide.

Note : Par exemple, le numéro de série 40988 correspond au 21 mars 2012. Donc cette fonction doit retourner 21.

Syntaxe : function noSerieEnJourDansDate(intNoSerie)

Contraintes : Utiliser les fonctions noSerieValide(intNoSerie), nombreJoursAnnee(intAnnee) et nombreJoursMois(intMois, intAnnee)
 */

      //foctions à utiliser 

      //noSerieValide(intNoSerie)
      //nombreJoursAnnee(intAnnee)
      //nombreJoursMois(intMois, intAnnee)

      var intJourInterieurDate = 0;
      var intAnnee = 1900;
      var intMois = 1;

      if (noSerieValide(intNoSerie)) {
            //but: enelever les annees et les mois de noserie

            //tant que le nombre de jour annee est plus petit que noserie 
            //pour les annees
            while (nombreJoursAnnee(intAnnee) < intNoSerie) {

                  intNoSerie = intNoSerie - nombreJoursAnnee(intAnnee);
                  intAnnee++;
            }

            // console.log(intNoSerie)

            //pour les mois
            while (nombreJoursMois(intMois, intAnnee) < intNoSerie) {

                  //intAnnee++;
                  intNoSerie = intNoSerie - nombreJoursMois(intMois, intAnnee);
                  intMois++;

            }

            intJourInterieurDate = intNoSerie;
            //console.log(intJourInterieurDate);


      }

      return intJourInterieurDate;



}

/*    
|-----------------------------------------------------------------------------|
| noSerieEnMoisDansDate:
| Retourne le no du du mois dans une date
| qui correspond à un numéro de série
| Retourne 0 si le numéro de série n'est pas valide
|-----------------------------------------------------------------------------|
*/
function noSerieEnMoisDansDate(intNoSerie) {
      /* Entrez le code ici */
      var intMoisInterieurDate = 0;
      var intAnnee = 1900;
      var intJour = 1;
      var intMois = 1;

      if (noSerieValide(intNoSerie)) {

            while (nombreJoursAnnee(intAnnee) < intNoSerie) {

                  intNoSerie = intNoSerie - nombreJoursAnnee(intAnnee);
                  intAnnee++;
                  //  intJour++;
            }

            while (intNoSerie > nombreJoursMois(intMois, intAnnee)) {

                  intNoSerie = intNoSerie - nombreJoursMois(intMois, intAnnee);
                  intMois++;

            }
            // console.log(nombreJoursMois(intNoSerie,intAnnee))
            intMoisInterieurDate = intMois;

      }

      return intMoisInterieurDate;
}

/*
|-----------------------------------------------------------------------------|
| noSerieEnAnneeDansDate:
| Retourne l'année dans une date
| qui correspond à un numéro de série
| Retourne 0 si le numéro de série n'est pas valide
|-----------------------------------------------------------------------------|
*/
function noSerieEnAnneeDansDate(intNoSerie) {
      /* Entrez le code ici */
      var intAnneeInterieurDate = 0;
      var intAnnee = 1900;
      var intJour = 1;
      var intMois = 1;

      if (noSerieValide(intNoSerie)) {

            while (nombreJoursAnnee(intAnnee) < intNoSerie) {

                  intNoSerie = intNoSerie - nombreJoursAnnee(intAnnee);
                  intAnnee++;

            }
            while (intNoSerie > nombreJoursMois(intMois, intAnnee)) {

                  intNoSerie = intNoSerie - nombreJoursMois(intMois, intAnnee);
                  intMois++;

            }
            intAnneeInterieurDate = intAnnee;

      }
      return intAnneeInterieurDate;
}
/*
|------------------------------------------------------------------------------|
| recupereJourActuel:
| Retourne le jour actuel
|------------------------------------------------------------------------------|
*/
function recupereJourActuel() {
      /* Entrez le code ici */

      var objdate = new Date();

      return objdate.getDate();
}

/*
|------------------------------------------------------------------------------|
| recupereMoisActuel:
| Retourne le mois actuel
|------------------------------------------------------------------------------|
*/
function recupereMoisActuel() {
      /* Entrez le code ici */
      var objdate = new Date();

      return objdate.getMonth();
}

/*
|------------------------------------------------------------------------------|
| recupereAnneeActuelle:
| Retourne l'année actuelle
|------------------------------------------------------------------------------|
*/
function recupereAnneeActuelle() {
      /* Entrez le code ici */

      var objdate = new Date();

      return objdate.getFullYear();
}

/*
|-----------------------------------------------------------------------------|
| dateEnFormatCourt: 
| Retourne la date dans un format court: jj/mm/aaaa
| Par exemple: '01/06/2012'
|-----------------------------------------------------------------------------|
*/
function dateEnFormatCourt(intJour, intMois, intAnnee) {
      /* Entrez le code ici */

      var dateFormatCourt = "";

      var strMois = '';
      var strJour = '';
      var strAnnee = '';


      if (dateValide(intJour, intMois, intAnnee)) {
            if (intJour < 10 && intMois < 10) {
                  strJour = '0' + intJour.toString();
                  strMois = '0' + intMois.toString();
                  strAnnee = intAnnee.toString();
            }
            else if (intJour < 10) {

                  strJour = '0' + intJour.toString();
                  strMois = intMois.toString();
                  strAnnee = intAnnee.toString();
            }
            else if (intMois < 10) {
                  strJour = intJour.toString();
                  strMois = '0' + intMois.toString();
                  strAnnee = intAnnee.toString();
            }

            else {
                  strJour = intJour.toString();
                  strMois = intMois.toString();
                  strAnnee = intAnnee.toString();
            }

            dateFormatCourt = strJour + '/' + strMois + '/' + strAnnee

      }
      return dateFormatCourt;
}

/*
|-----------------------------------------------------------------------------|
| dateEnLitteralCourt: 
| Retourne la date dans un format littéral court
| Si le jour est 1, er est en exposant
| Par exemple: '2 juin 2012'
| Offre la possibilité d'afficher la 1ère lettre du mois en majuscule 
|-----------------------------------------------------------------------------|
*/
function dateEnLitteralCourt(intJour, intMois, intAnnee, binMoisMajuscule) {
      /* Entrez le code ici */

      /* But:Retourne une chaîne de caractères qui contient la date dans un format «littéral court». 
      Si le jour est 1, erest en exposant. 
      
      Offre la possibilité d’afficher la première lettre du mois en minuscule ou en majuscule.
      Retourne la chaîne vide si la date n’est pas valide.
      
      Syntaxe:functiondateEnLitteralCourt(intJour, intMois, intAnnee, binMoisMajuscule)
      
      Contrainte: Utiliser lesfonctions dateValide(intJour, intMois, intAnnee),er()et moisEnLitteral(intMois, binMajuscule) */

      //  return (er(intJour,binMoisMajuscule))

      var mois =moisEnLitteral(intMois,binMoisMajuscule);
      var expojour = er(intJour,true);

      var dateLitteralCourt = '';

     // console.log(mois,jour)

      if (dateValide(intJour,intMois,intAnnee)) {
          dateLitteralCourt = intJour.toString()+expojour+' '+mois+' '+intAnnee.toString();
      }
      return dateLitteralCourt;
}

/*
|-----------------------------------------------------------------------------|
| dateEnLitteralLong: 
| Retourne la date dans un format littéral long
| Si le jour est 1, er est en exposant
| Par exemple: 'Mercredi, le 21 mars 2012'
| Offre la possibilité d'afficher la 1ère lettre du mois en majuscule 
|-----------------------------------------------------------------------------|
*/
function dateEnLitteralLong(intJour, intMois, intAnnee, binMoisMajuscule) {
      /* Entrez le code ici */

      /*But:Retourne une chaîne de caractères qui contient la date dans un format «littéral long». 
      Si le jour est 1, erest en exposant.Offre la possibilité d’afficher la première lettre du mois en minuscule ou en majuscule.
      La première lettre du jour de la semaine est toujours en majuscule.Retourne la chaîne vide si la date n’est pas valide.
      
      Syntaxe:functiondateEnLitteralLong(intJour, intMois, intAnnee, binMoisMajuscule)
      
      Contrainte:Utiliser  les fonctions dateValide(intJour,  intMois,  intAnnee),
      dateEnLitteralCourt(intJour,  intMois,  intAnnee,  bin-MoisMajuscule),dateEnJourSemaine(intJour, intMois, intAnnee)
      etjourSemaineEnLitteral(intJourSem, binMajuscule) */


      var formatLitteralLong = '';

  
      
    

    //  alert(nomJourSemaine)
      

      if (dateValide(intJour,intMois,intAnnee)) {
            var jourSemaine =  dateEnJourSemaine(intJour,intMois,intAnnee);
            var nomJourSemaine = jourSemaineEnLitteral(jourSemaine,binMoisMajuscule);
            var jourLittCours = dateEnLitteralCourt(intJour,binMoisMajuscule);
            var nomMois = moisEnLitteral(intMois,binMoisMajuscule);
            var expojour = er(intJour,true);

            formatLitteralLong = nomJourSemaine+ ', le '+ intJour.toString()+expojour+ jourLittCours + ' '+nomMois +' '+intAnnee.toString();

      }

      return formatLitteralLong;

}

