<script setup>
import { computed } from 'vue'

const props = defineProps({
  person: { type: Object, required: true }
})


const seed = computed(() =>
  (props.person?.id ?? '') + (props.person?.firstname ?? '') + (props.person?.lastname ?? '')
)

const imgUrl = computed(() => `https://picsum.photos/seed/${encodeURIComponent(seed.value)}/200/300`)

const blurb = (p) => {
  const bits = [
    p.address?.street || '',
    p.address?.city || '',
    p.email ? `E-Mail: ${p.email}` : ''
  ].filter(Boolean)
  return bits.join('. ') + '.'
}
</script>

<template>
  <article class="card">
    <img
      class="card__img"
      :src="imgUrl"
      :alt="`${person.firstname} ${person.lastname}`"
      loading="lazy"
    />
    <div class="card__body">
      <p class="card__name">{{ person.firstname }} {{ person.lastname }}</p>
      <p class="card__text">{{ blurb(person) }}</p>
    </div>
  </article>
</template>
