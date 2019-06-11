import React from 'react';
import { DataTable } from '@makes-apps/lib';
import { AppUrls } from '../../app';
import { User, userId } from '../../store/users';

interface Props {
  user?: User;
  users: { [key: string]: User };
  goto: (path: string) => void;
}

const UsersList = ({ goto, user, users }: Props) => (
  <DataTable
    columns={[{ header: 'firstName' }, { header: 'lastName' }]}
    data={Object.keys(users).map(userId => users[userId])}
    onRowClick={(u, e) => {
      e.preventDefault();
      console.log(user);
      console.log(u);
      if (user && userId(u) === userId(user)) {
        goto(AppUrls.users.find(userId(u)));
      }
    }}
  />
);

export default UsersList;
