import './App.css';
import { BasicTable } from './components/BasicTable';
import { PaginationTable } from './components/PaginationTable';
import { RowSelectionTable } from './components/RowSelectionTable';

const App = () => {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <PaginationTable /> */}
      <RowSelectionTable />
    </div>
  );
}

export default App;
