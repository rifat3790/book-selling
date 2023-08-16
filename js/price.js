// Book 1
let cartCount = 0;
let totalPrice = 0;
document.getElementById('btn-1').addEventListener('click', function(){
    const book1Name = getTextElementString('book-1-name');
    
    const book1Price = getTextElementNumber('book-1-price');
    console.log(book1Name, book1Price);


    // Book count starts
    cartCount++;
    const countBook = document.getElementById('total-count');
    const bookNo  = document.createElement('p');
    bookNo.innerText = cartCount;
    countBook.append(bookNo);
    // End

    // Book name starts
    const showName = document.getElementById('total-count');
    const p = document.createElement('p');
    p.innerText = book1Name;
    showName.appendChild(p);
    // End

    // Book price starts
    const showPrice = document.getElementById('total-count');
    const pp = document.createElement('p');
    pp.innerText = `Price: ${book1Price}`;
    showPrice.appendChild(pp);

    // Total price count 
    const getTotalPrice = document.getElementById('total-price');
    totalPrice = totalPrice + book1Price;
    getTotalPrice.innerText = `Total price: ${totalPrice}`;
    // End

    // br tag
    const brTag = document.getElementById('total-count');
    const br = document.createElement('br');
    br.innerText = br;
    brTag.appendChild(br);

    


})

// Book 2 
document.getElementById('btn-2').addEventListener('click', function(){
    const book2Name = getTextElementString('book-2-name');
    
    const book2Price = getTextElementNumber('book-2-price');
    console.log(book2Name, book2Price);

    // Book count starts
    cartCount++;
    const countBook = document.getElementById('total-count');
    const bookNo  = document.createElement('p');
    bookNo.innerText = cartCount;
    countBook.append(bookNo);
    // End

    const showName = document.getElementById('total-count');
    const p = document.createElement('p');
    p.innerText = book2Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-count');
    const pp = document.createElement('p');
    pp.innerText = book2Price;
    showPrice.appendChild(pp);

    // Total price count 
    const getTotalPrice = document.getElementById('total-price');
    totalPrice = totalPrice + book2Price;
    getTotalPrice.innerText = `Total price: ${totalPrice}`;
    // End

    // br tag
    const brTag = document.getElementById('total-count');
    const br = document.createElement('br');
    br.innerText = br;
    brTag.appendChild(br);

})

// Book 3
document.getElementById('btn-3').addEventListener('click', function(){
    const book3Name = getTextElementString('book-3-name');
    
    const book3Price = getTextElementNumber('book-3-price');
    console.log(book3Name, book3Price);

    // Book count starts
    cartCount++;
    const countBook = document.getElementById('total-count');
    const bookNo  = document.createElement('p');
    bookNo.innerText = cartCount;
    countBook.append(bookNo);
    // End

    const showName = document.getElementById('total-count');
    const p = document.createElement('p');
    p.innerText = book3Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-count');
    const pp = document.createElement('p');
    pp.innerText = book3Price;
    showPrice.appendChild(pp);

    // Total price count 
    const getTotalPrice = document.getElementById('total-price');
    totalPrice = totalPrice + book3Price;
    getTotalPrice.innerText = `Total price: ${totalPrice}`;
    // End

    // br tag
    const brTag = document.getElementById('total-count');
    const br = document.createElement('br');
    br.innerText = br;
    brTag.appendChild(br);

})

// Book 4
document.getElementById('btn-4').addEventListener('click', function(){
    const book4Name = getTextElementString('book-4-name');
    
    const book4Price = getTextElementNumber('book-4-price');
    console.log(book4Name, book4Price);

    // Book count starts
    cartCount++;
    const countBook = document.getElementById('total-count');
    const bookNo  = document.createElement('p');
    bookNo.innerText = cartCount;
    countBook.append(bookNo);
    // End

    const showName = document.getElementById('total-count');
    const p = document.createElement('p');
    p.innerText = book4Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-count');
    const pp = document.createElement('p');
    pp.innerText = book4Price;
    showPrice.appendChild(pp);

    // Total price count 
    const getTotalPrice = document.getElementById('total-price');
    totalPrice = totalPrice + book4Price;
    getTotalPrice.innerText = `Total price: ${totalPrice}`;
    // End

    // br tag
    const brTag = document.getElementById('total-count');
    const br = document.createElement('br');
    br.innerText = br;
    brTag.appendChild(br);

})

// Book 5
document.getElementById('btn-5').addEventListener('click', function(){
    const book5Name = getTextElementString('book-5-name');
    
    const book5Price = getTextElementNumber('book-5-price');
    console.log(book5Name, book5Price);

    // Book count starts
    cartCount++;
    const countBook = document.getElementById('total-count');
    const bookNo  = document.createElement('p');
    bookNo.innerText = cartCount;
    countBook.append(bookNo);
    // End

    const showName = document.getElementById('total-count');
    const p = document.createElement('p');
    p.innerText = book5Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-count');
    const pp = document.createElement('p');
    pp.innerText = book5Price;
    showPrice.appendChild(pp);

    // Total price count 
    const getTotalPrice = document.getElementById('total-price');
    totalPrice = totalPrice + book5Price;
    getTotalPrice.innerText = `Total price: ${totalPrice}`;
    // End

    // br tag
    const brTag = document.getElementById('total-count');
    const br = document.createElement('br');
    br.innerText = br;
    brTag.appendChild(br);

})

// Book 6
document.getElementById('btn-6').addEventListener('click', function(){
    const book6Name = getTextElementString('book-6-name');
    
    const book6Price = getTextElementNumber('book-6-price');
    console.log(book6Name, book6Price);

    // Book count starts
    cartCount++;
    const countBook = document.getElementById('total-count');
    const bookNo  = document.createElement('p');
    bookNo.innerText = cartCount;
    countBook.append(bookNo);
    // End

    const showName = document.getElementById('total-count');
    const p = document.createElement('p');
    p.innerText = book6Name;
    showName.appendChild(p);

    const showPrice = document.getElementById('total-count');
    const pp = document.createElement('p');
    pp.innerText = book6Price;
    showPrice.appendChild(pp);

    // Total price count 
    const getTotalPrice = document.getElementById('total-price');
    totalPrice = totalPrice + book6Price;
    getTotalPrice.innerText = `Total price: ${totalPrice}`;
    // End

    // br tag
    const brTag = document.getElementById('total-count');
    const br = document.createElement('br');
    br.innerText = br;
    brTag.appendChild(br);

})