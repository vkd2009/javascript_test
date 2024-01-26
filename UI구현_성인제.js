const numberBoard = document.querySelector("#numberBoard");
const numbers = document.querySelectorAll(".numbers");



/* 숫자 입력 */
for(let item of numbers){
    item.addEventListener("click", e => {

        console.log(e.target.textContent);
        numberBoard.textContent +=e.target.textContent;
        
        

    });
}

/* 초기화 버튼 */
document.querySelector("#reset").addEventListener("click",()=>{
    numberBoard.textContent = "";
});

/*  추가 버튼 */
document.querySelector("#add").addEventListener("click",e =>{ 
    const call = document.querySelector("#callNumber2");  
  
    const li = document.createElement("li");       
    li.innerText = numberBoard.innerText;   


    const star = document.createElement("span");
    star.classList.add("colr");
    star.innerHTML = "&star;";

    star.addEventListener("click", e =>{

        const stars = e.target.parentElement;

        stars.classList.toggle("selected");
        if(stars.classList.contains("selected")){
            stars.style.color="red";
         } else{
            stars.style.color = "";
        }
            
        

    });

    li.appendChild(star); 
    callNumber2.prepend(li);


    const span = document.createElement("span");
    span.classList.add("remove-li");
    span.innerHTML = 'X';
        
    span.addEventListener("click", e =>{
        const parent = e.target.parentElement;
        
        li.remove();
    });

        li.appendChild(span);                     
        callNumber2.prepend(li);

    
    
   numberBoard.textContent = "";
});





