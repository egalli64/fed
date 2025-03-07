/*
 * Introduction to Web technologies
 * 
 * JavaScript - Events & attributes
 * 
 * https://github.com/egalli64/web-intro
 */

/**
 * Bind on loading document
 */
window.onload = () => {
    console.log('Document loaded');
};

window.addEventListener('load', () => {
   console.log('Document loaded /2');
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
});
