

function addFun(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    if(num1!=0 && num2!=0){
      
        document.getElementById("result").innerText=Number(num1)+Number(num2);
        document.getElementById('status').innerText=" Addition " ;
        document.getElementById('num1_required').innerText=" ";
        document.getElementById('num2_required').innerText=" ";
        document.getElementById("alert").innerText="";
        document.getElementById('alert').removeAttribute('style');
        document.getElementById('num1').removeAttribute('style');
        document.getElementById('num2').removeAttribute('style');




    }
    else{
        if(num1==0 && num2==0){
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')


        }
        else if(num2==0){
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')
        }else{
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')

        }
     document.getElementById('alert').setAttribute("style","border:thick solid red;text-align:center;color:red; width:400px;margin-left:550px;margin-top:15px;font-size:22px");
       
        document.getElementById("alert").innerText="*** Please Enter Both the Values ***";
    
}
}
function subFun(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    if(num1!=0 && num2!=0){
      
        document.getElementById("result").innerText=Number(num1)-Number(num2);
        document.getElementById('status').innerText=" Substraction " ;
        document.getElementById('num1_required').innerText=" ";
        document.getElementById('num2_required').innerText=" ";
        document.getElementById("alert").innerText="";
        document.getElementById('alert').removeAttribute('style');
        document.getElementById('num1').removeAttribute('style');
        document.getElementById('num2').removeAttribute('style');


    }
    else{
        if(num1==0 && num2==0){
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')


        }
        else if(num2==0){
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')
        }else{
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')

        }
     document.getElementById('alert').setAttribute("style","border:thick solid red;text-align:center;color:red; width:400px;margin-left:550px;margin-top:15px;font-size:22px");
       
        document.getElementById("alert").innerText="*** Please Enter Both the Values ***";
    
}
    
}
function multiFun(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    if(num1!=0 && num2!=0){
      
        document.getElementById("result").innerText=Number(num1)*Number(num2);
        document.getElementById('status').innerText=" Multiplication " ;
        document.getElementById('num1_required').innerText=" ";
        document.getElementById('num2_required').innerText=" ";
        document.getElementById("alert").innerText="";
        document.getElementById('alert').removeAttribute('style');
        document.getElementById('num1').removeAttribute('style');
        document.getElementById('num2').removeAttribute('style');


    }
    else{
        if(num1==0 && num2==0){
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')


        }
        else if(num2==0){
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')
        }else{
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')

        }
     document.getElementById('alert').setAttribute("style","border:thick solid red;text-align:center;color:red; width:400px;margin-left:550px;margin-top:15px;font-size:22px");
       
        document.getElementById("alert").innerText="*** Please Enter Both the Values ***";
    
}
} 
function divFun(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    if(num1!=0 && num2!=0){
      
        document.getElementById("result").innerText=Number(num1)/Number(num2);
        document.getElementById('status').innerText=" Division " ;
        document.getElementById('num1_required').innerText=" ";
        document.getElementById('num2_required').innerText=" ";
        document.getElementById("alert").innerText="";
        document.getElementById('alert').removeAttribute('style');
        document.getElementById('num1').removeAttribute('style');
        document.getElementById('num2').removeAttribute('style');

    }
    else{
        if(num1==0 && num2==0){
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')



        }
        else if(num2==0){
            document.getElementById('num2').setAttribute('style',"border:2px solid red");
            document.getElementById('num2_required').innerText="* Number 2 is required"
            document.getElementById('num2_required').setAttribute('style','color:red')
        }else{
            document.getElementById('num1').setAttribute('style',"border:2px solid red");
            document.getElementById('num1_required').innerText="* Number 1 is required"
            document.getElementById('num1_required').setAttribute('style','color:red')

        }
     document.getElementById('alert').setAttribute("style","border:thick solid red;text-align:center;color:red; width:400px;margin-left:550px;margin-top:15px;font-size:22px");
       
        document.getElementById("alert").innerText="*** Please Enter Both the Values ***";
    
}
   
   
}

 