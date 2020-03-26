




function corroborar(){
	
	document.getElementById("Select1").value
	   
	 if(parseInt(document.getElementById("Select1").value)==1){
	 	document.getElementById("selector2").style.display = "none";
	  	document.getElementById("selector3").style.display = "inline";
	  	
	  }else

	  if(parseInt(document.getElementById("Select1").value)==24){
	  	document.getElementById("selector2").style.display = "inline";
	  	document.getElementById("selector3").style.display = "none";
	  }else 
	  if(parseInt(document.getElementById("Select1").value)!=1 && parseInt(document.getElementById("Select1").value)!=24 ){
	  	document.getElementById("selector3").style.display = "none";
	  	document.getElementById("selector2").style.display = "none";
	  }
	   
}














