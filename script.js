let display = document.getElementById("display")
let history = document.getElementById("history")
let btn = document.querySelectorAll("#btn");
let input = document.getElementById("input");

let body = document.querySelector("body");
let cal2 = document.getElementById("cal2");
let cal3 = document.getElementById("cal3");

let BtnArr = Array.from(btn);
let str = "";

BtnArr.forEach(function(btns){
    btns.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){
            if(input.value == "000"){
                input.value = "♥MOUSUMI♥";
                history.innerHTML = "♥MOUSUMI♥";
                display.style.backgroundColor = "red";
            }
            else if(input.value == "123"){
                input.value = "♥MOUSUMI♥";
                history.innerHTML = "♥LOVE YOU♥";
                display.style.backgroundColor = "red";
            }
            else if(input.value == "1931"){
                multicalc();
            }
            else if(input.value == "3913"){
                cal3.remove();
                cal2.remove();
                cal2.style.border = "none";
                cal3.style.border = "none";
                document.documentElement.removeChild(document.cal2);
                document.documentElement.removeChild(document.cal3);
                input.value = "";
                str = "";

            }
            else{
                history.innerHTML = str;
                let ans = eval(input.value);
                input.value = ans;
                str = ans;
            }
            
        }
        else if(e.target.innerHTML == "X"){
            str = str.substring(0, str.length-1);
            input.value = str
        }
        else if(e.target.innerHTML == "AC"){
            str = '';
            input.value = '';
            history.innerHTML = '';
            display.style.backgroundColor = "white";
        }
        else{
            str += e.target.innerHTML;
            input.value = str
        }
    })
})



function multicalc(){

body.insertBefore(cal2, body.firstChild);
cal2.classList.add("border-solid");
cal2.classList.add("border-2");
cal2.classList.add("h-122.5");
cal2.classList.add("w-75");


let display2 = document.createElement("div");
cal2.appendChild(display2);
let history2 = document.createElement("div");
display2.appendChild(history2);

history2.classList.add("h-15");
history2.classList.add("w-full");
history2.classList.add("font-bold");
history2.classList.add("text-4xl");



display2.classList.add("h-30");
display2.classList.add("w-full");
display2.classList.add("border-solid");
display2.classList.add("border-2");

let input2 = document.createElement("input");
display2.appendChild(input2);
input2.classList.add("w-full");
input2.classList.add("h-15");
input2.classList.add("font-bold");
input2.classList.add("text-4xl");
input2.classList.add("focus:outline-none");
input2.placeholder = "0"




let pad2 = document.createElement("div");
cal2.appendChild(pad2);
pad2.classList.add("border-2");
pad2.classList.add("border-solid");
pad2.classList.add("bg-black");
pad2.classList.add("w-full");
pad2.classList.add("h-92");
pad2.classList.add("flex");
pad2.classList.add("flex-wrap");
pad2.classList.add("justify-center");
pad2.classList.add("items-center");

let btn2 =''
let i=0;
for(;i<20;i++){
    btn2 = document.createElement("button");
    if(i == "0"){
        btn2.innerHTML = "AC"
    }
    else if(i == "1"){
        btn2.innerHTML = "%";
    }
    else if(i == "2"){
        btn2.innerHTML = "/";
    }
    else if(i == "3"){
        btn2.innerHTML = "X";
    }
    else if(i == "4"){
        btn2.innerHTML = "7";
    }
    else if(i == "5"){
        btn2.innerHTML = "8";
    }
    else if(i == "6"){
        btn2.innerHTML = "9";
    }
    else if(i == "7"){
        btn2.innerHTML = "*";
    }
    else if(i == "8"){
        btn2.innerHTML = "4";
    }
    else if(i == "9"){
        btn2.innerHTML = "5";
    }
    else if(i == "10"){
        btn2.innerHTML = "6";
    }
    else if(i == "11"){
        btn2.innerHTML = "-";
    }
    else if(i == "12"){
        btn2.innerHTML = "1";
    }
    else if(i == "13"){
        btn2.innerHTML = "2";
    }
    else if(i == "14"){
        btn2.innerHTML = "3";
    }
    else if(i == "15"){
        btn2.innerHTML = "+";
    }
    else if(i == "16"){
        btn2.innerHTML = "00";
    }
    else if(i == "17"){
        btn2.innerHTML = "0";
    }
    else if(i == "18"){
        btn2.innerHTML = ".";
    }
    else if(i == "19"){
        btn2.innerHTML = "=";
        btn2.classList.add("active:shadow-[inset_0px_0px_10px_4px_rgb(229,96,18)]", "shadow-[0px_0px_10px_4px_rgb(207,89,21)]", "bg-orange-500");

    }
    
    
    
    btn2.classList.add("text-white","w-17", "h-17", "bg-black", "m-0.5", "rounded-full","shadow-[0px_0px_10px_4px_rgb(77,67,67)]","active:shadow-[inset_0px_0px_10px_4px_rgb(77,67,67)]","font-bold");
    pad2.appendChild(btn2);
}


let str2 =''
let BtnArr2 = Array.from(pad2.querySelectorAll("button"));
BtnArr2.forEach(function(btns2){
    btns2.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){
            if(input2.value == "000"){
                input2.value = "♥MOUSUMI♥";
                history2.innerHTML = "♥MOUSUMI♥";
                display2.style.backgroundColor = "red";
            }
            else if(input2.value == "123"){
                input2.value = "♥MOUSUMI♥";
                history2.innerHTML = "♥LOVE YOU♥";
                display2.style.backgroundColor = "red";
            }
            else{
                history2.innerHTML = str2;
                let ans = eval(input2.value);
                input2.value = ans;
                str2 = ans;
            }
            
        }
        else if(e.target.innerHTML == "X"){
            str2 = str2.substring(0, str2.length-1);
            input2.value = str2
        }
        else if(e.target.innerHTML == "AC"){
            str2 = '';
            input2.value = '';
            history2.innerHTML = '';
            display2.style.backgroundColor = "white";
        }
        else{
            str2 += e.target.innerHTML;
            input2.value = str2
        }
    })
})

















cal3.classList.add("border-solid");
cal3.classList.add("border-2");
cal3.classList.add("h-122.5");
cal3.classList.add("w-75");


let display3 = document.createElement("div");
cal3.appendChild(display3);
let history3 = document.createElement("div");
display3.appendChild(history3);

history3.classList.add("h-15");
history3.classList.add("w-full");
history3.classList.add("font-bold");
history3.classList.add("text-4xl");



display3.classList.add("h-30");
display3.classList.add("w-full");
display3.classList.add("border-solid");
display3.classList.add("border-2");

let input3 = document.createElement("input");
display3.appendChild(input3);
input3.classList.add("w-full");
input3.classList.add("h-15");
input3.classList.add("font-bold");
input3.classList.add("text-4xl");
input3.classList.add("focus:outline-none");
input3.placeholder = "0"




let pad3 = document.createElement("div");
cal3.appendChild(pad3);
pad3.classList.add("border-2");
pad3.classList.add("border-solid");
pad3.classList.add("bg-black");
pad3.classList.add("w-full");
pad3.classList.add("h-92");
pad3.classList.add("flex");
pad3.classList.add("flex-wrap");
pad3.classList.add("justify-center");
pad3.classList.add("items-center");

let btn3 =''
let j=0;
for(;j<20;j++){
    btn3 = document.createElement("button");
    if(j == "0"){
        btn3.innerHTML = "AC"
    }
    else if(j == "1"){
        btn3.innerHTML = "%";
    }
    else if(j == "2"){
        btn3.innerHTML = "/";
    }
    else if(j == "3"){
        btn3.innerHTML = "X";
    }
    else if(j == "4"){
        btn3.innerHTML = "7";
    }
    else if(j == "5"){
        btn3.innerHTML = "8";
    }
    else if(j == "6"){
        btn3.innerHTML = "9";
    }
    else if(j == "7"){
        btn3.innerHTML = "*";
    }
    else if(j == "8"){
        btn3.innerHTML = "4";
    }
    else if(j == "9"){
        btn3.innerHTML = "5";
    }
    else if(j == "10"){
        btn3.innerHTML = "6";
    }
    else if(j == "11"){
        btn3.innerHTML = "-";
    }
    else if(j == "12"){
        btn3.innerHTML = "1";
    }
    else if(j == "13"){
        btn3.innerHTML = "2";
    }
    else if(j == "14"){
        btn3.innerHTML = "3";
    }
    else if(j == "15"){
        btn3.innerHTML = "+";
    }
    else if(j == "16"){
        btn3.innerHTML = "00";
    }
    else if(j == "17"){
        btn3.innerHTML = "0";
    }
    else if(j == "18"){
        btn3.innerHTML = ".";
    }
    else if(j == "19"){
        btn3.innerHTML = "=";
        btn3.classList.add("active:shadow-[inset_0px_0px_10px_4px_rgb(229,96,18)]", "shadow-[0px_0px_10px_4px_rgb(207,89,21)]", "bg-orange-500");
    }
    
    
    
    btn3.classList.add("text-white","w-17", "h-17", "bg-black", "m-0.5", "rounded-full","shadow-[0px_0px_10px_4px_rgb(77,67,67)]","active:shadow-[inset_0px_0px_10px_4px_rgb(77,67,67)]","font-bold");
    pad3.appendChild(btn3);
}


let str3 =''
let BtnArr3 = Array.from(pad3.querySelectorAll("button"));
BtnArr3.forEach(function(btns3){
    btns3.addEventListener("click",function(e){
        if(e.target.innerHTML == "="){
            if(input3.value == "000"){
                input3.value = "♥MOUSUMI♥";
                history3.innerHTML = "♥MOUSUMI♥";
                display3.style.backgroundColor = "red";
            }
            else if(input3.value == "123"){
                input3.value = "♥MOUSUMI♥";
                history3.innerHTML = "♥LOVE YOU♥";
                display3.style.backgroundColor = "red";
            }
            else{
                history3.innerHTML = str3;
                let ans = eval(input3.value);
                input3.value = ans;
                str3 = ans;
            }
            
        }
        else if(e.target.innerHTML == "X"){
            str3 = str3.substring(0, str3.length-1);
            input3.value = str3
        }
        else if(e.target.innerHTML == "AC"){
            str3 = '';
            input3.value = '';
            history3.innerHTML = '';
            display3.style.backgroundColor = "white";
        }
        else{
            str3 += e.target.innerHTML;
            input3.value = str3
        }
    })
})
}


