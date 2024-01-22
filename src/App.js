import './App.css';
import { BasicTable } from './components/BasicTable';
import { PaginationTable } from './components/PaginationTable';

const App = () => {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
