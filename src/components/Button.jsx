// 1) Import useContext
import { useContext } from "react"
// 2) Import the variable 
import { UserStatus } from "../App.js"

export default function Button () {
    // 3) Use UserText
    const [signedIn, setSignedIn] = useContext(UserStatus)



    return(
            <>
        <button onClick={() =>setSignedIn(!signedIn)  }>
    {signedIn ? "Sign out": "Sign in"}
        </button>
             </>
    )
}


