const validate = async (schema: any, body: any) => {
  const { error } = await schema.validate(body, {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  })

  return error.details
}

export default validate
