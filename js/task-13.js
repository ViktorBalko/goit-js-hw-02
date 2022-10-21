function slugify(title) {
  // Change code below this line

title = title.toLowerCase();
  const arrSlug = title.split(' ');
  return arrSlug.join('-');

  // Change code above this line
}