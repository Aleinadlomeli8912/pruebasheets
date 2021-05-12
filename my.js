
function testGD(){

    const url = "https://script.google.com/macros/s/AKfycbxtz2gHFzKOFOtVpaHvQr6f4xRQD2J1Q6uxcAlzLMr6VRKpklc-_OrNm3t2mD5fedE/exec";

    fetch(url)
            .then(d => d.json())
            .then(d => {
                document.getElementById("app").textContent = d[0].status;
    
            });

}
document.getElementById("btn").addEventListener("click",testGD);