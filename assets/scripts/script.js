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
chair1.createChair(135, 165);
let chair2 = new Chair();
chair2.createChair(135, 230);
let chair3 = new Chair();
chair3.createChair(135, 295);
let chair4 = new Chair();
chair4.createChair(135, 360);
let chair5 = new Chair();
chair5.createChair(135, 425);
let chair6 = new Chair();
chair6.createChair(135, 490);
let chair7 = new Chair();
chair7.createChair(135, 555);
let chair8 = new Chair();
chair8.createChair(135, 620);
let chair9 = new Chair();
chair9.createChair(135, 685);
let chair10 = new Chair();
chair10.createChair(135, 750);
let chair11 = new Chair();
chair11.createChair(135, 815);
let chair12 = new Chair();
chair12.createChair(135, 880);
let chair13 = new Chair();
chair13.createChair(135, 945);
let chair14 = new Chair();
chair14.createChair(135, 1010);
let chair15 = new Chair();
chair15.createChair(135, 1075);
let chair16 = new Chair();
chair16.createChair(135, 1140);



let chairs = document.querySelectorAll('.chair');
chairs.forEach((item, i) => {
    item.id = ++i;
})
console.log('ch: ', chairs);


hall.addEventListener('click', function(event) {
    let fieldCoords = this.getBoundingClientRect();

});


