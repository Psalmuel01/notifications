const mark = document.querySelector('.header p')
const unreadMsg = document.querySelector('.header span')
const unreadBgs = document.querySelectorAll('.notifications-unread')

mark.addEventListener('click', toggle)

function toggle() {
    if (unreadMsg.textContent == '3') {
        unreadMsg.textContent = '0'
    } else {
        unreadMsg.textContent = '3'
    }
    
    unreadBgs.forEach(unread => {
        unread.classList.toggle('notifications-unread')
    })
}

