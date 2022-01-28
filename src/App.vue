<template>
  <Topbar />
  <Page>
    <Sidebar />
    <Content>
      <GetFreeInsurance />
    </Content>
  </Page>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Topbar from "./components/topbar/component.vue";
import Page, { Sidebar, Content } from "./components/page/component.vue";
import GetFreeInsurance from "./pages/get-free-insurance/component.vue";

@Options({
  components: {
    Topbar,
    Page,
    Sidebar,
    Content,
    GetFreeInsurance,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" src="./styles/styles.scss"></style>
