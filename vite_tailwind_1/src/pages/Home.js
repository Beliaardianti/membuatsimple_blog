import Navbar from "../components/Navbar";
const app = document.getElementById('app');

export default function Home (){

    // ubah dokumen title 
    document.title = "Home Page";

    app.innerHTML = `
    ${ Navbar()}
    <div class = "w-screen min-h-screen max-w-[1440px] mx-auto p-4">
        <h1 class= "text-orange-500 font-light">Home Page</h1>
    </div>
    `
}