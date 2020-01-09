const arr = [1,-1,2,3,5,6,7,8,-10];
cal = function(){
    var count1=0;
    var count2=0;
    var count3=0;
    var count4=0;
    console.log("number " + "is " + "[" + arr + "]");
    for ( let i=0; i < arr.length ; i++){  
      if(arr[i]>=1){      
            count1++
      }
      if(arr[i]<1){
        count2++       
      }
      if(arr[i]%2==0){
        count3++
      }
      if(arr[i]%2==1){
        count4++      
      }
    }
    console.log('plus : ' + count1)
    console.log('minus : ' + count2)
    console.log('even : ' + count3)
    console.log('odd : ' + count4)
    
}

cal()


// {plus: 2, minus: 2, even:3, odd:1}