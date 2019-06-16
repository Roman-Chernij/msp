module.exports = (request, validators) => {

  if (!request || !validators) return throw Error();

  for (let validator in validators ) {

    if (!validators.hasOwnProperty(validator)) continue;

    if (validator.required) {


    }
  }
}
