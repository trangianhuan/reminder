var str= `<div id="extensionsReminder" class="overlay"> <div class="popup"> <h2>Reminder</h2> <div id="extensionsClose" class="close">&times;</div> <div class="content"> Check format commit <br/> [Task #tickedNo][API|UT] description task </div> </div> </div>`;

document.body.appendChild(htmlToElement(str))

if(/https:\/\/github.com(.*compare)/i.test(location.href)
  || /https:\/\/github.com(.*pull)/i.test(location.href)){
  document.getElementById('extensionsReminder').classList.add('target')
}else{
  document.getElementById('extensionsReminder').classList.remove('target')
}

document.getElementById('extensionsClose').addEventListener('click', function(){
  document.getElementById('extensionsReminder').classList.remove('target')
});

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
}
