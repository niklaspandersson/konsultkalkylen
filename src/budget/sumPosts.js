import sumRows from './sumRows';

export default function sumPosts(allPosts, include) {
  const allRows = Object.entries(allPosts)
    .filter(([key, _]) => include.includes(key))
    .flatMap(([_, post]) => post.rows);

  return sumRows(allRows);
}
