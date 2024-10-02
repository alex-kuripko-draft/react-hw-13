import {useDispatch} from 'react-redux';
import styles from '../../styles/filter.module.css';
import {setFilter} from "../../redux/actions";

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div className={styles.filterContainer}>
            <input
                type="text"
                placeholder="Search by name..."
                onChange={handleFilterChange}
                className={styles.filterInput}
            />
        </div>
    );
};

export default Filter;