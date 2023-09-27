const navs= document.querySelectorAll(".nav");
// nav1.addEventListener("mouseover", () => {
// 											gsap.to(".nav1", {
//   color:"red", 
//   ease:"power1.in",
//   duration: 3,
//   repeat: 0,
//   yoyo: true,
//   repeatDelay: 0.4
// })
// })
const att = ["HOME", "ABOUT",  "CONTACT", "SETTINGS"]
console.log(navs)
navs.forEach((nav, index) => {
	console.log("ger", nav, index)
	gsap.to(`.nav${index + 1}`, {
  text:att[index], 
	color:'#d12483',
  ease:"power2.in",
  duration: 2,
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.4
})
})
 
// gsap.to(".nav2", {
//   text:"Contact", 
//   ease:"power1.in",
//   duration: 2,
//   repeat: 0,
//   yoyo: true,
//   repeatDelay: 0.4
// })
// gsap.to(".nav3", {
//   text:"Following", 
//   ease:"power1.in",
//   duration: 2,
//   repeat: 0,
//   yoyo: true,
//   repeatDelay: 0.4
// })
// gsap.to(".nav4", {
//   text:"Settings", 
//   ease:"power1.in",
//   duration: 2,
//   repeat: 0,
//   yoyo: true,
//   repeatDelay: 0.4
// })