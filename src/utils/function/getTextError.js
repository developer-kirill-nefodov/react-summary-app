export const getTextError = (status) => {
  switch (status) {
    case 404: {
      return {
        title: 'not found user',
        text: 'The user you requested was not found. Please check your spelling and try again.'
      }
    }
    default:
      return null
  }
}