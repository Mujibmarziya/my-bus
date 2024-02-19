const allbuttons = document.getElementsByClassName('key');
// console.log(allbuttons);
let totalclick = 0;
let booked =0;

        


for(button of allbuttons){
    // console.log(button);
    
    button.addEventListener('click',(e)=>{
        // e.target.classList.add('disabled')
        // e.target.setAttribute('disabled', 'disabled');
        // this.disabled = true;
        const nextbtn = document.getElementById('nextbtn')
        nextbtn.removeAttribute('disabled')
        const leftseats = document.getElementById('leftseats')
        const bookedseats = document.getElementById('bookedseatsnum')
        const couponbtn = document.getElementById('couponbtn')
        const inputcoupon = document.getElementById('input')
        const totalprice = document.getElementById('totalprice')
        const grandtotal = document.getElementById('grandprice')

        // console.log(totalprice);

        

        const leftext = leftseats.innerText;
        const totaltext = totalprice.innerText;
        const totalpriceint = parseFloat(totaltext);
        // console.log(totalpriceint);
        
        totalclick = totalclick+1;
        booked = booked+1
        

        if(booked > 4){
            window.alert("Warning! You can't book more than 4 tickets");
            couponbtn.removeAttribute('disabled')
            inputcoupon.removeAttribute('disabled')
           
            return
        }
       
       
       
        e.target.setAttribute('disabled', true)
      
       
        e.target.style.color ='white'
        e.target.classList.add('bg-green-500')
        
        //  adding
       

        const wheretoadded = document.getElementById('wheretoadded');
        const div = document.createElement('div')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h1')
        const h3 = document.createElement('h1')
        h1.innerText= e.target.innerText
        h2.innerText= 'Economy'
        h3.innerText= '550'

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(h3)
        div.style.color='gray'
        div.style.display ='flex';
        div.style.justifyContent ='space-between';

        wheretoadded.appendChild(div)
        

        

        

        
         
        const newleftseats = 40-totalclick;
         // setting total price

         const total =totalpriceint + 550;
         console.log(total);

        // setting new left seats 
        leftseats.innerText= newleftseats;
        bookedseats.innerText=booked;
        totalprice.innerText= total;
        grandtotal.innerText= total

        if(booked==4){
            couponbtn.removeAttribute('disabled')
            inputcoupon.removeAttribute('disabled')
            window.alert("Prizes here! You can now apply our special coupon code as you have booked 4 tickets!.");
        }


        console.log(newleftseats);
        console.log(totalclick);
       

        

    //    console.log( e.target.innerText);

    })
}
const couponbtn = document.getElementById('couponbtn')
const newcoupon = document.getElementById('newcoupon').innerText
const couplecoupon = document.getElementById('couplecoupon').innerText
// const newcouponvalue = newcoupon.toLowerCase();
// const couplecouponvalue = couplecoupon.toLowerCase();
couponbtn.addEventListener('click',()=>{
    const input = document.getElementById('input')
    const inputdiv = document.getElementById('inputid')
    const inputvalue = document.getElementById('input').value;
    const totalprice2 = document.getElementById('totalprice')
    const grandtotal = document.getElementById('grandprice')
    const totalv = totalprice2.innerText
    const totalint = parseFloat(totalv)
    if(newcoupon === inputvalue){
          const grandprice = (totalint *(15/100))
          const grandminus = totalint-grandprice;
          console.log(grandminus);
          grandtotal.innerText= grandminus
          input.value='';
          inputdiv.classList.add('hidden')
          return
          
    }

    if(couplecoupon === inputvalue){
        const grandprice = (totalint *(20/100))
        const grandminus= totalint-grandprice;
        console.log(grandminus);
        grandtotal.innerText= grandminus
        input.value='';
        inputdiv.classList.add('hidden')
        return
        
  }
 



    
    console.log('btn click');
})

const bannerbutton = document.getElementById('bannerbtn')
const bookingseat =document.getElementById('bookingseat')

bannerbutton.addEventListener('click', function() {
    bookingseat.scrollIntoView({ behavior: 'smooth' });
   
});
// smooth, auto, instant tinta behavior, 


