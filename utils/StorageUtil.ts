/**
 *
 * @param {*} name
 * Takes key name as input and returns the respective key from local storage
 * @returns {*} key
 */
const getter = (name:any) => {
    return typeof window !== "undefined" ? localStorage.getItem(name) : "{}";
  };
  
  /**
   *
   * @param {*} name
   * @param {*} value
   * Takes key name and value as input and and stores the respective key value pair in local storage
   */
  const setter = (name:any, value:any) => {
    localStorage.setItem(name, value);
  };
  
  /**
   *
   * @param {*} name
   * Takes key name as input and removes the respective key from local storage
   */
  const remove = (name:any) => {
    localStorage.removeItem(name);
  };
  export { getter, setter, remove };
  