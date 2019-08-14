app.factory('claimloginfact',($q,$http)=>{
    return{
        login(data){
            let defr = $q.defer();
            $http.post('http://localhost:5000/claimlogin',data).then((data)=>{
                defr.resolve(data);
            },(error)=>{
                defr.reject(error);
            })
            return defr.promise;
        }
    }
})