
const ADMIN_PASSWORD = "lucbanadmin";

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function openAuth(){
    document.getElementById('authModal').style.display='flex';
}
function closeAuth(){
    document.getElementById('authModal').style.display='none';
}

function register(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('password').value;
    localStorage.setItem(email,pass);
    alert('Registered!');
}
function login(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('password').value;
    if(localStorage.getItem(email)===pass){
        alert('Logged in!');
        if(pass===ADMIN_PASSWORD){
            document.getElementById('adminToggle').style.display='inline-block';
        }
    } else alert('Wrong credentials');
}

function toggleAvailability(){
    const current=localStorage.getItem('available')==='true';
    localStorage.setItem('available',(!current).toString());
    updateStatus();
}

function updateStatus(){
    const status=localStorage.getItem('available')==='true';
    const box=document.getElementById('statusBox');
    box.textContent=status?'Available Today!':'Sold Out Today';
    box.style.background=status?'#a3d977':'#ffb3b3';
}

updateStatus();
