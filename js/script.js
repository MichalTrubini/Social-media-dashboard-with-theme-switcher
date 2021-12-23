let toggleBox = document.querySelector('.header__toggle');

toggleBox.addEventListener('click', function(){
    
    toggleBox.classList.contains('header__toggle-bg-dark') ? variableSetLight() : variableSetDark();

    let circle = document.querySelector('.header__toggle-circle');

    circle.classList.toggle('header__toggle-circle-move');
    toggleBox.classList.toggle('header__toggle-bg-dark');
    
})

let rootVariable = document.querySelector(':root');

function variableSetDark() {
  rootVariable.style.setProperty('--bg-body1', '#20222F');
  rootVariable.style.setProperty('--bg-body2', 'hsl(230, 17%, 14%)');
  rootVariable.style.setProperty('--bg-card', '#252B42');
  rootVariable.style.setProperty('--bg-card-hover', '#333A55');
  rootVariable.style.setProperty('--col-heading', '#FFFFFF');
  rootVariable.style.setProperty('--col-par1', '#8C98C6');
}

function variableSetLight() {
    rootVariable.style.setProperty('--bg-body1', '#fff');
    rootVariable.style.setProperty('--bg-body2', '#F7F9FF');
    rootVariable.style.setProperty('--bg-card', '#F1F3FA');
    rootVariable.style.setProperty('--bg-card-hover', '#E1E4F0');
    rootVariable.style.setProperty('--col-heading', '#1D1F29');
    rootVariable.style.setProperty('--col-par1', '#63687D');
  }