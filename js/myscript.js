
const ul = document.querySelector("ul");

for(let i=0; i <= 100; i++){
    console.log(i);

    if( ((i % 5) == 0) && ((i % 2) == 0)){
        console.log("Sono multiplo di 5 e di 2 : " + i)
    }
    else if((i % 5) == 0){{
        console.log("Sono multiplo di 5: " + i)
        }
    }
    else if((i % 2) == 0){
        console.log("Sono multiplo di 2: " + i);
    }

    const li = document.createElement("li");
    li.append("numero : " + i);

    ul.appendChild(li);
}



