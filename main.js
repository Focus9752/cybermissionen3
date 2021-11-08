/*
Kode til at håndtere accordions'ne (ved ikke hvad det hedder på Dansk)
*/

//Vi henter alle elementer på siden med "accordion"-class'en
var acc = document.getElementsByClassName("accordion");
var i;

//Vi looper igennem alle accordions
for (i = 0; i < acc.length; i++) {

    //Følgende kode kører hver gang der klikkes på en accordion
    acc[i].addEventListener("click", function() {
        /* Vi skifter mellem den "aktive" og "inaktive" version
        af classen, hvilket skifter mellem den highlightede og 
        ikke-highlightede version af accordionen */
        this.classList.toggle("active");

        /* Vi finder texten under accordionen. Hvis texten
        allerede bliver vist, skjules den. Ellers så bliver
        den vist. */
        var panel = this.nextElementSibling;
        if (panel.style.display === "inline-block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "inline-block";
        }
    });
}


