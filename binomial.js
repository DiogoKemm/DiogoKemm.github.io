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
    var n = document.getElementById('n').value;
    var x = document.getElementById('x').value;
    var p = document.getElementById('p').value;
    document.getElementById('resultado').innerHTML = combinatoria(n, x) * (p**x) * ((1 - p)**(n-x)); 
}

function combinatoria(n, x) {
    return fatorial(n) / (fatorial(x)*fatorial((n-x)));
}

