<script setup>
</script>
<template>
  <div>
    <b-nav tabs fill>
      <b-nav-item disabled>Agenda</b-nav-item>
      <b-nav-item active>
        <button data-collapse-toggle="navbar-default" type="button" class="
  ml-3
  inline-flex
  items-center
  rounded-lg
  p-2
  text-sm text-gray-500
  hover:bg-gray-100
  focus:outline-none focus:ring-2 focus:ring-gray-200
  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
  md:hidden
  " aria-controls="navbar-default" aria-expanded="false">
          <ul>
            <rounter-link :to="{ name: 'Home' }" class="
  block
  rounded
  bg-blue-700
  py-2
  pr-4
  pl-3
  text-white
  dark:text-white
  md:bg-transparent md:p-0 md:text-blue-700
  " aria-current="page">Home</rounter-link>Home
          </ul>

        </button>
      </b-nav-item>
      <b-nav-item>

        <button data-collapse-toggle="navbar-default" type="button" class="
  ml-3
  inline-flex
  items-center
  rounded-lg
  p-2
  text-sm text-gray-500
  hover:bg-gray-100
  focus:outline-none focus:ring-2 focus:ring-gray-200
  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
  md:hidden
  " aria-controls="navbar-default" aria-expanded="false">
          <ul>
            <rounter-link :to="{ name: 'Login' }" class="
  block
  rounded
  py-2
  pr-4
  pl-3
  text-gray-700
  hover:bg-gray-100
  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
  md:border-0
  md:p-0
  md:hover:bg-transparent
  md:hover:text-blue-700
  md:dark:hover:bg-transparent
  md:dark:hover:text-white
  ">Login</rounter-link>
          </ul>

        </button>
      </b-nav-item>
      <b-nav-item>
        <button data-collapse-toggle="navbar-default" type="button" class="
  ml-3
  inline-flex
  items-center
  rounded-lg
  p-2
  text-sm text-gray-500
  hover:bg-gray-100
  focus:outline-none focus:ring-2 focus:ring-gray-200
  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
  md:hidden
  " aria-controls="navbar-default" aria-expanded="false">
          <ul>
            <router-link :to="{ name: 'Register' }" class="
  block
  rounded
  py-2
  pr-4
  pl-3
  text-gray-700
  hover:bg-gray-100
  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
  md:border-0
  md:p-0
  md:hover:bg-transparent
  md:hover:text-blue-700
  md:dark:hover:bg-transparent
  md:dark:hover:text-white
  ">Register</router-link>
          </ul>

        </button>
      </b-nav-item>
    </b-nav>
  </div>
</template>