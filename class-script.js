const menuItems = document.querySelectorAll('.bannière a');
// Gestion des class au clic
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(_item => {
      _item.classList.remove('en-cours');
      _item.classList.remove('pas-en-cours');
    });
    item.classList.remove('pas-en-cours');
    item.classList.add('en-cours');
  });
});

function acceptCookies() {
  // Créez un cookie 'acceptCookies' valable 2 ans
  var d = new Date();
  d.setTime(d.getTime() + (2*365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "acceptCookies=true;" + expires + ";path=/";

  // Baissez la bannière
  document.getElementById('cookieBanner').style.bottom = '-100%';
}
function refuserCookies() {
  // Créez un cookie 'refusCookies' valable 2 ans
  var d = new Date();
  d.setTime(d.getTime() + (2*365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "acceptCookies=false;" + expires + ";path=/";

  // Baissez la bannière
  document.getElementById('cookieBanner').style.bottom = '-100%';
}