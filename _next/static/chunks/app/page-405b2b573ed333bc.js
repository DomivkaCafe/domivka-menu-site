(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    596: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 3951));
    },
    3951: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => E });
      var r = a(5155),
        s = a(2115);
      let l = (e, t, a, r) => {
          switch (e) {
            case "en":
            default:
              return t;
            case "pl":
              return a;
            case "ua":
              return r;
          }
        },
        i = (e) => [
          {
            title: l(
              e,
              "Pierogi with sweet cottage cheese",
              "Pierogi z twarogiem na słodko",
              "Вареники з солодким сиром"
            ),
            excerpt: l(
              e,
              "Pierogi with sweet cottage cheese",
              "Pierogi z twarogiem na słodko",
              "Вареники з солодким сиром"
            ),
            id: "pierogi-with-sweet-cottage-cheese",
            price: "30",
          },
        ],
        c = (e) => [
          {
            title: l(e, "Fat", "Tłuszcz", "Сало"),
            excerpt: l(e, "Fat", "Tłuszcz", "Сало"),
            id: "fat",
            price: "???",
          },
        ],
        n = (e) => [
          {
            title: l(e, "Bogracz", "Bogracz", "Бограч"),
            excerpt: l(e, "Bogracz", "Bogracz", "Бограч"),
            id: "bogracz",
            price: "23",
          },
        ],
        o = (e) => [
          {
            title: l(
              e,
              "Herring under a blanket salad",
              "Sałatkę śledziową pod pierzynką",
              "Салат оселедець під шубою"
            ),
            excerpt: l(
              e,
              "Herring under a blanket salad",
              "Sałatkę śledziową pod pierzynką",
              "Салат оселедець під шубою"
            ),
            id: "herring-under-a-blanket-salad",
            price: "25",
          },
        ],
        d = (e) => [
          {
            title: l(
              e,
              "Monastyrska chata",
              "Monastyrska chata",
              "Монастирська хатинка"
            ),
            excerpt: l(
              e,
              "Monastyrska chata",
              "Monastyrska chata",
              "Монастирська хатинка"
            ),
            id: "monastyrska-chata",
            price: "???",
          },
        ],
        m = (e) => [
          {
            title: l(e, "Latte", "Latte", "Латте"),
            excerpt: l(e, "Latte", "Latte", "Латте"),
            id: "latte",
            price: "7",
          },
        ],
        h = (e) => [
          {
            title: l(
              e,
              "Homemade meat jelly",
              "Domową galaretkę",
              "Домашній холодець"
            ),
            excerpt: l(
              e,
              "Homemade meat jelly",
              "Domową galaretkę",
              "Домашній холодець"
            ),
            id: "homemade-meat-jelly",
            price: "27",
          },
        ],
        g = (e) => [
          ...i(e),
          ...c(e),
          ...n(e),
          ...o(e),
          ...d(e),
          ...m(e),
          ...h(e),
        ],
        p = (e) => {
          switch (e) {
            case "all":
            default:
              return g;
            case "appetizers":
              return c;
            case "maincourses":
              return i;
            case "soups":
              return n;
            case "salads":
              return o;
            case "desserts":
              return d;
            case "beverage":
              return m;
            case "other":
              return h;
          }
        },
        u = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        x = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return t
            .filter((e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var j = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let k = (0, s.forwardRef)((e, t) => {
          let {
            color: a = "currentColor",
            size: r = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: i,
            className: c = "",
            children: n,
            iconNode: o,
            ...d
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...j,
              width: r,
              height: r,
              stroke: a,
              strokeWidth: i ? (24 * Number(l)) / Number(r) : l,
              className: x("lucide", c),
              ...d,
            },
            [
              ...o.map((e) => {
                let [t, a] = e;
                return (0, s.createElement)(t, a);
              }),
              ...(Array.isArray(n) ? n : [n]),
            ]
          );
        }),
        y = (e, t) => {
          let a = (0, s.forwardRef)((a, r) => {
            let { className: l, ...i } = a;
            return (0, s.createElement)(k, {
              ref: r,
              iconNode: t,
              className: x("lucide-".concat(u(e)), l),
              ...i,
            });
          });
          return (a.displayName = "".concat(e)), a;
        },
        w = y("Instagram", [
          [
            "rect",
            {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "5",
              ry: "5",
              key: "2e1cvw",
            },
          ],
          [
            "path",
            {
              d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
              key: "9exkf1",
            },
          ],
          [
            "line",
            { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" },
          ],
        ]),
        f = y("Facebook", [
          [
            "path",
            {
              d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              key: "1jg4f8",
            },
          ],
        ]),
        b = y("Globe", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          [
            "path",
            {
              d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
              key: "13o1zl",
            },
          ],
          ["path", { d: "M2 12h20", key: "9i4pu4" }],
        ]),
        v = (e) => {
          let { onClick: t, className: a, children: s } = e;
          return (0, r.jsx)("button", {
            type: "button",
            onClick: () => {
              t();
            },
            className:
              "px-4 py-2 bg-transparent text-amber-100 rounded-md ".concat(a),
            children: s,
          });
        },
        N = (e) => {
          let { setLanguage: t, language: a } = e,
            [l, i] = (0, s.useState)(!1);
          return (0, r.jsxs)("div", {
            className: "relative",
            children: [
              (0, r.jsxs)(v, {
                onClick: () => {
                  i(!l);
                },
                className: "flex items-center hover:opacity-75",
                children: [
                  (0, r.jsx)(b, { className: "w-5 h-5 mr-2" }),
                  " ",
                  a.toUpperCase(),
                ],
              }),
              l &&
                (0, r.jsx)("ul", {
                  className:
                    "absolute right-0 mt-2 bg-amber-100 border rounded-md shadow-md",
                  children: [
                    { name: "Polish", code: "pl" },
                    { name: "Ukrainian", code: "ua" },
                    { name: "English", code: "en" },
                  ].map((e) =>
                    (0, r.jsx)(
                      "li",
                      {
                        className:
                          "px-4 py-2 cursor-pointer hover:bg-amber-50 text-gray-700",
                        onClick: () => {
                          t(e.code), i(!1);
                        },
                        children: e.name,
                      },
                      e.code
                    )
                  ),
                }),
            ],
          });
        },
        z = () =>
          (0, r.jsx)("div", {
            className: " ml-4 sm:ml-0 pl-0 sm:pl-8",
            children: (0, r.jsx)("div", {
              className: "flex",
              children: (0, r.jsx)("img", {
                src: "/domivka-menu-site/photo/logo.jpg",
                className: "h-16 mr-2",
              }),
            }),
          }),
        C = (e) => {
          let { href: t, children: a } = e;
          return (0, r.jsx)("a", {
            href: t,
            target: "_blank",
            className: "px-2 py-2 bg-transparent text-amber-100 rounded-md",
            children: a,
          });
        },
        M = (e) => {
          let { setLanguage: t, language: a } = e;
          return (0, r.jsxs)("header", {
            className:
              "fixed top-0 left-0 w-full bg-red-900 shadow-md p-2 flex flex-col sm:flex-row items-center justify-between z-50 min-h-20",
            children: [
              (0, r.jsx)(z, { title: "Domivka" }),
              (0, r.jsxs)("div", {
                className: "relative flex",
                children: [
                  (0, r.jsx)(C, {
                    href: "https://www.instagram.com/domivka_kolobrzeg/",
                    children: (0, r.jsx)(w, { className: "w-6 h-6" }),
                  }),
                  (0, r.jsx)(C, {
                    href: "https://www.facebook.com/profile.php?id=61569193082567",
                    children: (0, r.jsx)(f, { className: "w-6 h-6" }),
                  }),
                  (0, r.jsx)(N, { language: a, setLanguage: t }),
                ],
              }),
            ],
          });
        },
        L = (e) => [
          {
            title: l(e, "All", "Wszystko", "Все"),
            link: "/?category=all&&lang=".concat(e),
            id: "all",
          },
          {
            title: l(e, "Appetizers", "Przystawki", "Закуски"),
            link: "/?category=appetizers&&lang=".concat(e),
            id: "appetizers",
          },
          {
            title: l(e, "Main Courses", "Dania Gł\xf3wne", "Основні страви"),
            link: "/?category=maincourses&&lang=".concat(e),
            id: "maincourses",
          },
          {
            title: l(e, "Soups", "Zupy", "Супи"),
            link: "/?category=soups&&lang=".concat(e),
            id: "soups",
          },
          {
            title: l(e, "Salads", "Sałatki", "Салати"),
            link: "/?category=salads&&lang=".concat(e),
            id: "salads",
          },
          {
            title: l(e, "Desserts", "Desery", "Десерти"),
            link: "/?category=desserts&&lang=".concat(e),
            id: "desserts",
          },
          {
            title: l(e, "Beverage", "Nap\xf3j", "Напої"),
            link: "/?category=beverage&&lang=".concat(e),
            id: "beverage",
          },
          {
            title: l(e, "Other", "Inny", "Інше"),
            link: "/?category=other&&lang=".concat(e),
            id: "other",
          },
        ];
      function S(e) {
        let { language: t, setLanguage: a, setCategory: s } = e,
          i = L(t);
        return (0, r.jsxs)("div", {
          className: "flex flex-col min-h-screen ",
          children: [
            (0, r.jsx)(M, { language: t, setLanguage: a }),
            (0, r.jsx)("div", {
              className: "w-full p-4 pt-16 flex justify-center mt-40",
              children: (0, r.jsx)("h2", {
                className: "text-7xl font-bold ",
                children: l(t, "Menu", "Menu", "Меню"),
              }),
            }),
            (0, r.jsx)("nav", {
              className: "w-full p-4 block sm:flex justify-center",
              children: i.map((e, t) =>
                (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(
                    "button",
                    {
                      className:
                        "mx-2 py-2 px-4 cursor-pointer hover:text-gray-400 inline-block sm:inline border-b border-black bg-red-900 rounded-3xl",
                      onClick: () => {
                        s(e.id);
                      },
                      children: e.title,
                    },
                    t
                  ),
                })
              ),
            }),
            (0, r.jsx)("main", {
              className: "mt-24 p-4",
              children: e.children,
            }),
          ],
        });
      }
      let P = (e) => {
          let { getMenuCategories: t, language: a, setProductId: s } = e,
            l = t(a);
          return (0, r.jsx)("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 ",
            children: l.map((e, t) =>
              (0, r.jsx)(
                "button",
                {
                  onClick: () => {
                    s(e.id);
                  },
                  children: (0, r.jsxs)(
                    "div",
                    {
                      className: "hover:opacity-50 p-4",
                      children: [
                        (0, r.jsx)("img", {
                          src: "/domivka-menu-site/photo/".concat(e.id, ".jpg"),
                          alt: e.title,
                          className: "w-full h-64 object-cover mb-2",
                        }),
                        (0, r.jsx)("h2", {
                          className: "text-lg font-bold",
                          children: e.title,
                        }),
                        (0, r.jsx)("p", {
                          className: "text-gray-400",
                          children: "".concat(e.price, " zl"),
                        }),
                      ],
                    },
                    t
                  ),
                },
                e.id
              )
            ),
          });
        },
        _ = (e) => {
          let { productId: t, language: a } = e,
            s = g(a);
          return (0, r.jsx)(r.Fragment, {
            children: s
              .filter((e) => e.id === t)
              .map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: "place-items-center",
                    children: (0, r.jsxs)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4  w-3/4",
                      children: [
                        (0, r.jsx)("div", {
                          children: (0, r.jsx)("img", {
                            src: "/domivka-menu-site/photo/".concat(
                              e.id,
                              ".jpg"
                            ),
                            alt: e.title,
                            className: "w-full px-8 ",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "m-16",
                          children: [
                            (0, r.jsx)("h2", {
                              className: "text-5xl font-bold ",
                              children: e.title,
                            }),
                            (0, r.jsx)("h2", {
                              className: "text-xl pt-8",
                              children: "".concat(e.price, " zl"),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-gray-400 pt-2 ",
                              children: e.excerpt,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  t
                )
              ),
          });
        },
        A = () => {
          let [e, t] = (0, s.useState)("pl"),
            [a, l] = (0, s.useState)(void 0),
            [i, c] = (0, s.useState)("all"),
            n = p(i);
          return (0, r.jsxs)(S, {
            language: e,
            setLanguage: t,
            setCategory: (e) => {
              c(e), l(void 0);
            },
            children: [
              ((e) => void 0 != e && null != e && "" != e)(a) &&
                (0, r.jsx)(_, { language: e, productId: null != a ? a : "" }),
              ((e) => void 0 != e && null != e && "" != e)(i) &&
                (0, r.jsx)(P, {
                  getMenuCategories: n,
                  language: e,
                  setProductId: (e) => {
                    l(e), c(void 0);
                  },
                }),
            ],
          });
        };
      function E() {
        return (0, r.jsx)(A, { test: "" });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 517, 358], () => t(596)), (_N_E = e.O());
  },
]);
