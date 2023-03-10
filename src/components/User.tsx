import { UserProps } from "../types/user"
import {MdLocationPin} from 'react-icons/md'
import styles from './User.module.css'

export function User({login, avatar_url, location, followers,following }: UserProps) {
    return(
        <div className={styles.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            <p className={styles.location}>
                <MdLocationPin />
                <span>{location}</span>
            </p>

            <div className={styles.status}>
                <div>
                    <p>Seguidores:</p>
                    <p className={styles.numbers}>{followers}</p>
                </div>

                <div>
                    <p>Seguindo:</p>
                    <p className={styles.numbers}>{following}</p>
                </div>
            </div>
        </div>
    )
}