function init(){
    let navright = document.getElementById("navright");
    let build = "";

    for(let x = 1; x <= 4; x++){
        build += `<a href="mp${x}.html">`
        build += `  <h4> MARKING PD ${x} </h4>`
        build += `</a>`
    }
    navright.innerHTML = build;
    //mp4 setup    
    mpcomfortable(4, 4, 9, 46, 4);
    let mprows4_a = document.querySelectorAll(".mprows4 a");
    for(let x = 0; x < mprows4_a.length; x++){
        randompos(mprows4_a[x], 300, 800, 200, 600);
    }
    
}

