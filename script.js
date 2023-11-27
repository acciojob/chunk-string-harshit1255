function stringChop(str, size) {
	// your code here
		if(str===null)
			return []
	  let arr=[]
	//   console.log(parseInt(str.length/size));
	  let count  = parseInt(str.length/size);
	//   console.log(count);
	  let j=0;
	  let rem =str.length%size;
	//   console.log(rem);
  
	  for(let i=0;i<count;i++)
		  {
			  arr.push(str.substr(j,size));
			  j+=size;
		  }
	  if(rem!==0)
	  {	
		// console.log('hii')
		  arr.push(str.substr(j,size ));
	  }
	  return arr;
  }

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
 