// document.addEventListener('mausemove', function(event){
    
// })


document.body.addEventListener('mousemove', function(event) {
    const img = document.querySelector('.fixed-image');
    img.style.top = event.clientY + 'px';
    img.style.left = event.clientX + 'px';
});

