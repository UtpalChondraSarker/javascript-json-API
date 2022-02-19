function photoPost(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>loadPhoto(data))
}
photoPost()

function loadPhoto(photos){
    const container=document.getElementById('container-photo')
    for(const photo of photos){
       const div=document.createElement('div')
       div.innerHTML=`<p>Title ${photo.title}</p>
       <img> ${photo.url}</img>
       `
       container.appendChild(div);
       console.log(photo);
    }
    
}