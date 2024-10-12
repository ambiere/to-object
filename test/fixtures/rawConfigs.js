// // comment
//
// /**
//  * comment
//  * */
// const style = {
//   /**
//    * jsDoc
//    * @param {string} param
//    * */
//   footer: "new",
//   header: {
//     h: `text-teriary bg-green-400/10 text-[1.2rem]`, // inline comment
//     b: `prop-2`,
//     number: 12,
//     boolean: true,
//     null: null,
//     unterminated: 12,
//   },
//   another: "under",
// }
// /* jk  */
// export default style

/**
 * @type {import("./src/types").ClsxConfig}
 * */
const clsxConfig = {
  routeRoot: [
    {
      route: "./app/settings/",
      replaceRoot: true
    },
    [
      {
        route: "./app/dashboard/",
        root: "./app/dashboard/components/"
      },
      {
        route: "111"
      }
    ]
  ],
  routeRoot2: [
    {
      route: "./app/settings/",
      replaceRoot: true
    },
    [
      {
        route: "./app/dashboard/",
        root: "./app/dashboard/components/"
      },
      {
        route: "111"
      }
    ]
  ],
  mergeWithRoot:
    [
      { h: "merge" },
      [12, "haha"],
      "twelve"
    ],
  anotherOne: [{ route: "route" }, { root: "root text-[23rem]" }],
  anotherTwo: ['\nfucker', "hello", 12, true, false, 0],
  yy: "happy"
}
