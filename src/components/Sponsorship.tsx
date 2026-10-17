import { Box, Button, Typography } from '@mui/material'
import Section from './Section'

const EMAIL = 'fabian@bakkiebot.nl'
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
            Sponsor BakkieBot
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 560, mx: 'auto', mb: 3, color: 'text.secondary' }}
          >
            BakkieBot makes a compelling story about robotics in everyday life. Your
            support helps fund hardware, tools and development — and puts your brand
            in front of people who believe robots belong on every counter.
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
                ☕ Buy us a coffee
              </Button>
            </Box>
            <Button
              variant="text"
              size="medium"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Sponsorship — BakkieBot')}`}
            >
              Want to partner or sponsor with your brand? Email {EMAIL}
            </Button>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}