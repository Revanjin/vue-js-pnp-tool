<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/jobs">Jobs</router-link>
    <router-link to="/bosses">Bosses</router-link>
  </div>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  padding: 30px 0 15px;
  border-bottom: 2px solid #333;
  margin-bottom: 15px;
}

#nav a {
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
  margin-left: 15px;
}

#nav a:after {
  content: "|";
  margin-left: 15px;
}

#nav a:last-child:after {
  content: "";
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
