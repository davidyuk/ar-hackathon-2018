<template>
  <div class="app">
    <header />
    <div>
      <main>
        <router-view/>
      </main>
      <aside>
        <div />
        <div />
        <div />
        <div />
      </aside>
    </div>
    <footer />
  </div>
</template>

<style lang="scss" scoped>
.app {
  max-width: 1000px;
  margin: 0 auto;
  font-family: sans-serif;

  header, main, aside, footer {
    margin: 10px;
  }

  header {
    height: 80px;
    background-color: #eee;
  }

  > div {
    display: flex;

    main {
      flex-grow: 1;
      min-width: 0; // https://css-tricks.com/flexbox-truncated-text/
    }

    aside {
      width: 300px;
      flex-shrink: 0;

      div {
        background-color: #999;
        margin-bottom: 10px;

        &:nth-child(2n) {
          height: 100px;
        }

        &:nth-child(2n + 1) {
          height: 150px;
        }
      }

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  footer {
    height: 60px;
    background-color: #444;
  }
}
</style>

<style lang="scss">
html, body {
  margin: 0;
}
</style>
