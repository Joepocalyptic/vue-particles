<template>
  <div>
    <Tutorial :style="{ opacity: 0.4, zIndex: 999 }" />
    <ClientOnly>
      <ParticlesComponent
        id="tsparticles"
        :options="options"
        :init="particlesInit"
        @load="onLoad"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ParticlesComponent } from '@tsparticles/vue/dist'

const particlesInit = async (engine: any) => {
  if(process.client) {
    const { loadFull } = await import('tsparticles')
    await loadFull(engine)
  }
}

const onLoad = () => {
  console.log('Particles loaded')
}

const options = {
  "background": {
    "color": "#01685e"
  },
  "particles": {
    "number": {
      "value": 17.5,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00a79d"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "",
        "width": 110,
        "height": 90
      }
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 125,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 40,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 196.77453737486354,
      "color": "#00c2ff",
      "opacity": 1,
      "width": 1.8037665926029156
    },
    "move": {
      "enable": true,
      "speed": 0.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}
</script>
