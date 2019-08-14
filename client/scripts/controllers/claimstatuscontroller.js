app.controller("claimstatusctrl",($rootScope)=>{
    var tbody = document.querySelector("#body");
    console.log("Root Scope Contains ",$rootScope.clientdetails);
    var obj = $rootScope.claimstatus;
    for(let key in obj){
        if(key=='claimstatus' || key == 'claimid'){
            var tr = tbody.insertRow();
            tr.insertCell(0).innerText = key.toUpperCase();
            tr.insertCell(1).innerText = obj[key];
        }
        else{
            continue;
        }
    }
});