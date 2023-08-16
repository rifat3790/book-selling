document.getElementById('btn-1').addEventListener('click', function(){
    const book1Name = getTextElementString('book-1-name');
    
    const book1Price = getTextElementNumber('book-1-price');
    console.log(book1Name, book1Price);

    const showName = document.getElementById('total-price');
    const p = document.createElement('p');
    p.innerText = book1Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-price');
    const pp = document.createElement('p');
    pp.innerText = book1Price;
    showPrice.appendChild(pp);

})

document.getElementById('btn-2').addEventListener('click', function(){
    const book2Name = getTextElementString('book-2-name');
    
    const book2Price = getTextElementNumber('book-2-price');
    console.log(book2Name, book2Price);

    const showName = document.getElementById('total-price');
    const p = document.createElement('p');
    p.innerText = book2Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-price');
    const pp = document.createElement('p');
    pp.innerText = book2Price;
    showPrice.appendChild(pp);

})