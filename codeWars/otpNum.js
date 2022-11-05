function getOtp(otpLength){
    let otp = "";
    for(let num = 1; num <= otpLength; num ++){
        let x = Math.floor(Math.random() * 10);
        otp += x;
    }
    return otp;
}

getOtp(6);
getOtp(8);