import { Box, Card, CardContent, Typography } from '@mui/material'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import CoffeeIcon from '@mui/icons-material/Coffee'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import Section from './Section'

const TIERS = [
  {
    icon: <PrecisionManufacturingIcon fontSize="large" />,
    label: 'Big ticket',
    title: 'Sponsor the robot arm',
    item: 'SO-ARM100 / 101 open-source 6-axis robotic arm (Waveshare, Hugging Face LeRobot)',
    price: '$1,063.99',
    priceNote: 'all-in-one arm kit',
    bg: '#E8F3FC',
    color: '#8FC7F5',
    highlight: true,
  },
  {
    icon: <CoffeeIcon fontSize="large" />,
    label: 'Small ticket',
    title: 'Sponsor the coffee machine',
    item: 'Philips SENSEO Vibe pad machine',
    price: '€89.99',
    priceNote: '',
    bg: '#EAF6ED',
    color: '#8CCB9A',
    highlight: false,
  },
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    label: 'Any amount',
    title: 'Back the build',
    item: 'Every contribution counts — no fixed stake, just fuel for the project.',
    price: 'Any',
    priceNote: '',
    bg: '#FFF6D9',
    color: '#FFC94D',
    highlight: false,
  },
]

const PERKS = [
  'Your name (or brand) on the build',
  'Updates as each step comes to life',
  'A first cup when the robot delivers',
]

export default function Tiers() {
  return (
    <Section>
      <Typography variant="h2" gutterBottom align="center">
        Sponsor the hardware
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 620, mx: 'auto', mb: 5, color: 'text.secondary' }}
      >
        Two real pieces of hardware buy this project. Pick one to make it happen —
        or chip in any amount. The goal is simple: get the machine built, in public.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          maxWidth: 980,
          mx: 'auto',
        }}
      >
        {TIERS.map((t) => (
          <Card
            key={t.title}
            sx={{
              bgcolor: t.bg,
              border: t.highlight ? '2px solid #08285F' : '1px solid #E8F3FC',
              transform: t.highlight ? { md: 'scale(1.03)' } : 'none',
            }}
          >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ color: t.color, display: 'flex', alignItems: 'center', gap: 1 }}>
                {t.icon}
                <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700 }}>
                  {t.label}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: '1.6rem' }}
              >
                {t.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t.item}
              </Typography>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#08285F' }}>
                  {t.price}
                </Typography>
                {t.priceNote && (
                  <Typography variant="caption" color="text.secondary">
                    {t.priceNote}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          maxWidth: 620,
          mx: 'auto',
          mt: 5,
          bgcolor: '#FFFFFF',
          borderRadius: 2,
          border: '1px solid #E8F3FC',
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: '1.5rem' }}>
          Every backer gets
        </Typography>
        {PERKS.map((p) => (
          <Typography key={p} variant="body2" color="text.secondary">
            ✓ {p}
          </Typography>
        ))}
      </Box>
    </Section>
  )
}