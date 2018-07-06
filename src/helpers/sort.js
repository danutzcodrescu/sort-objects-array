import { isString } from "util";

// export function sort(data, order, column) {
//   return data.sort((a, b) => {
//     const first = isString(a[column]) ? a[column].toLowerCase() : a[column];
//     const second = isString(b[column]) ? b[column].toLowerCase() : b[column];
//     if (order === "asc") {
//       if (first < second) {
//         return -1;
//       } else if (first > second) {
//         return 1;
//       } else {
//         return 0;
//       }
//     } else {
//       if (first > second) {
//         return -1;
//       } else if (first < second) {
//         return 1;
//       } else {
//         return 0;
//       }
//     }
//   });
// }

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "variant"
});

export function sort(data, order, column) {
  const sorted = data.sort((a, b) => {
    return collator.compare(a[column], b[column]);
  });
  if (order === "desc") sorted.reverse();
  return sorted;
}
