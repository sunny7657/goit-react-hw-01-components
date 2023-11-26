import user from '../Data/user.json';
import { Container } from './Container/Container';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};

console.log(user);
