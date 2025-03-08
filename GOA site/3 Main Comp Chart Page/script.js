document.addEventListener("DOMContentLoaded", function () {
    const reeducateMembers = document.getElementById('reeducateMembers');
    const itstepMembers = document.getElementById('itstepMembers');
    const bitcampMembers = document.getElementById('bitcampMembers');
    const algouniMembers = document.getElementById('algouniMembers');

    class Academy {
        constructor(members) {
            this.members = members;
        }
        
        get Info() {
            let color = this.members < 200 ? "red" : "green";
            let arrow = this.members < 200 ? "↓" : "↑";
            return { text: `${this.members} ${arrow}`, color: color };
        }
    }

    const reeducate = new Academy(72);
    reeducateMembers.textContent = reeducate.Info.text;
    reeducateMembers.style.color = reeducate.Info.color;

    const itstep = new Academy(126);
    itstepMembers.textContent = itstep.Info.text;
    itstepMembers.style.color = itstep.Info.color;

    const bitcamp = new Academy(154);
    bitcampMembers.textContent = bitcamp.Info.text;
    bitcampMembers.style.color = bitcamp.Info.color;

    const algouni = new Academy(217);
    algouniMembers.textContent = algouni.Info.text;
    algouniMembers.style.color = algouni.Info.color;
});


const image = document.getElementById('moon-icon');
const navbar = document.querySelector('.navbar-header-main');

image.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'rgb(12, 12, 12)') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'rgb(25,25,25)';
        navbar.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'rgb(12, 12, 12)';
        document.body.style.color = 'white';
        navbar.style.backgroundColor = 'rgb(12, 12, 12)';
    }
});
