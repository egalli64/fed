/*
 * Introduction to Web technologies
 * 
 * JavaScript - Events & attributes
 * 
 * Bind functions to elements identified by id - assuming they are in the DOM!
 * 
 * https://github.com/egalli64/web-intro
 */

// 1.
document.getElementById('f').addEventListener('submit', event => {
    console.log('never submit this form!');
    event.preventDefault();
});

// 2.
let x = document.getElementById('x');

x.addEventListener('focus', () => console.log('x on focus'));
x.addEventListener('blur', () => console.log('x blurred'));
x.addEventListener('change', () => console.log('x changed'));

// 3.
let clickable = document.getElementById('clickable');

clickable.addEventListener('click', event => console.log('Click on clickable box', event.screenX, event.screenY));
// "offset" is relative to the current element
clickable.addEventListener('dblclick', event => console.log('Double click on clickable box', event.offsetX, event.offsetY));
clickable.addEventListener('mouseover', event => console.log('Mouse over the clickable box', event.screenX, event.screenY));
clickable.addEventListener('mouseout', event => console.log('Mouse out of the clickable box', event.screenX, event.screenY));

// squared inline element assumed
let resizableInline = document.getElementById('resizableInline');
let baseInlineSize = resizableInline.width;

resizableInline.addEventListener('mouseover', () => {
    resizableInline.style.width = (baseInlineSize * 2) + 'px';
    resizableInline.style.height = (baseInlineSize * 2) + 'px';
});
resizableInline.addEventListener('mouseout', () => {
    resizableInline.style.width = baseInlineSize + 'px';
    resizableInline.style.height = baseInlineSize + 'px';
});

// 4. squared block element assumed
let resizableBlock = document.getElementById('resizableBlock');
let baseBlockSize = resizableBlock.offsetWidth;

resizableBlock.addEventListener('mouseover', () => {
    resizableBlock.style.width = (baseBlockSize * 2) + 'px';
    resizableBlock.style.height = (baseBlockSize * 2) + 'px';
});
resizableBlock.addEventListener('mouseout', () => {
    resizableBlock.style.width = baseBlockSize + 'px';
    resizableBlock.style.height = baseBlockSize + 'px';
});
