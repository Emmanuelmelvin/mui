import './App.css'
import { MuiResponsiveness } from './components/MuiResponsiveness';
import { createTheme , colors , ThemeProvider} from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#000000'
  },
  palette: {
    secondary:{
      main: colors.orange[500],
    }
    }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
        <MuiResponsiveness/>
    </div>
    </ThemeProvider>
  );
}
export default App;
 