let hall = document.querySelector('.application');
class Chair {
    id = 'null';
    color = '#ffffff';
    width = '50px';
    height = '50px';
    top = '170';
    left = '135';

    createChair() {
        let chair = document.createElement('div');
        chair.classList.add('chair');
        chair.style.backgroundColor = this.color;
        chair.style.width = this.width;
        chair.style.height = this.height;
        chair.style.left = this.top + 'px';
        chair.style.top = this.left + 'px';
        hall.append(chair);
    }
}



let chair2 = new Chair();
chair2.createChair();








hall.addEventListener('click', function(event) {
    let fieldCoords = this.getBoundingClientRect();

});


