import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.config.productionTip = true;

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTg1MDY3MzIzLCJleHAiOjE1ODc2NTkzMjN9.1wRPz1FI5z4b5JGKGEuStfuHBO5ZQVZuejGefrviTfQ";

Vue.use(VueApollo)
const apolloClient = new ApolloClient({
  uri: 'http://192.168.0.2:1515/graphql',
  headers: {
    authorization: `Bearer ${jwt}`
  }
}
)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')


