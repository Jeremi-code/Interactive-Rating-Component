const spanElements = document.getElementsByClassName('rating-point')
console.log(spanElements)
for (let i=0; i<spanElements.length; i++) {
    console.log(spanElements[i])
    spanElements[i].addEventListener('click',()=>{onClick(i)
    })
}
const onClick = (i) => {
    const rateContainer = document.getElementsByClassName('rate-container')
    const resultContainer = document.getElementsByClassName('result-container')
    rateContainer[0].style.display = "none"
    resultContainer[0].style.display = "flex"
    const element = document.getElementsByClassName('result-text')
    console.log(element)
    element[0].innerHTML = `You selected ${i} out of 5`
}