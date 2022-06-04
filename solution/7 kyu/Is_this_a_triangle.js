// 삼각형의 두 변의 합이 다른 한 변의 값보다 크면 삼각형 조건이 성립된다.

function isTriangle(a,b,c){
  if (a+b>c && a+c>b && b+c>a){
    return true;
  } else {
    return false
  };
}
