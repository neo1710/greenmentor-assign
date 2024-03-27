import "./Login.css"

export const Login=()=>{

    return(
        <div>
            <div className="loginForm">
             
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="email" placeholder="Email"/> <br />
                <input className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
                 type="password" placeholder="Password"/> <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                 Login
                </button> <br />
            </div>
        </div>
    )
}