import { Box, Typography } from '@mui/material'
import Section from './Section'
import operationImg from '../assets/sketch-operation.png'

const STEPS = [
  { n: '01', title: 'Pick up cup', text: 'The robot arm picks up an empty cup from the cup holder.', bg: '#E8F3FC', color: '#8FC7F5' },
  { n: '02', title: 'Move to machine', text: 'The arm carries the cup across to the coffee machine.', bg: '#EAF6ED', color: '#8CCB9A' },
  { n: '03', title: 'Position cup', text: 'The cup is placed precisely under the brewing spout.', bg: '#FFF6D9', color: '#FFC94D' },
  { n: '04', title: 'Start coffee', text: 'The gripper presses the button to begin the brew.', bg: '#FDEAEA', color: '#F28C8C' },
  { n: '05', title: 'Pick up cup', text: 'Once brewed, the arm lifts the full cup with fresh coffee.', bg: '#E1F3F0', color: '#5FBFA9' },
  { n: '06', title: 'Deliver', text: 'The robot sets the finished cup down, ready to enjoy.', bg: '#F1EEFC', color: '#A99BE8' },
]

export default function Setup() {
  return (
    <Section id="how-it-works" bg="#F6FAFD">
      <Typography variant="h2" gutterBottom align="center">
        How it works
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 620, mx: 'auto', mb: 5 }}
      >
        From empty cup to perfect coffee — automatically.
      </Typography>

      {/* 6-step process, per the sketch */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 6,
        }}
      >
        {STEPS.map((s) => (
          <Box
            key={s.n}
            sx={{
              bgcolor: s.bg,
              borderRadius: 6,
              p: 3,
              border: '1px solid #E8F3FC',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: '#FFFFFF',
                color: s.color,
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1.5,
                fontSize: '1.05rem',
              }}
            >
              {s.n}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontFamily: "'Caveat','Patrick Hand',cursive",
                fontSize: '1.6rem',
              }}
              gutterBottom
            >
              {s.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {s.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* The operation illustration */}
      <Box
        sx={{
          maxWidth: 780,
          mx: 'auto',
          bgcolor: '#FFFFFF',
          borderRadius: 6,
          border: '1px solid #E8F3FC',
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          component="img"
          src={operationImg}
          alt="A robot arm holds a coffee cup under a coffee machine pouring a fresh brew"
          sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: 3 }}
        />
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          A collaborative robot arm, a Philips Senseo — and a perfect cup of coffee.
        </Typography>
      </Box>
    </Section>
  )
}