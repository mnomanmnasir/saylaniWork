//QUESTION NO # 03

var arr = ["dog"];

arr.splice(0,1,"d");

console.log(arr)


arr.push('do');

arr.push('dog');

arr.push('o');

arr.push('og');

arr.push('g');

alert(arr);



//QUESTION NO # 04

function alphabet_order(str)
  {
return str.split('').reverse().join(''); //join mean concatenating the string
  }
console.log(alphabet_order("webmaster"));


//QUESTION NO # 01

function alphabet_order(str)
  {
return str.split('').reverse().join(''); //join mean concatenating the string
  }
console.log(alphabet_order("32243"));



//QUESTION NO # 02

var word = prompt("Enter your word");
var check = "";  // empty string becz this is not declaration

for(var i = word.length - 1 ; i >= 0 ; i--)
{
    // console.log(word[i])
    check += word[i]

}
    if( word === check){
        alert(word +" is Palindrome word")

    }
    else{
        alert(word+ " is not palindrome word")
    }



//QUESTION NO # 05

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' '); //join mean concatination of the string
}
console.log(uppercase("the quick brown fox"));












//QUESTION NO # 06

const str = "web development course"

const longestWord = (str) =>{
const strArray = str.split(' ');
const sortedArray = strArray.sort(
    (strA , strB) =>{
        return strA.length - strB.length;
    }
    
);

return sortedArray;
}

console.log(longestWord(str))




//QUESTION NO # 07

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));







//QUESTION NO # 08

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));






//QUESTION NO # 09

function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));





//QUESTION NO # 10


function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));
