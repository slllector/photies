export function getAltTextFromPublicId(publicId: string): string {
  const fileName = publicId.split('/').pop() ?? '';
  return fileName.substring(0, fileName.lastIndexOf('_'));
}