import mime from 'mime';

export const base64ToFile = (fileBase64: string, fileName: string): File | null => {
  try {
    // Get mime type from file name
    const mimeType = mime.getType(fileName);
    if (mimeType) {
      // Decode the base64 string into a binary string
      const byteCharacters = atob(fileBase64);

      // Convert the binary string to a Typed Array
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Create a Blob object from the binary data
      const blob = new Blob([byteArray], { type: mimeType });

      // Create a File object from the Blob
      const file = new File([blob], fileName, { type: mimeType });
      return file;
    }

    console.log(`Cannot find mime type for File ${fileName}`);
    return null;
  } catch (err) {
    console.log('Failed Convert Base64 to File', err);
    return null;
  }
};
