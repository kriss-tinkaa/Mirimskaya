 //mobile navigation

 document.getElementsByClassName('.btn-menu').onclick = function() {
  document.getElementsByClassName('.menu-wrap').classList.toggle("active");
}

document.getElementById('myButton').onclick = function() {
    let menu = document.getElementsByClassName('.menu-wrap');
    let className = ' ' + menu.className + ' ';

    if ( ~className.indexOf(' active ') ) {
      menu.className = className.replace(' active ', ' ');
    } else {
      menu.className += ' active';
    }              
}


// initiative items
function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current != elem[i]) {
            elem[i].classList.remove('active');
          } else if (current.classList.contains('active') === true) {
            current.classList.remove('active');
          } else {
            current.classList.add('active')
          }
        }
        e.preventDefault();
      });
    };
  }
  toggleItem(document.querySelectorAll('.initiative__item'));

// smoothScroll

let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}