// 正则查找：  
var  str  =  "hfdjskahf{jas}kdhfjksahjkfsdy{wei}urwbFjrewnbxzmbz";  
var  re  =  /{(.*?)}/g;//*表匹配前面的子表达式零次或多次,?表匹配前面的子表达式零次或一次  
window.onload=function(){  
    alert(re.test(str));    //true表包含  
    alert(str.replace(re,"费劲"));  
}  
// 1.替换:        
var  str  =  "hfdjskahfjaskdhFjksahjkfsdyweiurwbrewnbxzmbz";        
var  re  =  /fj/;  //Fj  区分大小写        
alert(re.test(str));    //true表包含        
alert(str.replace(re,"费劲"));        
// 2.忽略大小写        
var  re  =  /fj/i;  //加i不区分大小写        
// 3.全局替换        
var  re  =  /fj/g;  //全局        
// 4.忽略大小写+全局替换        
var  re  =  /fj/gi;  //不区分大小写,同时替换所有
// 5.    匹配次数
// ?  匹配表达式0次或者1次
// +  表达式至少出现1次，相当于  {1,}
// *  表达式不出现或出现任意次，相当于  {0,}
// 6.匹配标签,多次替换        
var  str  =  "hfdjskahf{jas}kdhfjksahjkfsdy{wei}urwbFjrewnbxzmbz";        
var  re  =  /{(.*?)}/g;//*表匹配前面的子表达式零次或多次,?表匹配前面的子表达式零次或一次        
window.onload=function(){
    alert(re.test(str));    //true表包含
    alert(str.replace(re,"费劲"));
}          
