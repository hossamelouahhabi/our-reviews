import './App.css';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import Review from './components/Review';

const theme = createTheme({
  typography: {
    fontFamily: ["Popping"]
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm' sx={{textAlign: "center", mt: "8rem"}}>
        <div >
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </Container>
    </ThemeProvider>
  );
}

export default App;
