let sliderButton=document.getElementsByClassName("slider-btn")
let product=document.getElementsByClassName("product")


let MarginLeft=10;
let maxMarginLeft=-340*(product.length-5);




sliderButton[1].onclick=()=>{
    
    if(MarginLeft>maxMarginLeft)
    {
        MarginLeft-=340;
        product[0].style.marginLeft=MarginLeft+"px";
        console.log(MarginLeft);
    }
    
}

sliderButton[0].onclick=()=>{
    
    if(MarginLeft<0)
    {
        MarginLeft+=340;
        product[0].style.marginLeft=MarginLeft+"px";
        console.log(MarginLeft);
    }
    
}