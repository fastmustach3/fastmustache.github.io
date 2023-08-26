
onst serviceList = document.getElementById('service-list');

// An array of services
const services = ['Web Development', 'Graphic Design', 'Digital Marketing'];

// Populate the service list
services.forEach(service => {
  const listItem = document.createElement('li');
  listItem.textContent = service;
  serviceList.appendChild(listItem);
});
