webpackJsonp(
    [1],
    {
        "9q7/": function(t, e) {},
        NHnr: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            let s = n("/5sW"),
                i = {
                    name: "countingDown",
                    data: () => ({}),
                    props: ["totalTime", "remainTime", "matchState"],
                    computed: {},
                    watch: {},
                    mounted() {},
                    methods: {}
                },
                a = {
                    render: function() {
                        let t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", { staticClass: "counting-down" }, [
                            e("span", [
                                this._v(
                                    `比赛总时间: ${  this._s(this.totalTime)}`
                                )
                            ]),
                            this._v(" "),
                            e("span", [
                                this._v(`剩余时间: ${  this._s(this.remainTime)}`)
                            ])
                        ]);
                    },
                    staticRenderFns: []
                },
                o = {
                    name: "judge",
                    data: () => ({ message: "" }),
                    methods: {
                        assignTime(t) {
                            this.$emit("assignTime", t);
                        },
                        controlBtnClick(t) {
                            this.$emit("matchControl", t);
                        }
                    }
                },
                r = {
                    render: function() {
                        let t = this,
                            e = t.$createElement,
                            s = t._self._c || e;
                        return s("div", { staticClass: "judge" }, [
                            s("span", [t._v("勒布朗·三井寿")]),
                            t._v(" "),
                            s("img", { attrs: { src: n("XEy4") } }),
                            t._v(" "),
                            s(
                                "button",
                                {
                                    staticClass: "startBtn",
                                    on: {
                                        click: function(e) {
                                            t.controlBtnClick("start");
                                        }
                                    }
                                },
                                [t._v("开始")]
                            ),
                            t._v(" "),
                            s(
                                "button",
                                {
                                    staticClass: "stopBtn",
                                    on: {
                                        click: function(e) {
                                            t.controlBtnClick("stop");
                                        }
                                    }
                                },
                                [t._v("暂停")]
                            ),
                            t._v(" "),
                            s("input", {
                                directives: [
                                    {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.message,
                                        expression: "message"
                                    }
                                ],
                                attrs: { placeholder: "edit me" },
                                domProps: { value: t.message },
                                on: {
                                    input: function(e) {
                                        e.target.composing ||
                                            (t.message = e.target.value);
                                    }
                                }
                            }),
                            t._v(" "),
                            s(
                                "button",
                                {
                                    staticClass: "assignTimeBtn",
                                    on: {
                                        click: function(e) {
                                            t.assignTime(t.message);
                                        }
                                    }
                                },
                                [t._v(`调整时间为${  t._s(t.message)}`)]
                            )
                        ]);
                    },
                    staticRenderFns: []
                },
                m = {
                    name: "match",
                    data: () => ({
                        state: "stopped",
                        judgeOrder: "stop",
                        totalTime: 60,
                        remainTime: 60,
                        timer: null
                    }),
                    methods: {
                        assignTime(t) {
                            this.remainTime = t;
                        },
                        matchControl(t) {
                            this.judgeOrder = t;
                        },
                        stopCounting() {
                            clearInterval(this.timer), (this.state = "stopped");
                        },
                        startCounting() {
                            (this.timer = setInterval(() => {
                                this.remainTime--;
                            }, 1e3)),
                                (this.state = "running");
                        }
                    },
                    watch: {
                        judgeOrder(t) {
                            "start" === t &&
                                "stopped" === this.state &&
                                this.startCounting(),
                                "stop" === t &&
                                    "running" === this.state &&
                                    this.stopCounting();
                        },
                        remainTime(t) {
                            0 === t && this.stopCounting();
                        }
                    },
                    components: {
                        countingDown: n("VU/8")(
                            i,
                            a,
                            !1,
                            function(t) {
                                n("9q7/");
                            },
                            "data-v-00ae2022",
                            null
                        ).exports,
                        judge: n("VU/8")(
                            o,
                            r,
                            !1,
                            function(t) {
                                n("WJXt");
                            },
                            "data-v-e66144ae",
                            null
                        ).exports
                    }
                },
                c = {
                    render: function() {
                        let t = this.$createElement,
                            e = this._self._c || t;
                        return e(
                            "div",
                            { attrs: { id: "match" } },
                            [
                                e("countingDown", {
                                    attrs: {
                                        totalTime: this.totalTime,
                                        remainTime: this.remainTime,
                                        matchState: this.state
                                    }
                                }),
                                this._v(" "),
                                e("judge", {
                                    on: {
                                        assignTime: this.assignTime,
                                        matchControl: this.matchControl
                                    }
                                })
                            ],
                            1
                        );
                    },
                    staticRenderFns: []
                },
                u = n("VU/8")(
                    m,
                    c,
                    !1,
                    function(t) {
                        n("iQD+");
                    },
                    null,
                    null
                ).exports;
            (s.a.config.productionTip = !1),
                new s.a({ el: "#app", render: t => t(u) });
        },
        WJXt: function(t, e) {},
        XEy4: function(t, e, n) {
            t.exports = `${n.p  }static/img/judge.3eb20bf.jpg`;
        },
        "iQD+": function(t, e) {}
    },
    ["NHnr"]
);
//# sourceMappingURL=app.2f14e2bc23d326384798.js.map
