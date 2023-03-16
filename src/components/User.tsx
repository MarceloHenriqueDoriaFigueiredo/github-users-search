import { UserProps } from '../types/user'
import { MdLocationPin } from 'react-icons/md'
import { StatusContainer, StatusNumber, UserContainer } from './User.style'

export function User({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) {
  return (
    <UserContainer>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p>
        <MdLocationPin />
        <span>{location}</span>
      </p>

      <StatusContainer>
        <div>
          <p>Seguidores:</p>
          <StatusNumber>{followers}</StatusNumber>
        </div>

        <div>
          <p>Seguindo:</p>
          <StatusNumber>{following}</StatusNumber>
        </div>
      </StatusContainer>
    </UserContainer>
  )
}
