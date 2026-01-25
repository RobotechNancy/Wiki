---
layout: page
---

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Rédacteurs du Wiki
    </template>
    <template #lead>
      L'écriture de ce Wiki est un travail commun de longue haleine
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members />
</VPTeamPage>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/jpistre.png',
    name: 'Julien Pistre',
    title: 'Co-créateur',
    links: [
      { icon: 'github', link: 'https://github.com/jpistre' },
      { icon: 'codeberg', link: 'https://codeberg.org/jpistre' }
    ]
  },
  {
    avatar: 'https://github.com/OtarieSupreme.png',
    name: 'OtarieSupreme',
    title: 'Co-créateur',
    links: [
      { icon: 'github', link: 'https://github.com/OtarieSupreme' },
    ]
  },
  {
    avatar: 'https://www.github.com/Boresan.png',
    name: 'Boresan',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://www.github.com/Boresan' },
    ]
  },
  {
    avatar: 'https://github.com/garatim.png',
    name: 'garatim',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://github.com/garatim' },
    ]
  },
  {
    avatar: 'https://github.com/Sixtaan.png',
    name: 'Sixtaan',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://github.com/Sixtaan' },
    ]
  },
  {
    avatar: 'https://github.com/Gwagwa94.png',
    name: 'Gwagwa94',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://github.com/Gwagwa94' },
    ]
  },
  {
    avatar: 'https://www.github.com/NoAccount1.png',
    name: 'MouaMem2',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://www.github.com/NoAccount1' },
      { icon: 'codeberg', link: 'https://codeberg.org/NoAccount1' }
    ]
  },
]
</script>

<style>
.VPTeamPage {
    margin-top: 0 !important;
}

img.avatar-img {
    margin: 0;
}

</style>
