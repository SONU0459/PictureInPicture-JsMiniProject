 
 const videoElenment = document.getElementById("videoVP");
 const buttonBtn = document.getElementById("button-Btn");

 async function videoplyer(){

    try {

        const midiaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElenment.srcObject = midiaStream;
         videoElenment.onloadeddata = () => {

            videoElenment.play();
         }
        
    } catch (error) {
        
        console.log("error is here OOPS");
    }


 };
 buttonBtn.addEventListener("click", async () =>{

//   Disable button 

    buttonBtn.disabled =true;

    // start pic in pic

    await videoElenment.requestPictureInPicture();
    //rest button

    buttonBtn.disabled = false;

 });
 videoplyer();