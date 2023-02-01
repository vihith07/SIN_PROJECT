import {Link} from "react-router-dom";
export default function Signup(){
    return(
        <div class="w-screen h-screen p-2 bg-[#202543]">
            <div class="w-6/12 justify-evenly p-2 rounded-lg flex flex-col h-4/5 mx-auto mt20 bg-[#2D335B]">
                <div class="text-center text-4xl text-white"><span className="text-[#469DFF]">S</span>ocial <span className="text-[#469DFF]">A</span>nlytics</div>
                <div>
                    <div class="mx-auto flex flex-col w-7/12">
                        <input type="text" autoComplete="off" className="my-2 text-white outline-none p-2 text-md bg-[#363E70]" id="usn" placeholder="enter username" />
                        <input type="password" autoComplete="off" className="my-2 text-white outline-none p-2 text-md bg-[#363E70]" id="pass" placeholder="enter password" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="p-1 hover:bg-[#469DFF] text-white border-2 border-[#469DFF] rounded text-xl text-center px-3 m-2">SignUp</button>
                </div>
                <div className="text-center opacity-60 hover:opacity-100 text-[#469DFF]">
                    <Link to="/signup">Go To Signup</Link>
                </div>
                <div className="text-center invisible text-xl text-white">
                    Wrong Credentials
                </div>
            </div>

        </div>
    );
}