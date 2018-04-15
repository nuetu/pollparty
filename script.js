var username = "John Doe";
var question = "Who is the better coder, Rowan or Rowan?";
/*Switches to the "Home" tab*/
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
/*Switches to the "Hot" tab*/
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
/*Switches to the "New" tab*/
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
/*Switches to Turns on the "Following" tab*/
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
/*Alerts the user that the a link is unreachable or unimplemented*/
function linkunavailable() {
  alert("This link is unavailable");
}
/*Opens the navigation menu for mobile devices*/
function openmobilenav() {
  document.getElementById("mobilenav").style.width = "100%";
}
/*Closes the navigation menu for movbile devices*/
function closemobilenav() {
  document.getElementById("mobilenav").style.width = "0";
}
/*Adds an an option to the poll creator*/
function addOption() {
	var num = document.getElementById("optionsList").getElementsByTagName("li").length;
	$(function(){
		var last = $("li").last();
    /*Adds a new option to the Poll creator*/
		$("#optionsList").append('<li><input type="text" name="Option" id="option" maxlength="140" placeholder="Option"></li>');
	});
}
/*"Submits" a poll, currently it just pastes a copy of a defualt poll to the feed. Nothing is being sent anywhere.*/
function submitPoll() {
	var feed = document.getElementById("feed");
	var post = document.createElement("div");
	feed.append(post);
	post.setAttribute("class","poll");
	$(function() {
    /*Adds a "Post" to the feed by appending the HTML code*/
    $(post).append('<input type="button" id="username" value="Username" name="feed"><br><time id="time">Time</time><p id="userquestion">Question</p><form><input id="pointer" type="radio" name="option" value="option1">Option 1<br><input id="pointer" type="radio" name="option" value="option2">Option 2<br></form>Like Comment<br><script>addInfo()</script>');
    /*This checks to see if the user is using a mobile device.*/
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      $(".pollwindow").css('display','none');
    }
    $("body").css('background-color','rgb(233,235,238)');
    $(".poll").css('background-color','rgb(255,255,255)');
  });
}
/*Opens the Poll creator window for mobile devices*/
function newMobilePoll() {
  $(function() {
    $(".pollwindow").css('display','block');
    $(".pollwindow").css('z-index','1');
    $(".pollwindow").css('position','fixed');
    $(".pollwindow").css('left','10%');
    $("body").css('background-color','rgba(0,0,0,0.5)');
    $(".poll").css('background-color','rgba(233,235,238,0.5)');
    $(".poll").find('input').css('background-color','rgba(233,235,238,0.5)');
  });

}

function addInfo() {
  $(function() {
    //var username = this.username;
    var question1 = $("textarea").find("#question");
    var uname = $("div").find("#username");
    var qstn = $("div").find("#userquestion");
    var i;
    for(i=0;i<uname.length;i++){
      uname[i].value = username;
    }
    var j;
    for(j=0;j<qstn.length;j++) {
      qstn[j].innerHTML = question1.value;
    }
  });

}
