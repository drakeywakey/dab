module.exports = function makeGetBrands (listBrands) {
    return async function getBrands (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const brands = await listBrands()
        return {
          headers,
          statusCode: 200,
          body: brands
        }
      } catch (e) {
        // TODO: Error logging
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }