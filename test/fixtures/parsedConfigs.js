export default {
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
