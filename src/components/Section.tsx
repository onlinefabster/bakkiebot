import { Container, Box } from '@mui/material'
import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  children: ReactNode
  /** light pastel background for this section, else default off-white */
  bg?: string
  py?: number
}

/** Shared full-width section wrapper with centered content. */
export default function Section({
  id,
  children,
  bg,
  py = 10,
}: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor: bg ?? 'transparent',
        scrollMarginTop: 80,
        py,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  )
}