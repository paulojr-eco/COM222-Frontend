function base64ToPngFile(base64String: string, fileName: string): File {
  const base64WithoutPrefix = base64String.replace(
    /^data:image\/(png|jpeg|jpg);base64,/,
    ""
  );
  const byteCharacters = atob(base64WithoutPrefix);
  const byteArrays = [];

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays.push(byteCharacters.charCodeAt(i));
  }

  const byteArray = new Uint8Array(byteArrays);
  const blob = new Blob([byteArray], { type: "image/png" });

  return new File([blob], fileName, { type: "image/png" });
}

export default base64ToPngFile;
