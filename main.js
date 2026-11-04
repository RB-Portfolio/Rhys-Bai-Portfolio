(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  var behind = [].slice.call(document.querySelectorAll('main, footer, .skip'));
  function setOpen(open) {
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    behind.forEach(function (el) { open ? el.setAttribute('inert', '') : el.removeAttribute('inert'); });
    if (open) menu.querySelector('a').focus();
  }
  btn.addEventListener('click', function () { setOpen(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); }
  });
})();
