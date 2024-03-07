const menuIcon = document.querySelector('#menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('#close-icon');
const arrowDown = document.querySelector('.arrowdown');
const arrowDown1 = document.querySelector('.arrowdown1');
const featureList = document.querySelector('#feature-list');
const companyList = document.querySelector('#company-list');
let isShow = true;

function showMenu() {
  sidebar.style.display = 'flex';
}
function hideMenu() {
  sidebar.style.display = 'none';
}

function showFeatureList() {
  if(isShow){
    featureList.style.display = 'none';
    arrowDown.style.transform = 'rotate(0deg)';
    isShow = false;
  }else {
    featureList.style.display = 'block';
    arrowDown.style.transform = 'rotate(180deg)';
    isShow = true;
  }
}

function showCompanyList() {
  if(isShow){
    companyList.style.display = 'none';
    arrowDown1.style.transform = 'rotate(0deg)';
    isShow = false;
  }else {
    companyList.style.display = 'block';
    arrowDown1.style.transform = 'rotate(180deg)';
    isShow = true;
  }
}

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);
arrowDown.addEventListener('click', showFeatureList);
arrowDown1.addEventListener('click', showCompanyList);