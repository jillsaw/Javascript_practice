const btn=document.getElementById('btn');
const text=document.getElementById('text');
const state = { count: 0 };//original
btn.addEventListener('click', ()=>{
  text.textContent='ボタンをクリックしました';
  console.log('クリックされました'); 
//original
 const counter = document.getElementById('counter');
 counter.innerHTML = ++state.count;
});