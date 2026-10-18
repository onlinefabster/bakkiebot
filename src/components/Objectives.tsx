import { Box, Card, CardContent, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import VerifiedIcon from '@mui/icons-material/Verified'
import SchoolIcon from '@mui/icons-material/School'
import GroupIcon from '@mui/icons-material/Group'
import Section from './Section'

const OBJECTIVES = [
  {
    icon: <AutoAwesomeIcon fontSize="large" />,
    title: 'A fully automatic brew',
    text: 'From empty cup to ready coffee with zero human intervention — press one button and walk away.',
    color: '#8FC7F5',
    bg: '#E8F3FC',
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: 'Consistent every time',
    text: 'Repeatable positioning and timing so every cup is exactly the same quality as the last.',
    color: '#8CCB9A',
    bg: '#EAF6ED',
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    title: 'Learn real robotics',
    text: 'Motor control, computer vision and workflow planning — packaged as a friendly, tangible project you can actually watch.',
    color: '#A99BE8',
    bg: '#F1EEFC',
  },
  {
    icon: <GroupIcon fontSize="large" />,
    title: 'Built in public, funded by you',
    text: 'Hardware, code and progress laid open online. Your support literally buys the machine — and you get to see it work.',
    color: '#F28C8C',
    bg: '#FDEAEA',
  },
]

export default function Objectives() {
  return (
    <Section>
      <Typography variant="h2" gutterBottom align="center">
        Why back the build
      </Typography>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: 800, color: '#08285F', fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1 }}
      >
        Buy the robot. Watch it learn.
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: 620, mx: 'auto', mb: 6 }}>
        BakkieBot is a real robot on a real counter — built out in the open, the whole
        way. Here is what backing it gets you.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {OBJECTIVES.map((o) => (
          <Card key={o.title} sx={{ bgcolor: o.bg }}>
            <CardContent>
              <Box sx={{ color: o.color, mb: 1.5 }}>{o.icon}</Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: '1.5rem' }}
                gutterBottom
              >
                {o.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {o.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Section>
  )
}