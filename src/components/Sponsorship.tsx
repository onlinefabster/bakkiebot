import { Box, Button, Typography } from '@mui/material'
import Section from './Section'

const EMAIL = 'fabian@bakkiebot.nl'

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
            <Button
              variant="contained"
              size="large"
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Sponsorship — BakkieBot')}`}
              sx={{ px: 5, fontSize: '1.1rem' }}
            >
              ☕ Make it happen
            </Button>
            <Typography variant="body2" color="text.secondary">
              Reach Fabian Tuender directly at{' '}
              <Box
                component="a"
                href={`mailto:${EMAIL}`}
                sx={{ color: 'ink', fontWeight: 600, textDecoration: 'underline' }}
              >
                {EMAIL}
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}