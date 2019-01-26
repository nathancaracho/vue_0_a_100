<template>
  <header>
    <div class="background">
      <div class="background-img" :src="background"></div>
    </div>
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
      <div class="user">
        <div class="user-information">
          <div class="user-information-name">some</div>
          <hr>
          <div class="user-information-email">some@hotmail.com</div>
        </div>
        <div class="user-thumbnail">
          <!-- cuidado transforma em svg no final -->
          <font-awesome-icon class="user-thumbnail-icon icon-header-default" icon="user"/>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="search">
        <input type="text" class="search-input" placeholder="Find the article">
        <font-awesome-icon class="search-icon" icon="search"/>
      </div>
      <!--O titulo é do artigo, mas o artigo é outra página então como será feito? -->
      <div class="title" :class="title?'title--show':''">
        <h1>{{title}}</h1>
      </div>
    </div>
    <div class="bottom">
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
export default {
  name: "NsHeader",
  props: {
    background: {
      type: String,
      required: false,
      default: "../assets/home.jpg"
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

$user-thumbnail-size: 50px;
$header-height: 300px;
$header-height-background-image: 400px;
.icon-default-border {
  width: $user-thumbnail-size;
  height: $user-thumbnail-size;
  border: 3px solid #fff;
}
.icon-header-default {
  font-size: 30px;
  margin: auto;
}
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
    .user {
      display: flex;
      max-height: $user-thumbnail-size;
      .user-information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: $user-thumbnail-size;
        margin-right: 5px;
        & > * {
          text-align: right;
        }
        .user-information-name {
          font-size: 20px;
          font-weight: bolder;
        }
        .user-information-email {
          margin-bottom: auto;
        }
        & > hr {
          max-height: 1px;
          margin: auto 0;
          background-color: #fff;
        }
      }
      .user-thumbnail {
        display: flex;
        @extend .clickable, .icon-default-border;
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
  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: $header-height-background-image;
    width: 100%;
    background-color: #000;
    z-index: 0;

    &-img {
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      background-image: url("../assets/home.jpg");
      background-position: 130%;
    }
    &:after {
      content: "";
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-image: linear-gradient(to right, #000, #00000011);
    }
  }
}
</style>
