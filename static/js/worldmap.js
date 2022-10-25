
let w1 = document.querySelector('.w1');
let w2 = document.querySelector('.w2');
let w3 = document.querySelector('.w3');
let w4 = document.querySelector('.w4');
let w5 = document.querySelector('.w5');
let w6 = document.querySelector('.w6');
let p = document.querySelector('p');
let map =document.querySelector('.map')
let body = document.querySelector('body');
let div1 = document.querySelector('.div1');
let div2= document.querySelector('.div2');
let div3= document.querySelector('.div3');
let div4= document.querySelector('.div4');
let div5 = document.querySelector('.div5');
let div6= document.querySelector('.div6');
let div7= document.querySelector('.div7');
let div8= document.querySelector('.div8');
let div9= document.querySelector('.div9');
let div10= document.querySelector('.div10');
let div11= document.querySelector('.div11');
let div12= document.querySelector('.div12');
let div13= document.querySelector('.div13');
let div14= document.querySelector('.div14');
let div15= document.querySelector('.div15');
let div16= document.querySelector('.div16');
let div17= document.querySelector('.div17');
let div18= document.querySelector('.div18');
let div19= document.querySelector('.div19');
let div20= document.querySelector('.div20');
let f1 = document.querySelector('#f1')
let f2 = document.querySelector('#f2')
let f3 = document.querySelector('#f3')
let f4 = document.querySelector('#f4')
let f5 = document.querySelector('#f5')
let f6 = document.querySelector('#f6')
let t1= document.querySelector('.t1');
let t2= document.querySelector('.t2');
let t3= document.querySelector('.t3');
let t4= document.querySelector('.t4');
let t5= document.querySelector('.t5');
let t6= document.querySelector('.t6');
<<<<<<< HEAD
=======
let card1=document.querySelector('.card1');

>>>>>>> main







w1.addEventListener('click', function() {
    console.log(1);
<<<<<<< HEAD
=======
    div1.style.display='block';
    div2.style.display='block';
    div3.style.display='block';
    div4.style.display='block';



>>>>>>> main
    div1.style.opacity='1';
    div1.style.transition='4s';

    div2.style.opacity='1';
    div2.style.transition='4s';

    div3.style.opacity='1';
    div3.style.transition='4s';

    div4.style.opacity='1';
    div4.style.transition='4s';

    w1.style.transform="scale(1.2)";
    w1.style.transition='2s';

    f1.classList.add('t1');


    w2.style.opacity='0.5';
    w3.style.opacity='0.5';
    w4.style.opacity='0.5';
    w5.style.opacity='0.5';
    w6.style.opacity='0.5';

    map.style.backgroundColor='lightgrey'
    map.style.transition='1.5s';
    

    p.style.display='none';
    p.style.transition='1.5s';

});


w2.addEventListener('click', function() {
    console.log(1);
<<<<<<< HEAD
    div13.style.opacity='1';
    div13.style.transition='4s';

    div14.style.opacity='1';
    div14.style.transition='4s';

    div15.style.opacity='1';
    div15.style.transition='4s';

    div16.style.opacity='1';
    div16.style.transition='4s';
=======


    

    div13.style.display='block';
    div14.style.display='block';
    div15.style.display='block';
    div16.style.display='block';


    div13.style.animation='fadeIn 4s 2s';
    div14.style.animation='fadeIn 4s 2s';
    div15.style.animation='fadeIn 4s 2s';
    div16.style.animation='fadeIn 4s 2s';
    

>>>>>>> main



    w2.style.transform="scale(1.2)";
    w2.style.transition='2s';

    f5.classList.add('t5');


    w1.style.opacity='0.5';
    w3.style.opacity='0.5';
    w4.style.opacity='0.5';
    w5.style.opacity='0.5';
    w6.style.opacity='0.5';


    map.style.backgroundColor='lightgrey'
    map.style.transition='1.5s';
    

    p.style.display='none';
    p.style.transition='1.5s';

<<<<<<< HEAD
    map.addEventListener('click', function(){
        $('.w2').fadeout();
    })
=======
    // map.addEventListener('click', function(){
    //     $('.w2').fadeout();
    // })
>>>>>>> main
    

});


<<<<<<< HEAD
function world3() {
    console.log(1);
=======
w3.addEventListener('click', function () {
    console.log(1);


    div17.style.display='block';
    div18.style.display='block';
    div19.style.display='block';
    div20.style.display='block';

>>>>>>> main
    div17.style.opacity='1';
    div17.style.transition='4s';

    div18.style.opacity='1';
    div18.style.transition='4s';

    div19.style.opacity='1';
    div19.style.transition='4s';

    div20.style.opacity='1';
    div20.style.transition='4s';

    w3.style.transform="scale(1.2)";
    w3.style.transition='2s';

    f6.classList.add('t6');


    w1.style.opacity='0.5';
    w2.style.opacity='0.5';
    w4.style.opacity='0.5';
    w5.style.opacity='0.5';
    w6.style.opacity='0.5';


    map.style.backgroundColor='lightgrey'
    map.style.transition='1.5s';
    

    p.style.display='none';
    p.style.transition='1.5s';
<<<<<<< HEAD
}

w3.addEventListener('click', world3);

=======
});

document.body.addEventListener('click', function (e) {
    console.dir(e.target.tagName === "IMG")
    console.log('body click')
    if (e.target.tagName !== "IMG") {
        
        f1.classList.remove('t1');
        f2.classList.remove('t2');
        f3.classList.remove('t3');
        f4.classList.remove('t4');
        f5.classList.remove('t5');
        f6.classList.remove('t6');

        map.style.backgroundColor='transparent';
        map.style.transition='0s';

        w1.style.opacity='1';
        w2.style.opacity='1';
        w3.style.opacity='1';
        w4.style.opacity='1';
        w5.style.opacity='1';
        w6.style.opacity='1';


        p.style.display='block';
        p.style.transition='1.5s';



        w1.style.transform="scale(1)";
        w2.style.transform="scale(1)";
        w3.style.transform="scale(1)";
        w4.style.transform="scale(1)";
        w5.style.transform="scale(1)";
        w6.style.transform="scale(1)";
        w1.style.transition='0s';
        w2.style.transition='0s';
        w3.style.transition='0s';
        w4.style.transition='0s';
        w5.style.transition='0s';
        w6.style.transition='0s';

        // div1.style.opacity='0';
        // div2.style.opacity='0';
        // div3.style.opacity='0';
        // div4.style.opacity='0';
        div5.style.opacity='0';
        div6.style.opacity='0';
        div7.style.opacity='0';
        div8.style.opacity='0';
        div9.style.opacity='0';
        div10.style.opacity='0';
        div11.style.opacity='0';
        div12.style.opacity='0';
        div13.style.opacity='0';
        div14.style.opacity='0';
        div15.style.opacity='0';
        div16.style.opacity='0';
        div17.style.opacity='0';
        div18.style.opacity='0';
        div19.style.opacity='0';
        div20.style.opacity='0';

        div1.style.display='none';
        div2.style.display='none';
        div3.style.display='none';
        div4.style.display='none';
        div5.style.display='none';
        div6.style.display='none';
        div7.style.display='none';
        div8.style.display='none';
        div9.style.display='none';
        div10.style.display='none';
        div11.style.display='none';
        div12.style.display='none';
        div13.style.display='none';
        div14.style.display='none';
        div15.style.display='none';
        div16.style.display='none';
        div17.style.display='none';
        div18.style.display='none';
        div19.style.display='none';
        div20.style.display='none';
    }

})
>>>>>>> main



w4.addEventListener('click', function() {
    console.log(1);
<<<<<<< HEAD
=======

    div5.style.display='block';
    div6.style.display='block';
    div7.style.display='block';
    div8.style.display='block';


>>>>>>> main
    div5.style.opacity='1';
    div5.style.transition='4s';

    div6.style.opacity='1';
    div6.style.transition='4s';

    div7.style.opacity='1';
    div7.style.transition='4s';

    div8.style.opacity='1';
    div8.style.transition='4s';


    w4.style.transform="scale(1.2)";
    w4.style.transition='2s';
    
    f2.classList.add('t2');


    w1.style.opacity='0.5';
    w3.style.opacity='0.5';
    w2.style.opacity='0.5';
    w5.style.opacity='0.5';
    w6.style.opacity='0.5';


    map.style.backgroundColor='lightgrey'
    map.style.transition='1.5s';
    

    p.style.display='none';
    p.style.transition='1.5s';


});

w5.addEventListener('click', function() {
    console.log(1);
<<<<<<< HEAD
=======

    div9.style.display='block';
    div10.style.display='block';
    


>>>>>>> main
    div9.style.opacity='1';
    div9.style.transition='4s';

    div10.style.opacity='1';
    div10.style.transition='4s';

    w5.style.transform="scale(1.2)";
    w5.style.transition='2s';

    f3.classList.add('t3');


    w1.style.opacity='0.5';
    w3.style.opacity='0.5';
    w2.style.opacity='0.5';
    w4.style.opacity='0.5';
    w6.style.opacity='0.5';


    map.style.backgroundColor='lightgrey'
    map.style.transition='1.5s';
    

    p.style.display='none';
    p.style.transition='1.5s';

});




w6.addEventListener('click', function() {
    console.log(1);
<<<<<<< HEAD
=======

    div11.style.display='block';
    div12.style.display='block';

>>>>>>> main
    div11.style.opacity='1';
    div11.style.transition='4s';

    div12.style.opacity='1';
    div12.style.transition='4s';


    w6.style.transform="scale(1.2)";
    w6.style.transition='2s';

    f4.classList.add('t4');


    w1.style.opacity='0.5';
    w3.style.opacity='0.5';
    w2.style.opacity='0.5';
    w4.style.opacity='0.5';
    w5.style.opacity='0.5';


    map.style.backgroundColor='lightgrey'
    map.style.transition='1.5s';
    

    p.style.display='none';
    p.style.transition='1.5s';

});





<<<<<<< HEAD
world3.addEventListener('click',function(){
    // console.log('map click ');
    map.addEventListener('click',function(){
        $(w3).fadeout(300);
    });
});
=======
// world3.addEventListener('click',function(){
//     map.addEventListener('click',function(){

//     });
// });
>>>>>>> main






