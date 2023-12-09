import logo from './logo.svg';
import './App.css';
import { Button, Container, ThemeProvider, createTheme } from '@mui/material';
import Review from './components/Review';

const theme = createTheme({
  typography: {
    fontFamily: ["Popping"]
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm' sx={{textAlign: "center", mt: "15rem"}}>
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
