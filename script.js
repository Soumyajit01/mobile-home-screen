months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const setDateTimeInHTML = () => {
    a = new Date()
    hours_today.innerHTML = a.getHours()
    minutes_today.innerHTML = a.getMinutes()
    month_today.innerHTML = months[a.getMonth()]
    date_today.innerHTML = a.getDate()
    day_today.innerHTML = days[a.getDay()]

    if (minutes_today.innerText.length == 1) {
        minutes_today.innerText = `0${minutes_today.innerText}`
    }
}
// setDateTimeInHTML()
setInterval(setDateTimeInHTML, 1)
lock.addEventListener('click', function () {
    document.getElementsByClassName("mobile")[0].innerHTML = ""
    document.getElementsByClassName("mobile")[0].classList.toggle("bgmeme")
})
insta.addEventListener('click', function () {
    window.location.href = "https://www.instagram.com/"
})
yt.addEventListener('click', function () {
    window.location.href = "https://www.youtube.com/"
})

