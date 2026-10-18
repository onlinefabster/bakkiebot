import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#071B46',
        color: '#E8F3FC',
        py: 5,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{ fontFamily: "'Caveat','Patrick Hand',cursive", mb: 1 }}
        >
          BakkieBot
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
          Don't buy me a coffee — help me build the robot that does. Sponsored
          hardware, built in public.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            opacity: 0.85,
          }}
        >
          <Box component="a" href="https://www.bakkiebot.com" target="_blank" rel="noreferrer" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            www.bakkiebot.com
          </Box>
          <Box component="a" href="mailto:fabian@bakkiebot.com" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            fabian@bakkiebot.com
          </Box>
          <Box component="a" href="#top" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
            Back to top ↑
          </Box>
        </Box>
        <Typography variant="caption" sx={{ mt: 3, opacity: 0.6, display: 'block' }}>
          © {new Date().getFullYear()} Fabian Tuender · BakkieBot. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}