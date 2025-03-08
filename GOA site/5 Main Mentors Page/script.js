const image = document.getElementById('moon-icon');
        const navbar = document.querySelector('.navbar-header-main');
        
        image.addEventListener('click', () => {
            if (document.body.style.backgroundColor === 'rgb(12, 12, 12)') {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
                navbar.style.backgroundColor = 'white';
            } else {
                document.body.style.backgroundColor = 'rgb(12, 12, 12)';
                document.body.style.color = 'white';
                navbar.style.backgroundColor = 'rgb(12, 12, 12)';
            }
        });


        class Academy {
            constructor(members) {
                this.members = members;
            }
    
            get Info() {
                return this.members;
            }
        }
    
        const reeducate = new Academy(72);
        reeducateMembers.textContent = reeducate.Info;
    
        const itstep = new Academy(91);
        itstepMembers.textContent = itstep.Info;
    
        const bitcamp = new Academy(154);
        bitcampMembers.textContent = bitcamp.Info;
    
        const algouni = new Academy(217);
        algouniMembers.textContent = algouni.Info;