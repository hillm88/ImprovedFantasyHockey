function showAlert(id) {
  var select = document.getElementById(id);
  var selectedOption = select.options[select.selectedIndex];
  alert("You have selected the option with value: " + 
  selectedOption.value + " and text: " + selectedOption.text);
}
const express=require('express');
const app =express();

app.get('/',(req,res)=>{res.send('Hello World')});

app.listen(3000,()=>{console.log('server listening on port 3000')});

