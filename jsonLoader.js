export function jsonLoader(source) {
  console.log("jsonLoader----------------", source, this);
  this.addDeps("jsonLoader");

  return `export default ${JSON.stringify(source)}`;
}
