/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

//Fetch the data
let contactStore;

async function getContacts(){
  const res = await fetch('public/data/contacts.json');
  const data = await res.json();
  contactStore = [...data];
  renderContacts(contactStore, document.querySelector('#contacts'));
}

getContacts();

//Render Contacts
function renderContacts(contacts, container){
  container.innerHTML = '';
  contacts.forEach((contact) => {
    const template = `<div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contact.name}</h5>
    </div>
  <small>${contact.email}</small>
  </div>`;
  container.insertAdjacentHTML('beforeend', template);
  })
}