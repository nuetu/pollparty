function openhome() {
    var w = document.getElementById('home');
	var x = document.getElementById('hot');
	var y = document.getElementById('new');
	var z = document.getElementById('following');
	var a = document.getElementById('homenav');
	var b = document.getElementById('hotnav');
	var c = document.getElementById('newnav');
	var d = document.getElementById('followingnav');
    w.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "none";
	a.style.backgroundColor = "#56D9E8";
	b.style.backgroundColor = "transparent";
	c.style.backgroundColor = "transparent";
	d.style.backgroundColor = "transparent";
	document.getElementById("mobilenav").style.width = "0";
}
function openhot() {
	var w = document.getElementById('home');
    var x = document.getElementById('hot');
	var y = document.getElementById('new');
	var z = document.getElementById('following');
	var a = document.getElementById('homenav');
	var b = document.getElementById('hotnav');
	var c = document.getElementById('newnav');
	var d = document.getElementById('followingnav');
	w.style.display = "none";
	x.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";
	a.style.backgroundColor = "transparent";
	b.style.backgroundColor = "#56D9E8";
	c.style.backgroundColor = "transparent";
	d.style.backgroundColor = "transparent";
	document.getElementById("mobilenav").style.width = "0";
}
function opennew() {
	var w = document.getElementById('home');
	var x = document.getElementById('hot');
    var y = document.getElementById('new');
	var z = document.getElementById('following');
	var a = document.getElementById('homenav');
	var b = document.getElementById('hotnav');
	var c = document.getElementById('newnav');
	var d = document.getElementById('followingnav');
	w.style.display = "none";
	x.style.display = "none";
    y.style.display = "block";
	z.style.display = "none";
	a.style.backgroundColor = "transparent";
	b.style.backgroundColor = "transparent";
	c.style.backgroundColor = "#56D9E8";
	d.style.backgroundColor = "transparent";
	document.getElementById("mobilenav").style.width = "0";
}
function openfollowing() {
	var w = document.getElementById('home');
	var x = document.getElementById('hot');
	var y = document.getElementById('new');
    var z = document.getElementById('following');
	var a = document.getElementById('homenav');
	var b = document.getElementById('hotnav');
	var c = document.getElementById('newnav');
	var d = document.getElementById('followingnav');
	w.style.display = "none";
	x.style.display = "none";
	y.style.display = "none";
    z.style.display = "block";
	a.style.backgroundColor = "transparent";
	b.style.backgroundColor = "transparent";
	c.style.backgroundColor = "transparent";
	d.style.backgroundColor = "#56D9E8";
	document.getElementById("mobilenav").style.width = "0";
}
function linkunavailable() {
    alert("You are literally a faggot if you haven't already known");
}
function openmobilenav() {
    document.getElementById("mobilenav").style.width = "100%";
}
function closemobilenav() {
    document.getElementById("mobilenav").style.width = "0";
}