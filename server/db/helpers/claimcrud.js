const Claim = require("../models/claimmodel");
const appCodes = require("../../utils/appcodes");
const claimOperations = {
    login(claimobj,response){
        Claim.findOne({policy_no : claimobj.policy_no, reg_no : claimobj.reg_no}, (err,doc)=>{
            if(err){
                response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Error in DB During Find Operation'});
            }
            else{
                if(doc){
                    response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'User Login Successfully',record:doc})
                }
                else{
                    response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL,message:'Invalid Policy No or Registration No '});
                }
            }
        })
    },
    claimreg(claimobj,response){
        // uuid = require("uuid");
        // var claimid = uuid();

        // Claim.countDocuments((err,count)=>{
        //     if(err){
        //         console.log(" error in counting documents is  :  ",err," count is ",count);
        //     }
        //     else{
        //         console.log(" error in counting documents is  :  ",err," count is ",count);
        //         claimobj.claimid = count;
        //     }
        // })
        // claimobj.claimid = claimid;

        claimobj.claimid = Math.floor(100000 + Math.random() * 900000)
        claimobj.claimstatus = "Pending";
        Claim.updateOne({
            "policy_no" : claimobj.policy_no , 
            "reg_no" : claimobj.reg_no
        },{
            $set : {
                "loancause" : claimobj.loancause,
                "drivername" : claimobj.drivername,
                "dlno" : claimobj.dlno,
                "dlclass" : claimobj.dlclass,
                "dltype" : claimobj.dltype,
                "expirydate" : claimobj.expirydate,
                "location" : claimobj.location,
                "claimstatus" : "Pending",
                "claimid" : claimobj.claimid,
            }
        },(err)=>{
            if(err){
                console.log('Error in Record Add',err);
                response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Record Not Added Due to Error'});
            }
            else{
                console.log('Record Added..');
                // response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'Record Added',data : claimobj});
                response.json({status:appCodes.SUCCESS,message:'Record Added',data : claimobj});

            }

        })
        // Claim.create(claimobj,(err)=>{
        //     if(err){
        //         console.log('Error in Record Add',err);
        //         response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Record Not Added Due to Error'});
        //     }
        //     else{
        //         console.log('Record Added..');
        //         response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'Record Added',data : claimobj});
        //     }
        // })
    },
    claimlogin(claimobj,response){
        Claim.findOne({claimid : claimobj.claimid},(err,doc)=>{
            if(err){
                response.status(appCodes.SERVER_ERROR).json({status:appCodes.ERROR,message:'Error in DB During Find Operation'});
            }
            else{
                if(doc){
                    response.status(appCodes.OK).json({status:appCodes.SUCCESS,message:'Claim Login Successfully',record:doc})
                }
                else{
                    response.status(appCodes.RESOURCE_NOT_FOUND).json({status:appCodes.FAIL,message:'Invalid Policy No or Registration No '});
                }
            }
        })
    }
}
module.exports = claimOperations;