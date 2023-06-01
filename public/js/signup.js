		
  		function userClicked(){
console.log("signup userClicked")


          $.post("/signup",{username:$("#username").val(), password:$("#psw").val()},function(data)
{
  console.log("signup callback function")
//added to create infos document for regular user.  
  if (data.redirect == "/session")
  {
    createClicked(data.ident);
  }  
  window.location = data.redirect;
});
          
    			return false;
    		}

      function createClicked(ident){

          $.ajax({
            url: "/create",
            type: "POST",
            data: {
            identifier:ident,
            score:0,
            count: [0,0,0,0,0,0,0],
            totalClicks: 0,
            purchased: [false, false, false, false, false, false, false,false, false, false, 
            false, false, false,false,false, false,false, false, false,false, false, false,false],
            totalScore: 0,
            clickValue: 1
            },
            success: function(data){
              if (!data)
                alert("bad create");
              else
                alert("good create");
              } ,     
            dataType: "json"
          });  
        return false;
      }



  		$(document).ready(function(){ 

        $("#username").keydown( function( event ) {
            if ( event.which === 13 ) {
              userClicked();
              event.preventDefault();
              return false;
            }
        });
        
        $("#psw").keydown( function( event ) {
            if ( event.which === 13 ) {
              userClicked();
              event.preventDefault();
              return false;
            }
        });

  		});  		
    

