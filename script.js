
var SPREADSHEET_ID = "1P4zhRdXW_l8EpTTw0vIx6W6BCChRtFmzgdbYLEvuLqo";
var TAB_NAME = "Formularantworten 1";

/*https://docs.google.com/spreadsheets/d/1T-i7tdeMTNP-t92tlzmoRQeai5vcJ1OVRE-WcnjyYsQ/edit?usp=sharing
/* 
These are two variables (containers for data) that you need to replace with your own information.

1. SPREADSHEET_ID: To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  2. TAB_NAME is just the name of your spreadsheet tab. Write it as it is (it's case-sensitive!). 
    –– The default Google Sheet tab is Sheet1.
    –– This also accepts the tab number, in order
  
*/

/* 
 * Row is the same as entry
   Link to the example spreadsheet: https://docs.google.com/spreadsheets/d/1ndp1b_EgDONxhSEa9rd6N80Y_oEvI57cNbqO9EMUIGQ/edit#gid=0
*/


$(document).ready(function () {

  
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
    
   // console.log(data); 

     // go over everything in data and run the code below append after entry what you want to type
    data.forEach(function (entry, index) {

      
      // Name einfügenm
           let Veranstaltung = $(`<div class='p'>
              <h2 class="name">` + index + "" +
              ` <span class='Kunstwerk'>` + entry.Veranstaltungstitel + `
  
              </div>`).appendTo("#people");  
      
      

      
      // Bild hinzufügem
                 if (entry.Cover+ "" !== "undefined"){ // user uploaded image is not nothing
                  //   console.log(InputValuesArray.at(2).length);
                var uploadedImgParsed = entry.Cover +""; //make string out of the entry not an object
                var beforeReplace = "https://drive.google.com/open?id="; //what is the link coming as
                var afterReplace = "https://lh3.googleusercontent.com/d/"; // where is the high res image hosted
                    
                 $(`<div class='img'><img src="` + uploadedImgParsed.replace(beforeReplace,afterReplace) + `"></div>`).appendTo(Veranstaltung);  
                    console.log(uploadedImgParsed.replace(beforeReplace,afterReplace));
                   

  // Zusammenfassung hinzugüen
      console.log(entry.KurzeZusammenfassung);
        if ( entry.KurzeZusammenfassung.length > 3) {
          let rec = $(`
          <details>
            <summary>` + entry.KurzeZusammenfassung + `</summary>
            <p class="VeranstaltungsBeschreibung">` + entry.LangeBeschreibung + `</p></details>`).appendTo(Veranstaltung);}            

                   
                   
  }}

                 
            
/*

https://drive.google.com/drive/folders/1Mfk5-kWkbHN-ok7ABLKbldnkUPDiejsxFieN5f1WDJPea-wWj3drCUGiSi14nBFpow2Ig4nu?usp=sharing
https://drive.google.com/open?id=1MkFvoueVAjYudOaJSST1J2tu372UWueL/view?usp=sharing
https://drive.google.com/file/d/1MkFvoueVAjYudOaJSST1J2tu372UWueL/view?usp=sharing

                  if (entry.UploadImage+ "" !== "undefined"){
                  //   console.log(InputValuesArray.at(2).length);
                var uploadedImgParsed = entry.UploadImage +"";
                 $(`<div class='img'><img src="` + uploadedImgParsed.replace("open","thumbnail") + `"></div>`).appendTo("#people");  
  }}/*    das fehlt noch undefinned

/d/ statt /open?=
/
/view?usp=sharing ans Ende

https://drive.google.com/file/d/1MkFvoueVAjYudOaJSST1J2tu372UWueL/view?usp=sharing
https://drive.google.com/open?id=1Ac2qIRLilSUzq393wqxW98-LtCPHiALK/view?usp=sharing
               if (InputValuesArray.at(2).length > 3) {
               $(`<div class='img'><img src="` + InputValuesArray.at(2) + `"></div>`).appendTo("#people"); //macht es einzelt ohen Hintergrund
              }else{
                var uploadedImgParsed = entry.UploadImage + "/preview";
                 $(`<div class='img'><img src="` + uploadedImgParsed.replace("open?id=","file/d/") + `"></div>`).appendTo("#people");  
      console.log(uploadedImgParsed.replace("open?id=","file/d/"));
  }/*   


      <a tape="" href=entry.Picture data-id=entry.ID class="tape-cover" title=entry.Titel>
            <div class="_year">1993</div>
            <img src="./tapes/tapes/eraserheads-01-cover.jpg">
            <div class="info">
              Eraserheads<br>
              Ultraelectromagneticpop!
            </div>
          </a>
/* 
      $(`<tr> 
            <td>` + entry.Astronaut + `</td>
            <td>` + entry.Titel + `</td>
            <td>` + entry.Picture + `</td>
         </tr>`)
        .appendTo("table");
        
        
            <div class='img'><img src="` + InputValuesArray.at(2) + `">
*/
    );
  });  
  
});
  


// thank you https://github.com/benborgers/opensheet 


  


// thank you https://github.com/benborgers/opensheet