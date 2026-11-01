const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-second-kick');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    
    renderHP: function () {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    renderHPLife: function () {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },
    renderProgressbarHP: function () {
        this.elProgressbar.style.width = this.damageHP + '%';
        
        const percent = (this.damageHP / this.defaultHP) * 100;
        if (percent < 60 && percent > 20) {
            this.elProgressbar.style.backgroundColor = 'orange';
        } else if (percent <= 20) {
            this.elProgressbar.style.backgroundColor = 'red';
        }
    },
    changeHP: function (count) {
        this.damageHP -= count;
        
        if (this.damageHP <= 0) {
            this.damageHP = 0;
            alert(this.name + ' проиграл бой!');
            $btn.disabled = true;
            if ($btn2) $btn2.disabled = true;
        }

        this.renderHP();
    }
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    
    renderHP: function () {
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    renderHPLife: function () {
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
    },
    renderProgressbarHP: function () {
        this.elProgressbar.style.width = this.damageHP + '%';
        
        const percent = (this.damageHP / this.defaultHP) * 100;
        if (percent < 60 && percent > 20) {
            this.elProgressbar.style.backgroundColor = 'orange';
        } else if (percent <= 20) {
            this.elProgressbar.style.backgroundColor = 'red';
        }
    },
    changeHP: function (count) {
        this.damageHP -= count;
        
        if (this.damageHP <= 0) {
            this.damageHP = 0;
            alert(this.name + ' проиграл бой!');
            $btn.disabled = true;
            if ($btn2) $btn2.disabled = true;
        }

        this.renderHP();
    }
};

function makeKick(damageMin, damageMax) {
    character.changeHP(random(damageMin));
    enemy.changeHP(random(damageMax));
}

$btn.addEventListener('click', function () {
    console.log('Kick 1');
    makeKick(20, 20);
});

if ($btn2) {
    $btn2.addEventListener('click', function () {
        console.log('Kick 2 (Super Attack)');
        makeKick(35, 35);
    });
}

function init() {
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();