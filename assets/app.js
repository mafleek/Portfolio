(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'light') root.classList.add('light');

  window.setTheme = (mode) => {
    if(mode === 'light') root.classList.add('light');
    else root.classList.remove('light');
    localStorage.setItem('theme', mode);
  };
})();
