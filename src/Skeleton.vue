<template>
  <div class="skeleton-wrapper">
    <w-row>
    <w-col :span="4">
      <w-skeleton></w-skeleton>
    </w-col>
    <w-col :span="4" class="ml-10">
      <w-row>
        <w-col :span="12">
          <w-skeleton :proportion="0.2"></w-skeleton>
        </w-col>
        <w-col :span="24" class="m-10">
          <w-skeleton :proportion="0.1"></w-skeleton>
        </w-col>
        <w-col :span="24" class="m-10">
          <w-skeleton :proportion="0.1"></w-skeleton>
        </w-col>                  
      </w-col>  
    </w-col>
  </w-row>
  </div>
</template>

<script>

export default {
    name: 'skeleton'
};
</script>

<style scoped>

.skeleton-header {
    height: 152px;
    background: grey;
    margin-top: 60px;
    width: 152px;
    margin: 60px auto;
}

.skeleton-block {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
}

</style>
