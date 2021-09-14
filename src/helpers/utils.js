export function getFormBody(params) {
  const formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);

    formBody.push(`${encodedKey}=${encodedValue}`);
  }
  return formBody.join("&");
}
