const homeSkills = document.querySelector('#home-skills')
const homeSkillIcons = document.querySelectorAll('#home-skills i')

// on hover effect
homeSkillIcons.forEach((icon) => {
  icon.addEventListener('mouseover', (e) => {
    e.target.classList.add('colored')

  })
})

// intro icon
let play = 1
document.addEventListener('scroll', () => {
  if(window.scrollY > homeSkills.offsetTop - (homeSkills.clientHeight * 0.7) && window.scrollY < homeSkills.offsetTop + (homeSkills.clientHeight * 0.8)){
    play > 0 && showIcons()
  } else {
    play = 1
    hideIcons()
  }
})

const showIcons = () => {
  play--;
  let i = 0;
  let j = 0;
  const coloringIntervalFunc = () => {
    homeSkillIcons[i].classList.add('colored')
    i++
    removeColor()
    if(i >= homeSkillIcons.length){
      clearInterval(coloringInterval)
    } 
  }
  const removingColorFunc = () => {
    homeSkillIcons[j].classList.remove('colored')
    j++
  }
  const removeColor = () => {
    setTimeout(removingColorFunc, 1000)
  }
  const coloringInterval = setInterval(coloringIntervalFunc, 50)
}
const hideIcons = () => {
  homeSkillIcons.forEach((icon) => {
    icon.classList.remove('colored')
    
  })
}