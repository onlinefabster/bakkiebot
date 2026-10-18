import { Box, Typography } from '@mui/material'
import Section from './Section'

const FACODE_URL = 'https://facode.nl'
const LINKEDIN_URL = 'https://www.linkedin.com/in/onlinefabster'
const MICRODUC_URL = 'https://pollen-robotics.com/microduck/'

export default function About() {
  return (
    <Section bg="#F6FAFD">
      <Box sx={{ maxWidth: 860, mx: 'auto' }}>
        <Typography variant="h2" gutterBottom align="center">
          Behind the build
        </Typography>
        <Box
          sx={{
            bgcolor: '#FFFFFF',
            borderRadius: 2,
            border: '1px solid #E8F3FC',
            p: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              bgcolor: '#E8F3FC',
              color: '#08285F',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              fontFamily: "'Caveat','Patrick Hand',cursive",
              mb: 2,
            }}
          >
            FT
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: '2rem' }} gutterBottom>
            I'm Fabian Tuender
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, maxWidth: 720 }}>
            I'm a software developer who likes it when things actually work, not
            just when they're described. At{' '}
            <Box component="a" href={FACODE_URL} target="_blank" rel="noopener noreferrer" sx={{ color: 'ink', fontWeight: 600, textDecoration: 'underline' }}>
              Facode
            </Box>
            , I build tailor-made software that ships fast — because I dig into the
            real needs behind a request.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1.5, maxWidth: 720 }}>
            I love a good challenge and I'm always learning something new. Lately
            that pull has been toward AI-driven ideas — machine learning and
            computer vision, which is exactly what lets a robot arm{' '}
            <em>see</em> a cup and <em>decide</em> what to do next.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: 720 }}>
            BakkieBot is where that all comes together: a real robotics problem,
            built out in the open for anyone to watch. It's also why I back{' '}
            <Box component="a" href={MICRODUC_URL} target="_blank" rel="noopener noreferrer" sx={{ color: 'ink', fontWeight: 600, textDecoration: 'underline' }}>
              MicroDuc
            </Box>{' '}
            by Pollen Robotics — because I believe small, open robot projects
            matter.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Box component="a" href={FACODE_URL} target="_blank" rel="noopener noreferrer" sx={{ color: 'ink', fontWeight: 600, textDecoration: 'underline' }}>
              facode.nl
            </Box>
            <Box component="a" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" sx={{ color: 'ink', fontWeight: 600, textDecoration: 'underline' }}>
              LinkedIn
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}