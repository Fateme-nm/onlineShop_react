export default function persinaDigit(number) {
    const persian = {
        0: '۰',1: '۱', 2: '۲',3: '۳',4: '۴',5: '۵', 6: '۶',7: '۷', 8: '۸', 9: '۹'
    }
    const string = (number + '').split('')
    const count = string.length
    let num
    for (let i=0; i<=count ; i++) {
        num = string[i]
        if (persian[num]) {
            string[i] = persian[num]
        }
    }
    return string.join('')
}
