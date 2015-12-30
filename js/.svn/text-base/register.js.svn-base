
$(document).ready(function(){
				
				
$( "#edit_mobilenumber" ).hide();
$( "#firstname" ).hide();
$( "#email" ).hide();
$( "#roles" ).hide();
$( "#pin_id" ).hide();
$( "#fa_lock" ).hide();
$( "#fa_envelope" ).hide();
$( "#fa_user" ).hide();
$( "#reg" ).hide();





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
       
    
   
    
   
   
	
		$(document).ready(function(){
		
		
	
     $("#pin_id").keyup(function(){
     var value = $('#pin_id').val();
   
     if(value.length>3){
    
      $("#reg").removeAttr('disabled');
      $("#reg").addClass("reg_submit");
       }
       else{
      
       $('#reg').attr('disabled',true);
       $("#reg").removeClass("reg_submit");
       }
       
       });
       
       
       
       
       
        
       
      
       
		var device_uuid=getURLParameters("device_uuid");
		$('#device_uuid').val(device_uuid);
		var device_name=getURLParameters("device_name");
		$('#device_name').val(device_name);
		var device_model=getURLParameters("device_model");
		$('#device_model').val(device_model);
		var device_platform=getURLParameters("device_platform");
		$('#device_platform').val(device_platform);
		var device_version=getURLParameters("device_version");
		$('#device_version').val(device_version);
	
	
	
	    
	    var name=getURLParameters("name");
		var mail=getURLParameters("mail");
		var phone=getURLParameters("phone");
		 //alert("name"+name);
          if(typeof name  === undefined || name==='No Value' || name===null || name=='No Parameters Found')
	    {
	       $("#firstname").val('');
	    }
	    else
	    {
	     $("#firstname").val(name);
	    }
	     if(typeof mail  === undefined || mail==='No Value' || mail===null || mail=='No Parameters Found' )
	     {
		 
		   $("#email").val('');
		 }
		 else
		 {
		 $("#email").val(mail);
		 }
		 
		  $("#email").val('');
		  
		  if(typeof phone  === undefined || phone==='No Value' || phone===null || phone=='No Parameters Found' )
	     {
		 
		   $("#phone").val('');
		 }
		 else
		 {
		 $("#phone").val(phone);
		 }
		 
       
	
	
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
    
   
    $("#otpbtn>b").html('Loading...');
    
   
  var country=$('#phone').val().substring(0,2);
  var phonelen=$("#phone").val().length;
  //alert("len"+phonelen);
  
  var mob_ind = /^\+?([0-9]{2})\)?[1-9]{1}[0-9]{9}$/;
   var mob_us = /^\+?([0-9]{1})\)?[1-9]{1}[0-9]{9}$/;
   
   var alphabet=/^[a-zA-Z\s]+$/;
  alphabet1=document.getElementById("firstname").value;
  var alphabet_sequence=alphabet.test(alphabet1);
  //alert(alphabet_sequence);
  
  
  var email =/\S+@\S+\.\S+/;

email1=document.getElementById("email").value;
  var email_sequence=email.test(email1);
  //alert(email_sequence);
  
  
  
   mob_num=document.getElementById("phone").value;
   var num_sequence1=mob_ind.test(mob_num);
   var num_sequence2=mob_us.test(mob_num);
   var mobile_validation=num_sequence1 || num_sequence2;
  // alert(mobile_validation);
   
   
    

    
			
			
		  if(document.getElementById("phone").value == "")
			{
				 $("#otpbtn>b").html('Send OTP');
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
				 $("#otpbtn>b").html('Send OTP');
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
				 $("#otpbtn>b").html('Send OTP');
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
				 $("#otpbtn>b").html('Send OTP');
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
        	  $("#otpbtn>b").html('Send OTP');
        	  if(textStatus==="timeout") {
        		  $("#otpbtn>b").html('Send OTP');
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
   
	
      			
       				var firstname=$('#firstname').val();
       				
					var lastname="";
					
					var mail=$('#email').val();
					var roles=$('#roles').val();
					var mobile_no=$('#phone').val();
					var pin=$('#pin_id').val();
					
					
var device_uuid = document.getElementById("device_uuid").value;
var device_name = document.getElementById("device_name").value;
var device_model = document.getElementById("device_model").value;
var device_platform = document.getElementById("device_platform").value;
var device_version = document.getElementById("device_version").value;


   


					
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: ' http://183.82.96.212:9095/m_service/m_resources/md_register_device',
              type: "POST",
	  		
      		  data: { device_uuid:device_uuid,mobile_no:mobile_no,mail:mail,firstname:firstname,lastname:lastname,roles:roles,device_name:device_name,device_model:device_model,
      		  device_platform:device_platform,device_version:device_version,pin:pin},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  //alert("inside error");
             // alert(jqXHR.responseText);
              
				  $("#otpbtn>b").html('Send OTP');
              
           	
              
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
			
			   if(data.response=='1')
			   {
			   
			 
			 $(".flag-container").css({"pointer-events": "none"});
			 //$(".intl-tel-input").css({"pointer-events": "none"});
				
			   $("#phone").prop('disabled', true);
			   $( "#edit_mobilenumber" ).show();
			     $( "#otpbtn" ).hide();
			   bootbox.dialog({
			   closeButton: false,
			  message: "OTP sent successfully.",
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
			
		
			
               
               
			
			    $("#otp").show();
			    $("#verified_otp").show();
			    $("#pinbtn").show();
			    
			   }
			   else
			   {
			   
			   bootbox.dialog({
			   closeButton: false,
			  message: "OTP not sent.",
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
			 
			  }
			  });
			  }
			  });
            
		  
		  
		  
		  
		  
		  
		  

      }
      
      });
      
      
      /* PIN verification */
      
      $("#pinbtn").click(function(event) {
    	  
    	  $("#pinbtn>b").html('Loading...');
   // alert("OTP verified successfully");
	if(document.getElementById("verified_otp").value == "")
			
			{
		$("#pinbtn>b").html('Verify OTP');
		bootbox.dialog({
		closeButton: false,
			  message: "Please enter OTP.",
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
				$("#pinbtn>b").html('Verify OTP');
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
      
      
				$('#reg').prop('disabled', true);

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
 
    // alert("token has been generated");
   
	
      			
       				var verified_otp=$('#verified_otp').val();
       				
       				
					
var device_uuid = document.getElementById("device_uuid").value;
var device_name = document.getElementById("device_name").value;
var device_model = document.getElementById("device_model").value;
var device_platform = document.getElementById("device_platform").value;
var device_version = document.getElementById("device_version").value;
var mobile_no=$('#phone').val();

				
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
            $.ajax({
              url: ' http://183.82.96.212:9095/m_service/m_resources/md_verify_otp',
              type: "POST",
	  		
      		  data: { device_uuid:device_uuid,verified_otp:verified_otp,mobile_no:mobile_no},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
				  //alert(jqXHR.statusText);
				  $("#pinbtn>b").html('Verify OTP');
			  //alert("inside error");
             // alert(jqXHR.responseText);
               
              },
              success: function (data) {
			
			   if(data.response=='1')
			   {
			   //alert("OTP Verified successfully");
			   
					
               $( "#verified_otp" ).hide();
               $( "#pinbtn" ).hide();
               $("#pinbtn>b").html('Verify OTP');
                $( "#device_verify_otp" ).val(1);
                $( "#fa_lock" ).hide();
                $( "#fa_envelope" ).hide();
                $( "#fa_user" ).hide();
				$( "#firstname" ).show();
				$( "#email" ).show();
				$( "#roles" ).show();
				$( "#pin_id" ).show();
				$( "#reg" ).show();
				$('#reg').prop('disabled', true);

				
				
				$("#firstname").val('');
				   $("#email").val('');
				   
			   
				$('#firstname').prop('disabled', false);
				 $('#email').prop('disabled', false);
				 $('#roles').prop('disabled', false);
			   
 
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
			
			     $("#pinotp").show();
                 // $("#reg").removeAttr('disabled');
			   }
			   
			   else if(data.response=='2')
			   {
			   
			   var fullname=data.full_name;
			   var email=data.mail;
			   var role=data.role;
			   
			   
			   $("#firstname").val(fullname);
			   $("#email").val(email);
			   $("#roles").val(role);
			   
			   $( "#verified_otp" ).hide();
			   $( "#pinbtn" ).hide();
			   $("#pinbtn>b").html('Verify OTP');
			   $( "#device_verify_otp" ).val(1);
			    $( "#firstname" ).show();
				$( "#email" ).show();
				$( "#roles" ).show();
				$( "#pin_otp" ).show();
				$( "#pin_id" ).show();
				$( "#reg" ).show();
				$('#reg').prop('disabled', true);

				
				 $('#firstname').prop('disabled', true);
				 $('#email').prop('disabled', true);
				 $('#roles').prop('disabled', true);
				
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
					
			   
			   
			   
			   
			   
			   }
			   
			   
			   
			   else
			   {
				   $("#pinbtn>b").html('Verify OTP');
			    bootbox.dialog({
			    closeButton: false,
			  message: "OTP doesn't match.",
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
	  
	  /*Registration submission*/
	  /* PIN verification */
	  
	  
	  
	  
	  
	  
      
      $("#reg").click(function(event) {
	  
	   var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
     
      window.location='./first_screen.html';
        return true;   
     
              
    }

else
{	
    	  
      var loginpin = /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/; 
	  loginpin1=document.getElementById("pin_id").value;		
			
			var pin_sequence=loginpin.test(loginpin1);
			
			var country=$('#phone').val().substring(0,2);
            var phonelen=$("#phone").val().length;
    
            var alphabet=/^[a-zA-Z\s]+$/;
            alphabet1=document.getElementById("firstname").value;
            var alphabet_sequence=alphabet.test(alphabet1);
            //alert(alphabet_sequence);
            
            
            var email =/\S+@\S+\.\S+/;

          email1=document.getElementById("email").value;
            var email_sequence=email.test(email1);
            //alert(email_sequence);
            

            
            if(document.getElementById("firstname").value == "")
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Fullname field cannot be empty.",
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
            else if(document.getElementById("firstname").value.length <3)
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please type atleast 3 characters in Full Name field.",
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
            
            
            
            
            else if(document.getElementById("email").value.length >0 && email_sequence==false)
			{
		
		bootbox.dialog({
		closeButton: false,
			  message: "Invalid Email Address.",
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
			
            
            
            
            
            
            
            
            else if(document.getElementById("pin_id").value == "")
			
			{
			
		
		bootbox.dialog({
		closeButton: false,
			  message: "Please enter 4-digit Security PIN.",
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
			  message: "Log-In PIN must have 4 digits. For security reasons, create a Log-In PIN which should not contain all same 4 digits and sequential numbers.",
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
			
			
			else if( $( "#device_verify_otp" ).val()!= 1)
			{
				
           bootbox.dialog({
		closeButton: false,
			  message: "Please verify your OTP to Register.",
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
         
		else{
			
					//event.preventDefault();
	      
		  
			  $('#reg').prop('disabled', false);
	           
		  
		  
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
   
	
      			
       				var verified_otp=$('#verified_otp').val();
       				//alert("verified_otp"+verified_otp);
       		
       		
       		$('#reg').html('Loading...');
           	  $('#reg').prop('disabled', true);
           	
					
var device_uuid = document.getElementById("device_uuid").value;
var device_name = document.getElementById("device_name").value;
var device_model = document.getElementById("device_model").value;
var device_platform = document.getElementById("device_platform").value;
var device_version = document.getElementById("device_version").value;
var firstname=$('#firstname').val();
       			
					var lastname="";
					
					var mail=$('#email').val();
					var roles=$('#roles').val();
					var mobile_no=$('#phone').val();
					var pin=$('#pin_id').val();
					//alert(mobile_no);
					
                     

					
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	
    
    
    
	
            $.ajax({
              url: ' http://183.82.96.212:9095/m_service/m_resources/md_final_registraion',
              type: "POST",
	  		
      		  data: { device_uuid:device_uuid,mobile_no:mobile_no,mail:mail,firstname:firstname,lastname:lastname,roles:roles,pin:pin,verified_otp:verified_otp},
              dataType: "json",
              timeout:20000,
              crossDomain: true,
              
			  error: function (jqXHR, textStatus, errorThrown) {
			  //alert("inside error");
              //alert(jqXHR.statusText);
              
              
              $('#reg').html('Loading...');
				  $('#reg').prop('disabled', false);
				  $('#reg').prop('disabled', false);
					$('#reg').html('Register');
					
					
              
              bootbox.dialog({
              closeButton: false,
			  message: "There is some problem please try again later.",
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
			  //alert("user"+data.user);
			  user=data.user;
			  phone=data.phone;
			   if(data.response=='1')
			   {
			  // alert("Registration  successfully.");
			  
			  
			  bootbox.dialog({
			  closeButton: false,
			  message: "Registration Successful.",
			  title: "Information",
			  buttons: {
			    success: {
			      label: "OK",
			      className: "btn-info",
			      callback: function() {
			  
			    	  var mobile_number = phone.substr(2);
			    	    
			    		
			    	  window.location='./login_existing.html?user='+user+"&phone="+mobile_number;
			      }
			    
			    }
			    
			    
			  }
			});
			
			    
			   }
			   else
			   {
			   // alert("Registration failed.");
			   
				   
				   $('#reg').prop('disabled', false);
					$('#reg').html('Register');
			   bootbox.dialog({
			   closeButton: false,
			  message: "Registration failed.",
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
      }
      });
      
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
			

 
function onBackKeyDown() {

navigator.app.exitApp();
 
}
 

function edit_number(){
	
	$(".flag-container").css({"pointer-events": "all"});
	 $("#otpbtn>b").html('Send OTP');
 $("#phone").prop('disabled', false);
 $( "#edit_mobilenumber" ).hide();
  $( "#verified_otp" ).hide();
   $( "#pinbtn" ).hide();
 $( "#otpbtn" ).show();
 $('#reg').prop('disabled', true);
 
}

