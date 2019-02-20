<template>
  <header>
    <div class="top">
      <div class="brand">
        <div class="brand-logo">
          <font-awesome-icon class="brand-logo-icon" icon="paper-plane" flip="horizontal"/>
        </div>
        <div class="brand-name">
          <b>KnowledgeShare</b>
          <hr>
          <span>Share your best treasure</span>
        </div>
      </div>
      <ns-user></ns-user>
    </div>
    <div class="center">
      <div class="search">
        <input type="text" class="search-input" placeholder="Find the article">
        <font-awesome-icon class="search-icon" icon="search"/>
      </div>
      <!--O titulo é do artigo, mas o artigo é outra página então como será feito? -->
      <!-- não tem algo errado aqui??? -->
      <div class="title" v-if="title">
        <h1>{{title}}</h1>
      </div>
    </div>
    <div class="bottom">
      <!-- como criar um brandcramb? -->
      <div class="menu">
        <nav>
          <span class="nav-item">author</span>
          <router-link to="/category" class="nav-item nav-item--selected">category</router-link>
          <span class="nav-item">lenguage</span>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import NsUser from "@/components/NsUser";
export default {
  name: "NsHeader",
  components: {
    NsUser
  },
  props: {
    background: {
      type: String,
      required: false,
      default: "../assets/home.jpg"
    },
    showMenu: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style lang="scss">
//css pattern BEM
//bloco-filho--modificador
//a unica diferença invéz de bloco__filho para bloco-filho
// gosto pessoal

// estilo muito grande, isso é sinal que nosso componente não está granular o suficiente
//  duas opções para resolver esse problema ou cria componentes diferentes,
// ou cria arquivos separados para cada componente de estilo
// nosso ajuste será criar novos componentes ;)
@import "../assets/style/main.scss";

$header-height: 300px;

header {
  position: relative;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 30px;
  max-height: $header-height;
  height: $header-height;
  .top {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: auto;
    width: 100%;
    .brand {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-right: auto;
      & > .brand-logo {
        position: relative;
        width: auto;
        height: auto;
        & > .brand-logo-icon {
          position: absolute;
          //necessário pois o horizontal-revert do fontawesome usa o
          // tranform para girar horizontalmente
          top: -10px;
          left: -5px;
          //--
          font-size: 50px;
        }
        &::before {
          content: "";
          position: relative;
          display: block;
          @extend .icon-default-border;
        }
      }
      & > .brand-name {
        margin: auto 5px;
      }
      hr {
        background-color: #fff;
      }
    }
  }
  .center {
    display: flex;
    margin: auto 0;
    .search {
      position: relative;
      width: 200px;
      color: #000;
      & > .search-input {
        position: relative;
        width: 100%;
        padding: 5px;
      }
      & > .search-icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .title {
      margin: auto;
      font-size: 30px;
      font-weight: bold;
      text-transform: capitalize;
      display: none;
      &.title--show {
        display: block;
      }
    }
  }
  .bottom {
    margin-top: auto;
    .menu {
      nav {
        .nav-item {
          display: inline-block;
          font-size: 20px;
          margin: auto 5px;
          text-transform: capitalize;
          padding-bottom: 10px;
          border-bottom: 3px solid transparent;
          text-decoration: none;
          color: #fff;

          &.router-link-active {
            border-bottom-color: #fff;
          }
        }
      }
    }
  }
}
</style>
