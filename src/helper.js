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
  }
}

export default Helper;

