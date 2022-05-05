var user_pts=0;
var pc_pts=0;
var contatore_pc=0;
var contatore_user=0;
banner1.style.display = 'none'; 
banner2.style.display = 'none'; 
winner.style.display="block";

/*function to make the banner "FAI LA TUA MOSSA!" visible again and start the next play*/

function resetbanner(){

    banner1.style.display = 'none'; 
    banner2.style.display = 'none'; 
    winner.style.display="block";

    document.getElementById('winner').innerHTML = "FAI LA TUA MOSSA!";
}

/*function to make the player and PC choices visible again*/

function show(){
    document.getElementById("scudo").style.display="block";
    document.getElementById("spada").style.display="block";
    document.getElementById("arco").style.display="block";

    document.getElementById("spada2").style.opacity = '1';
    document.getElementById("arco2").style.opacity = '1';
    document.getElementById("scudo2").style.opacity = '1';
    document.getElementById('winner').innerHTML = "FAI LA TUA MOSSA!";

    document.getElementById('spada').style.pointerEvents = 'auto';
    document.getElementById('scudo').style.pointerEvents = 'auto';
    document.getElementById('arco').style.pointerEvents = 'auto';
 
}



 /*core function*/

function userchoice(scelta){                
    var choice = ['spada', 'arco', 'scudo'];
    const x = choice.indexOf(choice[scelta]);
    const y= choice.indexOf(choice[Math.floor(Math.random() * choice.length)]); /*PC choice is randomly generated*/

    banner1.style.display = 'none'; 
    banner2.style.display = 'none'; 

    /*cycle to determine the winner of the play*/
   
    if((user_pts<=5)&&(pc_pts<=5))   {     
    
    
        if(x == y){
        document.getElementById('winner').innerHTML = "PARITA'"; 
        setTimeout( resetbanner, 2000);
        }  
        else{
            if (x<y) {
               
                user_pts++;
                pictureChange(x,y);
                document.getElementById('winner').innerHTML = "HAI VINTO!";

                setTimeout( resetbanner, 2000);
            } 
            if (x>y){
                pc_pts++;
                pictureChange(x,y);
                document.getElementById('winner').innerHTML = "HAI PERSO";

                setTimeout( resetbanner, 2000);
            }
        }
    }

    /*cycles to hide choices different from the selected one*/

    if(y==0){
        document.getElementById("arco2").style.opacity = '0';
        document.getElementById("scudo2").style.opacity = '0';
      
    }

    if(y==1){
        document.getElementById("scudo2").style.opacity = '0';
        document.getElementById("spada2").style.opacity = '0';
      
    }

    if(y==2){
        document.getElementById("arco2").style.opacity = '0';
        document.getElementById("spada2").style.opacity = '0';
        
    }

    if(choice[scelta]=='spada'){
        
        document.getElementById('spada').style.pointerEvents = 'none';
        document.getElementById("scudo").style.display="none";
        document.getElementById("arco").style.display="none";  
       
        setTimeout(show, 2000);
    }

    if(choice[scelta]=='arco'){
       
        document.getElementById('arco').style.pointerEvents = 'none';
        document.getElementById("scudo").style.display="none";
        document.getElementById("spada").style.display="none";
        
        setTimeout(show, 2000);
    }

    if(choice[scelta]=='scudo'){
       
        document.getElementById('scudo').style.pointerEvents = 'none';
        document.getElementById("arco").style.display="none";
        document.getElementById("spada").style.display="none"; 
        setTimeout(show, 2000);
    }

    /*cycle to determine the game winner and refresh the players points */

    if ((user_pts==5 || pc_pts==5 )){

        if (user_pts>pc_pts){

            contatore_user=contatore_user+1;
            document.getElementById('outputPlayer').innerHTML = (contatore_user);
            banner1.style.display="block";
            winner.style.display="none";
            
            
            document.getElementById("scudo").style.display="none";
            document.getElementById("spada").style.display="none";
            document.getElementById("arco").style.display="none";
            document.getElementById('banner1').innerHTML = "PARTITA TERMINATA, HAI VINTO";

            document.getElementById("spada2").style.opacity = '0';
            document.getElementById("arco2").style.opacity = '0';
            document.getElementById("scudo2").style.opacity = '0';

            document.getElementById('heart1-player').src="assets/cuore.png"; 
            document.getElementById('heart2-player').src="assets/cuore.png"; 
            document.getElementById('heart3-player').src="assets/cuore.png"; 
            document.getElementById('heart4-player').src="assets/cuore.png"; 
            document.getElementById('heart5-player').src="assets/cuore.png"; 
    
            document.getElementById('heart1-pc').src="assets/cuore.png"; 
            document.getElementById('heart2-pc').src="assets/cuore.png"; 
            document.getElementById('heart3-pc').src="assets/cuore.png"; 
            document.getElementById('heart4-pc').src="assets/cuore.png"; 
            document.getElementById('heart5-pc').src="assets/cuore.png"; 

            user_pts=0;
            pc_pts=0;

            setTimeout(show, 2000);
            setTimeout( resetbanner, 2000);

           
        }

            
            
     
        else{

             contatore_pc=contatore_pc+1;
             document.getElementById('outputComputer').innerHTML = (contatore_pc);
             banner2.style.display="block";
             winner.style.display="none";

             document.getElementById('banner2').innerHTML = "PARTITA TERMINATA, HAI PERSO ";
             document.getElementById("scudo").style.display="none";
             document.getElementById("spada").style.display="none";
             document.getElementById("arco").style.display="none";
             
             document.getElementById("spada2").style.opacity = '0';
             document.getElementById("arco2").style.opacity = '0';
             document.getElementById("scudo2").style.opacity = '0';

              document.getElementById('heart1-player').src="assets/cuore.png"; 
             document.getElementById('heart2-player').src="assets/cuore.png"; 
             document.getElementById('heart3-player').src="assets/cuore.png"; 
             document.getElementById('heart4-player').src="assets/cuore.png"; 
             document.getElementById('heart5-player').src="assets/cuore.png"; 
     
             document.getElementById('heart1-pc').src="assets/cuore.png"; 
             document.getElementById('heart2-pc').src="assets/cuore.png"; 
             document.getElementById('heart3-pc').src="assets/cuore.png"; 
             document.getElementById('heart4-pc').src="assets/cuore.png"; 
             document.getElementById('heart5-pc').src="assets/cuore.png";
             
             user_pts=0;
             pc_pts=0;

             setTimeout( show, 2000);
             setTimeout( resetbanner, 2000);


        }
    }


}  



/*function to change heart pictures from full heart to empty heart when losing points*/

function pictureChange(x,y)
{
        if(pc_pts==1 ){
        document.getElementById('heart1-player').src="assets/cuoregrigio.png"; 
        }

        if(pc_pts==2 ){
            document.getElementById('heart2-player').src="assets/cuoregrigio.png"; 
        }
        if(pc_pts==3 ){
            document.getElementById('heart3-player').src="assets/cuoregrigio.png"; 
        }
        if(pc_pts==4 ){
            document.getElementById('heart4-player').src="assets/cuoregrigio.png"; 
        }
        if(pc_pts==5 ){
            document.getElementById('heart5-player').src="assets/cuoregrigio.png"; 
        }


        if(user_pts==1 ){
            document.getElementById('heart1-pc').src="assets/cuoregrigio.png"; 
            }
    
            if(user_pts==2 ){
                document.getElementById('heart2-pc').src="assets/cuoregrigio.png"; 
            }
            if(user_pts==3 ){
                document.getElementById('heart3-pc').src="assets/cuoregrigio.png"; 
            }
            if(user_pts==4 ){
                document.getElementById('heart4-pc').src="assets/cuoregrigio.png"; 
            }
            if(user_pts==5 ){
                document.getElementById('heart5-pc').src="assets/cuoregrigio.png"; 
            }
}