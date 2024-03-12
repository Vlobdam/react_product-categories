import cn from 'classnames';

import usersFromServer from '../../api/users';

export const UserFilter = ({ userFilter, setUserFilter }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      onClick={() => setUserFilter('')}
      className={
        cn({
          'is-active': userFilter === '',
        })
      }
    >
      All
    </a>

    {usersFromServer.map(user => (
      <a
        data-cy="FilterUser"
        href="#/"
        onClick={() => setUserFilter(user.name)}
        key={user.id}
        className={
          cn({
            'is-active': userFilter === user.name,
          })
        }
      >
        {user.name}
      </a>
    ))}
  </p>
);
