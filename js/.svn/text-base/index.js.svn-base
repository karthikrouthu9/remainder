	$(document).ready(function(){
					
	
	
	
    document.addEventListener("deviceready",onDeviceReady,false);   
    
    
    
    
    
      

});
	function exit_app() {

		  navigator.app.exitApp();
		}
		 
	
	 function resolution_handling() 
	 {
	     //first way to implement
	     browser_width = $(window).width();
	     browser_height = $(window).height();
	     //alert('browser_width'+browser_width);
	     //alert('browser_height'+browser_height);
	 }
	 
	 
	 

		function onDeviceReady() {
			
 		var element = document.getElementById('deviceProperties');
		var device_uuid = device.uuid;
		var device_name  = device.name;
       	var device_model  = device.model;
       	var device_platform =  device.platform;                        
       	var device_version =  device.version;  
		
		//alert("device_uuid"+device_uuid);
       
 	var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
     
        window.location='./first_screen.html';
        return true;
              
    }
    
    else
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
          timeout: 10000,
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
        			    	  
        			    	  exit_app();
        			      }
        			    
        			    }
        			    
        			    
        			  }
        			});
		        } 
          },
          success: function (token) {   

   	var device_uuid = device.uuid;
   
	
	var token =token;
	var header = "X-CSRF-TOKEN";
    $(document).ajaxSend(function(e, xhr, options) {
        xhr.setRequestHeader(header, token);
    });
	

		
    		is_otp_verified(device_uuid);
   
 function is_otp_verified(device_uuid)
{
	             $.ajax({
              url: ' http://183.82.96.212:9095/m_service/m_resources/is_otp_verified',
              type: "post",
      		  data: 'device_uuid='+device.uuid,
              dataType: "json",
              timeout: 10000,
              crossDomain: true,
              
              
			  error: function (jqXHR, textStatus, errorThrown) {
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
	        			    	  
	        			    	  exit_app();
	        			      }
	        			    
	        			    }
	        			    
	        			    
	        			  }
	        			});
				  }
			        
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
              },
			                success: function (data) {
			                	
							 
							if(data.response=='1')
      {
								
								
								
							     
							     var phone=data.name;
							     var user_id=data.user_id;
							   
	    window.location='./login_existing.html?device_uuid='+device_uuid+'&phone='+phone+'&user='+user_id+'&device_name='+device_name+'&device_model='+device_model
      +'&device_platform='+device_platform+'&device_version='+device_version;
      return false;
      }
      else if(data.response=='2')
      {
       
      window.location='./registration.html?device_uuid='+device_uuid+'&device_name='+device_name+'&device_model='+device_model
      +'&device_platform='+device_platform+'&device_version='+device_version;
      return false;
      }
      else if(data.response=='3')
      {
      var name=data.name;
     var mail=data.mail;
     var phone=data.phone;
    

      window.location='./registration.html?device_uuid='+device_uuid+'&name='+name+'&mail='+mail+'&phone='+phone+'&device_name='+device_name+'&device_model='+device_model
      +'&device_platform='+device_platform+'&device_version='+device_version;
      return false;
      }
      else
      {
      window.location='./registration.html?device_uuid='+device_uuid+'&device_name='+device_name+'&device_model='+device_model
      +'&device_platform='+device_platform+'&device_version='+device_version;
      return false;
      }
										  }
            });

  return false;

}
}
			});
}
}
    			