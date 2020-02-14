<template>
  <div class="list">
    <!-- data 내 pageTitle의 값이 아래 h2에 들어갑니다. -->
    <span>{{ pageTitle }}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageTitle: "댓글",
      postingList: []
    };
  }
};
</script>
