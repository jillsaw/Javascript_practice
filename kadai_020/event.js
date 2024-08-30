const btn=document.getElementById('btn');
const text=document.getElementById('text');
const start = { count: 0 };//original
btn.addEventListener('click', ()=>{
  text.textContent='ボタンをクリックしました';
  console.log('クリックされました'); 
//original
 const counter = document.getElementById('counter');
 counter.textContent = ++start.count;
});