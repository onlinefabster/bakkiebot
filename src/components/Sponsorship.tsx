import { Box, Button, Typography } from '@mui/material'
import Section from './Section'

const EMAIL = 'fabian@bakkiebot.com'
const GITHUB_SPONSORS_URL = 'https://github.com/sponsors/onlinefabster'
const KOFI_URL = 'https://ko-fi.com/fab2ster'

export default function Sponsorship() {
  return (
    <Section id="sponsorship">
      <Box
        sx={{
          maxWidth: 720,
          mx: 'auto',
          textAlign: 'center',
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%',
            background: '#FFF6D9',
            opacity: 0.6,
            borderRadius: '50%',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h2" gutterBottom>
            Back the build
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 580, mx: 'auto', mb: 3, color: 'text.secondary' }}
          >
            I'm building BakkieBot for the same reason I think you'd want it to
            exist: robotics shouldn't stay behind factory walls. This is a real
            robot arm and a real coffee machine, built out in the open — hardware,
            code and progress, every step published.
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 580, mx: 'auto', mb: 4, color: 'text.secondary' }}
          >
            Your contribution buys the machine. In return, your name goes on the
            build, you get updates as it comes to life — and when it delivers, the
            first cups are on me.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                size="large"
                href={GITHUB_SPONSORS_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ px: 4, fontSize: '1.1rem' }}
              >
                Sponsor on GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={KOFI_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ px: 4, fontSize: '1.1rem' }}
              >
                ☕ Back on Ko-fi
              </Button>
            </Box>
            <Button
              variant="text"
              size="medium"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('BakkieBot sponsorship')}`}
            >
              Want to partner or put your brand on the robot? Email {EMAIL}
            </Button>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}