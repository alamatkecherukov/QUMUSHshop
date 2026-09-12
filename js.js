let k1 = document.getElementById('1');
let k2 = document.getElementById('2');
let k3 = document.getElementById('3');
let k4 = document.getElementById('4');
let gg = document.getElementById('gg')
let kem = document.getElementById ('kem');

k1.addEventListener ('click', function(){
    let cl = kem.content.cloneNode(true);
    
    cl.querySelector('p').textContent = 'Турция';
    cl.querySelector('button').textContent = 'Удалить';
    gg.appendChild(clone);

})
