var a = new Array(16); 
var k = 0;        

for(var i = 0; i < 16; i++){
    if(i%2 == 0)
        a[i] = ++k;
    else
        a[i] = k;
	console.log(a[i]);
}

for(var i = 0; i<16; i++){
    var r = Math.floor((Math.random() * 16));
            
    var aux = a[i];
    a[i] = a[r];
    a[r] = aux;
}
        
var mat = new Array(4);
        
for (var i = 0; i < 10; i++) {
    mat[i] = new Array(4);
}
        
k = 0;
        
for(var i = 0; i < 4; i++){
    for(var j = 0; j<4; j++){
        mat[i][j] = a[k++];
    }
}
        
var a = 0, ea = null, nr_g=0;
        
function select(x, elem){
    if(nr_g != 8){
        if(a==0){
            a=x;
            ea = elem;
            if(ea.style.cssText == "background-color: yellow;"){
                a=0;
            }
        }
        else{
            if(a==x){
                nr_g ++;
                ea.style.cssText = "background-color: yellow;";
                elem.style.cssText = "background-color: yellow;";
                a=0;
                ea = null;
            }
            else{
                if(elem.style.cssText != "background-color: yellow;"){
                    a=0;
                    setTimeout(function() {
                        ea.value = "";
                        elem.value = "";
                        ea.style.cssText = "background-color: white;";
                        elem.style.cssText = "background-color: white;";
                    }, 400);
                }
            }
		}
    }
}
        
function  getId(element) {
	var row = element.parentNode.parentNode.rowIndex;
    var col = element.parentNode.cellIndex;
    element.value = mat[row][col];
            
    select(element.value, element);
}
        