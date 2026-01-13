let btn = document.querySelectorAll(".button");
let history = document.getElementById("history")
let input = document.getElementById("input")
let str = ''

btn.forEach((button)=>{
    button.addEventListener("click",()=>{

        if(button.innerText === "="){
            history.innerText = input.value;
            let ans = eval(input.value);
            input.value = ans;
        }
        else if(button.innerText === "AC"){
            input.value = ''
            str = '';
            history.innerText = '';
        }
        else if(button.innerHTML === "X"){
            str = str.substring(0, str.length-1);
            input.value = str
        }
        else{
            str += button.innerText;
            input.value = str;
        }
    });
})