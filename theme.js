localStorage.getItem('theme')

function initThemeSelector() {
  const checkbox = document.getElementById('checkbox')
  const themeStyleSheetLink = document.getElementById('themeStyleSheetLink')
  
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      themeStyleSheetLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css');
      localStorage.setItem('theme','light')
    } else {
      themeStyleSheetLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css');
      localStorage.setItem('theme', 'dark')
    }
  });
}


initThemeSelector();
