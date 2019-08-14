app.controller("loginctrl",($scope,loginfactory,$location,$rootScope)=>{
    console.log("controller called");

    $scope.login_form=(valid)=>{
        if(valid){
            $scope.loaderflag=true;
            $scope.msg = 'Form is Valid';
            $scope.flag = false;
            $scope.userdata = {
                "policy_no" : $scope.policy_no,
                "reg_no" : $scope.reg_no
            }
            console.log("controller called",$scope.userdata);
            let promise = loginfactory.login($scope.userdata);
            promise.then((data)=>{
               console.log("data is",data);
               $rootScope.logindetails = data.data.record;
            //    $scope.loaderflag=false;
               $location.path('/claimreg');
            //    window.location="http://127.0.0.1:5500/client/claim_reg.html";
            },(error)=>{
                $scope.loaderflag=false;
                $scope.msg = 'Invalid Userid or Password';
                console.log("some error occured",error);
            })
        }
        else{
            // $scope.flag= true;
            $scope.msg = 'Form is Invalid Please check the fields';

        }
    }
})