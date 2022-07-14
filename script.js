function vowelOne(s){
  let arr = s.split('')
  const lowers = ['a', 'e', 'i', 'o', 'u' , 'A' , 'E' , 'I' , 'O', 'U']
  let result = ''
  arr.map(item=>{
    if(!lowers.includes(item)){
      result += "0"
    }else{
      result += "1"
    }
  })
  return result
}