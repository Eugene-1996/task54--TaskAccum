
function accum(s) {
    let abc = ''
    let total = ''
    let qwerty = "";
      for (let i = 0; i<= s.length-1; i++){
       abc = s[i].repeat(i+1) 
       console.log(abc)
        
       qwer = abc.charAt(0).toUpperCase() + abc.slice(1).toLowerCase() 
       console.log(qwer)
        total += '-'
       total +=  qwer
       qwerty = total.slice(1)
 
    }
    return qwerty

  }


  console.log(accum("ZpglnRxqenU"))