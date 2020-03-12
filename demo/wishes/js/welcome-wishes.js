var name = localStorage.getItem("name");

// console.log(name + " | " + personalStatement + " | " + emergencyContact + " | " + organDonor + " | " + subDecisionMaker + " | " + lifeSavingMeasures + " | " + noExtremeMeasures);

document.getElementById("welcome-title-id").innerHTML = "Hello " + name + ",";
