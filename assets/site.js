(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved==='light') root.classList.add('light');

  window.toggleTheme = function(el){
    if(el.checked){
      root.classList.add('light');
      localStorage.setItem('theme','light');
    } else {
      root.classList.remove('light');
      localStorage.setItem('theme','dark');
    }
  }
})();
