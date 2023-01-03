export const getTextError = (status) => {
  switch (status) {
    case 404: {
      return {
        title: 'not found user',
        text: 'The user you requested was not found. Please check your spelling and try again.'
      }
    }
    case 403: {
      return {
        title: 'API LIMIT REACHED',
        text: 'The API rate limit has been exceeded for your IP address. Please try again later.'
      }
    }
    case 200: {
      return {
        title: 'not found user',
        text: 'The user you requested was not found. Please check your spelling and try again.'
      }
    }
    default:
      return null
  }
}