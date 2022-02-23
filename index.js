// Your code goes here
document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready to be manipulated");
    const p = document.getElementById('text')
    p.textContent = 'This is really cool!'
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded triggered.");