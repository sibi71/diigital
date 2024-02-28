function Showtime() {
    const date = new Date();
    let hours = date.getHours();
    let minutues = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM"
    if (hours > 12) {
        // hours = hours - 12;
        hours -= 12
        session = "PM";
    }

    // ternary operator condition ? true:false

    hours = hours < 10 ? "0" + hours : hours
    minutues = minutues < 10 ? "0" + minutues : minutues;
    seconds = seconds < 10 ? "0" + seconds : seconds

    let time = hours + " :" + minutues + ":" + seconds + ":" + session;

    document.getElementById("root").innerHTML = time

    setTimeout(Showtime,1000)
}

// settimeout 
// setinterval


// 1000 ms = 1s

// setInterval(()=>{
//     console.log("hitting every second");
// },5000)

// setTimeout(()=>{
//     console.log("called after 1 second");
// },1000)

Showtime()


