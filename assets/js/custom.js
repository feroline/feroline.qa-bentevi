// TODO: Trazer esse código para atualidade
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('navbar-top').style.top = '0';
	} else {
		document.getElementById('navbar-top').style.top = '-50px';
	}
	prevScrollpos = currentScrollPos;
};
