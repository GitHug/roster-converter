import joi from 'joi';

export default joi
  .object()
  .keys({
    files: joi
      .array()
      .min(1)
      .items(
        joi
          .object()
          .keys({
            buffer: joi.binary().required()
          })
          .unknown()
      )
      .required()
  })
  .unknown();
