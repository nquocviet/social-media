export const comparePath = (path1: string, path2: string) => {
  return path1.split('/')[1].split('?')[0] === path2.split('/')[1].split('?')[0]
}
