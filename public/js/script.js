document.getElementById('image-form').onsubmit = generateImage

function generateImage(e) {
    e.preventDefault();
    let keyword = document.querySelector('#keyword').value

    if(keyword === ""){
        alert("Enter The Keyword");
        return;
    }
    generateImageRequest(keyword)
}

async function generateImageRequest(keyword) {
    try {
        const response = await fetch('/openai/generateimage', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                keyword
            })
        });
        if(!response.ok){
            alert("Image Cannot be generated")
        }
        const data = await response.json();
        const img = document.getElementById("image")
        img.src = data.data
    } catch (error) {
        alert("Check your internet")
    }
}