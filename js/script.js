let sameclassbtn = document.querySelectorAll('.btn_nav')

// let chatId = document.getElementById('chatId')
// let statusId = document.getElementById('statusId')
// let callsId = document.getElementById('callsId');
let chat = document.getElementById('firstpage')
let status = document.getElementById('secondpage')
let calls = document.getElementById('lastpage');

sameclassbtn.forEach((element , index) => {
   element.addEventListener('click', () => {
    if (element.id=== "statusId") {
      status.style.transform = `translateX(-340px)`
      calls.style.transform =`translateX(715px)`
    }else if(element.id === "callsId"){
      calls.style.transform =`translateX(-340px)`
      status.style.transform = `translateX(-960px)`
    }else {
      chat.style.transform = `translateX(-300px)`
      status.style.transform = `translateX(-340px)`
    }
   })
})