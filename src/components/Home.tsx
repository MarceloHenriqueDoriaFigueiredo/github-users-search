import { UserProps } from "../types/user"
import { Search } from "./Search"
import { useState } from "react"

export function Home() {
    const [user, setUser] = useState<UserProps | null>(null)
    const loaderUser = async(userName: string) => {
        
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data= await res.json()
        const { avatarUrl, login, location, followrs, following } = data
        const userData: UserProps = {
            avatarUrl,
            login,
            location,
            followrs,
            following
        }
        setUser(userData)
    }

    return(
        <div>
            <Search loaderUser={loaderUser} />
            {user && <p>{user.following}</p>}
        </div>
    )
}