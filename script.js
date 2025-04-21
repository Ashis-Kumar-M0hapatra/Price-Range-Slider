const minInput = document.getElementById("text1");
const maxInput = document.getElementById("text2");
const slider = document.getElementById("slide");
const resetBtn = document.getElementById("reset");
let minValue = 0
let maxValue = 10000

minInput.addEventListener("input",()=>{
    const sliderValue = minInput.value
    if (sliderValue<minValue) {
        alert("Your value is less than 0 !  Enter value more than 0")
        minInput.value = ""
    }else if (!isNaN(sliderValue)) {
        slider.value = sliderValue
    }
})

maxInput.addEventListener("input",()=>{
    const sliderValue = maxInput.value
    if (sliderValue>maxValue) {
        alert("Your value is greater than 10000 !  Enter value less than 10000")
        maxInput.value = ""
    }else if (!isNaN(sliderValue) && (sliderValue>maxValue/2)) {
        slider.value = sliderValue
    }
})

slider.addEventListener("input", ()=>{
    const value = slider.value
    if (value<maxValue/2) {
        minInput.value = value
    }else if (value>maxValue/2) {
        maxInput.value = value
    }
})

resetBtn.addEventListener("click", ()=>{
    minInput.value = ""
    maxInput.value = ""
    slider.value = ""
})


