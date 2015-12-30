
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
   
   
			}


		$(document).ready(function(){
	
		
	   var device_uuid=getURLParameters("device_uuid");
	   //alert("receivibg"+device_uuid);
		$('#device_uuid').val(device_uuid);
		
	
     $("#phone").intlTelInput({
        allowExtensions: true,
        autoFormat: true,
        autoHideDialCode: true,
        autoPlaceholder: true,
        defaultCountry: "auto",
         geoIpLookup: function(callback) {
          $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
             callback(countryCode);
          });
         },
        nationalMode: false,
        numberType: "MOBILE",
        onlyCountries: ['in','us'],
        preferredCountries: ['in', 'us'],
        utilsScript: "lib/libphonenumber/build/utils.js"
      });
      	$("#phone").intlTelInput("selectCountry", "in");
      	
	
	
   
         $("#otpbtn").click(function(event) {
   
    var phone=$('#phone').val();
   
	 var phone=$('#phone').val();
	 var country=$('#phone').val().substring(0,2);
     var phonelen=$("#phone").val().length;
     
     var mob_ind = /^\+?([0-9]{2})\)?[1-9]{1}[0-9]{9}$/;
   var mob_us = /^\+?([0-9]{1})\)?[1-9]{1}[0-9]{9}$/;
   
   mob_num=document.getElementById("phone").value;
   var num_sequence1=mob_ind.test(mob_num);
   var num_sequence2=mob_us.test(mob_num);
   var mobile_validation=num_sequence1 || num_sequence2;
  
  
  
	if(document.getElementById("phone").value == "")
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please enter Mobile Number.",
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
			
			else if( phonelen < '13' && country=='+9' )
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please enter your 10 digit  Mobile Number.",
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
			else if(phonelen < '12' && country=='+1' )
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please enter your 10 digit  Mobile Number.",
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
			
			else if(mobile_validation==false)
			{
			
			bootbox.dialog({
			closeButton: false,
			  message: "Invalid Mobile Number.",
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
   
	
      			
                    
					var phone=$("#phone").val();
					var device_uuid=$("#device_uuid").val();
					  	
						//alert("phone"+phone);
						//alert("device_uuid"+device_uuid);
		
		
           	
           			
	
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
	 //alert("device_uuid"+device_uuid);
	 // alert("phone"+phone);
            $.ajax({
              url:" http://183.82.96.212:9095/m_service/m_resources/send_forgot_pin_otp",
		    data: { device_uuid:device_uuid,mobile_no:phone,device_registered_in_portal:'0'},
              type: "POST",
	  		
      		 
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  //alert("inside error");
              alert(jqXHR.statusText);
             
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
				//alert("Success Ajax");
            if(data.response=='0')
			   {
			   //alert("success");
			   
			   bootbox.dialog({
             closeButton: false,
			  message: "OTP Sent Successfully.",
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
			
             
			$('#otp').show();
		   $('#verified_otp').show();
			$('#pinbtn').show();
			
			   
			     }
			   else
			   {
			   // alert("Please Try Again");
			   
			   bootbox.dialog({
             closeButton: false,
			  message: "Please Enter Your Registered Mobile Number.",
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
			
			   }
			    
			  }
			  });
			  }
			  });
            
		  
		  
		  
		  
		  
		  
		  

      }
      
      });
      
      
     /*otp verification*/
     $("#pinbtn").click(function(event) {
    
  
   
    var verified_otp=$('#verified_otp').val();
     //alert("verified_otp"+verified_otp);
    
   var device_uuid=$('#device_uuid').val();
    //alert("pin btn click device_uuid"+device_uuid);
    
    
	 //var phone=$('#phone').val();
	// var country=$('#phone').val().substring(0,2);
      var phonelen=$("#phone").val().length;
 // alert("phone"+phone);
  
  
	if(document.getElementById("verified_otp").value == "")
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please Enter Your OTP and click on Verify OTP Button.",
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
			
			
			
			else if(document.getElementById("verified_otp").value < 4)
			
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please enter your 4-digit Security PIN to login .",
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
	
	     var verified_otp=$('#verified_otp').val();
    // alert("verified_otp finally"+verified_otp);
    
   var device_uuid=$('#device_uuid').val();
    //alert("device uuid finally"+device_uuid);
    
  
    
	
            $.ajax({
              url:" http://183.82.96.212:9095/m_service/m_resources/md_forgot_pin_verify_otp",
		    data: { device_uuid:device_uuid,verified_otp:verified_otp},
              type: "POST",
	  		
      		 
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  //alert("inside error");
              //alert(jqXHR.statusText);
             
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
				//alert("Success Ajax");
            if(data.response=='0')
			   {
			  
			
			  // alert("otp verified successfully");  
			   
			   bootbox.dialog({
             closeButton: false,
			  message: "OTP Verified Successfully.",
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
			    location.href="newpin.html?device_uuid="+device_uuid;
             
			
			
			   
			     }
			   else
			   {
			    bootbox.dialog({
			    closeButton: false,
			  message: "OTP is not matching. For new OTP, Please click on Send OTP button.",
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
			   }
			    
			  }
			  });
			  }
			  });
            
		  
		  
		  
		  
		  
		  
		  

      }
      
      });
      
      
      
     
      
function logout()
{
	
	
	 $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });
		 $.ajax({
          url:" http://183.82.96.212:9095/services/session/token",
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
		 url:" http://183.82.96.212:9095/m_service/user/logout",		 
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
 
 function onBackKeyDown() {

 window.location='./login_existing.html';
 
}
	  
   
   



			






