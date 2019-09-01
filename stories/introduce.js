import VueMarkdown from 'vue-markdown'
import source from './introduce.md'
import 'github-markdown-css'

export default {
  render(h) {
    return <VueMarkdown class="markdown-body">{source}</VueMarkdown>
  },
  components: {
    VueMarkdown
  }
}
