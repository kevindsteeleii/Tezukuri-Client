const Helper = {
  slugify: (str) => {
    let words = str.split('-');
    words = words.map(el => {
      if (el === 'and') {
        return '&';
      } else {
        return el.toLowerCase();
      }
    })
    return words.join('-');
  },
  
  deSlugify: (slug) => {
    let words = slug.split('-');
    words = words.map(el => {
      if (el === 'and') {
        return '&';
      } else {
        return el[0].toUpperCase()+el.substr(1);
      }
    })
    return words.join(' ');
  },

  generateRandomString: (length) => {
    Math.random().toString(36).substring(2, length + 2);
  }
}

export default Helper;

