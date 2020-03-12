var name = localStorage.getItem("name");
var personalStatement = localStorage.getItem("personalStatement");
var emergencyContact = localStorage.getItem("emergencyContact");
var organDonor = localStorage.getItem("organDonor");
var subDecisionMaker = localStorage.getItem("subDecisionMaker");
var lifeSavingMeasures = localStorage.getItem("lifeSavingMeasures");
var noExtremeMeasures = localStorage.getItem("noExtremeMeasures");
var wishesDate = localStorage.getItem("wishesDate");

if (organDonor == 'Yes') {
   console.log("i DONOR");
}

console.log(name + " | " + personalStatement + " | " + emergencyContact + " | " + organDonor + " | " + subDecisionMaker + " | " + lifeSavingMeasures + " | " + noExtremeMeasures);

document.getElementById("wishes-opening").innerHTML = "<b>these are the official wishes of " + name + ", as of " + wishesDate + "</b>"

document.getElementById("wishes-text").innerHTML = "<b>PERSONAL STATEMENT</b><br>" + personalStatement
                                                   + "<br><br><b>EMERGENCY CONTACT</b><br>" + emergencyContact
                                                   + "<br><br><b>IS ORGAN DONOR?</b><br>" + organDonor
                                                   + "<br><br><b>SUBSTITUTE DECISION MAKER</b><br>" + subDecisionMaker
                                                   + "<br><br><b>WHICH LIFE SAVING MEASURES I APPROVE OF</b><br>" + lifeSavingMeasures
                                                   + "<br><br><b>AT WHAT POINT I NO LONGER WANT LIFE SAVING MEASURES</b><br>" + noExtremeMeasures;
