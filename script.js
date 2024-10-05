document.querySelector(".open").addEventListener("click",() => {
  document.querySelector("nav").classList.add("active")
})
document.querySelector(".close").addEventListener("click",() => {
  document.querySelector("nav").classList.remove("active")
})

window.addEventListener("scroll",() => {
  document.querySelector("nav").classList.remove("active")
})