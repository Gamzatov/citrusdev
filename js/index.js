// humburger btn
document.querySelector('#btn').addEventListener('click', () => {
  document.querySelector('.nav-wrapper').classList.add('open');
}); 
document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('.nav-wrapper').classList.remove('open');
}); 
  // humburger btn end