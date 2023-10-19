let userInput = document.getElementById("date"); // Target date id on html
userInput.max = new Date().toISOString().split("T")[0]; // prevent user input future date
let result = document.getElementById("result"); //Posted result


function calculateAge(){    // Calculate function on button html
    let birthDate = new Date(userInput.value); // store value user date

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // store user date to year value
    let y1 = birthDate.getFullYear();


    let today = new Date(); //get today date value

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;   // user past date value
    let y2 = today.getFullYear(); 

    let d3, m3, y3;  // store different date values

    y3 = y2 - y1;

    if(m2 >= m1){   //calculate different from current date to past date value
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `Umur anda <span>${y3}</span> tahun, <span>${m3}</span> bulan, dan <span>${d3}</span> hari`;
}

function getDaysInMonth(year, month){
    return new Date (year, month, 0).getDate(); // Will return
}