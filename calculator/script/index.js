function Triangle() {
    document.getElementById("Parallelogram").classList.add("hidden");
    document.getElementById("Triangle").classList.remove("hidden");
    document.getElementById("empty").classList.add("hidden");
}

function Parallelogram() {
    document.getElementById("Parallelogram").classList.remove("hidden");
    document.getElementById("Triangle").classList.add("hidden");
    document.getElementById("empty").classList.add("hidden");
}

function TriangleArea() {
    let alas = document.getElementById("TrianglePedestal").value;
    let tinggi = document.getElementById("TriangleHeight").value;
    let axt = alas * tinggi;
    let hasil = 0.5 * alas * tinggi;
    document.getElementById("TriangleResult").value = ("Hasil : " + hasil);
    document.getElementById("TriangleWay").value = ("Cara : " + alas + " x " + tinggi + " = " + axt + " x " + "1/2" + " = " + hasil);
}
  
function ParallelogramArea() {
    let alas = document.getElementById("ParallelogramPedestal").value;
    let tinggi = document.getElementById("ParallelogramHeight").value;
    let hasil = alas * tinggi;
    document.getElementById("ParallelogramResult").value = ("Hasil : " + hasil);
    document.getElementById("ParallelogramWay").value = ("Cara : " + alas + " x " + tinggi + " = " + hasil);
}

function warn() {
    alert("coming soon");
}