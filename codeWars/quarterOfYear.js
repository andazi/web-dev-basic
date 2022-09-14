const quarterOf = (month) => {
    // Your code here
    let months = [
        'january', 'february',
        'march', 'april',
        'may', 'june',
        'july', 'august',
        'september', 'october',
        'november', 'december'
    ]
    checkMonth = month.toLowerCase()
    for (let index = 0; index <= months.length; index++) {
        let month = months[index]
        if (checkMonth === month) {
            if (index < 3) {
                return 1
            }
            if (index < 6) {
                return 2
            }
            if (index < 9) {
                return 3
            }
            else {
                return 4
            }
        }
    }

}

quarterOf('march')