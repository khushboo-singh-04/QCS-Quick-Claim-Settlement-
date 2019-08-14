app.controller("claimregctrl",($scope,$rootScope,claimregfact,$location,$window)=>{
    $scope.reg_form=(valid)=>{
        if(valid){
            $scope.loaderflag=true;
            $scope.msg = 'Form is Valid';
            $scope.flag= false;
            $scope.claimdata = {
                "policy_no" : $rootScope.logindetails.policy_no,
                "reg_no" : $rootScope.logindetails.reg_no,
                "loancause" : $scope.loancause,
                "drivername" : $scope.drivername,
                "dlno" : $scope.dlno,
                "dlclass" : $scope.dlclass,
                "dltype" : $scope.dltype,
                "expirydate" : $scope.expirydate,
                "location" : $scope.location
            }
            console.log($scope.claimdata);
            let promise = claimregfact.register($scope.claimdata);
            promise.then((data)=>{
               console.log("data is",data);
            //    $scope.calltoaddclaimlist = claimregfact.addclaim($scope.claimdata); 
               $rootScope.clientdetails = data.data.data;
               $window.scroll(0,0);
               $location.path('/claimdetails');
            //    window.location="http://127.0.0.1:5500/client/claim_details.html";
            },(error)=>{
                $scope.loaderflag = false;
                $scope.msg = 'Invalid Userid or Password';
                console.log("some error occured",error);            
            })
        }
        else{
            // $scope.flag= true;
            $scope.loaderflag=false;
            $scope.msg = 'Form is Invalid Please check the fields';
        }
    }
})