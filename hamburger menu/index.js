const clickMenu = document.querySelector('.hamburger');
const menuItem = document.querySelector('.nav-link');

clickMenu.addEventListener('click',()=>{
    menuItem.classList.toggle('activeNav');
    clickMenu.classList.toggle('change');
});




// //bar 1
// const bar1 = clickMenu.querySelectorAll('span')[0];
// //bar 2
// const bar2 = clickMenu.querySelectorAll('span')[1];
// //bar 3
// const bar3 = clickMenu.querySelectorAll('span')[2];

// // reverse bar
// const barOne =document.querySelector('.barOne');
// const barTwo =document.querySelector('.barTwo');
// const barThree =document.querySelector('.barThree');

//     clickMenu.addEventListener('click',()=>{
//         bar1.style.transform = 'translateY(10px) rotate(45deg)';
//         bar2.style.opacity = '0';
//         bar3.style.transform = 'translateY(-10px)rotate(-45deg)';
//     });

//     clickMenu.addEventListener('click', ()=>{
//         clickMenu.classList('barOne');
//         clickMenu.classList('barTwo');
//         clickMenu.classList('barThree');
//     })



// // console.log(clickMenu);
// // console.log(menuItem)