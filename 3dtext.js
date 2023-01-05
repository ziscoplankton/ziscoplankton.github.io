var text = document.getElementById('text');
var shadow = '';
for (var i = 0; i < 20; i++) {
    shadow += (shadow? ',':'') + -i * 1 + 'px ' + i*1 + 'px 0 #000';
}
text.style.textShadow = shadow;