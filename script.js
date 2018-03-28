
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
    alert("This link is unavailable");
}

function openmobilenav() {
    document.getElementById("mobilenav").style.width = "100%";
}

function closemobilenav() {
    document.getElementById("mobilenav").style.width = "0";
}

function addOption() {
	var num = document.getElementById("optionsList").getElementsByTagName("li").length;
	$(function(){
		var last = $("li").last();
		var newItem = $("#optionsList").append('<li><input type="text" name="Option" id="option" maxlength="140" placeholder="Option"></li>');
	});
}

function submitPoll() {
	var home = document.getElementById("home");
	var post = document.createElement('div');
	home.append(post);
	post.setAttribute("id","feed");
	$(function() {
		$(post).append('<input type="button" id="username" value="Username" name="feed"><br><time id="time">Time</time><p id="userquestion">Question</p><form><input id="pointer" type="radio" name="option" value="option1">Option 1<br><input id="pointer" type="radio" name="option" value="option2">Option 2<br></form>Like Comment<br>');
		$("#home").append('<br>');
	});

}

function newMobilePoll() {

  $(function() {
    
  });
}
