import React from 'react';
import {useSelector} from 'react-redux';
import UserItem from './user-item';
import styles from '../../styles/user-list.module.css';

const UserList = () => {
    const {users, filter} = useSelector((state) => state);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.userList}>
            {filteredUsers.map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    );
};

export default UserList;