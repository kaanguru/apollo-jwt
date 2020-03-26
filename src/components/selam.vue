<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.username">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  apollo: {
    users: gql`
      {
          users(where:{blocked: false}, sort: "username", limit:10) {
    username
  }
      }
    `
  }
};
</script>
