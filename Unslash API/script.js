const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];


window.addEventListener('load',dayNight);
input.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        loadImg();
    }
})

function dayNight(){
    const date = new Date();
    const getHour = date.getHours

    if((getHour>=7 && getHour<=19))
    {
        document.body.style.backgroundColor = 'whitesmoke'
        document.body.style.color = 'black'
    }
    else{
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
}

function loadImg(){
    removeImg();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=9&client_id=PRra3FE-WiloX175RQ7KaPsdu0T2EUDpSRGQOgf-2-Y';

    fetch(url)  

    .then(response=>{
        if(response.ok)
            return response.json();
        else
            alert(response.status);
    })
    
    .then(data=>{
        const imageNode = [];
        for(let i=0;i<data.results.length;i++)
        {
            imageNode[i] = document.createElement('div')
            imageNode[i].className = 'img'
            imageNode[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imageNode[i].addEventListener('dblclick',()=>{
                window.open(data.results[i].links.download,'_blank');
            })
            grid.appendChild(imageNode[i]);
        }
        
    })
}

function removeImg(){
    grid.innerHTML = "";
    
}

