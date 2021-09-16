function testVariable() {
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
    var rate=0;
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}

    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;

var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
               const url = "https://api.telegram.org/bot1523927741:AAHT_2gPptssZaG5W4PKRV0H6qBdxkFPNYc/sendMessage?chat_id=-596309063&text="+ result;
			fetch(url)
			.then(response=>{
	
			if(response.status==200)
			{
				console.log("Sent Message successfully");
			    	console.log("Sent Telegram successfully");
				window.location.href = "bc.html";
				
			}
			else
			{
			    		  console.log("Sent Telegram unsuccessfully");
					  fetch(url)
					  .then(response => response.json())
					  .then(data => console.log(data.description));
			}
			 
		})  	
        }

});
}
