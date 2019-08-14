app.controller("claimloginctrl",($scope,claimloginfact,$location,$rootScope)=>{
    $scope.login_form=(valid)=>{
        if(valid){            
            $scope.loaderflag=true;
            $scope.msg = 'Form is Valid';
            $scope.flag= false;
            $scope.data = {
                "claimid" : $scope.claimid
            }
            console.log($scope.data);
            let promise = claimloginfact.login($scope.data);
            promise.then((data)=>{
               console.log("data is",data);
               $rootScope.claimstatus = data.data.record;
               $location.path('/claimstatus');
            //    window.location="http://127.0.0.1:5500/client/claim_status.html"
            },(error)=>{
                $scope.loaderflag=false;
                $scope.msg = 'Invalid Claim ID';
                console.log("some error occured",error);
            })
        }
        else{
            //$scope.flag= true;
            $scope.msg = 'Form is Invalid Please check the fields';
        }
    }
})