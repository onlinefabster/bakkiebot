import { Box, Card, CardContent, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import VerifiedIcon from '@mui/icons-material/Verified'
import SchoolIcon from '@mui/icons-material/School'
import CoffeeIcon from '@mui/icons-material/Coffee'
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
    text: 'Master motor control, computer vision and workflow planning — packaged as a friendly, tangible project.',
    color: '#A99BE8',
    bg: '#F1EEFC',
  },
  {
    icon: <CoffeeIcon fontSize="large" />,
    title: 'A robot for real life',
    text: 'Prove that collaborative robotics belong in everyday spaces, not just factory floors.',
    color: '#F28C8C',
    bg: '#FDEAEA',
  },
]

export default function Objectives() {
  return (
    <Section>
      <Typography variant="h2" gutterBottom align="center">
        Our objectives
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: 620, mx: 'auto', mb: 6 }}>
        What BakkieBot sets out to achieve — and why it matters to back.
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