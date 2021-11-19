//Kode til at håndtere accordions

//Hent accordion-elementer fra siden
const accordion = document.getElementsByClassName('container');

//Indstil accordions til at tænde/slukke deres "active"-class når brugeren klikker på dem
for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
