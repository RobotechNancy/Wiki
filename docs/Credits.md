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
    avatar: 'https://codeberg.org/mrspaar.png',
    name: 'Julien Pistre',
    title: 'Co-créateur',
    links: [
      { icon: 'codeberg', link: 'https://codeberg.org/mrspaar' }
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
    avatar: 'https://cdn.discordapp.com/avatars/661677635935404052/fecf4618a89ac406906750f7eef32411.webp?size=1024',
    name: 'mawa2005',
    title: 'Contributeur'
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
  {
    avatar: 'https://www.github.com/FreedGB.png',
    name: 'FreedGB',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://www.github.com/FreedGB' },
    ]
  },
  {
    avatar: 'https://www.github.com/AnthonyHgl.png',
    name: 'Anthony Hugel',
    title: 'Contributeur',
    links: [
      { icon: 'github', link: 'https://www.github.com/AnthonyHgl' },
    ]
  }
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
