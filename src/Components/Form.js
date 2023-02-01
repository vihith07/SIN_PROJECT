export default function Form(){
    const title="Image Upload"
    const handleClose=()=>{
        document.getElementById("commform").style.display="none";
    }
    const handleSubmit=()=>{
        fetch("http://localhost:5000/comment/abd123/imageupload/user123",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                comment:document.getElementById("comment").value
            })
        }).then(resp=>resp.json()).then(data=>{
            if(data.stat==200){
                handleClose();
            }
            else{
                throw new Error("data sent but server responds problem");
            }
        }).catch(err=>{console.log(err);});

    };
    return(
        <div id="commform" className="bg-black p-0.5 h-screen w-full">
            <div className="p-4 flex flex-col rounded mx-auto bg-[#2D335B] w-full lg:w-8/12 mt-3">
                <div className="text-right"><button onClick={handleClose} className="p-1 bg-[#469DFF] text-white opacity-75 hover:opacity-100 rounded text-sm px-3 font-semibold m-2">Close</button></div>
                <div id="FeatureTitle" className="text-3xl text-center text-white my-4 ">{title}</div>
                <div id="FeatureDesc">
                    <div className="text-[#CFCFCF] my-5"> &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;hi lorem  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                    <ul className="text-[#EBEBEB] p-1 font-semibold my-5 max-desc">
                        <li className="my-2">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                        <li className="my-2">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                        <li className="my-2">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                        <li className="my-2">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                    </ul>
                </div>
                <div><textarea id="comment" className="outline-none w-full bg-[#363E70] resize-none text-white inh60 p-2" placeholder="Enter Your Comments"></textarea></div>
                <div className="text-center"><button className="p-1 hover:bg-[#469DFF] text-white border-2 border-[#469DFF] rounded text-xl text-center px-3 m-2" onClick={handleSubmit}>Submit</button></div>
            </div>
        </div>
    );
}