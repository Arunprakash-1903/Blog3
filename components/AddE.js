export default function AddE() {
    document.querySelector('.button_container').addEventListener("click",()=>{
       
        document.documentElement.scrollTop=0
    
        
      })
}
export  function show(){
  document.querySelector('.header__avatar').addEventListener("click",()=>{
    document.querySelector('.header__avatar').classList.add('.show')

  })
}