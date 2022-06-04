function digital_root(n) {
  
  if(n >= 10){
    const result = n.toString()
    .split("")
    .map(Number)
    .reduce((prev, curr) => prev + curr)
    return digital_root(result)
  } else {
    return n
  }
}

// 삼항 연산자 사용
function digital_root(n) {
  return n >= 10 ? digital_root(n.toString()
    .split("")
    .map(Number)
    .reduce((prev, curr) => prev + curr)) : n
}
