import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

function App() {

    const data = [
        {name: 'Arnold S.', salary: 800, increase: false, id: 1},
        {name: 'Bob M.', salary: 2400, increase: true, id: 2},
        {name: 'Fred H.', salary: 3000, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm />
        </div>
    );
}

export default App;