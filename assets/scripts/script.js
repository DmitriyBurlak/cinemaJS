let rows = document.querySelectorAll('.row');
let zones;
let places;

rows = Array.prototype.slice.call(rows).reverse();

rows.forEach(row => {
   

    zones = row.children;
    for (let zone of zones) {
        console.log('zone: ', zone);
        
        places = zone.children;
        for (let place of places) {
           
            place.addEventListener("click", () => {

                place.classList.toggle('push');
                
            })
        }
    }









});


