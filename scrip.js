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