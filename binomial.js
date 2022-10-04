function fatorial(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * fatorial(num - 1))
    }
}

function formulaBinomial() {
    let n = document.getElementById('n').value;
    let x = document.getElementById('x').value;
    let p = document.getElementById('p').value;
    let i;
    let results = 0;

    document.getElementById('teste').innerHTML = x;
    document.getElementById('teste2').innerHTML = x;
    document.getElementById('resultado').innerHTML = combinatoria(n, x) * (p**x) * ((1 - p)**(n-x));

    for (i = 0; i<=x; i++) {
        results += combinatoria(n, i) * (p**i) * ((1 - p)**(n-i));
    }

    document.getElementById('resultado2').innerHTML = results;    
}

function combinatoria(n, x) {
    return fatorial(n) / (fatorial(x)*fatorial((n-x)));
}


