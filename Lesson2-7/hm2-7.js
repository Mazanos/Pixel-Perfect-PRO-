
const paragraphClass = document.querySelector('.paragraphhm2-7')

console.log(paragraphClass);


paragraphClass.addEventListener('click', () => {
    console.log('clicked');
   paragraphClass.classList.toggle('is--active')
})
