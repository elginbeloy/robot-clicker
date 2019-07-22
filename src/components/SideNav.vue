<template>
  <div class="side-nav">
    
    <div class="title">Robot Clicker</div>
    
    <div class="robot-container">
      <img src="@/assets/robot_one.png" @click="clickRobot"></img>
    </div>
    
    <div class="money-container">
    $ {{ money }}
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'SideNav',
  computed: mapState(['money', 'mpc', 'mps', 'totalMoneyEarned']),
  methods: {
    clickRobot() {
      this.$store.commit('clickRobot');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.side-nav {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 340px;
  height: 100%;
  padding: 40px;

  background-color: #3937fb;
  box-shadow: 0 2px 4px 1px #000000A0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.title {
  position: relative;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 40px;

  text-align: center;
  font-size: 24px;
  color: #FFFFFF;
}

.robot-container {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 100%;
  height: auto;
  margin-bottom: 40px;
  
  img {
    max-width: 100%;
    width: 180px;
    transition: 0.2s linear all;
    cursor: pointer;
    filter: drop-shadow(0px 0px 2px #000000);

    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0px 0px 8px #000000);
    }
  }
}

.money-container {
  position: relative;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 40px;

  text-align: center;
  font-size: 18px;
  color: #FFFFFF;
}

</style>
