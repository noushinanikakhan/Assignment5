

// call emergency

document.getElementById("call-emergency").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling National Emergency Service 999") 

    return;
})

document.getElementById("call-police").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Police 999") 
    return;
})

document.getElementById("call-fire").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Fire Service 999") 
    return;
})

document.getElementById("call-Ambulance").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Ambulance 1994-999999") 
    return;
})

document.getElementById("call-WomenChild").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Women & Child Helpline 109") 
    return;
})

document.getElementById("call-Anti-Corruption").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Anti-Corruption 106") 
    return;
})

document.getElementById("call-Electricity").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Electricity 16216") 
    return;
})

document.getElementById("call-Brac").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Brac 16445") 
    return;
})

document.getElementById("call-Railway").addEventListener("click",function(e)
{e.preventDefault()
    alert ("Calling Bangladesh Railway 163") 
    return;
})

// copy button function

// emergency
let copyNumber = 0; 

document.getElementById("copy-emergency").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;
 
    navigator.clipboard.writeText("999")
        .then(() => {
            alert("Copied 999");
        })
  
    console.log("Total copies:", copyNumber);
});

// police

document.getElementById("copy-police").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;

        navigator.clipboard.writeText("999")
        .then(() => {
            alert("Copied 999");
        })
    
    console.log("Total copies:", copyNumber);

    
});
// Fire Service 
document.getElementById("copy-fire").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;

            navigator.clipboard.writeText("999")
        .then(() => {
            alert("Copied 999");
        })
    
    console.log("Total copies:", copyNumber);
});

document.getElementById("copy-ambulance").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;

            navigator.clipboard.writeText("1994-999999")
        .then(() => {
            alert("Copied 1994-999999");
        })
    
    console.log("Total copies:", copyNumber);
});

document.getElementById("copy-women").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;
    
                navigator.clipboard.writeText("109")
        .then(() => {
            alert("Copied 109");
        })

    console.log("Total copies:", copyNumber);
});

document.getElementById("copy-Anti-Corruption").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;

                navigator.clipboard.writeText("106")
        .then(() => {
            alert("Copied 106");
        })
    
    console.log("Total copies:", copyNumber);
});

document.getElementById("copy-Electricity").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;

                navigator.clipboard.writeText("16216")
        .then(() => {
            alert("Copied 16216");
        })
    
    console.log("Total copies:", copyNumber);
});

document.getElementById("copy-Brac").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;
    
                    navigator.clipboard.writeText("16445")
        .then(() => {
            alert("Copied 16445");
        }) 

    console.log("Total copies:", copyNumber);
});

document.getElementById("copy-Railway").addEventListener("click", function() {
  
    const currentCount = parseInt(document.getElementById("copy-btn").innerText);
    
    copyNumber = currentCount + 1;
    
    document.getElementById("copy-btn").innerText = copyNumber;

                        navigator.clipboard.writeText("163")
        .then(() => {
            alert("Copied 163");
        }) 
    
    console.log("Total copies:", copyNumber);
});

//  heart button function

let currentHCount = 0;

document.getElementById("heart-emergency").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-police").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-fire").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-ambulance").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-women").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-Anti-Corruption").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-Electricity").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-Brac").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

document.getElementById("heart-Railway").addEventListener("click", function() {
 
    const currentHeart = parseInt(document.getElementById("heart-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});

// Coin click function

let currentCoin = 0;

document.getElementById("coin-emergency").addEventListener("click", function() {
 
    const currentCoin = parseInt(document.getElementById("coin-btn").innerText) 
    
    currentHCount = currentHeart + 1;
    
    document.getElementById("heart-btn").innerText = currentHCount;
    
    console.log("Total heart:", currentHCount);
});
