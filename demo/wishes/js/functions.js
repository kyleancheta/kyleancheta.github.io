document.getElementById('enter-name-button').addEventListener("click", function() {
   // var temp = document.getElementById('name_input').value;
   var temp = document.querySelector('#name-input').value;
   localStorage["name"] = temp;
   // var temp2 = window.localStorage.getItem('name');
   // No need to do JSON.Parse
});
