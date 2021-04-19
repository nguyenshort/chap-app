<template>
  <div
    id="auth-form"
    class="relative flex items-center justify-center h-screen"
  >
    <div class="absolute w-full h-full z-0 bg-blue-400">
      <img
        class="transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 absolute"
        style="max-width: 534px"
        src="/images/graphic3.svg"
        alt=""
      />
    </div>
    <div
      class="py-8 px-7 shadow-md rounded flex flex-wrap bg-white z-10"
      style="max-width: 340px"
    >
      <h2 class="w-full font-semibold text-3xl">
        {{ isLogin ? 'Đăng nhập' : 'Đăng ký' }}
      </h2>
      <p class="font-light text-sm mt-2">
        Truy cập vào công cụ mạnh mẽ nhất trong toàn bộ ngành thiết kế và web.
      </p>
      <input
        v-model="email"
        type="text"
        class="py-1.5 px-3 outline-none focus:outline-none w-full bg-gray-100 rounded mt-6"
        placeholder="Email"
      />
      <input
        v-if="!isLogin"
        v-model="name"
        type="text"
        class="py-1.5 px-3 outline-none focus:outline-none w-full bg-gray-100 rounded mt-4"
        placeholder="Tên Của Bạn"
      />
      <input
        v-model="password"
        type="password"
        class="py-1.5 px-3 outline-none focus:outline-none w-full bg-gray-100 rounded mt-4"
        placeholder="Mật khẩu"
      />
      <div class="w-full flex mt-4 items-center">
        <button
          class="p-2 bg-blue-500 text-xs text-white rounded text-sm hover:shadow-md transition duration-200 mr-3 focus:outline-none"
          :disabled="isLoading"
          @click="isLogin ? signIn() : signUp()"
        >
          {{ isLogin ? 'Đăng Nhập' : 'Đăng ký' }}
        </button>
        <a href="javascript:void(0)" class="text-xs font-light">
          Quên Mật Khẩu ?
        </a>
      </div>
      <a
        href=""
        class="text-sm mt-6 font-light"
        @click.prevent="isLogin = !isLogin"
      >
        {{ isLogin ? 'Đăng ký' : 'Đăng nhập' }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { SIGN_UP, SIGN_IN } from '~/schema/mutations/auth'

export default {
  layout: 'blank',
  data() {
    return {
      email: 'dnstylish@gmail.com',
      password: 'Khoi@025',
      name: '',
      isLogin: true,
      isLoading: false
    }
  },
  methods: {
    ...mapActions('user', ['getMe']),
    async signUp() {
      this.isLoading = true
      try {
        const {
          data: { signup }
        } = await this.$apollo.mutate({
          mutation: SIGN_UP,
          variables: {
            email: this.email,
            password: this.password,
            name: this.name
          }
        })
        await this.$apolloHelpers.onLogin(signup.token)
        await this.getMe()
        await this.$router.push('/messages/18069837')
      } catch (e) {}
      this.isLoading = false
    },
    async signIn() {
      this.isLoading = true
      try {
        const {
          data: { signIn }
        } = await this.$apollo.mutate({
          mutation: SIGN_IN,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        await this.$apolloHelpers.onLogin(signIn.token)
        await this.getMe()
        await this.$router.push('/messages/18069837')
        this.$message.success('Welcome back!!')
      } catch (e) {}
      this.isLoading = false
    }
  }
}
</script>

<style></style>
