
function escrevendoLetra(elemento){
    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
       setTimeout(()=>
       elemento.innerHTML += letra, 75 * i)
    });
   }
   const titulo = document.querySelector('.digitando');
   escrevendoLetra(titulo)
   
   
   
   
   function menuMobol(){
   
       const ativaMenu = document.querySelector('#bar');
       console.log(ativaMenu)
      
       const navMenu = document.querySelector('header .navegacao-primaria')
       
       
       ativaMenu.addEventListener('click', () => {
           ativaMenu.classList.toggle('fa-x');
          
           navMenu.classList.toggle('ativado');
       });
      
   }
   
   
   
   
   function sobremim() {
   
   
   const divExperiencia = document.querySelectorAll('.experiencia-content div')
   const liExperiencia = document.querySelectorAll('.experiencia-content ul li')
   
   const divEducation = document.querySelectorAll('.education-content div')
   const liEducation = document.querySelectorAll('.education-content ul li')
   
   divExperiencia[0].classList.add('ativo')
   divEducation[0].classList.add('ativo')
   
   liExperiencia[0].classList.add('ativo')
   liEducation[0].classList.add('ativo')
   
   function slideShow(index){
        divExperiencia.forEach((div)=> {
           div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
           botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
   }
   
   
   function slideShow2(index){
       divEducation.forEach((div)=> {
          div.classList.remove('ativo');
       });
       liEducation.forEach((botao)=>{
          botao.classList.remove('ativo');
       });
       divEducation[index].classList.add('ativo')
       liEducation[index].classList.add('ativo')
   }
   
   
   liExperiencia.forEach((event,index) =>{
       event.addEventListener('click', ()=> {
           slideShow(index)
       })
   })
   
   
   
   liEducation.forEach((event,index) =>{
       event.addEventListener('click', ()=> {
           slideShow2(index)
       })
   })
   
   
   }
   
   sobremim();
   
   const listAll = document.querySelectorAll('.amarzenamento-projetos ul li');
   const buttonGeral = document.querySelectorAll('.modelos-projetos ul li');
   const buttonAll = document.querySelectorAll('.modelos-projetos .all');
   
   function removeClick(index){
       buttonAll.forEach((item) => {
           item.classList.remove('ativo')
       });
       buttonGeral[index].classList.add('ativo')
   }
   
   
   buttonGeral.forEach((item, index) => {
       item.addEventListener('click', () => {
           removeClick(index);
       })
   })
   
   
   
   
   
   
   
   
   const menuItens = document.querySelectorAll('.menu a')
   
   menuItens.forEach(nave =>{
        nave.addEventListener("click", scrollToIdOnClick);
   })
   
   function scrollToIdOnClick(event) {
       event.preventDefault();
       const elemento = event.target;
       const id = elemento.getAttribute('href');
       const section = document.querySelector(id).offsetTop;
       
   
   
       window.scroll({
           top: section,
           behavior: "smooth"
       })
   }
   
   
   
   
   