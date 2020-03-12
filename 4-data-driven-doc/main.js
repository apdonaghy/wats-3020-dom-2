function createPersonEl(name) {
  let nameEl = document.createElement('li')
  nameEl.innerHTML = `${name}`
  return nameEl
}
fetch('https://swapi.co/api/people/')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let personList = document.querySelector('.person-api-list')
    for (let person of myJson.results) {
      let thisPerson = createPersonEl(person.name);
      personList.appendChild(thisPerson);
      thisPerson.innerHTML
     
    }
  });

 