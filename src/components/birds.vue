<template>
  <div class="pad">
    <ul>
      <li v-for="kus in birds" :key="kus.id">
        <em>{{ kus.isim.toUpperCase() }}</em>  <div class="right">{{ kus.bilezik }}</div> 
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    birds: gql`
      query kuslar {
        birds(where: { Canli: true }, sort: "created_at", limit: 9) {
          isim
          bilezik
          Anne {
            isim
          }
          Baba {
            isim
          }
        }
      }
    `
  }
};
</script>
<style scoped>
.pad {
  padding: 2rem;
}
em {
  padding:1rem;
  background-color:white;
  height: 1rem;
  margin: auto 0;
  vertical-align: text-top
}
li {
  list-style: none;
  display: flex;
  max-width: 24rem;
  margin: 2rem auto;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  background-color: greenyellow;
}
.right{
  text-align: right;
  font-size: small;
  padding-left: 2rem;
}
</style>
