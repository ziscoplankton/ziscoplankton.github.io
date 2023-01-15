var logo = document.getElementById('logo');
var shadow = '';
for (var i = 0; i < 20; i++) {
    shadow += (shadow? ',':'') + -i * 1 + 'px ' + i*1 + 'px 0 #000';
}
logo.style.textShadow = shadow;