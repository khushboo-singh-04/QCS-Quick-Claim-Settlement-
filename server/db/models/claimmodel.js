const connection = require("../connection");
const schema = connection.Schema;
const ClaimSchema = new schema({
    policy_no : String,
    reg_no : String,
    loancause : String,
    drivername : String,
    dlno : String,
    dlclass : String,
    dltype : String,
    expirydate : String,
    location : String,
    claimid : String,
    claimstatus : String
});
const Claim = connection.model('userclaims',ClaimSchema);
module.exports = Claim;