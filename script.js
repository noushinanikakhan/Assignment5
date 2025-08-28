

// call emergency

let currentCoinValue =100;
let callHistoryData=[];

document.getElementById("call-emergency").addEventListener("click",function(e)
{e.preventDefault()

   const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }

    alert ("Calling National Emergency Service 999");

    const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

    const data= {
        name:"National Emergency Number",
        number: "999",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)


function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 p-4 mb-2">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
})     


document.getElementById("call-police").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Police 999");

    const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;


const data= {
        name:"Police Helpline Number",
        number: "999",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
     
})

document.getElementById("call-fire").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Fire Service 999");

   const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

const data= {
        name:"Fire Service Number",
        number: "999",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
     
})

document.getElementById("call-Ambulance").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Ambulance 1994-999999");
    
     const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

const data= {
        name:"Ambulance Service",
        number: "1994-999999",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
})     

document.getElementById("call-WomenChild").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }

    alert ("Calling Women & Child Helpline 109");

     const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

const data= {
        name:"Women & Child Helpline",
        number: "109",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
  })   

document.getElementById("call-Anti-Corruption").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Anti-Corruption 106");

     const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

const data= {
        name:"Anti-Corruption Helpline",
        number: "106",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
 })    

document.getElementById("call-Electricity").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Electricity 16216");

     const changeCoin = currentCoinValue - 20;

const data= {
        name:"Electricity Helpline",
        number: "16216",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
 })    

document.getElementById("call-Brac").addEventListener("click",function(e)
{e.preventDefault()

           const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Brac 16445");
    
     const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

const data= {
        name:"Brac Helpline",
        number: "16445",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }}
})     

document.getElementById("call-Railway").addEventListener("click",function(e)
{e.preventDefault()

       const currentCoinValue = parseInt(document.getElementById("copy-coin").innerText); 

    if (currentCoinValue<20){
        alert ("You don't have enough coin. You must have minimum 20 coins to call.")
         return;
    }
    alert ("Calling Bangladesh Railway 163");

     const changeCoin = currentCoinValue - 20;
    
    document.getElementById("copy-coin").innerText = changeCoin;

const data= {
        name:"Bangladesh Railway Helpline ",
        number: "163",
       date: new Date().toLocaleTimeString()
    };

       callHistoryData.push(data)
       newCallHistory();
        // console.log(callHistoryData)

function newCallHistory(){
  const callHistory=document.getElementById("call-history")
  callHistory.innerHTML="";


    // document.getElementById("call-emergency").addEventListener("click",function() {
   
     for (const data of callHistoryData){
        const div =document.createElement("div")
        div.innerHTML=`
               <div class="h-20 rounded-xl bg-[#fafafa]  w-[360px] ml-2">
    <div class="w-[360px]  flex justify-between items-center  mt-2 pt-2 pl-4">
  <div class="flex-col">   <h1 class="font-bold ">${data.name}
</h1>
     <p>${data.number}</p></div>
  <div class="pr-2">${data.date}</div>
  </div>
  </div>
        `
        callHistory.appendChild(div)
     }} 
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

// let currentCoin = 0;

// document.getElementById("coin-emergency").addEventListener("click", function() {
 
//     const currentCoin = parseInt(document.getElementById("coin-btn").innerText) 
    
//     currentHCount = currentHeart + 1;
    
//     document.getElementById("heart-btn").innerText = currentHCount;
    
//     console.log("Total heart:", currentHCount);
// });
