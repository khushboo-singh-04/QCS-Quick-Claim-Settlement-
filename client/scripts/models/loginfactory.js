app.factory('loginfactory',($q,$http)=>{
    return{
        login(userdata){
            console.log("userdata is",userdata)
            let defr = $q.defer();
            $http.post('http://localhost:5000/login',userdata).then((data)=>{
                defr.resolve(data);
            },(error)=>{
                defr.reject(error);
            })
            return defr.promise;
        }
    }
})