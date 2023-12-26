const badWords= ['fuck','shut','moron'];
function censor(){
let original= document.getElementById('subheading').textContent.split(' ');
original.forEach(word=>{
    badWords.forEach(bword=>{
        if( word===bword){
            original[original.indexOf(word)] = '***';
            return;
        }
    })
})
newString= original.join(' ');
document.getElementById('subheading').innerHTML=newString;}