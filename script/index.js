function LuasSegitiga() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let hasil = 0.5 * alas * tinggi;
    document.getElementById("hasil").value = hasil;
}
  
function LuasJajarGenjang() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    let hasil = alas * tinggi;
    document.getElementById("hasil").value = hasil;
}