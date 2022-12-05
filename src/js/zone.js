const filterItems = document.querySelectorAll('.filter__item');


console.log(filterItems);

filterItems.forEach ((item) => {
    console.log(item.innerHTML);
});

filterItems.forEach(item => {
    item.addEventListener('click', () => {
        console.log('udalo siem');
        item.classList.toggle('filter__item--active');
    })
})