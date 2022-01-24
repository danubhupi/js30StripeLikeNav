const triggers=document.querySelectorAll('.cool > li');

const background=document.querySelector('.dropdownBackground');




showDropDown=(event)=>{
    
    event.target.classList.add('trigger-enter');
    setTimeout(()=>event.target.classList.contains('trigger-enter') && event.target.classList.add('trigger-enter-active'),150);
    
    let dropdown=event.target.querySelector('.dropdown');
    let rect=dropdown.getBoundingClientRect();
    // console.table(rect);
    let navCoords=document.querySelector('nav').offsetTop;

    let coords={
        width:rect.width,
        height:rect.height,
        left:rect.left,
        top:rect.top-navCoords
    }
    background.style.width=`${coords.width}px`;
    background.style.height=`${coords.height}px`;
    background.style.transform=`translate(${coords.left}px,${coords.top}px)`;

    background.classList.add('open');
}

HideDropDown=(event)=>{
    event.target.classList.remove('trigger-enter');
    event.target.classList.remove('trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger=>trigger.addEventListener('mouseenter',showDropDown));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave',HideDropDown));
