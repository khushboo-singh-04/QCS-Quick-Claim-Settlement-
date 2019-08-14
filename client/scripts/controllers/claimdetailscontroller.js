// app.controller("claimdetailsctrl",($scope,$rootScope,claimregfact)=>{
//    // $scope.claimobj = claimregfact.getclaim();
//     $scope.claimobj = $rootScope.clientdetails;
// })

app.controller("claimdetailsctrl",($rootScope)=>{
    var tbody = document.querySelector("#body");
    console.log("Root Scope Contains ",$rootScope.clientdetails);
    var obj = $rootScope.clientdetails;
    for(let key in obj){
        if(key=='claimstatus'){
                continue;
        }
        else{
            var tr = tbody.insertRow();
            tr.insertCell(0).innerText = key.toUpperCase();
            tr.insertCell(1).innerText = obj[key];
        }
    }
})