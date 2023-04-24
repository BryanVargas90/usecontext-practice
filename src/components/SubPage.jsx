import { useContext } from "react"
import { UserStatus, UserText } from "../App.js"



export default function SubPage () {
    const [signedIn, setSignedIn] = useContext(UserStatus)

    return (
        <>
        <h2> SubPage</h2>
        <button OnClick = { () => setSignedIn(!signedIn)} >
             { signedIn ? "Sign Out" :"Sign In" }
        </button>
        </>
    )
}