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

  // contentContainer.innerHTML = ''

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