 
$(document).ready(function(){
				

    document.addEventListener("deviceready",onDeviceReady,false);       
});
 

     

   
    function onDeviceReady() 
    {
    
  
      document.addEventListener("backbutton", onBackKeyDown, false);
		
		var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
     
         window.location='./first_screen.html';
        return true;
              
    }
    
    /*
    var footerHeight = 0,
           footerTop = 0,
           $footer = $("#footer");
           
       positionFooter();
       
       function positionFooter() {
      
                footerHeight = $footer.height();
                footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
       
               if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                   $footer.css({
                        position: "absolute"
                   }).animate({
                        top: footerTop
                   })
               } else {
                   $footer.css({
                        position: "static"
                   })
               }
               
       }

       $(window)
               .scroll(positionFooter)
               .resize(positionFooter)
               


*/
		
		
		
		
		
		var element = document.getElementById('deviceProperties');
		var device_uuid = device.uuid;
       	var device_name  = device.name;
       	var device_model  = device.model;
       	var device_platform =  device.platform;                        
       	var device_version =  device.version;  
       
       	document.getElementById('device_uuid').value=device_uuid;
		document.getElementById('device_model').value=device_model;
		document.getElementById('device_platform').value=device_platform;
		document.getElementById('device_version').value=device_version;
       	

   
			}


     $(document).ready(function() {
     
     $("#PIN").keyup(function(){
     var value = $('#PIN').val();
     if(value.length>3){
     var loginpin = /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/; 
	  loginpin1=document.getElementById("PIN").value;		
			
			var pin_sequence=loginpin.test(loginpin1);
			
			var country=$('#phone').val().substring(0,2);
            var phonelen=$("#phone").val().length;
            
            if(document.getElementById("PIN").value == "")
			{
		       //alert("Please enter OTP");
		       
		       bootbox.dialog({
		       closeButton: false,
			  message: "Please Enter Your 4digit Security PIN to Log-In.",
			  title: "Alert",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-danger",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
		
				return false;
			}
			
			else if(pin_sequence==false)
			{
			bootbox.dialog({
			closeButton: false,
			  message: "Invalid Log-In PIN.",
			  title: "Alert",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-danger",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
				return false;
			
			}
			
      $("#login_submit").removeAttr('disabled');
      $("#login_submit").addClass("log_submit");
       }
       else{
       $('#login_submit').attr('disabled',true);
       $("#login_submit").removeClass("log_submit");
       }
   });
   
   /*
   $(".fa-paint-brush").click(function(){
  bootbox.dialog({
                title: "Select Theme.",
                message: '<form><div class="row"><div class="col-sm-9"><div class="btn-group" data-toggle="buttons"><label  class="btn btn-default" style="background-color:skyblue !important; border-color: transparent;"><input type="radio" id="q156" name="quality[25]" value="1" /><span id="brush" class="fa fa-paint-brush "></span></label><label  class="btn btn-default" style="background-color:Darkgreen !important;border-color: transparent;"> <input type="radio" id="q157" name="quality[25]" value="2" /><span id="brush" class="fa fa-paint-brush "></span></label><label  class="btn btn-default"style="background-color:Orange !important;border-color: transparent;"><input type="radio" id="q158" name="quality[25]" value="3" /><span id="brush" class="fa fa-paint-brush "></span></label></form>',
                buttons: {
                    success: {
                        label: "Save",
                        className: "btn-success",
                        callback: function () {
                           
                        }
                        
                    }
                    ,danger: {
      label: "Cancel",
      className: "btn-danger",
      callback: function() {
       
      }
    },
                }
            }
        );
});

*/

  
 });
    

	
		$(document).ready(function(){
		
	    logout();
		var device_uuid=getURLParameters("device_uuid");
		var phone=getURLParameters("phone");
		
		 $('#device_uuid').val(device_uuid);
     	
   
     $("#user").val(user);
    
     $("#phone").val(phone);
   
   
   $('#forgot_pin').click(function(event) {
    device_uuid= $('#device_uuid').val();
    
   location.href="forgotpin.html?device_uuid="+device_uuid;
   });
   
   
         $("#login_submit").click(function(event) {
       
        
         var networkState = navigator.connection.type;
         if (networkState == Connection.NONE)
         {
          
           window.location='./first_screen.html';
             return true;   
          
                   
         }

          
   
    
         else	if(document.getElementById("PIN").value == "")
			{
        	 
		       //alert("Please enter OTP");
		       
		       bootbox.dialog({
		       closeButton: false,
			  message: "Please Enter Your 4digit Security PIN to Log-In.",
			  title: "Alert",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-danger",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
		
				return false;
			}
			
			
			
			else
			{
      
      
					
					event.preventDefault();
	      
		  
		  
		  
		  
		   $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    
		  
		   
        $.ajax({
          url:" http://183.82.96.212:9095/services/session/token",
          type:"get",
          dataType:"text",
          timeout:20000,
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
        	  if(textStatus==="timeout") {
				  bootbox.dialog({
				  closeButton: false,
        			  message: "Problem connecting with server. Please try after sometime.",
        			  title: "Alert",
        			  buttons: {
        			    success: {
        			      label: "OK",
        			      className: "btn-danger",
        			      callback: function() {
        			    	  
        			    	  onBackKeyDown();
        			      }
        			    
        			    }
        			    
        			    
        			  }
        			});
        	  }
          },
          success: function (token) {   
 
     //alert("token has been generated");
     
     
            $('#login_submit').html('Loading...');
           	$('#login_submit').prop('disabled', true);
           	$('#login_submit').prop('disabled', true);	
	
      			
                    var user=$("#user").val();
					var phone=$("#phone").val();
					var PIN=$("#PIN").val();  	
					/*alert("user"+user);	
					alert("phone"+phone);
					alert("PIN"+PIN);
					alert("check length PIN"+PIN.length);	
					alert("check length Phone"+phone.length);
					alert("check length User"+user.length);	*/		
					
	
	   $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

		    
					
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
	
            $.ajax({
              url:" http://183.82.96.212:9095/m_service/user/login",
		    data:"username="+encodeURIComponent(phone)+"&password="+encodeURIComponent(PIN),
              type: "POST",
	  		
      		 
              dataType: "json",
              //timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  //alert("inside error");
             
              alert(jqXHR.statusText);
               $('#login_submit').html('Loading...');
				  $('#login_submit').prop('disabled', false);
				  $('#login_submit').prop('disabled', false);
					$('#login_submit').html('Log-In');
					
					
              
              bootbox.dialog({
              closeButton: false,
			  message: "Problem connecting with server. Please try after sometime.",
			  title: "Alert",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-danger",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
               
              },
              success: function (data) {
            
               /*alert(JSON.stringify(data, null, 4));
               alert("check");
             
			
			    var cookie_state = "Cookies Enabled: " + navigator.cookieEnabled;
			    alert("cookie_state"+cookie_state);
			    var x = document.cookie;
			    alert("cookie data"+x);*/
			 
			    window.location = ' http://183.82.96.212:9095/user/user_mobile_access/'+phone+'/'+PIN;
			    
			    
			  }
			  });
			  }
			  });
            
		  
		  
		  
		  
		  
		  
		  

      }
      
      });
      
      
      
      

   
      
      function getURLParameters(paramName)
{
    var sURL = window.document.URL.toString();
    if (sURL.indexOf("?") > 0)
    {
        var arrParams = sURL.split("?");
        var arrURLParams = arrParams[1].split("&");
        var arrParamNames = new Array(arrURLParams.length);
        var arrParamValues = new Array(arrURLParams.length);

        var i = 0;
        for (i = 0; i<arrURLParams.length; i++)
        {
            var sParam =  arrURLParams[i].split("=");
            arrParamNames[i] = sParam[0];
            if (sParam[1] != "")
                arrParamValues[i] = unescape(sParam[1]);
            else
                arrParamValues[i] = "No Value";
        }

        for (i=0; i<arrURLParams.length; i++)
        {
            if (arrParamNames[i] == paramName)
            {
                //alert("Parameter:" + arrParamValues[i]);
                return arrParamValues[i];
            }
        }
        return "No Parameters Found";
    }
}
      
      
      
       });
	  
   
function onBackKeyDown(e) {

   navigator.app.exitApp();
 
} 
   
function about_us(){
 bootbox.dialog({
              closeButton: false,
			  message: "Build Version 1.0.15, Release 1.0",
			  title: "Information",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-info",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
}

function contact_us(){
 bootbox.dialog({
              closeButton: false,
			  message: "Medical Dictionary.inc, Phone number: 9999999999, Email: contactus@medicaldictionary.inc.",
			  title: "Information",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-info",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
}
function locate_us(){
 bootbox.dialog({
              closeButton: false,
			  message: "Softima Services Pvt Ltd.",
			  title: "Information",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-info",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
}




function services(){
 bootbox.dialog({
              closeButton: false,
			  message: "Various Services are available in this application.",
			  title: "Information",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-info",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
}


function calendar(){
 bootbox.dialog({
              closeButton: false,
			  message: "Currently there are no events today.",
			  title: "Information",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-info",
			      callback: function() {
			  
			   
			    
			      }
			    
			    }
			    
			    
			  }
			});
}


function logout()
{
	
	
	 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
		 $.ajax({
          url:"http://183.82.96.212:9095/services/session/token",
          type:"get",
          dataType:"text",
           crossDomain: true,
          error:function (jqXHR, textStatus, errorThrown) {
			
          },
          success: function (token) {   
 
   
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
    
	$.ajax({
		 url:"http://183.82.96.212:9095/m_service/user/logout",		 
		 type:"POST",
		 dataType:"json",	
		 success:function(data)
		 {
		
		
		 	
		 	
		 },
		 error:function(jqXHR,textStatus,errorThrown)
		 {
		 	
	
       
        
		 
		 }
		});
		}
		});
	
	
	}
