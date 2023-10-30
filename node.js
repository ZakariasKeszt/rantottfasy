
function xdd(){
    const sp = 'rántott fasz';
    let password = document.getElementById('password').value;
    if (password == sp){
        window.open("fasz.html");
        console.log('xd');
    }
    else{
        window.open("nofasz.html");
    }
}