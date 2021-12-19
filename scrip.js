function submitForm(){
  let name = document.getElementById("input-nama").value
  let subject = document.getElementById("input-subject").value
  let hp = document.getElementById("input-hp").value
  let option = document.getElementById("input-option").value
  let pesan= document.getElementById("pesan").value

  if(name ==""){
      alert("Di isi lah jangan malas!")
  }
  if(subject ==""){
      alert("Di isi lah jangan malas!")
  }
  if(hp ==""){
      alert("Di isi lah jangan malas!")
  }
  if(option ==""){
      alert("Di isi lah jangan malas!")
  }
  if(pesan ==""){
      alert("Di isi lah jangan malas!")
  }
  





  console.log(`name: ${name}`)
  console.log(`subject: ${subject}`)
  console.log(`hp: ${hp}`)
  console.log(`option: ${option}`)
  console.log(`pesan: ${pesan}`) 

  let emailReceiver ='diliyanperkasa@gmail..com'

  let a = document.createElement('a')
  a.href =`mailto:${emailReceiver}?subject=${subject}&body=hallo my name is ${name},${pesan}`
  a.click()


}


let blogs=[]
function addBlog(event) {
  event.preventDefault()


  let title = document.getElementById('input-blog-title').value
  let content = document.getElementById('input-blog-content').value
  let image = document.getElementById('input-blog-image')

  image = URL.createObjectURL(image.files[0])


  let blog = {
      title: title,
      content: content,
      image: image,
      author: 'Aska Diliyan Perkasa',
      postAt: new Date()
  }
  
  blogs.push(blog)

  renderBlog()

} 

function renderBlog(){
  let contentContainer = document.getElementById('contents');

  contentContainer.innerHTML = ''

  for (let i = 0; i<blogs.length; i++){
      contentContainer.innerHTML += `<div class="blog-list-item">
      <div class="blog-image">
        <img src="${(blogs[i].image)}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >${(blogs[i].title)}</a
          >
        </h1>
        <div class="detail-blog-content">
          ${getFulltime(blogs[i].postAt)} | ${blogs[i].author}
        </div>
        <p>
          ${(blogs[i].content)}
        </p>
        <div style="text-align:right; font-size:15; color:grey">
        ${getDistanceTime(blogs[i].postAt)}
        </div>
      </div>
    </div>`
  }

}


let month = [
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'Agustus',
'September',
'October',
'November',
'December'
]


function getFulltime(time){
let date = time.getDate()
let monthIndex = time.getMonth()
let year = time.getFullYear()

let hours = time.getHours()
let minutes = time.getMinutes()

let result =`${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
return  result
}


function getDistanceTime(time){
let timePost = time
let timeNow = new Date()

let distance = timeNow-timePost

let miliseconds = 1000;
let seconInMinutes = 60;
let minutesInHours = 60;
let hoursInDay = 23;

let distanceDay = Math.floor(distance/ (miliseconds*seconInMinutes*minutesInHours*hoursInDay))

if(distanceDay>=1){
  return `${distanceDay} Day Ago`
}else{
  let distanceHours= Math.floor(distance/(miliseconds*seconInMinutes*minutesInHours))
  if(distanceHours>=1){
    return `${distanceHours} Hors Ago`
  }else{
    let distanceMinutes = Math.floor(distance/(miliseconds*seconInMinutes))
    if(distanceMinutes>=1){
      return `${distanceMinutes} Minuts Ago`
    }else{
      let distanceSecons = Math.floor(distance/miliseconds)
      return `${distanceSecons} Secons Ago`
    }
  }
}
}

setInterval(()=>{

renderBlog()

},1000)

