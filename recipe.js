// rewriting li elements with checkboxes and style info so they can be checked and make strikethrough.
var liElements = document.getElementsByTagName('li');
for (i = 0; i < liElements.length ; i ++) {
  console.log(liElements[i].textContent);
  liElements[i].innerHTML = '<span class="bigcheck"> <label class="bigcheck"><input type="checkbox" class="bigcheck" value="yes"/><span class="bigcheck-target"></span>  <span class="bigcheck-text">' + liElements[i].textContent + '</span></label></span>';
}
