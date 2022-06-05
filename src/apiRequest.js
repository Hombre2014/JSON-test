const apiRequest = async(url = '', item = null, errMsg = null) => {
  try {
    const response = await fetch(`${url}/${item}`);
    if (!response.ok) throw Error('Something went wrong');
    return response;
  } catch(err) {
      errMsg = err.message;
  } finally {
      return errMsg;
  }
}

export default apiRequest;
