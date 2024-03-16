
// constructing the array of objects for storing all the song information
 let songs = [
    {id:"1",coverImage:"assets/covers/1.jpg",songFile:"assets/songs/1.mp3",songName:"Warriyo - Mortals [NCS Release]"},
    {id:"2",coverImage:"assets/covers/2.jpg",songFile:"assets/songs/2.mp3",songName:"Ceilo-Humma-Humma"},
    {id:"3",coverImage:"assets/covers/3.jpg",songFile:"assets/songs/3.mp3",songName:"DEV-kev Invincible Release"},
    {id:"4",coverImage:"assets/covers/4.jpg",songFile:"assets/songs/4.mp3",songName:"Different Heaven & EH!DE - My Heart [NCS Release]"},
    {id:"5",coverImage:"assets/covers/5.jpg",songFile:"assets/songs/5.mp3",songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release"},
    {id:"6",coverImage:"assets/covers/6.jpg",songFile:"assets/songs/6.mp3",songName:"Rabba - Salam-e-Ishq"},
    {id:"7",coverImage:"assets/covers/7.jpg",songFile:"assets/songs/7.mp3",songName:"Sakhiyaan - Salam-e-Ishq"},
    {id:"8",coverImage:"assets/covers/8.jpg",songFile:"assets/songs/8.mp3",songName:"Bhula Dena - Salam-e-Ishq"},
    {id:"9",coverImage:"assets/covers/9.jpg",songFile:"assets/songs/9.mp3",songName:"Tumhari Kasam - Salam-e-Ishq"},
    {id:"10",coverImage:"assets/covers/10.jpg",songFile:"assets/songs/10.mp3",songName:"Na Jaana - Salam-e-Ishq"},
 ]

let audioElement = new Audio("")

 let masterSongPlayButton =  document.querySelector(".songControl").children[1];
 let  songItems = document.querySelectorAll(".soundItem") 
 songItems = Array.from(songItems) // converting the nodelist to the array to apply foreach and map functionalities
 songItems.map((item)=>{
    item.addEventListener("click",(e)=>{
   
        let element = e.target.id?e.target.id:e.target.parentElement.id
        let prevElement = audioElement.src.charAt(93)

        if(prevElement){
            console.log("edhar")
            document.getElementById(prevElement).children[2].children[0].children[0].classList.remove('fa-circle-pause'); 
            document.getElementById(prevElement).children[2].children[0].children[0].classList.add('fa-circle-play');            
        }


     
        //element = element?element:e.target.parentElement.parentElement.parentElement
        console.log(element)
        console.log(audioElement.src)
        let start = audioElement.src.lastIndexOf("/")
        let end = audioElement.src.lastIndexOf(".")
        if(audioElement.played && audioElement.src.substring(start+1,end) == element){
            audioElement.pause()
            masterSongPlayButton.classList.remove("fa-circle-pause")
            masterSongPlayButton.classList.add("fa-circle-play")
        }
        else{
            
            audioElement.src= songs[element-1].songFile
            console.log(audioElement.paused)
            document.getElementById(element).children[2].children[0].children[0].classList.remove('fa-circle-play');
            document.getElementById(element).children[2].children[0].children[0].classList.add('fa-circle-pause');
            audioElement.play() 
            masterSongPlayButton.classList.remove("fa-circle-play")
            masterSongPlayButton.classList.add("fa-circle-pause")
        }
        document.querySelector(".currentSongTitle h1").innerText= songs[element-1].songName;
        document.querySelector(".currentSongTitle img").src= songs[element-1].coverImage
    })
 })

 



 masterSongPlayButton.addEventListener("click",()=>{

    if(masterSongPlayButton.classList.contains("fa-circle-play")){
        masterSongPlayButton.classList.remove("fa-circle-play")
        masterSongPlayButton.classList.add("fa-circle-pause")
        audioElement.play()
    }
    else{
        masterSongPlayButton.classList.remove("fa-circle-pause")
        masterSongPlayButton.classList.add("fa-circle-play")
        audioElement.pause()
    }
 })
console.log(document.getElementById("next"))
 document.getElementById("next").addEventListener("click",()=>{
    console.log("here")
        let start = audioElement.src.lastIndexOf("/")+1
        let end = audioElement.src.lastIndexOf(".")
        let prevElement = (audioElement.src.substring(start,end))
        console.log(prevElement)
        if(prevElement){
            document.getElementById(prevElement).children[2].children[0].children[0].classList.remove('fa-circle-pause'); 
            document.getElementById(prevElement).children[2].children[0].children[0].classList.add('fa-circle-play');   
        }
       
        let index = parseInt(audioElement.src.substring(start,end))
        console.log(index)
        if(index>=9){
            console.log
            index=1;
        }
        else{
            index = (index+1)%songs.length
        }
       
    
        audioElement.src=songs[index-1].songFile
        audioElement.play()

         start = audioElement.src.lastIndexOf("/")+1
         end = audioElement.src.lastIndexOf(".")
       
            document.getElementById(index).children[2].children[0].children[0].classList.add('fa-circle-pause'); 
            document.getElementById(index).children[2].children[0].children[0].classList.remove('fa-circle-play');   
        

 })

 document.getElementById("prev").addEventListener("click",()=>{
            
 })


