export default function Validate(input) {
  const error = {};
  if(!input.name) {
    error.name = "falta el nombre";
  }
  if(!input.difficulty){
      error.difficulty = 'falta una difficulty';
  }
  if(!input.duration){
      error.duration = 'falta una duration';
  }
  if(!input.season){
      error.season = 'falta una season';
  }
  if(!input.countrys.length){
    error.countrys = 'falta una country';
  }
  return error
}
