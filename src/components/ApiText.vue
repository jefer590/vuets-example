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
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import axios from 'axios'
import ApiMessage from '../../model/ApiMessage'

// Namespace
const ApiModule = namespace('Api')

@Component
export default class ApiText extends Vue {
  @ApiModule.State
  message!: string

  @ApiModule.Getter
  messageUppercase!: string

  @ApiModule.Action
  getMessage!: () => Promise<void>

  @Prop({
    required: true
  })
  private title!: string

  private async mounted () {
    await this.getMessage()
  }
}
</script>
