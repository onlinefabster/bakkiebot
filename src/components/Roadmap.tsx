import { Box, Typography } from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import PanToolIcon from '@mui/icons-material/PanTool'
import ModelTrainingIcon from '@mui/icons-material/ModelTraining'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import Section from './Section'

const BLOCKS = [
  {
    icon: <BuildIcon fontSize="large" />,
    n: '01',
    title: 'Set up & calibrate the arms',
    color: '#8FC7F5',
    bg: '#E8F3FC',
    summary:
      'A leader arm you move by hand, a follower arm that mirrors it — the LeRobot SO-101 pair, wired and calibrated so a policy trained on one runs on the other.',
    tech: [
      'LeRobot SO-101 6-axis arms (leader + follower) with ST3215 bus servos and 12-bit magnetic encoders',
      'Install LeRobot + Feetech SDK; assign unique motor ids and baudrate over MotorBus',
      'Run lerobot-calibrate so leader and follower agree on joint positions at the same physical pose',
      'This shared calibration is what lets a trained policy transfer between the two arms',
    ],
  },
  {
    icon: <PanToolIcon fontSize="large" />,
    n: '02',
    title: 'Record demonstrations',
    color: '#8CCB9A',
    bg: '#EAF6ED',
    summary:
      'You guide the leader through the coffee sequence and the follower mirrors it, while everything is recorded — that is the training data.',
    tech: [
      'Bilateral teleoperation: move the leader, follower reproduces it in real time',
      'Each episode logs 6-DOF joint positions + camera frames at 30 fps (Parquet/LeRobot dataset format)',
      'Record many episodes, varying the cup\u2019s starting position so the policy generalizes',
      'Like Panbot: multiple policy observation cameras cover the cup and the machine',
    ],
  },
  {
    icon: <ModelTrainingIcon fontSize="large" />,
    n: '03',
    title: 'Train the policy',
    color: '#A99BE8',
    bg: '#F1EEFC',
    summary:
      'The recorded demonstrations train a neural-network policy (imitation learning) that reproduces each coffee step from its camera view.',
    tech: [
      'ACT (Action Chunking with Transformers), trained end-to-end on the recorded episodes',
      'ResNet image encoder for the camera observations; action chunking for smooth, long motions',
      'One policy per stage — grab cup, place under spout, operate machine, remove & deliver (mirrors Panbot\u2019s per-task ACT policies)',
      'GPU training, hundreds of epochs; checkpoints published to the Hugging Face Hub like Panbot\u2019s act_panbot_task2/3',
    ],
  },
  {
    icon: <CameraAltIcon fontSize="large" />,
    n: '04',
    title: 'Add vision',
    color: '#F28C8C',
    bg: '#FDEAEA',
    summary:
      'A camera decides where the cup and machine are, and when it is safe to move to the next stage.',
    tech: [
      'YOLO detection/segmentation finds the cup, brew spout, drip tray and button, regardless of exact placement',
      'Perception triggers stage transitions: cup aligned under spout → press brew → brew finished → remove',
      'A GRU-style readiness model (or a timer fallback) decides when the cup is done brewing — Panbot uses the same trigger logic',
      'Trigger tuning: confidence threshold, stable-frame holding and area ratios for reliable, non-jittery transitions',
    ],
  },
  {
    icon: <AutorenewIcon fontSize="large" />,
    n: '05',
    title: 'Deploy, run & iterate',
    color: '#FFC94D',
    bg: '#FFF6D9',
    summary:
      'Run the trained policies on the real arm with the vision triggers, then keep improving by adding demonstrations where it struggles.',
    tech: [
      'A runtime orchestrator connects the arm, cameras and policies and runs the stage loop end-to-end',
      'Emergency stop + constrained workspace — the same safety practice Panbot recommends',
      'On any failure, record more demonstrations, retrain and redeploy — this is the whole build log made public',
      'Publish each successful stage as progress on the site',
    ],
  },
]

export default function Roadmap() {
  return (
    <Section id="how-it-learns">
      <Typography variant="h2" gutterBottom align="center">
        How BakkieBot learns
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 660, mx: 'auto', mb: 5, color: 'text.secondary' }}
      >
        The robot doesn't run on hand-coded motor paths. It's taught by
        demonstration — you move one arm, it watches with cameras, and a neural
        network learns each step. Here's the full process, block by block.
      </Typography>
      {BLOCKS.map((b) => (
        <Box
          key={b.n}
          sx={{
            maxWidth: 860,
            mx: 'auto',
            mb: 3,
            bgcolor: '#FFFFFF',
            borderRadius: 2,
            border: '1px solid #E8F3FC',
            p: { xs: 2.5, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 4 },
            alignItems: { xs: 'flex-start', md: 'flex-start' },
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: 56, md: 72 },
              height: { xs: 56, md: 72 },
              borderRadius: '50%',
              bgcolor: b.bg,
              color: b.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {b.icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.5, mb: 0.5 }}>
              <Typography
                sx={{ color: b.color, fontWeight: 800, fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: '1.8rem' }}
              >
                {b.n}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, fontFamily: "'Caveat','Patrick Hand',cursive", fontSize: { xs: '1.6rem', md: '1.9rem' } }}
              >
                {b.title}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              {b.summary}
            </Typography>
            <Box
              component="ul"
              sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}
            >
              {b.tech.map((t) => (
                <Typography component="li" key={t} variant="body2" color="text.secondary">
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Section>
  )
}