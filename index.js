// Mobile navigation
const menuIcon = document.querySelector('#menu-icon');
const sideBar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('#close-icon');
const arrowDown = sideBar.querySelector('.arrowdown');
const arrowDown1 = sideBar.querySelector('.arrowdown1');
const featureList = sideBar.querySelector('.feature-list');
const companyList = sideBar.querySelector('.company-list');

// Desktop navigation
const desktopItems = document.querySelector('.items');
const arrowDownD = desktopItems.querySelector('.arrowdown-d');
const arrowDownD1 = desktopItems.querySelector('.arrowdown-d1');
const company = desktopItems.querySelector('.company');
const feature = desktopItems.querySelector('.features');
let isShow = true;

function showMenu() {
  sideBar.style.display = 'flex';
}
function hideMenu() {
  sideBar.style.display = 'none';
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

function showFeature() {
  if(isShow){
    feature.style.display = 'none';
    arrowDownD.style.transform = 'rotate(0deg)';
    isShow = false;
  }else {
    feature.style.display = 'block';
    arrowDownD.style.transform = 'rotate(180deg)';
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

function showCompany() {
  if(isShow){
    company.style.display = 'none';
    arrowDownD1.style.transform = 'rotate(0deg)';
    isShow = false;
  }else {
    company.style.display = 'block';
    arrowDownD1.style.transform = 'rotate(180deg)';
    isShow = true;
  }
}

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);
arrowDown.addEventListener('click', showFeatureList);
arrowDown1.addEventListener('click', showCompanyList);
arrowDownD.addEventListener('click', showFeature);
arrowDownD1.addEventListener('click', showCompany);