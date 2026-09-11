# BakkieBot

A single-page website for **BakkieBot** — a robot arm (Hugging Face) that operates a
Philips Senseo coffee machine. This site presents the project's objectives, setup
and sponsorship ask to prospective investors.

Built with **React + TypeScript + Vite**, styled with **MUI** (Material UI v9) using
the hand-drawn pastel visual identity defined in `src/assets/color-style-guide.md`.

## Run locally (dev)

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Production build

```bash
npm run build          # outputs static site to dist/
npm run preview        # serve the built site locally
```

## Run as a container

The GitHub Action (`.github/workflows/build-containers.yml`) builds the image and
pushes it to **GHCR**: `ghcr.io/onlinefabster/bakkiebot`.

```bash
docker pull ghcr.io/onlinefabster/bakkiebot:latest
docker run -d --name bakkiebot -p 8080:80 ghcr.io/onlinefabster/bakkiebot:latest
# → http://localhost:8080
```

## Deploy on a docker host

```bash
sudo mkdir -p /docker/bakkiebot
# from /docker location — everything self-contained in the image
docker run -d --name bakkiebot --restart unless-stopped \
  -p 8080:80 ghcr.io/onlinefabster/bakkiebot:latest
```

## Contact

Fabian Tuender · fabian@bakkiebot.nl · www.bakkiebot.nl