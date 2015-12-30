
$(document).ready(function () {




		
		
    document.addEventListener("deviceready", onDeviceReady, false);
    
    
    
});





function onDeviceReady()
{

 document.addEventListener("backbutton", onBackKeyDown, false);
$('#reset_pin_submit').attr('disabled',true);


    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {

        window.location = './first_screen.html';
        return true;

    }
    


        $("#pin_id1").keyup(function () {
            valuepin1();
       });
       
        
        $("#pin_id2").keyup(function () {
             valuepin1();
			  valuepin2();
          
        });
		
	
    

}

 var device_uuid=getURLParameters("device_uuid");
	   
		$('#device_uuid').val(device_uuid);





 
function changepin() {

//alert("submitted");
   $.ajaxSetup({
            xhrFields: {
                withCredentials: true
            }
        });




        $.ajax({
            url: " http://183.82.96.212:9095/services/session/token",
            type: "get",
            dataType: "text",
            timeout: 20000,
            crossDomain: true,
            error: function (jqXHR, textStatus, errorThrown) {


                if (textStatus === "timeout") {
                    bootbox.dialog({
                        closeButton: false,
                        message: "Problem connecting with server. Please try after sometime.",
                        title: "Alert",
                        buttons: {
                            success: {
                                label: "OK",
                                className: "btn-danger",
                                callback: function () {

                                    onBackKeyDown();
                                }

                            }


                        }
                    });
                }
            },
            success: function (token) {


                $.ajaxSetup({
                    xhrFields: {
                        withCredentials: true
                    }
                });



                $('#reset_pin_submit').html('Loading...');
                $('#reset_pin_submit').prop('disabled', true);
                $('#reset_pin_submit').prop('disabled', true);



                var token = token;
                var header = "X-CSRF-TOKEN";
                $(document).ajaxSend(function (e, xhr, options) {
                    xhr.setRequestHeader(header, token);
                });

                var pin = $("#pin_id1").val();
                //alert("pin"+pin);
                var device_uuid=device.uuid;
                //alert("device_uuid"+device_uuid);
                //var device_uuid = $('#device_uuid').val();
                //alert("device_uuid"+device_uuid);

                $.ajax({
                    url: " http://183.82.96.212:9095/m_service/m_resources/md_reset_pin",
                    data: {device_uuid: device_uuid, pin: pin},
                    type: "POST",
                    dataType: "json",
                    timeout: 20000,
                    crossDomain: true,
                    error: function (jqXHR, textStatus, errorThrown) {
                        // alert("inside error");
                        //alert(jqXHR.responseText);

                        $('#reset_pin_submit').html('Loading...');
                        $('#reset_pin_submit').prop('disabled', false);
                        $('#reset_pin_submit').prop('disabled', false);
                        $('#reset_pin_submit').html('Change PIN');




                        bootbox.dialog({
                            closeButton: false,
                            message: "There is some problem please try again.",
                            title: "Alert",
                            buttons: {
                                success: {
                                    label: "OK",
                                    className: "btn-danger",
                                    callback: function () {



                                    }

                                }


                            }
                        });

                    },
                    success: function (data) {



                        // alert("Success Ajax");

                        if (data.response == '0')
                        {
                            //alert("PIN changed Successfully");
                            var phone = data.name;
                            // alert("phone"+phone);
                            var user_id = data.user_id;
                            // alert("user_id"+user_id);

                            bootbox.dialog({
                                closeButton: false,
                                message: "PIN Changed Successfully.",
                                title: "Information",
                                buttons: {
                                    success: {
                                        label: "OK",
                                        className: "btn-info",
                                        callback: function () {

                                        	 window.location = './index.html';
                                        	// window.location="./login_existing.html?pin="+pin;

                                        }

                                    }


                                }
                            });

						// alert("login");
                        
						

                           //window.location = './login_existing.html?device_uuid=' + device_uuid + '&phone=' + phone + '&user=' + user_id;



                        }
                        else
                        {

                            //alert("PIN not generated Successfully");
                            bootbox.dialog({
                                closeButton: false,
                                message: "PIN not generated Successfully.",
                                title: "Alert",
                                buttons: {
                                    success: {
                                        label: "OK",
                                        className: "btn-danger",
                                        callback: function () {



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




function onBackKeyDown() {

    window.location = './login_existing.html';

}


function valuepin1(){
   

 var value = document.getElementById('pin_id1').value;
 if (value.length > 3) {
   var changepin = /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/; 
            var newpin_sequence1=changepin.test(value);

if(newpin_sequence1==false)
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
 else{
 $('#reset_pin_submit').attr('disabled',true);
  } 
 }
 else{
 
 $('#reset_pin_submit').attr('disabled',true);
 }
	   
	   
}


function valuepin2(){
   

 var value = document.getElementById('pin_id2').value;
  var value1 = document.getElementById('pin_id1').value;
 
 if (value.length > 3) {

 	if(value==value1){
 	        var changepin = /^(?!(.)\1{3})(?!0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)\d{4}$/; 
            var newpin_sequence1=changepin.test(value);


   if(newpin_sequence1==false)
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
		  
	else{
	   $('#reset_pin_submit').attr('disabled',false);
	   $("#reset_pin_submit").addClass("new_pin_submit1");
      }
 
  }
  else if(document.getElementById("pin_id1").value == "")
  {
  bootbox.dialog({
			closeButton: false,
			  message: "First field cannot be empty.",
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
  bootbox.dialog({
			closeButton: false,
			  message: "Your entered PIN and confirmation PIN does not match.",
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
  
 }

else{
       $('#reset_pin_submit').attr('disabled',true);
 }
	   
	   
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




function onBackKeyDown() {

window.location = './login_existing.html';
 
}
 









