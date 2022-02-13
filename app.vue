<script>
import { AUTH_STRATEGIES } from '@8base/auth'

export default {
  data () {
    return {
      AUTH_STRATEGIES
    }
  }
}
</script>

<template>
  <div>
    <pre><code>{{ JSON.stringify(AUTH_STRATEGIES, null, 2) }}</code></pre>
  </div>
</template>
