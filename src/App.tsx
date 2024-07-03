import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Router from "./routes/Router";

const App = () => {
  return (
    <AppLayout>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AppLayout>
  );
};

export default App;

const AppLayout = styled.div`
  background-color: #1e1e20;
  width: 100%;
  max-width: 720px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: 375px;
    color: white;
  }
`;
