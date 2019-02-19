<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <h2>This message comes from the API... listen:</h2>
    <h3>{{ message }}</h3>
    <h3> Message Uppercase: {{ messageUppercase }} </h3>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Prop, Vue } from 'vue-property-decorator'
import ApiMessage from '../../model/ApiMessage'

@Component
export default class ApiText extends Vue {
  private message: string = ''

  @Prop({
    required: true
  })
  private title!: string

  private async mounted () {
    const { data } = await axios.get<ApiMessage>('/api/test')

    this.message = data.message
  }

  get messageUppercase (): string {
    return this.message.toUpperCase()
  }
}
</script>
