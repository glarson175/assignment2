$(document).ready(function() {
	$('#radio').hide();
	$('#ComicLover').change(function() {
    if(document.getElementById('ComicLover').checked) {
    $('#radio').show();
		} 
		else {
				$('#radio').hide();
		}
	});
});
$(function() { /* code here */ });