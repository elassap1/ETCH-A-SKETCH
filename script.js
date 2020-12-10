//start create elements and style it
//{

// select element 
const header  = document.querySelector('header');
const section = document.querySelector('section');
const footer  = document.querySelector('footer');
// create new element
const h1content = document.createElement('h1');
const divcontnaire = document.createElement('div');

// add content  
h1content.innerHTML = 'ETCH-A-SKETCH';
// add class to 
    h1content.classList.add('h1');
    divcontnaire.classList.add('contnaire');
// append to 
    section.appendChild(divcontnaire);
    header.appendChild(h1content);

// array of type to input
const att = ['range', 'color', 'checkbox', 'button'];
// array of label
const lab = ['Grid Size','Box Color', 'Random Color', 'Clear']
// create labels
createElements(4, 'label', footer, '', '', true, lab);
// create input
createElements(4, 'input', footer, 'type', att, '', '','input');

// function create multi element (div)
function createElements(size, ele='div', append='', type, caseu='', bool=false, label, vwh){
    for (let index = 0; index < size; index++) {
        // create new element type => (d)
        const div1 = document.createElement(ele);
        // add class to element if it not empty
        if(caseu != ''){
            div1.setAttribute(`${type}`,`${caseu[index]}`);
        }
        // add att (variable type)class whith+index (.att_0) 
        if (type == 'class') {
            div1.setAttribute(`${type}`,`${caseu+index}`);
        }
        // inserte things (text | element | index)
        if (bool == true) {
            div1.innerHTML = `${label[index]}` ;
        }
        if (vwh != 0) {
        //    set att
            div1.setAttribute('width',`${vwh}`);
            div1.setAttribute('height',`${vwh}`);
        }
        //append element div1 to divid
        append.appendChild(div1);
    }
}
// select ele and add att
const child5 = document.querySelector('footer :nth-child(5)');
    child5.setAttribute('min',8);
    child5.setAttribute('max',64);
    child5.setAttribute('value',8);

// select element and set value
const color = document.querySelector('footer :nth-child(6)');
        color.value = "#00ff00"

// get value size of ele
const width = document.querySelector('.contnaire').computedStyleMap().get('width').value;
// create multi nodschild in contnaire
createElements(64, 'div', divcontnaire, 'class', 'divsize div_', '', '','');
        

//set new color to box when hover ele
document.addEventListener('mouseover', function(e){
    const button = document.querySelector('footer :nth-child(7)').checked; 
    //check if the target is correcte
    if(e.target.classList[0] == 'divsize' && button == false){
        //set new color
        e.target.style.cssText += `background: ${color.value}`;
        // if checkbox is checked
    }else if (e.target.classList[0] == 'divsize' && button == true) {
        // rnadom number for set color
        let clr1 = Math.floor(Math.random()*283);
        let clr2 = Math.floor(Math.random()*283);
        let clr3 = Math.floor(Math.random()*283);
        // set new color
        e.target.style.cssText += `background: rgb(${clr1},${clr2},${clr2})`
    }  
        
});

// set size of box
document.addEventListener('click', function(e){
    // get width value
    const width = document.querySelector('.contnaire').computedStyleMap().get('width').value;
    // create multi div
    const ele = e.target;
    //check if the target is correcte
    if(ele.attributes.type.value == 'range'){
        // get range value
        const val = e.target.value;
        //size calculate
        let sizew = (width-val)/val ,
        sizeh = (width-val)/val ;
        // convert to string
        let stringheight = sizeh.toFixed().toString()+'px',
            stringwidth = sizew.toFixed().toString()+'px';

        //set new width and heigth
        let divlength = document.querySelectorAll('.contnaire >div');
            for (let index = 0; index < divlength.length; index++) {
                // select ele by index
                const element = divlength[index];
                // set new width
                element.style.width = stringwidth;
                // set new height
                element.style.height = stringheight;
            }
            
            //create box 
            const divlen = divcontnaire.children.length;
            if (divlen < val*val ) {
                // delete all child 
                divcontnaire.innerHTML = '';
                // create multi child
                createElements(val*val, 'div', divcontnaire, 'class', 'divsize div_', '', '','');
                // set div's size
                divcontnaire.style.setProperty('grid-template-columns', `repeat( ${val} , 1fr)`);
                divcontnaire.style.setProperty('grid-template-rows', `repeat( ${val} , 1fr)`);
            }
            else if( divlen > val*val ){
                divcontnaire.innerHTML = '';
                createElements(val*val, 'div', divcontnaire, 'class', 'divsize div_', '', '','');
                // set div size
                divcontnaire.style.setProperty('grid-template-columns', `repeat( ${val} , 1fr)`);
                divcontnaire.style.setProperty('grid-template-rows', `repeat( ${val} , 1fr)`);
            } 
    }// clear button
    else if (ele.attributes.type.value == 'button') {
        divcontnaire.innerHTML = '';
        createElements(val*val, 'div', divcontnaire, 'class', 'divsize div_', '', '','');
        divcontnaire.style.setProperty('grid-template-columns', `repeat( ${val} , 1fr)`);
        divcontnaire.style.setProperty('grid-template-rows', `repeat( ${val} , 1fr)`);
    }else {
        console.log(e.target);
    }
});

//  }
//end create element 
/**/