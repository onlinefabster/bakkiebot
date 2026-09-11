import { Container, Typography, Button } from '@mui/material'

/**
 * BakkieBot — single-page investor site.
 * Sections: Hero, Problem, Objectives, Setup, Sponsorship, Footer.
 * Component placeholders composed here in order.
 */
function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h1" align="center" gutterBottom>
        BakkieBot
      </Typography>
      <Typography variant="h5" align="center" sx={{ opacity: 0.8 }}>
        A robot arm that makes your coffee.
      </Typography>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Button variant="contained" href="#sponsorship" size="large">
          ☕ Become a Sponsor
        </Button>
      </div>
    </Container>
  )
}

export default App