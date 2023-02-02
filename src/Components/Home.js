import Hometopnav from "./Hometopnav";
import Sidebar from "./Sidebar";
export default function Home(){
    return(
        <div className="w-screen h-screen bg-[#C5C5C5]">
             {/* B2C9ED */}
             <Sidebar />
             <Hometopnav />
             
        </div>
    );
}