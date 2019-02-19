import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import  axios from 'axios'
import ApiMessage from '../../model/ApiMessage'

@Module({
  namespaced: true
})
export default class Api extends VuexModule {
  // State
  public message: string = ''

  // Action
  @Action
  public async getMessage(): Promise<void> {
    const { data } = await axios.get<ApiMessage>('/api/test')
    this.context.commit('setMessage', data.message)
  }

  // Mutation
  @Mutation
  public setMessage(newMessage: string): void {
    this.message = newMessage
  }

  // Getter
  get messageUppercase(): string {
    return this.message.toUpperCase()
  }
}
