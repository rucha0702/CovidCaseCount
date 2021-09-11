let content = document.getElementById('content');
let tab1 = document.getElementById('tab1')
let tab2 = document.getElementById('tab2')
let a1 = document.createElement('td');
let a2 = document.createElement('td');
let b1= document.createElement('td');
let b2= document.createElement('td');

init();
function init(){

fetch('https://api.covid19api.com/summary').then((res)=>{
    console.log(res);
   return res.json();
}).then(fun=>{
    console.log(fun);
    // tab2.innerText=fun.Global.NewConfirmed;
    
    // let a1 = document.createElement(p);
    // let a1Text = fun.Global.NewConfirmed;
    // a1.innerText=a1Text;
    // tab1.appendChild(a1);
    // let a = document.createElement('td');
    let a3 = document.createElement('td');
    // a.innerText="1";
    a1.innerText=fun.Global.TotalConfirmed;
    a2.innerText=fun.Global.TotalDeaths;
    // tab1.appendChild(a);
    tab1.appendChild(a1);
    tab1.appendChild(a2);

    b1.innerText= fun.Countries[76].TotalConfirmed;
    b2.innerText= fun.Countries[76].TotalDeaths;
    tab2.appendChild(b1);
    tab2.appendChild(b2);
    
    // tab1.innerText= fun.Global.NewConfirmed;
    // content.innerText=fun.Global.NewConfirmed
}).catch((el)=>{
    console.log("failed");
})
}

function refreshData(){

    clearData();
}
function clearData(){
    tab1.removeChild(a1);
    tab1.removeChild(a2);
    tab2.removeChild(b1);
    tab2.removeChild(b2);
       init();
}