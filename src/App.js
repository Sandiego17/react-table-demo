import './App.css';
import { BasicTable } from './components/BasicTable';
import { ColumnOrderTable } from './components/ColumnOrder';
import { PaginationTable } from './components/PaginationTable';
import { RowSelectionTable } from './components/RowSelectionTable';

const App = () => {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelectionTable /> */}
      <ColumnOrderTable />
    </div>
  );
}

export default App;
