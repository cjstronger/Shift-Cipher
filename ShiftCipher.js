function rot13(str) {
  let conversion = str.split('').map((e, i) => {
    return str.charCodeAt(i) < 64 ? str.charCodeAt(i) : str.charCodeAt(i)+13 })
  let newConversion = conversion.map(e => {
    return e > 90 ? e = (e - 90) + 64 : e})
  let final = String.fromCharCode.apply(null, newConversion)
  return final;
}

rot13("INPUT TEXT HERE");
