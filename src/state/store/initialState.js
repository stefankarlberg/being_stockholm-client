const initialState = {
  sidebarVisible: false,
  legendVisible: true,
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        uid: ''
      },
    },
  },
}

export default initialState