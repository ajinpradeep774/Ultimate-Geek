function preloader(){
            document.getElementById("loading").style.display = "none";
            document.getElementById("content").style.display = "block";
        }//preloader
        window.onload = preloader;


function validation()
		{
		 	var pswd1=document.reg.psd1.value;
		 	var pswd2=document.reg.psd2.value;
		 	if(pswd1==pswd2)
		 		{return true;}
		 	else{alert("Password must be same..!");
		 		 return false;
		 	    }
		}