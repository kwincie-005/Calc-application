<template>
  <div class="">
    <Button class="mx-2 p-2 w-24 text-white" :name="grow2" customized="blue" />
    <Button
      @click="toggle"
      id="btn"
      class="mx-2 p-2 w-24 text-white bg-green-700"
      :name="btnTxt"
    />
    <Button class="mx-2 p-2 w-24 text-white bg-blue-700" :name="grow2" />
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";

const btnTxt = ref("Accept");
const color = "#3a8ccc";
const grow2 = "tukiuke";
let green = true;

/**toggle function */
const toggle = () => {
  green = !green;
  btnTxt.value = green ? "Accept" : "Reject";
  console.log(btnTxt);
  document.getElementById("btn").classList.toggle("bg-green-700");
  document.getElementById("btn").classList.toggle("bg-red-700");
};
</script>

<style lang="scss" scoped></style>
