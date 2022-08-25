let background = document.documentElement.querySelector(".containt")
let text = document.documentElement.querySelector("#percet")
let tip = document.documentElement.querySelector("#tip")

document.documentElement.addEventListener("click", () => {
  tip.style.display = "none"
  let blur = 30
  let inter = setInterval(() => {
    blur -= 3
    background.style.filter = `blur(${blur}px)`
    let percent = (blur / 30) * 100
    text.style.opacity = `${percent}%`
    text.innerHTML = `${percent}%`
  }, 100)

  setTimeout(() => {
    clearInterval(inter)
    console.log("清除定时器")
  }, 1000)
})
