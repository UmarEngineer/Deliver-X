


const check = document.querySelector('#check');
const navList = document.querySelector('.nav-list');
const navListHidden = document.querySelector('.nav-list__hidden');
const checkIcon = document.querySelector('.check-icon');
let k = 0
// check.addEventListener('click', () => {
//    navList.style.display = 'none';
// })

check.addEventListener('click', () => {
   
   if (k === 0) {
      navList.style.display = 'block'
      k = 1;
   }
   // console.log(k);
   else if(k === 1){
      navList.style.display = 'none' 
      k = 0
   }

   // navListHidden.getAttribute = 'hidden'
})



const navItems = document.querySelectorAll('.nav-item');
let active = navItems[0].children[0]

navItems.forEach((navItem) => {
   navItem.addEventListener('click', (e) => {
      active.classList.remove('nav-active')
      e.target.classList.add('nav-active');
      active = e.target
   })
})

const toLeft = document.querySelector('.to-left');
const toRigth = document.querySelector('.to-right');
const resItems = document.querySelectorAll('.restaurant-logo__item');

let ac = 0;
let i = 3
toLeft.addEventListener('click', () =>{
   resItems[ac].classList.add('restaurant-logo__item-hidden');
   ac = i
   resItems[i].classList.toggle('restaurant-logo__item-hidden');
   i--
   if(i === -1){
      i = 3;
   }
})

let j = 1
toRigth.addEventListener('click', () =>{
   resItems[ac].classList.add('restaurant-logo__item-hidden');
   ac = j
   resItems[j].classList.toggle('restaurant-logo__item-hidden');
   j++
   if(j === 4){
      j = 0;
   }
})



