import { UserProps } from "../types/user"
import { Search } from "./Search"
import { User } from "./User"
import { Error } from "./Error"
import { useState } from "react"
import { GlobalStyle } from "../styles/global"

export function Home() {
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)

    const loaderUser = async(userName: string) => {
        setError(false);
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()
        if(res.status === 404) {
            setError(true)
            return
        }

        const { avatar_url, login, location, followers, following } = data
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        setUser(userData)
    }

    return(
        <div>
            <Search loaderUser={loaderUser} />
            {user && <User {...user} />}
            {error && <Error />}

            <GlobalStyle />
        </div>
    )
}