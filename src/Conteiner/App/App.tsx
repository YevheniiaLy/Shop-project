import Header from 'Conteiner/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'Conteiner/Main/Main'
const App = () => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
                <Main />
            </StyledEngineProvider>
        </>
    )
}
export default App
