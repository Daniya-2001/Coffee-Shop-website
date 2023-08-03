const sbtBtn = document.getElementById('submit_btn');
const altDis = document.getElementById('alert-disply');

sbtBtn.addEventListener('click', ()=>{
    altDis.classList.remove('alet');
    altDis.classList.add('alert');
});