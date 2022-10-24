let america = document.querySelector('.america');
let listAmerica = document.querySelector('.listAmerica');
let aisa = document.querySelector('.aisa');
let listAsia = document.querySelector('.listAsia');
let europe = document.querySelector('.europe');
let middleEast = document.querySelector('.middleEast');
let oceania = document.querySelector('.oceania');
let usa = document.querySelector('.USA');
let themeparkUSA = document.querySelector('.themeparkUSA');
let brazil = document.querySelector('.Brazil');
let themeparkBrazil = document.querySelector('.themeparkBrazil');
let vietnam = document.querySelector('.vietnam');
let themeparkVietnam = document.querySelector('.themeparkVietnam');
let japan = document.querySelector('.japan');
let themeparkJapan = document.querySelector('.themeparkJapan');
let china = document.querySelector('.china');
let themeparkChina = document.querySelector('.themeparkChina');
let korea = document.querySelector('.korea');
let themeparkKorea = document.querySelector('.themeparkKorea');

america.addEventListener('mouseover', function() {
  listAmerica.style.display = 'inline-block';
});
usa.addEventListener('mouseover', function() {
  themeparkUSA.style.display = 'inline-block';
});
usa.addEventListener('mouseout', function() {
  themeparkUSA.style.display = 'none';
});
brazil.addEventListener('mouseover', function() {
  themeparkBrazil.style.display = 'inline-block';
});
brazil.addEventListener('mouseout', function() {
  themeparkBrazil.style.display = 'none';
});

asia.addEventListener('mouseover', function() {
  listAsia.style.display = 'inline-block';
});
vietnam.addEventListener('mouseover', function() {
  themeparkVietnam.style.display = 'inline-block';
});
vietnam.addEventListener('mouseout', function() {
  themeparkVietnam.style.display = 'none';
});
japan.addEventListener('mouseover', function() {
  themeparkJapan.style.display = 'inline-block';
});
japan.addEventListener('mouseout', function() {
  themeparkJapan.style.display = 'none';
});
china.addEventListener('mouseover', function() {
  themeparkChina.style.display = 'inline-block';
});
china.addEventListener('mouseout', function() {
  themeparkChina.style.display = 'none';
});
korea.addEventListener('mouseover', function() {
  themeparkKorea.style.display = 'inline-block';
});
korea.addEventListener('mouseout', function() {
  themeparkKorea.style.display = 'none';
});