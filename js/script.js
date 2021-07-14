

var persons=[];

function saving(){

var name=$("#Name").val();
var  age = parseFloat(document.getElementById('Age').value);
if(name==='' || isNaN(age)){
    document.getElementById('None').innerHTML='please fill right data';
if(name===''){
     $("#Name").addClass("error");
}
else{$("#Name").removeClass("error");}
 if (isNaN(age)){
    $("#Age").addClass("error");}
    else{$("#Age").removeClass("error");}

}
else{
    $("#Name").removeClass("error");
    $("#Age").removeClass("error");
    document.getElementById('None').innerHTML='';
        
    // let html=`
    // <input type="text" id="Name" placeholder="Name">
    // <button  onclick="view">x</button>
    // <br>
    // <input type="text" id="Name" placeholder="Name">
    // <br>
    // `;
    // $("#None").append(html);
    
    var person = {'name' : name , 'age' : age};
persons.push(person);
view();

        


}
}

var view=function(){

    var db='';
    for(var i=0;i<persons.length;i++){    
        
 db += 'Name: ' + persons[i].name + '<br>' +'Age: ' + persons[i].age +'<br>'+  "<button class='btn btn-danger' onclick=remove("+i+")>Delete</button> "+ '<br>' ;
 
    }
    document.getElementById('db').innerHTML = db ;
}

function remove (id){
persons.splice(id,1);
view();



}
