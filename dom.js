let id = 0;
let button = document.getElementById('add');

// the below method allows one to add to the .getElementById a value in which submits to the form a value 
// which moves to the table rows.. 
button.addEventListener('click', () => {
   let table = document.getElementById('table');
   let row = table.insertRow(1);
   row.id = `item-${id}`;
   row.insertCell(0).innerHTML =document.getElementById('wrap-color').value;
   row.insertCell(1).innerHTML =document.getElementById('application').value;
   row.insertCell(2).innerHTML =document.getElementById('schedule-date').value;
   row.insertCell(3).innerHTML =document.getElementById('payment-method').value;
   let actions = row.insertCell(4);
   let elementToDelete = deleteButton(id);
   console.log(row);
   actions.appendChild(elementToDelete);
///this clears the form once the submit button is pressed
document.getElementById('wrap-color').value="";
document.getElementById('application').value="";
document.getElementById('schedule-date').value="";
document.getElementById('payment-method').value="";

});
// this function deletes elements from the table row after the form is cleared to the table. 
function deleteButton(id) {
   let btn = document.createElement('button');
   btn.className = 'btn btn-secondary';
   btn.innerHTML ='Delete';
   btn.onclick = () => {
      console.log('deleting row item-${id}');
      let elementToDelete = document.getElementById(`item-${id}`);
      elementToDelete.parentNode.removeChild(elementToDelete);
   };
   return btn;
}
