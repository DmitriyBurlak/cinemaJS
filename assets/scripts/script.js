let hall = document.querySelector('.application');
class Chair {
    color = '#ffffff';
    width = '50px';
    height = '50px';
    top = '60';
    left = '100';

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

let chair = new Chair();

let createRow = () => {
    let top = 580,
        left = 100,
        amount = 13;
    for (let i = 1; i <= amount; i++) {
        left += 65;
        chair.createChair(top, left);
    }
}
createRow();


let createRow2 = () => {
    let top = 492,
        left = 100,
        amount = 13;
    for (let i = 1; i <= amount; i++) {
        left += 65;
        chair.createChair(top, left);
    }
}
createRow2();

let createRow3 = () => {
    let top = 404,
        left = 100,
        amount = 13;
    for (let i = 1; i <= amount; i++) {
        left += 65;
        chair.createChair(top, left);
    }
}
createRow3();

let createRow4 = () => {
    let top = 316,
        left = 100,
        amount = 13;
    for (let i = 1; i <= amount; i++) {
        left += 65;
        chair.createChair(top, left);
    }
}
createRow4();

let createRow5 = () => {
    let top = 228,
        left = 100,
        amount = 16;
    for (let i = 1; i <= amount; i++) {
        left += 65;
        chair.createChair(top, left);
    }
}
createRow5();

let createRow6 = () => {
    let top = 140,
        left = 100,
        amount = 16;
    for (let i = 1; i <= amount; i++) {
        left += 65;
        chair.createChair(top, left);
    }
}
createRow6();


  









let chairs = document.querySelectorAll('.chair');
chairs.forEach((item, i) => {
    item.id = ++i;
})







// console.log('ch: ', chairs);

// let createRow = () => {
    // let chairr = 'chair';
    // for (let i = 1; i <= 4; i++ ) {
    //     eval( 'var '+ chairr + i +'= new Chair()');
    // }
// }

