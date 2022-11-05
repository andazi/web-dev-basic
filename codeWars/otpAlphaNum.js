function getOtp(otpLength) {
    let alphaNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let otp = "";
    for (let char = 0; char <= otpLength; char++) {
        let x = Math.floor(Math.random() * 35);
        x = alphaNum[x];
        otp += x;
    }
    return otp;
}

getOtp(6);
// getOtp(8);