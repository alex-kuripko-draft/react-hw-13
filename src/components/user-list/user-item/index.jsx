import styles from '../../../styles/user-item.module.css';

const UserItem = ({user}) => {
    return (
        <div className={styles.userItem}>
            <p>{user.name}</p>
        </div>
    );
};

export default UserItem;