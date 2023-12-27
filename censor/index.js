// Abusive words list (add more as needed)
const badWords= ['fuck','shut','moron'];

// Function to censor abusive words in the content
function censor(){
    // let original= document.getElementById('subheading').textContent.split(' ');
    // original.forEach(word=>{
    //     badWords.forEach(bword=>{
    //         if( word===bword){
    //             original[original.indexOf(word)] = '***';
    //             return;
    //         }
    //     })
    // });

    // Get the content element by its ID
    var contentElement = document.getElementById('subheading');

    // Get the inner HTML of the content element
    var content = contentElement.innerHTML;

    // Loop through each bad word in the list
    badWords.forEach(function (word) {
        // Create a regular expression for case-sensitive matching with spaces
        
        //word.split('') takes the variable word (which represents an abusive word) and splits it into an array of characters.
        
        //join('\\s*') is a method that joins the elements of an array into a string. In this case, it joins the characters of the array with the regular expression \s*.
        
        //By using join('\\s*'), we are inserting \s* between each character of the abusive word.

        // 'g': The second argument to the RegExp constructor is the flag. In this case, 'g' stands for "global," which means the regular expression will find all matches in the input string, rather than stopping after the first match.
        var regex = new RegExp(word.split('').join('\\s*'), 'g');

        // Replace abusive words with asterisks using the regular expression
        content = content.replace(regex, function (match) {
            return '*'.repeat(match.length);
        });
    });

    // Update the content element with the censored text
    contentElement.innerHTML = content;
}

// Call the censor function when the page loads
window.onload = censor;