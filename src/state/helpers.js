import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const authGetters = mapGetters('auth', [
  'getAuthenticationToken',
  'loggedIn',
])
export const authMethods = mapActions('auth', ['loginOAuth', 'logOut'])
