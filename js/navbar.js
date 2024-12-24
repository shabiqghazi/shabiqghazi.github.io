const body = document.querySelector('body')

// Transform navbar on scroll
document.addEventListener('scroll', (e) => {
  let y = window.scrollY
  if(y > 80){
    document.querySelector('nav#navbar').classList.add('backdrop-blur-sm')
    document.querySelector('nav#navbar').classList.add('bg-dark/50')
    document.querySelector('nav#navbar').classList.add('md:px-8')
    document.querySelector('nav#navbar').classList.add('shadow')
    document.querySelector('nav#navbar').classList.remove('md:px-16')
    document.querySelector('nav#navbar').classList.remove('h-20')
    document.querySelector('nav#navbar').classList.add('h-16')
  } else {
    document.querySelector('nav#navbar').classList.remove('backdrop-blur-sm')
    document.querySelector('nav#navbar').classList.remove('bg-dark/50')
    document.querySelector('nav#navbar').classList.remove('md:px-8')
    document.querySelector('nav#navbar').classList.remove('shadow')
    document.querySelector('nav#navbar').classList.add('md:px-16')
    document.querySelector('nav#navbar').classList.add('h-20')
    document.querySelector('nav#navbar').classList.remove('h-16')
  }
})

// responsive navbar
const openSidebar = document.getElementById('open-sidebar')
const closeSidebar = document.getElementById('close-sidebar')
const sidebar = document.getElementById('sidebar')

openSidebar.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  sidebar.classList.remove('-right-full');
  sidebar.classList.add('right-0');
})

closeSidebar.addEventListener('click', () => {
  body.style.overflow = 'auto';
  sidebar.classList.remove('right-0');
  sidebar.classList.add('-right-full');
})