let hall = document.querySelector('.application');
class Chair {
    id = '0';
    color = '#ffffff';
    width = '50px';
    height = '50px';
    top = '135';
    left = '170';

    createChair(top, left) {
        let chair = document.createElement('div');
        chair.classList.add('chair');
        chair.style.backgroundColor = this.color;
        chair.style.width = this.width;
        chair.style.height = this.height;
        chair.style.left = left + 'px';
        chair.style.top = top + 'px';
        hall.append(chair);
    }
}

let chair1 = new Chair();
chair1.createChair(135, 220);
let chair2 = new Chair();
chair2.createChair(135, 155);

let chairs = document.querySelectorAll('.chair');
chairs.forEach((item, i) => {
    item.id = i;
})
console.log('ch: ', chairs);







hall.addEventListener('click', function(event) {
    let fieldCoords = this.getBoundingClientRect();

});


