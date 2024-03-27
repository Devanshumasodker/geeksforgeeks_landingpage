var sectiontitle = document.querySelectorAll('section');

sectiontitle.forEach(function(section) {
  section.addEventListener('click', function() {
    console.log(section.childNodes[1].textContent);
  });
});