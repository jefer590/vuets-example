<template>
  <div>
    <ApiText title="FE.X" />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ApiText from '@/components/ApiText.vue'

@Component({
  components: {
    ApiText
  }
})
export default class App extends Vue {
}
</script>
