function isAnagram(a,b){
    let x = a.split('').sort().join("");
    let y = b.split('').sort().join("");
    if(x===y){
      return true;
    }
    return false;
  }
  
  function funWithAnagrams(s){
    let isA = [];
    s.forEach((cV, index, arr)=>{
      for(let i = index+1;i<arr.length;i++){
        if(isAnagram(cV,arr[i])){
          isA.push(arr[i]);
        }
      };
    })
    let difference = s.filter(x => !isA.includes(x));
    return difference.sort();
  }
  
  let s=['code','framer','frame','doce','ecod'];
  console.log(checkAnagramsArray(s));
  