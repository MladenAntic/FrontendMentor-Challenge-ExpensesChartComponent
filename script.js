const amountSpent = document.querySelectorAll('.amount-spent')
const charts = document.querySelectorAll('.chart')

for (let i = 0; i < 7; i++) {
charts[i].addEventListener('mouseover', () => {
    charts[i].style.cursor = 'pointer'
    charts[i].style.opacity = '0.7'
    amountSpent[i].style.display = 'block'
})

charts[i].addEventListener('mouseout', () => {
    charts[i].style.opacity = '1'
    amountSpent[i].style.display = 'none'
})
}