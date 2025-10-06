<script setup>
import { ref, onMounted } from 'vue'
import PersonCard from './components/PersonCard.vue'


const people = ref([])
const loading = ref(true)
const error = ref('')

const loadPeople = async (qty = 12) => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch(`https://fakerapi.it/api/v2/persons?_quantity=${qty}`)
    const json = await res.json()
    people.value = Array.isArray(json?.data) ? json.data : []
  } catch (e) {
    error.value = 'Konnte die Daten nicht laden.'
  } finally {
    loading.value = false
  }
}


const rerollImages = () => {

  people.value = people.value.map(p => ({ ...p }))
}

onMounted(() => loadPeople())
</script>

<template>
  <main class="wrapper">
    <h1 class="page-title">HTL Dornbirn 5bWI</h1>

    <p v-if="loading" style="text-align:center;">Lade Personen …</p>
    <p v-else-if="error" style="text-align:center; color:#f66;">{{ error }}</p>

    <section v-else class="grid">
      <PersonCard v-for="p in people" :key="p.id + '-' + p.email" :person="p" />
    </section>
  </main>
</template>

