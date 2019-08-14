const app = angular.module("claimapp",['ngRoute']);
app.config(function($locationProvider,$routeProvider){
$locationProvider.hashPrefix('')
$routeProvider.when('/',{
    templateUrl:'login.html'
}).when('/claimreg',{
    templateUrl:'claim_reg.html'
}).when('/claimlogin',{
    templateUrl:'claim_login.html'
}).when('/claimdetails',{
    templateUrl:'claim_details.html'
}).when('/claimstatus',{
    templateUrl:'claim_status.html'
}).otherwise({
    redirectTo:'/'
})
})