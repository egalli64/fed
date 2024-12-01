/*
 * Introduction to Web technologies
 * 
 * JavaScript - classList
 * 
 * Required to be loaded when the elements referenced by id are in the DOM!
 * 
 * https://github.com/egalli64/web-intro
 */

let target = document.getElementById('target');

document.getElementById('backAdd').addEventListener('click', () => target.classList.add('back'));
document.getElementById('backRemove').addEventListener('click', () => target.classList.remove('back'));
document.getElementById('foreToggle').addEventListener('click', () => target.classList.toggle('fore'));
document.getElementById('borderReplace').addEventListener('click', () => {
    console.log(target.classList.item(0), target.classList.item(1), target.classList.item(2));
    
    if(target.classList.contains('borderA')) {
        target.classList.replace('borderA', 'borderB');        
    } else if(target.classList.contains('borderB')) {
        target.classList.replace('borderB', 'borderC');        
    } else {
        target.classList.replace('borderC', 'borderA');        
    }
});
