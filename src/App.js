import './App.css';
import ExportExcel from './excelExport';

function App() {

const ExcelExportData = [
  {
    "First Name": "Nome 1",
    "Last Name": "Sobrenome 1"
  },
  {
    "First Name": "Nome 2",
    "Last Name": "Sobrenome 2"
  },
  {
    "First Name": "Nome 3",
    "Last Name": "Sobrenome 3"
  },
  {
    "First Name": "Nome 4",
    "Last Name": "Sobrenome 4"
  },
]

  return (
    <div className="App">
      <h1 style={{marginTop:"20%"}}>Exportar Excel</h1>
      <ExportExcel excelData={ExcelExportData} fileName={"Lista de Nomes"} />
    </div>
  );
}

export default App;
