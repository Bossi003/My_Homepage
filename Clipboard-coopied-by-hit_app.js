const sharebuttons = document.querySelectorAll('.tile-share-button')
console.log(sharebuttons) 
//damit der button nicht zur webseite geht (wegen der await methode unten muss es eine async function sein)
async function copytext(e){

  e.preventDefault()
  const link = this.getAttribute('link')
  console.log(link)  
  try {
     await navigator.clipboard.writeText(link)
        alert("Copied to Clipboard " + link)
  } catch (err) {
    console.error(err)
  }
}
sharebuttons.forEach(sharebutton => sharebutton.addEventListener('click', copytext))




// Just the linktree-clone app.js for the link coopied to clipboard is you hit the button
// nur die app.js für Zwischenablage kopieren sofern man auf ein button clickt 
