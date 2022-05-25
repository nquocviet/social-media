export const comparePath = (path1: string, path2: string) => {
  return path1.split('/')[1].split('?')[0] === path2.split('/')[1].split('?')[0]
}

export const getErrorFromJoiMessage = (error: any): any => {
  interface Error {
    context?: object | any
    message?: string
  }

  return error.reduce((acc: object, curr: object) => {
    const { context, message }: Error = curr

    return {
      ...acc,
      [context.label]: message,
    }
  }, {})
}
