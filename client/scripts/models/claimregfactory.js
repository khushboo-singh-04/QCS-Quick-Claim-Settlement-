app.factory('claimregfact',($q,$http)=>{
    // var claimlist = [];
    return{
        register(claimdata){
            let defr = $q.defer();
            $http.post('http://localhost:5000/claimreg',claimdata).then((data)=>{
                defr.resolve(data);
            },(error)=>{
                defr.reject(error);
            })
            return defr.promise;
        }
        // addclaim(claimobj){
        //     claimlist.push(claimobj);
        // },
        // getclaim(){
        //     return claimlist;
        // }
    }
})