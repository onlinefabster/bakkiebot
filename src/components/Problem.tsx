import { Box, Typography } from '@mui/material'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CoffeeIcon from '@mui/icons-material/Coffee'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import Section from './Section'

const POINTS = [
  {
    icon: <ScheduleIcon />,
    title: 'Inconsistent mornings',
    text: 'Everyone brews differently — the strength, the timing, the flow. A robot follows the same recipe every single time.',
    color: '#8FC7F5',
  },
  {
    icon: <CoffeeIcon />,
    title: 'A real-world robotics testbed',
    text: 'Operating a Philips Senseo is a genuine manipulation problem — fine motor control, sensing, and a reliable workflow. That is fun to watch being solved in public.',
    color: '#8CCB9A',
  },
  {
    icon: <PrecisionManufacturingIcon />,
    title: 'Robots built for people',
    text: 'Most automation lives behind factory walls. BakkieBot puts a friendly, approachable robot in a daily human setting — a robot on the counter, not in a cage.',
    color: '#FFC94D',
  },
]

export default function Problem() {
  return (
    <Section bg="#F6FAFD">
      <Typography variant="h2" gutterBottom align="center">
        Why BakkieBot?
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 640, mx: 'auto', mb: 6 }}
      >
        A fresh cup of coffee still depends on a human in the loop. BakkieBot takes
        that routine out — one real robot, one real coffee machine, and the whole
        build laid open for anyone to follow.
      </Typography>
      <Box
        sx={{
          maxWidth: 760,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
        }}
      >
        {POINTS.map((c) => (
          <Box
            key={c.title}
            sx={{
              bgcolor: '#FFFFFF',
              borderRadius: 2,
              p: 3,
              border: '1px solid #E8F3FC',
            }}
          >
            <Box sx={{ color: c.color, mb: 1 }}>{c.icon}</Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "'Caveat','Patrick Hand',cursive",
                fontSize: '1.6rem',
              }}
              gutterBottom
            >
              {c.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {c.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  )
}