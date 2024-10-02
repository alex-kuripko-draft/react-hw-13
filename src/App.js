import Filter from './components/filter';
import UserList from './components/user-list';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>User List</h1>
            <Filter/>
            <UserList/>
        </div>
    );
}

export default App;