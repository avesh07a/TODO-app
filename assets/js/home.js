var buttons=document.getElementsByClassName('input');
var x=document.querySelectorAll('ul li');
var delet=document.getElementById('delete');

var value;


for(let i of buttons)
{ y++;
    i.addEventListener('click',function(){
          value=i.value;
          
          delet.href="delete/?id="+value;
      
          x[check(i)].style.backgroundColor="#d3d1d1";
      
    }

    )
    
}
function check(j){
    for(var i=0;i<buttons.length;i++)
    {
        if(j==buttons[i])
        return i;
    }
    return -1;
}
