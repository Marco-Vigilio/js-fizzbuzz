
const ul = document.querySelector("ul");

for(let i=0; i <= 100; i++){

    if( ((i % 5) == 0) && ((i % 2) == 0)){
        console.log("FizzBuzz : " + i);
        const li = document.createElement("li");
        li.append("FIZZBUZZ " + i);
        ul.appendChild(li);
    }
    else if((i % 5) == 0){{
        console.log("Buzz: " + i);
        const li = document.createElement("li");
        li.append("BUZZ " + i);
        ul.appendChild(li);

        }
    }
    else if((i % 2) == 0){
        console.log("Fizz: " + i);
        const li = document.createElement("li");
        li.append("FIZZ " + i);
        ul.appendChild(li);
    }
    else{
        console.log(i);
        const li = document.createElement("li");
        li.append(i);
        ul.appendChild(li);
    }

    
}



