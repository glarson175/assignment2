
$(document).ready(function() {
	
	$('#radio').hide();
	$('.messagesent').hide();

});
$('#color-picker').change(function() {
		var x = document.getElementById('color-picker').value;
		var y =document.getElementById('color-picker2').value
		document.body.style.backgroundColor = x;
		if((x=="#400040" && y == "#008000")||(y=="#400040" && x == "#008000"))
		{
			setTimeout(alert("hulk smash!"), 10000);
			
		}
	});
$('#color-picker2').change(function() {
		var x = document.getElementById('color-picker2').value;
		var y =document.getElementById('color-picker').value
		document.getElementById('form-container').style.backgroundColor = x;
		if((x=="#400040" && y == "#008000")||(y=="#400040" && x == "#008000"))
		{
			setTimeout(alert("hulk smash!"),10000);
		}
	});
$('#ComicLover').change(function() {
    if(document.getElementById('ComicLover').checked) {
			$('#radio').show();
		} 
		else {
			$('#radio').hide();
		}
	});
$('rad').change(function() {
    if(document.getElementById('marvel').value == "marvelrad") {
			document.body.style.backgroundImage = "url(./imgs/marvel-comics)";
			document.body.style.backgroundColor = red;
		} 
		else {
			$('#radio').hide();
		}
	});
$('#form').submit(function () {
		if(document.getElementById('firstname').attributes)
		$('.text').hide();
		$('#radio').hide();
		$('.color').hide();
		$('.submit').hide();
		$('.messagesent').show();
		checkFirstName();
		alert('Successful Submit');
		return false;
	});



	