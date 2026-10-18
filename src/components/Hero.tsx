import { Box, Button, Typography } from '@mui/material'
import Section from './Section'

const EMAIL = 'fabian@bakkiebot.com'

export default function Hero() {
  return (
    <Section>
      {/* soft decorative blob behind the hero */}
      <Box
        sx={{
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            top: '-8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: 420, md: 680 },
            height: { xs: 300, md: 440 },
            background: '#8FC7F5',
            opacity: 0.18,
            borderRadius: '50%',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            textAlign: 'center',
            position: 'relative',
            py: { xs: 6, md: 10 },
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.2rem', md: '3.6rem' }, lineHeight: 1.12, maxWidth: 800 }}
          >
            Don't buy me a coffee.
            <br />
            Help me build the robot that does.
          </Typography>
          <Typography
            variant="h5"
            sx={{ maxWidth: 640, color: 'text.secondary', fontWeight: 500 }}
          >
            A LeRobot SO-101 and a Philips Senseo, built in public. Sponsor the
            hardware, follow the build — one bakkie at a time.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              pt: 1,
            }}
          >
            <Button
              variant="contained"
              size="large"
              href="#sponsorship"
              sx={{
                px: 4,
                fontSize: '1.05rem',
                backgroundColor: '#FFC94D',
                color: '#08285F',
                '&:hover': {
                  backgroundColor: '#08285F',
                  color: '#FFFFFF',
                },
              }}
            >
              ☕ Sponsor the build
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#how-it-works"
              sx={{ px: 4, fontSize: '1.05rem', borderColor: '#8FC7F5' }}
            >
              See what we'll build
            </Button>
          </Box>
        </Box>

        {/* contact strip */}
        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'text.secondary', mt: 1 }}
        >
          Get in touch:&nbsp;
          <Box
            component="a"
            href={`mailto:${EMAIL}`}
            sx={{ color: 'ink', fontWeight: 600, textDecoration: 'underline' }}
          >
            {EMAIL}
          </Box>
        </Typography>
      </Box>
    </Section>
  )
}