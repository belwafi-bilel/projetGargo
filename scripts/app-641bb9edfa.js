/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
var smartTableData_val;
var userData_val;
var chartjs_labels = new Array();
var chartjs_data = new Array();
var chartjs_mlabels = new Array();
var Formdata_contant;


function changeLanguage(){    
    var languageInfo = {'country': $("#language").val()};
    localStorage.setItem('languageInfoObject', JSON.stringify(languageInfo));
    location.reload();
}             

$(document).ready(function(){

    if (lang == 0)
        optionStr = '<option value=0 selected>English</option><option value=1>French</option>';
    else
        optionStr = '<option value=0>English</option><option value=1 selected>French</option>';
    $("#language").append(optionStr);

});

$(".col_count").change(function() {
    alert("The text has been changed.");
});

datatest();

! function() {
    "use strict";

    function e(e, a) {
        e.otherwise("/dashboard"),

            a.addStaticItem({
                title: words["LOGOUT"][lang],
                icon: "ion-power"
                // subMenu: [{
                //         title: words["Add Field"][lang] + " 1",
                //         //stateRef: "profile"
                //     },
                //     {
                //         title: words["Add Field"][lang] + " 2",
                //         subMenu: [{
                //             title: words["Add Field"][lang] + " 2.1",
                //             disabled: !0
                //         }]
                //     }
                // ]
            })
    }
    e.$inject = ["$urlRouterProvider", "baSidebarServiceProvider"], angular.module("BlurAdmin.pages", ["ui.router", "BlurAdmin.pages.dashboard", "BlurAdmin.pages.form", "BlurAdmin.pages.collaboration", "BlurAdmin.pages.project", "BlurAdmin.pages.contacts", "BlurAdmin.pages.charts", "BlurAdmin.pages.administration", "BlurAdmin.pages.profile", "BlurAdmin.pages.SmartLibrary", "BlurAdmin.pages.SmartDocument"]).config(e)
}(),



function() {
    "use strict";
    angular.module("BlurAdmin.theme", ["toastr", "chart.js", "angular-chartist", "angular.morris-chart", "textAngular", "BlurAdmin.theme.components", "BlurAdmin.theme.inputs"])
}(),
function() {
    "use strict";

    function e(e) {
        e.state("charts", {
            url: "/charts",
            abstract: !0,
            template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
            title: words["REPORTS"][lang],
            sidebarMeta: {
                icon: "ion-arrow-graph-up-right",
                order: 150
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.charts", ["BlurAdmin.pages.charts.chartJs"]).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/pages/dashboard/dashboard.html",
            title: words["DASHBOARD"][lang],
            sidebarMeta: {
                icon: "ion-log-out",
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.dashboard", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("collaboration", {
            url: "/collaboration",
            templateUrl: 'sm/collaborations',
            title: words["COLLABORATION"][lang],
            sidebarMeta: {
                icon: "ion-android-contacts",
                order: 260
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.collaboration", []).config(e)
}(),


function() {
    "use strict";

    function e(e) {
        e.state("project", {
            url: "/project",
            templateUrl: 'sm/projects',
            title: words["PROJECT"][lang],
            sidebarMeta: {
                icon: "ion-android-contacts",
                order: 260
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.project", []).config(e)
}(),
function() {
    "use strict";

    function e(e) {
        e.state("contacts", {
            url: "/contacts",
            templateUrl: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
            title: words["CONTACTS"][lang],
            sidebarMeta: {
                icon: "ion-social-usd",
                order: 280
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.contacts", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("form", {
                url: "/form",
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: !0,
                controller: "FormPageCtrl",
                title: words["FORMS"][lang],
                sidebarMeta: {
                    icon: "ion-ios-list-outline",
                    order: 100
                }
            })
          
            .state("form.test", {
                url: "/test",
                templateUrl: "app/pages/form/test/test.html",
                title: words["SAVED"][lang],
                sidebarMeta: {
                    order: 100
                }
            })

            // .state("form.view", {
            //     url: "/View",
            //     templateUrl: "app/pages/form/test/View.php",
            //     title: words["TABLE VIEW"][lang],
            //     sidebarMeta: {
            //         order: 100
            //     }
            // })
            .state("form.fileupload", {
                url: "/fileupload",
                templateUrl: "app/pages/form/fileupload/fileupload.html",
                title: words["CREATION"][lang],
                sidebarMeta: {
                    order: 150
                }
            })

            //  .state("form.smart", {
            //     url: "/smart",
            //     templateUrl: "app/pages/tables/smart/tables.html",
            //     title: words["SMART TABLES"][lang],
            //     sidebarMeta: {
            //         order: 100
            //     }
            // })

            //  .state("form.custom", {
            //     url: "/field",
            //     templateUrl: "app/pages/tables/field/tables.html",
            //     title: words["TABLE CREATION"][lang],
            //     sidebarMeta: {
            //         order: 100
            //     }
            // })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.form", ["ui.select", "ngSanitize"]).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("SmartLibrary", {
            url: "/SmartLibrary",
            templateUrl: "sm/plans",
            title: words["ACTION PLAN"][lang],
            sidebarMeta: {
                icon: "ion-ios-book-outline",
                order: 50
            }
        })

               .state("SmartLibrary.new", {
                url: "",
                templateUrl: "sm/plans/table",
                title: words["NEW PLAN"][lang],
                sidebarMeta: {
                    order: 100
                }
            })
             

             .state("SmartLibrary.comment", {
                url: "/comment",
                templateUrl: "sm/plans/link",
                title: words["COMMENT"][lang],
                sidebarMeta: {
                    order: 100
                }
            })



               .state("SmartLibrary.listplan", {
                url: "/listplan",
                templateUrl: "sm/plans",
                title: words["LIST PLAN"][lang],
                sidebarMeta: {
                    order: 100
                }
            })


    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.SmartLibrary", []).config(e)
}(),
function() {
    "use strict";

    function e(e) {
        e.state("SmartDocument", {
            url: "/SmartDocument",

            templateUrl: "sm/pages/",
            title: words["LIBRARY"][lang],
            sidebarMeta: {
                icon: "ion-document",
                order: 200
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.SmartDocument", []).config(e)
}(),
 
function() {
    "use strict";

    function e(e) {
        e.state("profile", {
            url: "/profile",
            title: "PROFILE",
            templateUrl: "app/pages/profile/profile.html",
            controller: "ProfilePageCtrl"
        })
    }
    e.$inject = ["$stateProvider"],
        angular.module("BlurAdmin.pages.profile", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration", {
            url: "/administration",
            template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: !0,
            title: words["ADMIN"][lang],
            sidebarMeta: {
                icon: "ion-ios-gear-outline",
                order: 300
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration", ["BlurAdmin.pages.administration.sector", "BlurAdmin.pages.administration.language", "BlurAdmin.pages.administration.clientele", "BlurAdmin.pages.administration.category", "BlurAdmin.pages.administration.component", "BlurAdmin.pages.administration.questionnaire", "BlurAdmin.pages.administration.item", "BlurAdmin.pages.administration.offre", "BlurAdmin.pages.administration.personaloffer", "BlurAdmin.pages.administration.permissionaccess"]).config(e)
}(),
function() {
    "use strict";
    angular.module("BlurAdmin.theme.components", [])
}(),
function() {
    "use strict";
    angular.module("BlurAdmin.theme.inputs", [])
}(),

function() {
    "use strict";

    function e(e) {
        e.state("charts.chartJs", {
            url: "/chartJs",
            templateUrl: "app/pages/charts/chartJs/chartJs.html",
            title: words["CHARTS"][lang],
            sidebarMeta: {
                order: 150
            }
        })

         .state("charts.smart", {
                url: "/smart",
                templateUrl: "app/pages/tables/smart/tables.html",
                title: words["TABLES"][lang],
                sidebarMeta: {
                    order: 200
                }
            })

          .state("charts.view", {
                url: "/View",
                templateUrl: "app/pages/form/test/View.php",
                title: words["TABLE VIEW"][lang],
                sidebarMeta: {
                    order: 250
                }
            })
    }

    function a(e, a) {
        var t = a.colors;
        e.setOptions({
            chartColors: [t.primary, t.danger, t.warning, t.success, t.info, t.default, t.primaryDark, t.successDark, t.warningLight, t.successLight, t.primaryLight],
            responsive: !0,
            maintainAspectRatio: !1,
            animation: {
                duration: 2500
            },
            scale: {
                gridLines: {
                    color: t.border
                },
                scaleLabel: {
                    fontColor: t.defaultText
                },
                ticks: {
                    fontColor: t.defaultText,
                    showLabelBackdrop: !1
                }
            }
        }), e.setOptions("Line", {
            datasetFill: !1
        }), e.setOptions("radar", {
            scale: {
                pointLabels: {
                    fontColor: t.defaultText
                },
                ticks: {
                    maxTicksLimit: 5,
                    display: !1
                }
            }
        }), e.setOptions("bar", {
            tooltips: {
                enabled: !1
            }
        })
    }
    e.$inject = ["$stateProvider"], a.$inject = ["ChartJsProvider", "baConfigProvider"], angular.module("BlurAdmin.pages.charts.chartJs", []).config(e).config(a)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.sector", {
            url: "/sector",
            templateUrl: "sm/sectors",
            title: words["Sectors"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.sector", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.language", {
            url: "/language",
            templateUrl: "sm/languages",
            title: words["Languages"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.language", []).config(e)
}(),
function() {
    "use strict";

    function e(e) {
        e.state("administration.clientele", {
            url: "/clientele",
            templateUrl: "sm/customers",
            title: words["Clienteles"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.clientele", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.category", {
            url: "/category",
            templateUrl: "sm/categories",
            title: words["Categories"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.category", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.component", {
            url: "/component",
            templateUrl: "sm/composants",
            title: words["Components"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.component", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.questionnaire", {
            url: "/questionnaire",
            templateUrl: "sm/quistionaires",
            title: words["Questionnaires"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.questionnaire", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.item", {
            url: "/item",
            templateUrl: "sm/items",
            title: words["Items"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.item", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.offre", {
            url: "/offre",
            templateUrl: "sm/offers",
            title: words["Offers"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.offre", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.personaloffer", {
            url: "/personaloffer",
            templateUrl: "sm/personalOffers",
            title: words["Personal Offers"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.personaloffer", []).config(e)
}(),

function() {
    "use strict";

    function e(e) {
        e.state("administration.permissionaccess", {
            url: "sm/permissionAccesses",
            templateUrl: "sm/permissionAccesses",
            title: words["Permission Access"][lang],
            sidebarMeta: {
                order: 0
            }
        })
    }
    e.$inject = ["$stateProvider"], angular.module("BlurAdmin.pages.administration.permissionaccess", []).config(e)
}(),






 angular.module("BlurAdmin", ["ngAnimate", "ui.bootstrap", "ui.sortable", "ui.router", "ngTouch", "toastr", "smart-table", "xeditable", "ui.select", "ui.slimscroll", "ngJsTree", "angular-progress-button-styles", "BlurAdmin.theme", "BlurAdmin.pages"]),
    function() {
        "use strict";

        function e(e, t, i) {
            i.decorator("$uiViewScroll", a), e.changeTheme({
                blur: !0
            }), e.changeColors({
                default: "#4e4e55",
                defaultText: "#e2e2e2"
            })
        }

        function a(e, a, t) {
            return function(i) {
                t.hasAttr(i, "autoscroll-body-top") ? a() : e(i)
            }
        }
        e.$inject = ["baConfigProvider", "colorHelper", "$provide"], a.$inject = ["$delegate", "$anchorScroll", "baUtil"], angular.module("BlurAdmin.theme").config(e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var s = {
                theme: {
                    blur: !1
                },
                colors: {
                    default: a.default,
                    defaultText: a.defaultText,
                    border: a.border,
                    borderDark: a.borderDark,
                    primary: t.primary,
                    info: t.info,
                    success: t.success,
                    warning: t.warning,
                    danger: t.danger,
                    primaryLight: e.tint(t.primary, 30),
                    infoLight: e.tint(t.info, 30),
                    successLight: e.tint(t.success, 30),
                    warningLight: e.tint(t.warning, 30),
                    dangerLight: e.tint(t.danger, 30),
                    primaryDark: e.shade(t.primary, 15),
                    infoDark: e.shade(t.info, 15),
                    successDark: e.shade(t.success, 15),
                    warningDark: e.shade(t.warning, 15),
                    dangerDark: e.shade(t.danger, 15),
                    dashboard: {
                        blueStone: i.blueStone,
                        surfieGreen: i.surfieGreen,
                        silverTree: i.silverTree,
                        gossip: i.gossip,
                        white: i.white
                    }
                }
            };
            return s.changeTheme = function(e) {
                angular.merge(s.theme, e)
            }, s.changeColors = function(e) {
                angular.merge(s.colors, e)
            }, s.$get = function() {
                return delete s.$get, s
            }, s
        }
        e.$inject = ["colorHelper"];
        var a = {
                default: "#ffffff",
                defaultText: "#666666",
                border: "#dddddd",
                borderDark: "#aaaaaa"
            },
            t = {
                primary: "#209e91",
                info: "#2dacd1",
                success: "#90b900",
                warning: "#dfb81c",
                danger: "#e85656"
            },
            i = {
                blueStone: "#005562",
                surfieGreen: "#0e8174",
                silverTree: "#6eba8c",
                gossip: "#b9f2a1",
                white: "#10c4b5"
            };
        angular.module("BlurAdmin.theme").provider("baConfig", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t) {
            function i(e) {
                return e.toString(16)
            }

            function s(e) {
                return parseInt(e, 16)
            }
            for (var l = "#", o = 1; o < 7; o += 2) {
                var n = s(e.substr(o, 2)),
                    r = s(a.substr(o, 2)),
                    d = i(Math.floor(r + (n - r) * (t / 100)));
                l += ("0" + d).slice(-2)
            }
            return l
        }
        var a = "assets/img/";
        angular.module("BlurAdmin.theme").constant("layoutSizes", {
            resWidthCollapseSidebar: 1200,
            resWidthHideSidebar: 500
        }).constant("layoutPaths", {
            images: {
                root: a,
                profile: a + "app/profile/",
                amMap: "assets/img/theme/vendor/ammap//dist/ammap/images/",
                amChart: "assets/img/theme/vendor/amcharts/dist/amcharts/images/"
            }
        }).constant("colorHelper", {
            tint: function(a, t) {
                return e("#ffffff", a, t)
            },
            shade: function(a, t) {
                return e("#000000", a, t)
            }
        })
    }(),
    function() {
        "use strict";

        function e(e, a, t, i, s, l, o) {
            var n = [i.loadAmCharts(), e(3e3)],
                r = o;
            r.blur && (r.mobile ? n.unshift(i.loadImg(t.images.root + "blur-bg-mobile.jpg")) : (n.unshift(i.loadImg(t.images.root + "blur-bg.jpg")), n.unshift(i.loadImg(t.images.root + "blur-bg-blurred.jpg")))), s.all(n).then(function() {
                a.$pageFinishedLoading = !0
            }), e(function() {
                a.$pageFinishedLoading || (a.$pageFinishedLoading = !0)
            }, 7e3), a.$baSidebarService = l
        }
        e.$inject = ["$timeout", "$rootScope", "layoutPaths", "preloader", "$q", "baSidebarService", "themeLayoutSettings"], angular.module("BlurAdmin.theme").run(e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var a = /android|webos|iphone|ipad|ipod|blackberry|windows phone/.test(navigator.userAgent.toLowerCase()),
                t = a ? "mobile" : "",
                i = e.theme.blur ? "blur-theme" : "";
            return angular.element(document.body).addClass(t).addClass(i), {
                blur: e.theme.blur,
                mobile: a
            }
        }
        e.$inject = ["baConfig"], angular.module("BlurAdmin.theme").service("themeLayoutSettings", e)
    }(),
    function() {
        "use strict";



        function e(e, a) {
            e.link = "", e.ok = function() {
                a.close(e.link)
            }
        }
        e.$inject = ["$scope", "$uibModalInstance"],
            angular.module("BlurAdmin.pages.profile").controller("ProfileModalCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t, i) {
            e.picture = t("profilePicture")("Nasta"), e.removePicture = function() {
                e.picture = t("appImage")("theme/no-photo.png"), e.noPicture = !0
            }, e.uploadPicture = function() {
                var e = document.getElementById("uploadFile");
                e.click()
            }, e.socialProfiles = [{
                name: "Facebook",
                href: "https://www.facebook.com/akveo/",
                icon: "socicon-facebook"
            }, {
                name: "Twitter",
                href: "https://twitter.com/akveo_inc",
                icon: "socicon-twitter"
            }, {
                name: "Google",
                icon: "socicon-google"
            }, {
                name: "LinkedIn",
                href: "https://www.linkedin.com/company/akveo",
                icon: "socicon-linkedin"
            }, {
                name: "GitHub",
                href: "https://github.com/akveo",
                icon: "socicon-github"
            }, {
                name: "StackOverflow",
                icon: "socicon-stackoverflow"
            }, {
                name: "Dribbble",
                icon: "socicon-dribble"
            }, {
                name: "Behance",
                icon: "socicon-behace"
            }], e.unconnect = function(e) {
                e.href = void 0
            }, e.showModal = function(e) {
                i.open({
                    animation: !1,
                    controller: "ProfileModalCtrl",
                    templateUrl: "app/pages/profile/profileModal.html"
                }).result.then(function(a) {
                    e.href = a
                })
            }, e.getFile = function() {
                a.readAsDataUrl(e.file, e).then(function(a) {
                    e.picture = a
                })
            }, e.switches = [!0, !0, !1, !0, !0, !1]
        }
        e.$inject = ["$scope", "fileReader", "$filter", "$uibModal"],
            angular.module("BlurAdmin.pages.profile").controller("ProfilePageCtrl", e)
    }(),
    function() {
        "use strict";


        function e(e, a, t, i) {
            e.smartTablePageSize = 10,
                e.smartTableData = smartTableData_val,
                e.editableTableData = e.smartTableData.slice(0, 36), e.peopleTableData = [{
                    id: 1,
                    firstName: "Mark",
                    lastName: "Otto",
                    username: "@mdo",
                    email: "mdo@gmail.com",
                    age: "28",
                    status: "info"
                }, {
                    id: 2,
                    firstName: "Jacob",
                    lastName: "Thornton",
                    username: "@fat",
                    email: "fat@yandex.ru",
                    age: "45",
                    status: "primary"
                }, {
                    id: 3,
                    firstName: "Larry",
                    lastName: "Bird",
                    username: "@twitter",
                    email: "twitter@outlook.com",
                    age: "18",
                    status: "success"
                }, {
                    id: 4,
                    firstName: "John",
                    lastName: "Snow",
                    username: "@snow",
                    email: "snow@gmail.com",
                    age: "20",
                    status: "danger"
                }, {
                    id: 5,
                    firstName: "Jack",
                    lastName: "Sparrow",
                    username: "@jack",
                    email: "jack@yandex.ru",
                    age: "30",
                    status: "warning"
                }],
                e.metricsTableData = [{
                    image: "app/browsers/chrome.svg",
                    browser: "Google Chrome",
                    visits: "10,392",
                    isVisitsUp: !0,
                    purchases: "4,214",
                    isPurchasesUp: !0,
                    percent: "45%",
                    isPercentUp: !0
                }, {
                    image: "app/browsers/firefox.svg",
                    browser: "Mozilla Firefox",
                    visits: "7,873",
                    isVisitsUp: !0,
                    purchases: "3,031",
                    isPurchasesUp: !1,
                    percent: "28%",
                    isPercentUp: !0
                }, {
                    image: "app/browsers/ie.svg",
                    browser: "Internet Explorer",
                    visits: "5,890",
                    isVisitsUp: !1,
                    purchases: "2,102",
                    isPurchasesUp: !1,
                    percent: "17%",
                    isPercentUp: !1
                }, {
                    image: "app/browsers/safari.svg",
                    browser: "Safari",
                    visits: "4,001",
                    isVisitsUp: !1,
                    purchases: "1,001",
                    isPurchasesUp: !1,
                    percent: "14%",
                    isPercentUp: !0
                }, {
                    image: "app/browsers/opera.svg",
                    browser: "Opera",
                    visits: "1,833",
                    isVisitsUp: !0,
                    purchases: "83",
                    isPurchasesUp: !0,
                    percent: "5%",
                    isPercentUp: !1
                }],
                //e.users=userData_val[{id:1,name:"Esther Vang",status:4,group:3},{id:2,name:"Leah Freeman",status:3,group:1},{id:3,name:"Mathews Simpson",status:3,group:2},{id:4,name:"Buckley Hopkins",group:4},{id:5,name:"Buckley Schwartz",status:1,group:1},{id:6,name:"Mathews Hopkins",status:4,group:2},{id:7,name:"Leah Vang",status:4,group:1},{id:8,name:"Vang Schwartz",status:4,group:2},{id:9,name:"Hopkin Esther",status:1,group:2},{id:10,name:"Mathews Schwartz",status:1,group:3}],
                e.users = userData_val,

                e.statuses = [{
                    value: 1,
                    text: "Good"
                }, {
                    value: 2,
                    text: "Awesome"
                }, {
                    value: 3,
                    text: "Excellent"
                }],
                e.groups = [{
                    id: 1,
                    text: "user"
                }, {
                    id: 2,
                    text: "customer"
                }, {
                    id: 3,
                    text: "vip"
                }, {
                    id: 4,
                    text: "admin"
                }],
                e.showGroup = function(t) {
                    if (t.group && e.groups.length) {
                        var i = a("filter")(e.groups, {
                            id: t.group
                        });
                        return i.length ? i[0].text : "Not set"
                    }
                    return "Not set"
                },
                e.showStatus = function(t) {
                    var i = [];
                    return t.status && (i = a("filter")(e.statuses, {
                        value: t.status
                    })), i.length ? i[0].text : "Not set"
                },
                e.removeUser = function(a) {
                    e.users.splice(a, 1);

                    setTimeout(function() {

                        var str_json = JSON.stringify(e.users);
                        $.post("scripts/Update.php", {
                            data: str_json
                        }, function(result) {}, 'json');
                    }, 3000);
                },

                e.UpdateUser = function(a) {
                    //rowform.submit();
                    setTimeout(function() {

                        var str_json = JSON.stringify(e.users);
                        $.post("scripts/Update.php", {
                            data: str_json
                        }, function(result) {}, 'json');
                    }, 3000);

                },
                e.addUser = function() {
                    e.inserted = {
                            id: e.users.length + 1,
                            name: "",
                            status: null,
                            group: null
                        },
                        e.users.push(e.inserted)
                },
                t.theme = "bs3",
                i.bs3.submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>',
                i.bs3.cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>'
        }
        e.$inject = ["$scope", "$filter", "editableOptions", "editableThemes"], angular.module("BlurAdmin.pages.form").controller("FormPageCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                link: function(a, t) {
                    e(function() {
                        function a(a) {
                            e(function() {
                                t.html(a)
                            }, 30)
                        }
                        var i = t.attr("new-value"),
                            s = parseInt(t.html());
                        if (i > s)
                            for (var l = s; l <= i; l++) a(l);
                        else
                            for (var o = s; o >= i; o--) a(o);
                        e(function() {
                            t.next().find("i").addClass("show-arr")
                        }, 500)
                    }, 3500)
                }
            }
        }
        e.$inject = ["$timeout"], angular.module("BlurAdmin.theme").directive("animatedChange", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                link: function(e, a) {
                    a.bind("keydown", function(e) {
                        var a = e.target;
                        $(a).height(0);
                        var t = $(a)[0].scrollHeight;
                        t = t < 16 ? 16 : t, $(a).height(t)
                    }), setTimeout(function() {
                        var e = a;
                        $(e).height(0);
                        var t = $(e)[0].scrollHeight;
                        t = t < 16 ? 16 : t, $(e).height(t)
                    }, 0)
                }
            }
        }
        angular.module("BlurAdmin.theme").directive("autoExpand", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            return {
                link: function(t, i, s) {
                    var l = a(s.autoFocus);
                    t.$watch(l, function(a) {
                        a === !0 && e(function() {
                            i[0].focus(), i[0].select()
                        })
                    }), i.bind("blur", function() {
                        t.$apply(l.assign(t, !1))
                    })
                }
            }
        }
        e.$inject = ["$timeout", "$parse"], angular.module("BlurAdmin.theme").directive("autoFocus", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "AE",
                templateUrl: function(e, a) {
                    return a.includeWithScope
                }
            }
        }
        angular.module("BlurAdmin.theme").directive("includeWithScope", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                restrict: "EA",
                template: "<div></div>",
                replace: !0,
                scope: {
                    min: "=",
                    max: "=",
                    type: "@",
                    prefix: "@",
                    maxPostfix: "@",
                    prettify: "=",
                    prettifySeparator: "@",
                    grid: "=",
                    gridMargin: "@",
                    postfix: "@",
                    step: "@",
                    hideMinMax: "@",
                    hideFromTo: "@",
                    from: "=",
                    to: "=",
                    disable: "=",
                    onChange: "=",
                    onFinish: "=",
                    values: "=",
                    timeout: "@"
                },
                link: function(a, t) {
                    t.ionRangeSlider({
                        min: a.min,
                        max: a.max,
                        type: a.type,
                        prefix: a.prefix,
                        maxPostfix: a.maxPostfix,
                        prettify_enabled: a.prettify,
                        prettify_separator: a.prettifySeparator,
                        grid: a.grid,
                        gridMargin: a.gridMargin,
                        postfix: a.postfix,
                        step: a.step,
                        hideMinMax: a.hideMinMax,
                        hideFromTo: a.hideFromTo,
                        from: a.from,
                        to: a.to,
                        disable: a.disable,
                        onChange: a.onChange,
                        onFinish: a.onFinish,
                        values: a.values
                    }), a.$watch("min", function(a) {
                        e(function() {
                            t.data("ionRangeSlider").update({
                                min: a
                            })
                        })
                    }, !0), a.$watch("max", function(a) {
                        e(function() {
                            t.data("ionRangeSlider").update({
                                max: a
                            })
                        })
                    }), a.$watch("from", function(a) {
                        e(function() {
                            t.data("ionRangeSlider").update({
                                from: a
                            })
                        })
                    }), a.$watch("to", function(a) {
                        e(function() {
                            t.data("ionRangeSlider").update({
                                to: a
                            })
                        })
                    }), a.$watch("disable", function(a) {
                        e(function() {
                            t.data("ionRangeSlider").update({
                                disable: a
                            })
                        })
                    })
                }
            }
        }
        e.$inject = ["$timeout"], angular.module("BlurAdmin.theme").directive("ionSlider", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                link: function(e, a) {
                    a.bind("change", function(a) {
                        e.file = (a.srcElement || a.target).files[0], e.getFile()
                    })
                }
            }
        }
        angular.module("BlurAdmin.theme").directive("ngFileSelect", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                scope: {
                    scrollPosition: "=",
                    maxHeight: "="
                },
                link: function(e) {
                    $(window).on("scroll", function() {
                        var a = $(window).scrollTop() > e.maxHeight;
                        a !== e.prevScrollTop && e.$apply(function() {
                            e.scrollPosition = a
                        }), e.prevScrollTop = a
                    })
                }
            }
        }
        angular.module("BlurAdmin.theme").directive("scrollPosition", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                scope: {
                    trackWidth: "=",
                    minWidth: "="
                },
                link: function(e, a) {
                    e.trackWidth = $(a).width() < e.minWidth, e.prevTrackWidth = e.trackWidth, $(window).resize(function() {
                        var t = $(a).width() < e.minWidth;
                        t !== e.prevTrackWidth && e.$apply(function() {
                            e.trackWidth = t
                        }), e.prevTrackWidth = t
                    })
                }
            }
        }
        angular.module("BlurAdmin.theme").directive("trackWidth", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            return {
                restrict: "A",
                link: function(t, i) {
                    var s = 1e3;
                    a.$pageFinishedLoading && (s = 100), e(function() {
                        i.removeClass("full-invisible"), i.addClass("animated zoomIn")
                    }, s)
                }
            }
        }
        e.$inject = ["$timeout", "$rootScope"], angular.module("BlurAdmin.theme").directive("zoomIn", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            angular.extend(e, {
                closeButton: !0,
                closeHtml: "<button>&times;</button>",
                timeOut: 5e3,
                autoDismiss: !1,
                containerId: "toast-container",
                maxOpened: 0,
                newestOnTop: !0,
                positionClass: "toast-top-right",
                preventDuplicates: !1,
                preventOpenDuplicates: !1,
                target: "body"
            })
        }
        e.$inject = ["toastrConfig"], angular.module("BlurAdmin.theme.components").config(e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var a = {},
                t = 0,
                i = 100,
                s = !1;
            return {
                setProgress: function(e) {
                    if (e > i) throw Error("Progress can't be greater than max");
                    t = e
                },
                getProgress: function() {
                    return t
                },
                open: function() {
                    if (s) throw Error("Progress modal opened now");
                    a = e.open({
                        animation: !0,
                        templateUrl: "app/pages/ui/modals/progressModal/progressModal.html",
                        size: "sm",
                        keyboard: !1,
                        backdrop: "static"
                    }), s = !0
                },
                close: function() {
                    if (!s) throw Error("Progress modal is not active");
                    a.close(), s = !1
                }
            }
        }
        e.$inject = ["$uibModal"], angular.module("BlurAdmin.theme").factory("baProgressModal", e)
    }(),
    function() {
        "use strict";

        function e() {
            this.isDescendant = function(e, a) {
                for (var t = a.parentNode; null != t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }, this.hexToRGB = function(e, a) {
                var t = parseInt(e.slice(1, 3), 16),
                    i = parseInt(e.slice(3, 5), 16),
                    s = parseInt(e.slice(5, 7), 16);
                return "rgba(" + t + ", " + i + ", " + s + ", " + a + ")"
            }, this.hasAttr = function(e, a) {
                var t = $(e).attr(a);
                return "undefined" != typeof t && t !== !1
            }
        }
        angular.module("BlurAdmin.theme").service("baUtil", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var a = function(e, a, t) {
                    return function() {
                        t.$apply(function() {
                            a.resolve(e.result)
                        })
                    }
                },
                t = function(e, a, t) {
                    return function() {
                        t.$apply(function() {
                            a.reject(e.result)
                        })
                    }
                },
                i = function(e, a) {
                    return function(e) {
                        a.$broadcast("fileProgress", {
                            total: e.total,
                            loaded: e.loaded
                        })
                    }
                },
                s = function(e, s) {
                    var l = new FileReader;
                    return l.onload = a(l, e, s), l.onerror = t(l, e, s), l.onprogress = i(l, s), l
                },
                l = function(a, t) {
                    var i = e.defer(),
                        l = s(i, t);
                    return l.readAsDataURL(a), i.promise
                };
            return {
                readAsDataUrl: l
            }
        }
        e.$inject = ["$q"], angular.module("BlurAdmin.theme").service("fileReader", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                loadImg: function(a) {
                    var t = e.defer(),
                        i = new Image;
                    return i.src = a, i.onload = function() {
                        t.resolve()
                    }, t.promise
                },
                loadAmCharts: function() {
                    var a = e.defer();
                    return AmCharts.ready(function() {
                        a.resolve()
                    }), a.promise
                }
            }
        }
        e.$inject = ["$q"], angular.module("BlurAdmin.theme").service("preloader", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                start: function(a, t, i) {
                    function s() {
                        return a(t, i)
                    }
                    var l = s();
                    angular.element(e).bind("focus", function() {
                        l && a.cancel(l), l = s()
                    }), angular.element(e).bind("blur", function() {
                        l && a.cancel(l)
                    })
                }
            }
        }
        e.$inject = ["$window"], angular.module("BlurAdmin.theme").service("stopableInterval", e)
    }(),
   
    function() {
        "use strict";

        function e(e, a) {
            function t(e) {
                for (var a, t, i = e.length; i; a = Math.floor(Math.random() * i), t = e[--i], e[i] = e[a], e[a] = t);
                return e
            }
            var i = a.colors;

            ///cart.js
            //e.labels=["Sleeping","Designing","Coding","Cycling"],
            //e.data=[20,40,5,35],

            e.labels = chartjs_labels,
                e.data = chartjs_data,
                e.mlabels = chartjs_mlabels,



                e.options = {
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    },
                    legend: {
                        display: !0,
                        position: "bottom",
                        labels: {
                            fontColor: i.defaultText
                        }
                    }
                }, e.changeData = function() {
                    e.data = t(e.data)
                }
        }
        e.$inject = ["$scope", "baConfig"], angular.module("BlurAdmin.pages.charts.chartJs").controller("chartJs1DCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            function a(e) {
                for (var a, t, i = e.length; i; a = Math.floor(Math.random() * i), t = e[--i], e[i] = e[a], e[a] = t);
                return e
            }
            e.labels = [words["May"][lang], words["Jun"][lang], words["Jul"][lang], words["Aug"][lang], words["Sep"][lang]], e.data = [
                [65, 59, 90, 81, 56],
                [28, 48, 40, 19, 88]
            ], e.series = ["Product A", "Product B"], e.changeData = function() {
                e.data[0] = a(e.data[0]), e.data[1] = a(e.data[1])
            }
        }
        e.$inject = ["$scope"], angular.module("BlurAdmin.pages.charts.chartJs").controller("chartJs2DCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t) {
            e.labels = [words["Apr"][lang], words["May"][lang], words["Jun"][lang], words["Jul"][lang], words["Aug"][lang], words["Sep"][lang], words["Oct"][lang], words["Nov"][lang], words["Dec"][lang]], e.data = [1, 9, 3, 4, 5, 6, 7, 8, 2].map(function(e) {
                return 25 * Math.sin(e) + 25
            }), t.start(a, function() {
                for (var a = [], t = e.data[e.data.length - 1], i = e.data.length - 1; i > 0; i--) a[i] = e.data[i - 1];
                a[0] = t, e.data = a
            }, 400)
        }
        e.$inject = ["$scope", "$interval", "stopableInterval"], angular.module("BlurAdmin.pages.charts.chartJs").controller("chartJsWaveCtrl", e)
    }(),
    
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                controller: "BlurFeedCtrl",
                templateUrl: "app/pages/dashboard/blurFeed/blurFeed.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("blurFeed", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            e.feed = [{
                type: "text-message",
                author: "Kostya",
                surname: "Danovsky",
                header: "Posted new message",
                text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
                time: "Today 11:55 pm",
                ago: "25 minutes ago",
                expanded: !1
            }, {
                type: "video-message",
                author: "Andrey",
                surname: "Hrabouski",
                header: "Added new video",
                text: '"Vader and Me"',
                preview: "app/feed/vader-and-me-preview.png",
                link: "https://www.youtube.com/watch?v=IfcpzBbbamk",
                time: "Today 9:30 pm",
                ago: "3 hrs ago",
                expanded: !1
            }, {
                type: "image-message",
                author: "Vlad",
                surname: "Lugovsky",
                header: "Added new image",
                text: '"My little kitten"',
                preview: "app/feed/my-little-kitten.png",
                link: "http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg",
                time: "Today 2:20 pm",
                ago: "10 hrs ago",
                expanded: !1
            }, {
                type: "text-message",
                author: "Nasta",
                surname: "Linnie",
                header: "Posted new message",
                text: "Haha lol",
                time: "11.11.2015",
                ago: "2 days ago",
                expanded: !1
            }, {
                type: "geo-message",
                author: "Nick",
                surname: "Cat",
                header: "Posted location",
                text: '"New York, USA"',
                preview: "app/feed/new-york-location.png",
                link: "https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z",
                time: "11.11.2015",
                ago: "2 days ago",
                expanded: !1
            }, {
                type: "text-message",
                author: "Vlad",
                surname: "Lugovsky",
                header: "Posted new message",
                text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
                time: "12.11.2015",
                ago: "3 days ago",
                expanded: !1
            }, {
                type: "text-message",
                author: "Andrey",
                surname: "Hrabouski",
                header: "Posted new message",
                text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
                time: "14.11.2015",
                ago: "5 days ago",
                expanded: !1
            }, {
                type: "text-message",
                author: "Nasta",
                surname: "Linnie",
                header: "Posted new message",
                text: "When your hammer is C++, everything begins to look like a thumb.",
                time: "14.11.2015",
                ago: "5 days ago",
                expanded: !1
            }, {
                type: "text-message",
                author: "Alexander",
                surname: "Demeshko",
                header: "Posted new message",
                text: '“I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time." ©',
                time: "15.11.2015",
                ago: "6 days ago",
                expanded: !1
            }, {
                type: "image-message",
                author: "Nick",
                surname: "Cat",
                header: "Posted photo",
                text: '"Protein Heroes"',
                preview: "app/feed/genom.png",
                link: "https://dribbble.com/shots/2504810-Protein-Heroes",
                time: "16.11.2015",
                ago: "7 days ago",
                expanded: !1
            }, {
                type: "text-message",
                author: "Kostya",
                surname: "Danovsky",
                header: "Posted new message",
                text: "Why did the CoffeeScript developer keep getting lost? Because he couldn't find his source without a map",
                time: "18.11.2015",
                ago: "9 days ago",
                expanded: !1
            }], e.expandMessage = function(e) {
                e.expanded = !e.expanded
            }
        }
        e.$inject = ["$scope"], angular.module("BlurAdmin.pages.dashboard").controller("BlurFeedCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {}
        angular.module("BlurAdmin.pages.dashboard").service("dashboardCalendar", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                controller: "DashboardCalendarCtrl",
                templateUrl: "app/pages/dashboard/dashboardCalendar/dashboardCalendar.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("dashboardCalendar", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var a = e.colors.dashboard,
                t = $("#calendar").fullCalendar({
                    header: {
                        left: "prev,next today",
                        center: "title",
                        right: "month,agendaWeek,agendaDay"
                    },
                    defaultDate: "2017-04-21",
                    selectable: !0,
                    selectHelper: !0,
                    select: function(e, a) {
                        var i, s = prompt(words["Event Title:"][lang]);
                        s && (i = {
                            title: s,
                            start: e,
                            end: a
                        }, t.fullCalendar("renderEvent", i, !0)), t.fullCalendar("unselect")
                    },
                    editable: !0,
                    eventLimit: !0,
                    events: [{
                        title: "All Day Event",
                        start: "2016-03-01",
                        color: a.silverTree
                    }, {
                        title: "Long Event",
                        start: "2016-03-07",
                        end: "2016-03-10",
                        color: a.blueStone
                    }, {
                        title: "Dinner",
                        start: "2016-03-14T20:00:00",
                        color: a.surfieGreen
                    }, {
                        title: "Birthday Party",
                        start: "2016-04-01T07:00:00",
                        color: a.gossipDark
                    }]
                })
        }
        e.$inject = ["baConfig"], angular.module("BlurAdmin.pages.dashboard").controller("DashboardCalendarCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                controller: "DashboardLineChartCtrl",
                templateUrl: "app/pages/dashboard/dashboardLineChart/dashboardLineChart.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("dashboardLineChart", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t) {
            function i() {
                n.zoomToDates(new Date(2013, 3), new Date(2014, 0))
            }
            var s = e.colors,
                l = e.theme.blur ? "#000000" : s.primary,
                o = [{
                    date: new Date(2012, 11),
                    value: 0,
                    value0: 0
                }, {
                    date: new Date(2013, 0),
                    value: 15e3,
                    value0: 19e3
                }, {
                    date: new Date(2013, 1),
                    value: 3e4,
                    value0: 2e4
                }, {
                    date: new Date(2013, 2),
                    value: 25e3,
                    value0: 22e3
                }, {
                    date: new Date(2013, 3),
                    value: 21e3,
                    value0: 25e3
                }, {
                    date: new Date(2013, 4),
                    value: 24e3,
                    value0: 29e3
                }, {
                    date: new Date(2013, 5),
                    value: 31e3,
                    value0: 26e3
                }, {
                    date: new Date(2013, 6),
                    value: 4e4,
                    value0: 25e3
                }, {
                    date: new Date(2013, 7),
                    value: 37e3,
                    value0: 2e4
                }, {
                    date: new Date(2013, 8),
                    value: 18e3,
                    value0: 22e3
                }, {
                    date: new Date(2013, 9),
                    value: 5e3,
                    value0: 26e3
                }, {
                    date: new Date(2013, 10),
                    value: 4e4,
                    value0: 3e4
                }, {
                    date: new Date(2013, 11),
                    value: 2e4,
                    value0: 25e3
                }, {
                    date: new Date(2014, 0),
                    value: 5e3,
                    value0: 13e3
                }, {
                    date: new Date(2014, 1),
                    value: 3e3,
                    value0: 13e3
                }, {
                    date: new Date(2014, 2),
                    value: 1800,
                    value0: 13e3
                }, {
                    date: new Date(2014, 3),
                    value: 10400,
                    value0: 13e3
                }, {
                    date: new Date(2014, 4),
                    value: 25500,
                    value0: 13e3
                }, {
                    date: new Date(2014, 5),
                    value: 2100,
                    value0: 13e3
                }, {
                    date: new Date(2014, 6),
                    value: 6500,
                    value0: 13e3
                }, {
                    date: new Date(2014, 7),
                    value: 1100,
                    value0: 13e3
                }, {
                    date: new Date(2014, 8),
                    value: 17200,
                    value0: 13e3
                }, {
                    date: new Date(2014, 9),
                    value: 26900,
                    value0: 13e3
                }, {
                    date: new Date(2014, 10),
                    value: 14100,
                    value0: 13e3
                }, {
                    date: new Date(2014, 11),
                    value: 35300,
                    value0: 13e3
                }, {
                    date: new Date(2015, 0),
                    value: 54800,
                    value0: 13e3
                }, {
                    date: new Date(2015, 1),
                    value: 49800,
                    value0: 13e3
                }],
                n = AmCharts.makeChart("amchart", {
                    type: "serial",
                    theme: "blur",
                    marginTop: 15,
                    marginRight: 15,
                    dataProvider: o,
                    categoryField: "date",
                    categoryAxis: {
                        parseDates: !0,
                        gridAlpha: 0,
                        color: s.defaultText,
                        axisColor: s.defaultText
                    },
                    valueAxes: [{
                        minVerticalGap: 50,
                        gridAlpha: 0,
                        color: s.defaultText,
                        axisColor: s.defaultText
                    }],
                    graphs: [{
                        id: "g0",
                        bullet: "none",
                        useLineColorForBulletBorder: !0,
                        lineColor: t.hexToRGB(l, .3),
                        lineThickness: 1,
                        negativeLineColor: s.danger,
                        type: "smoothedLine",
                        valueField: "value0",
                        fillAlphas: 1,
                        fillColorsField: "lineColor"
                    }, {
                        id: "g1",
                        bullet: "none",
                        useLineColorForBulletBorder: !0,
                        lineColor: t.hexToRGB(l, .5),
                        lineThickness: 1,
                        negativeLineColor: s.danger,
                        type: "smoothedLine",
                        valueField: "value",
                        fillAlphas: 1,
                        fillColorsField: "lineColor"
                    }],
                    chartCursor: {
                        categoryBalloonDateFormat: "MM YYYY",
                        categoryBalloonColor: "#4285F4",
                        categoryBalloonAlpha: .7,
                        cursorAlpha: 0,
                        valueLineEnabled: !0,
                        valueLineBalloonEnabled: !0,
                        valueLineAlpha: .5
                    },
                    dataDateFormat: "MM YYYY",
                    export: {
                        enabled: !0
                    },
                    creditsPosition: "bottom-right",
                    zoomOutButton: {
                        backgroundColor: "#fff",
                        backgroundAlpha: 0
                    },
                    zoomOutText: "",
                    pathToImages: a.images.amChart
                });
            n.addListener("rendered", i), i(), n.zoomChart && n.zoomChart()
        }
        e.$inject = ["baConfig", "layoutPaths", "baUtil"], angular.module("BlurAdmin.pages.dashboard").controller("DashboardLineChartCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                controller: "DashboardMapCtrl",
                templateUrl: "app/pages/dashboard/dashboardMap/dashboardMap.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("dashboardMap", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            var t = e.colors;
            AmCharts.makeChart("amChartMap", {
                type: "map",
                theme: "blur",
                zoomControl: {
                    zoomControlEnabled: !1,
                    panControlEnabled: !1
                },
                dataProvider: {
                    map: "worldLow",
                    zoomLevel: 3.5,
                    zoomLongitude: 10,
                    zoomLatitude: 52,
                    areas: [{
                        title: "Austria",
                        id: "AT",
                        color: t.primary,
                        customData: "1 244",
                        groupId: "1"
                    }, {
                        title: "Ireland",
                        id: "IE",
                        color: t.primary,
                        customData: "1 342",
                        groupId: "1"
                    }, {
                        title: "Denmark",
                        id: "DK",
                        color: t.primary,
                        customData: "1 973",
                        groupId: "1"
                    }, {
                        title: "Finland",
                        id: "FI",
                        color: t.primary,
                        customData: "1 573",
                        groupId: "1"
                    }, {
                        title: "Sweden",
                        id: "SE",
                        color: t.primary,
                        customData: "1 084",
                        groupId: "1"
                    }, {
                        title: "Great Britain",
                        id: "GB",
                        color: t.primary,
                        customData: "1 452",
                        groupId: "1"
                    }, {
                        title: "Italy",
                        id: "IT",
                        color: t.primary,
                        customData: "1 321",
                        groupId: "1"
                    }, {
                        title: "France",
                        id: "FR",
                        color: t.primary,
                        customData: "1 112",
                        groupId: "1"
                    }, {
                        title: "Spain",
                        id: "ES",
                        color: t.primary,
                        customData: "1 865",
                        groupId: "1"
                    }, {
                        title: "Greece",
                        id: "GR",
                        color: t.primary,
                        customData: "1 453",
                        groupId: "1"
                    }, {
                        title: "Germany",
                        id: "DE",
                        color: t.primary,
                        customData: "1 957",
                        groupId: "1"
                    }, {
                        title: "Belgium",
                        id: "BE",
                        color: t.primary,
                        customData: "1 011",
                        groupId: "1"
                    }, {
                        title: "Luxembourg",
                        id: "LU",
                        color: t.primary,
                        customData: "1 011",
                        groupId: "1"
                    }, {
                        title: "Netherlands",
                        id: "NL",
                        color: t.primary,
                        customData: "1 213",
                        groupId: "1"
                    }, {
                        title: "Portugal",
                        id: "PT",
                        color: t.primary,
                        customData: "1 291",
                        groupId: "1"
                    }, {
                        title: "Lithuania",
                        id: "LT",
                        color: t.successLight,
                        customData: "567",
                        groupId: "2"
                    }, {
                        title: "Latvia",
                        id: "LV",
                        color: t.successLight,
                        customData: "589",
                        groupId: "2"
                    }, {
                        title: "Czech Republic ",
                        id: "CZ",
                        color: t.successLight,
                        customData: "785",
                        groupId: "2"
                    }, {
                        title: "Slovakia",
                        id: "SK",
                        color: t.successLight,
                        customData: "965",
                        groupId: "2"
                    }, {
                        title: "Estonia",
                        id: "EE",
                        color: t.successLight,
                        customData: "685",
                        groupId: "2"
                    }, {
                        title: "Hungary",
                        id: "HU",
                        color: t.successLight,
                        customData: "854",
                        groupId: "2"
                    }, {
                        title: "Cyprus",
                        id: "CY",
                        color: t.successLight,
                        customData: "754",
                        groupId: "2"
                    }, {
                        title: "Malta",
                        id: "MT",
                        color: t.successLight,
                        customData: "867",
                        groupId: "2"
                    }, {
                        title: "Poland",
                        id: "PL",
                        color: t.successLight,
                        customData: "759",
                        groupId: "2"
                    }, {
                        title: "Romania",
                        id: "RO",
                        color: t.success,
                        customData: "302",
                        groupId: "3"
                    }, {
                        title: "Bulgaria",
                        id: "BG",
                        color: t.success,
                        customData: "102",
                        groupId: "3"
                    }, {
                        title: "Slovenia",
                        id: "SI",
                        color: t.danger,
                        customData: "23",
                        groupId: "4"
                    }, {
                        title: "Croatia",
                        id: "HR",
                        color: t.danger,
                        customData: "96",
                        groupId: "4"
                    }]
                },
                areasSettings: {
                    rollOverOutlineColor: t.border,
                    rollOverColor: t.primaryDark,
                    alpha: .8,
                    unlistedAreasAlpha: .2,
                    unlistedAreasColor: t.defaultText,
                    balloonText: "[[title]]: [[customData]] users"
                },
                legend: {
                    width: "100%",
                    marginRight: 27,
                    marginLeft: 27,
                    equalWidths: !1,
                    backgroundAlpha: .3,
                    backgroundColor: t.border,
                    borderColor: t.border,
                    borderAlpha: 1,
                    top: 362,
                    left: 0,
                    horizontalGap: 10,
                    data: [{
                        title: "over 1 000 users",
                        color: t.primary
                    }, {
                        title: "500 - 1 000 users",
                        color: t.successLight
                    }, {
                        title: "100 - 500 users",
                        color: t.success
                    }, {
                        title: "0 - 100 users",
                        color: t.danger
                    }]
                },
                export: {
                    enabled: !0
                },
                creditsPosition: "bottom-right",
                pathToImages: a.images.amChart
            })
        }
        e.$inject = ["baConfig", "layoutPaths"], angular.module("BlurAdmin.pages.dashboard").controller("DashboardMapCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                controller: "DashboardPieChartCtrl",
                templateUrl: "app/pages/dashboard/dashboardPieChart/dashboardPieChart.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("dashboardPieChart", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t, i) {
            function s(e, a) {
                return Math.random() * (a - e) + e
            }

            function l() {
                $(".chart").each(function() {
                    var e = $(this);
                    e.easyPieChart({
                        easing: "easeOutBounce",
                        onStep: function(e, a, t) {
                            $(this.el).find(".percent").text(Math.round(t))
                        },
                        barColor: e.attr("rel"),
                        trackColor: "rgba(0,0,0,0)",
                        size: 84,
                        scaleLength: 0,
                        animation: 2e3,
                        lineWidth: 9,
                        lineCap: "round"
                    })
                }), $(".refresh-data").on("click", function() {
                    o()
                })
            }

            function o() {
                $(".pie-charts .chart").each(function(e, a) {
                    $(a).data("easyPieChart").update(s(55, 90))
                })
            }
            var n = i.hexToRGB(t.colors.defaultText, .2);


            e.charts = [{
                    color: n,
                    description: words["Forms (to date)"][lang],
                    stats: "1378",
                    icon: "person"
                }, {
                    color: n,
                    description: words["Number of projects"][lang],
                    stats: "37",
                    icon: "money"
                }, {
                    color: n,
                    description: words["Partners"][lang],
                    stats: "22",
                    icon: "face"
                }, {
                    color: n,
                    description: "Budget",
                    stats: "$ 832,500",
                    icon: "refresh"
                }, {
                    color: n,
                    description: words["Forms (to date)"][lang],
                    stats: "1378",
                    icon: "person"
                } , {


                    color: n,
                    description: words["Number of projects"][lang],
                    stats: "37",
                    icon: "money"



                } , {


                    color: n,
                    description: words["Partners"][lang],
                    stats: "22",
                    icon: "face" 
                }, {


                     color: n,
                    description: "Budget",
                    stats: "$ 832,500",
                    icon: "refresh"

                     }],



                a(function() {
                    l(), o()
                }, 1e3)
        }
        e.$inject = ["$scope", "$timeout", "baConfig", "baUtil"], angular.module("BlurAdmin.pages.dashboard").controller("DashboardPieChartCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "EA",
                controller: "DashboardTodoCtrl",
                templateUrl: "app/pages/dashboard/dashboardTodo/dashboardTodo.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("dashboardTodo", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            function t() {
                var e = Math.floor(Math.random() * (s.length - 1));
                return s[e]
            }
            e.transparent = a.theme.blur;
            var i = a.colors.dashboard,
                s = [];
            for (var l in i) s.push(i[l]);
            e.todoList = [{
                text: "Check me out"
            }, {
                text: "Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro"
            }, {
                text: "Ex has semper alterum, expetenda dignissim"
            }, {
                text: "Vim an eius ocurreret abhorreant, id nam aeque persius ornatus."
            }, {
                text: "Simul erroribus ad usu"
            }, {
                text: "Ei cum solet appareat, ex est graeci mediocritatem"
            }, {
                text: "Get in touch with akveo team"
            }, {
                text: "Write email to business cat"
            }, {
                text: "Have fun with blur admin"
            }, {
                text: "What do you think?"
            }], e.todoList.forEach(function(e) {
                e.color = t()
            }), e.newTodoText = "", e.addToDoItem = function(a, i) {
                (i || 13 === a.which) && (e.todoList.unshift({
                    text: e.newTodoText,
                    color: t()
                }), e.newTodoText = "")
            }
        }
        e.$inject = ["$scope", "baConfig"], angular.module("BlurAdmin.pages.dashboard").controller("DashboardTodoCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {}
        angular.module("BlurAdmin.pages.dashboard").service("dashboardPieChart", e)
    }(),
   
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                controller: "TrafficChartCtrl",
                templateUrl: "app/pages/dashboard/trafficChart/trafficChart.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("trafficChart", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t) {
            e.transparent = a.theme.blur;
            var i = a.colors.dashboard;
            e.doughnutData = {
                labels: [words["Other"][lang], words["Projects"][lang], words["Infrastructure"][lang], words["Roads"][lang], words["Salaries"][lang]],
                datasets: [{
                    data: [2e3, 1500, 1e3, 1200, 400],
                    backgroundColor: [i.white, i.blueStone, i.surfieGreen, i.silverTree, i.gossip],
                    hoverBackgroundColor: [t.shade(i.white, 15), t.shade(i.blueStone, 15), t.shade(i.surfieGreen, 15), t.shade(i.silverTree, 15), t.shade(i.gossip, 15)],
                    percentage: [10, 20, 35, 25, 10]
                }]
            };
            var s = document.getElementById("chart-area").getContext("2d");
            window.myDoughnut = new Chart(s, {
                type: "doughnut",
                data: e.doughnutData,
                options: {
                    cutoutPercentage: 64,
                    responsive: !0,
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    }
                }
            })
        }
        e.$inject = ["$scope", "baConfig", "colorHelper"], angular.module("BlurAdmin.pages.dashboard").controller("TrafficChartCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "EA",
                controller: "WeatherCtrl",
                templateUrl: "app/pages/dashboard/weather/weather.html"
            }
        }
        angular.module("BlurAdmin.pages.dashboard").directive("weather", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t, i) {
            function s() {
                a.jsonp("http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK").then(function(a) {
                    e.geoData = a.data, e.updateWeather()
                }, function() {
                    console.log("GEO FAILED")
                })
            }

            function l(e) {
                AmCharts.makeChart("tempChart", {
                    type: "serial",
                    theme: "blur",
                    handDrawn: !0,
                    categoryField: "time",
                    dataProvider: e,
                    valueAxes: [{
                        axisAlpha: .3,
                        gridAlpha: 0
                    }],
                    graphs: [{
                        bullet: "square",
                        fillAlphas: .3,
                        fillColorsField: "lineColor",
                        legendValueText: "[[value]]",
                        lineColorField: "lineColor",
                        title: "Temp",
                        valueField: "temp"
                    }],
                    categoryAxis: {
                        gridAlpha: 0,
                        axisAlpha: .3
                    }
                }).write("tempChart")
            }

            function o(a) {
                var t = a.list[0],
                    s = {
                        days: [{
                            date: new Date,
                            timeTemp: [],
                            main: t.weather[0].main,
                            description: t.weather[0].description,
                            icon: t.weather[0].icon,
                            temp: t.main.temp
                        }],
                        current: 0
                    };
                a.list.forEach(function(e, t) {
                    var i = new Date(e.dt_txt);
                    i.getDate() !== s.days[s.days.length - 1].date.getDate() && s.days.push({
                        date: i,
                        timeTemp: []
                    });
                    var l = s.days[s.days.length - 1];
                    l.timeTemp.push({
                        time: i.getHours(),
                        temp: e.main.temp
                    }), (s.days.length > 1 && i.getHours() == c || t == a.list.length - 1) && (l.main = e.weather[0].main, l.description = e.weather[0].description, l.icon = e.weather[0].icon, l.temp = e.main.temp, l.date.setHours(t == a.list.length - 1 ? 0 : c), l.date.setMinutes(0))
                }), console.log(s.days[s.current].date), s.days = s.days.slice(0, i.attr("forecast") || 5), e.weather = s
            }
            var n = "http://api.openweathermap.org/data/2.5/forecast",
                r = "GET",
                d = "2de143494c0b295cca9337e1e96b00e0",
                c = 15;
            e.units = "metric", e.weatherIcons = {
                "01d": "ion-ios-sunny-outline",
                "02d": "ion-ios-partlysunny-outline",
                "03d": "ion-ios-cloud-outline",
                "04d": "ion-ios-cloud",
                "09d": "ion-ios-rainy",
                "10d": "ion-ios-rainy-outline",
                "11d": "ion-ios-thunderstorm-outline",
                "13d": "ion-ios-snowy",
                "50d": "ion-ios-cloudy-outline",
                "01n": "ion-ios-cloudy-night-outline",
                "02n": "ion-ios-cloudy-night",
                "03n": "ion-ios-cloud-outline",
                "04n": "ion-ios-cloud",
                "09n": "ion-ios-rainy",
                "10n": "ion-ios-rainy-outline",
                "11n": "ion-ios-thunderstorm",
                "13n": "ion-ios-snowy",
                "50n": "ion-ios-cloudy-outline"
            }, e.weather = {}, e.switchUnits = function(a) {
                e.units = a, e.updateWeather()
            }, e.switchDay = function(a) {
                e.weather.current = a, l(e.weather.days[e.weather.current].timeTemp)
            }, e.updateWeather = function() {
                a({
                    method: r,
                    url: n,
                    params: {
                        appid: d,
                        lat: e.geoData.geoplugin_latitude,
                        lon: e.geoData.geoplugin_longitude,
                        units: e.units
                    }
                }).then(function(a) {
                    o(a.data), l(e.weather.days[e.weather.current].timeTemp)
                }, function() {
                    console.log("WEATHER FAILED")
                })
            }, s()
        }
        e.$inject = ["$scope", "$http", "$timeout", "$element"], angular.module("BlurAdmin.pages.dashboard").controller("WeatherCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var a = this;
            a.personalInfo = {}, a.productInfo = {}, a.shipment = {}, a.arePersonalInfoPasswordsEqual = function() {
                return a.personalInfo.confirmPassword && a.personalInfo.password == a.personalInfo.confirmPassword
            }
        }
        e.$inject = ["$scope"], angular.module("BlurAdmin.pages.form").controller("WizardCtrl", e)
    }(),
    
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                templateUrl: "app/theme/components/backTop/backTop.html",
                controller: function() {
                    $("#backTop").backTop({
                        position: 200,
                        speed: 100
                    })
                }
            }
        }
        angular.module("BlurAdmin.theme.components").directive("backTop", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            return angular.extend({}, e, {
                template: function(t, i) {
                    var s = '<div  class="panel ' + (a.theme.blur ? "panel-blur" : "") + " full-invisible " + (i.baPanelClass || "");
                    return s += '" zoom-in ' + (a.theme.blur ? "ba-panel-blur" : "") + ">", s += e.template(t, i), s += "</div>"
                }
            })
        }
        e.$inject = ["baPanel", "baConfig"], angular.module("BlurAdmin.theme").directive("baPanel", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                transclude: !0,
                template: function(e, a) {
                    var t = '<div class="panel-body" ng-transclude></div>';
                    if (a.baPanelTitle) {
                        var i = '<div class="panel-heading clearfix"><h3 class="panel-title">' + a.baPanelTitle + "</h3></div>";
                        t = i + t
                    }
                    return t
                }
            }
        }
        angular.module("BlurAdmin.theme").factory("baPanel", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t) {
            var i;
            return e.bodyBgLoad().then(function() {
                i = e.getBodyBgImageSizes()
            }), a.addEventListener("resize", function() {
                i = e.getBodyBgImageSizes()
            }), {
                restrict: "A",
                link: function(s, l) {
                    function o() {
                        i && l.css({
                            backgroundSize: Math.round(i.width) + "px " + Math.round(i.height) + "px",
                            backgroundPosition: Math.floor(i.positionX) + "px " + Math.floor(i.positionY) + "px"
                        })
                    }
                    t.$isMobile || (e.bodyBgLoad().then(function() {
                        setTimeout(o)
                    }), a.addEventListener("resize", o), s.$on("$destroy", function() {
                        a.removeEventListener("resize", o)
                    }))
                }
            }
        }
        e.$inject = ["baPanelBlurHelper", "$window", "$rootScope"], angular.module("BlurAdmin.theme").directive("baPanelBlur", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            var a = e.defer(),
                t = getComputedStyle(document.body, ":before"),
                i = new Image;
            i.src = t.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2"), i.onerror = function() {
                a.reject()
            }, i.onload = function() {
                a.resolve()
            }, this.bodyBgLoad = function() {
                return a.promise
            }, this.getBodyBgImageSizes = function() {
                var e = document.documentElement.clientWidth,
                    a = document.documentElement.clientHeight;
                if (!(e <= 640)) {
                    var t, s, l = i.height / i.width,
                        o = a / e;
                    return o > l ? (t = a, s = a / l) : (s = e, t = e * l), {
                        width: s,
                        height: t,
                        positionX: (e - s) / 2,
                        positionY: (a - t) / 2
                    }
                }
            }
        }
        e.$inject = ["$q"], angular.module("BlurAdmin.theme").service("baPanelBlurHelper", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return angular.extend({}, e, {
                link: function(e, a, t) {
                    a.addClass("panel panel-white"), t.baPanelClass && a.addClass(t.baPanelClass)
                }
            })
        }
        e.$inject = ["baPanel"], angular.module("BlurAdmin.theme").directive("baPanelSelf", e)
    }(),
    function() {
        "use strict";

        function e(e, a, t, i) {
            var s = $(window);
            return {
                restrict: "E",
                templateUrl: "app/theme/components/baSidebar/ba-sidebar.html",
                controller: "BaSidebarCtrl",
                link: function(i, l) {
                    function o(i) {
                        t.isDescendant(l[0], i.target) || i.originalEvent.$sidebarEventProcessed || a.isMenuCollapsed() || !a.canSidebarBeHidden() || (i.originalEvent.$sidebarEventProcessed = !0, e(function() {
                            a.setMenuCollapsed(!0)
                        }, 10))
                    }

                    function n() {
                        var e = a.shouldMenuBeCollapsed(),
                            t = r();
                        e == a.isMenuCollapsed() && i.menuHeight == t || i.$apply(function() {
                            i.menuHeight = t, a.setMenuCollapsed(e)
                        })
                    }

                    function r() {
                        return l[0].childNodes[0].clientHeight - 84
                    }
                    i.menuHeight = l[0].childNodes[0].clientHeight - 84, s.on("click", o), s.on("resize", n), i.$on("$destroy", function() {
                        s.off("click", o), s.off("resize", n)
                    })
                }
            }
        }
        e.$inject = ["$timeout", "baSidebarService", "baUtil", "layoutSizes"], angular.module("BlurAdmin.theme.components").directive("baSidebar", e)
    }(),
    function() {
        "use strict";

        function e() {
            var e = [];
            this.addStaticItem = function() {
                e.push.apply(e, arguments)
            }, this.$get = ["$state", "layoutSizes", function(a, t) {
                function i() {
                    function i() {
                        return a.get().filter(function(e) {
                            return e.sidebarMeta
                        }).map(function(e) {
                            var a = e.sidebarMeta;
                            return {
                                name: e.name,
                                title: e.title,
                                level: (e.name.match(/\./g) || []).length,
                                order: a.order,
                                icon: a.icon,
                                stateRef: e.name
                            }
                        }).sort(function(e, a) {
                            return 100 * (e.level - a.level) + e.order - a.order
                        })
                    }

                    function s() {
                        return window.innerWidth <= t.resWidthCollapseSidebar
                    }

                    function l() {
                        return window.innerWidth <= t.resWidthHideSidebar
                    }
                    var o = s();
                    this.getMenuItems = function() {
                        var a = i(),
                            t = a.filter(function(e) {
                                return 0 == e.level
                            });
                        return t.forEach(function(e) {
                            var t = a.filter(function(a) {
                                return 1 == a.level && 0 === a.name.indexOf(e.name)
                            });
                            e.subMenu = t.length ? t : null
                        }), t.concat(e)
                    }, this.shouldMenuBeCollapsed = s, this.canSidebarBeHidden = l, this.setMenuCollapsed = function(e) {
                        o = e
                    }, this.isMenuCollapsed = function() {
                        return o
                    }, this.toggleMenuCollapsed = function() {
                        o = !o
                    }, this.getAllStateRefsRecursive = function(e) {
                        function a(e) {
                            e.subMenu && e.subMenu.forEach(function(e) {
                                e.stateRef && t.push(e.stateRef), a(e)
                            })
                        }
                        var t = [];
                        return a(e), t
                    }
                }
                return new i
            }], this.$get.$inject = ["$state", "layoutSizes"]
        }
        angular.module("BlurAdmin.theme.components").provider("baSidebarService", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            e.menuItems = a.getMenuItems(), e.defaultSidebarState = e.menuItems[0].stateRef, e.hoverItem = function(a) {
                e.showHoverElem = !0, e.hoverElemHeight = a.currentTarget.clientHeight;
                var t = 66;
                e.hoverElemTop = a.currentTarget.getBoundingClientRect().top - t
            }, e.$on("$stateChangeSuccess", function() {
                a.canSidebarBeHidden() && a.setMenuCollapsed(!0)
            })
        }
        e.$inject = ["$scope", "baSidebarService"], angular.module("BlurAdmin.theme.components").controller("BaSidebarCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                restrict: "A",
                link: function(a, t) {
                    t.on("click", function(t) {
                        t.originalEvent.$sidebarEventProcessed = !0, a.$apply(function() {
                            e.toggleMenuCollapsed()
                        })
                    })
                }
            }
        }

        function a(e) {
            return {
                restrict: "A",
                link: function(a, t) {
                    t.on("click", function(t) {
                        t.originalEvent.$sidebarEventProcessed = !0, e.isMenuCollapsed() || a.$apply(function() {
                            e.setMenuCollapsed(!0)
                        })
                    })
                }
            }
        }

        function t() {
            return {
                restrict: "A",
                controller: "BaSidebarTogglingItemCtrl"
            }
        }

        function i(e, a, t, i, s) {
            function l(e) {
                return e && r.some(function(a) {
                    return 0 == e.name.indexOf(a)
                })
            }
            var o = this,
                n = o.$$menuItem = e.$eval(t.baSidebarTogglingItem);
            if (n && n.subMenu && n.subMenu.length) {
                o.$$expandSubmenu = function() {
                    console.warn("$$expandMenu should be overwritten by baUiSrefTogglingSubmenu")
                }, o.$$collapseSubmenu = function() {
                    console.warn("$$collapseSubmenu should be overwritten by baUiSrefTogglingSubmenu")
                };
                var r = s.getAllStateRefsRecursive(n);
                o.$expand = function() {
                    o.$$expandSubmenu(), a.addClass("ba-sidebar-item-expanded")
                }, o.$collapse = function() {
                    o.$$collapseSubmenu(), a.removeClass("ba-sidebar-item-expanded")
                }, o.$toggle = function() {
                    a.hasClass("ba-sidebar-item-expanded") ? o.$collapse() : o.$expand()
                }, l(i.current) && a.addClass("ba-sidebar-item-expanded"), e.$on("$stateChangeStart", function(e, t) {
                    !l(t) && a.hasClass("ba-sidebar-item-expanded") && (o.$collapse(), a.removeClass("ba-sidebar-item-expanded"))
                }), e.$on("$stateChangeSuccess", function(e, t) {
                    l(t) && !a.hasClass("ba-sidebar-item-expanded") && (o.$expand(), a.addClass("ba-sidebar-item-expanded"))
                })
            }
        }

        function s(e) {
            return {
                restrict: "A",
                require: "^baSidebarTogglingItem",
                link: function(e, a, t, i) {
                    i.$$expandSubmenu = function() {
                        a.slideDown()
                    }, i.$$collapseSubmenu = function() {
                        a.slideUp()
                    }
                }
            }
        }

        function l(e) {
            return {
                restrict: "A",
                require: "^baSidebarTogglingItem",
                link: function(a, t, i, s) {
                    t.on("click", function() {
                        e.isMenuCollapsed() ? (a.$apply(function() {
                            e.setMenuCollapsed(!1)
                        }), s.$expand()) : s.$toggle()
                    })
                }
            }
        }
        e.$inject = ["baSidebarService"], a.$inject = ["baSidebarService"], i.$inject = ["$scope", "$element", "$attrs", "$state", "baSidebarService"], s.$inject = ["$state"], l.$inject = ["baSidebarService"], angular.module("BlurAdmin.theme.components").directive("baSidebarToggleMenu", e).directive("baSidebarCollapseMenu", a).directive("baSidebarTogglingItem", t).controller("BaSidebarTogglingItemCtrl", i).directive("baUiSrefTogglingSubmenu", s).directive("baUiSrefToggler", l)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                transclude: !0,
                templateUrl: "app/theme/components/baWizard/baWizard.html",
                controllerAs: "$baWizardController",
                controller: "baWizardCtrl"
            }
        }
        angular.module("BlurAdmin.theme.components").directive("baWizard", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            function a() {
                t.progress = (t.tabNum + 1) / t.tabs.length * 100
            }
            var t = this;
            t.tabs = [], t.tabNum = 0, t.progress = 0, t.addTab = function(e) {
                e.setPrev(t.tabs[t.tabs.length - 1]), t.tabs.push(e), t.selectTab(0)
            }, e.$watch(angular.bind(t, function() {
                return t.tabNum
            }), a), t.selectTab = function(e) {
                t.tabs[t.tabNum].submit(), t.tabs[e].isAvailiable() && (t.tabNum = e, t.tabs.forEach(function(e, a) {
                    a == t.tabNum ? e.select(!0) : e.select(!1)
                }))
            }, t.isFirstTab = function() {
                return 0 == t.tabNum
            }, t.isLastTab = function() {
                return t.tabNum == t.tabs.length - 1
            }, t.nextTab = function() {
                t.selectTab(t.tabNum + 1)
            }, t.previousTab = function() {
                t.selectTab(t.tabNum - 1)
            }
        }
        e.$inject = ["$scope"], angular.module("BlurAdmin.theme.components").controller("baWizardCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                transclude: !0,
                require: "^baWizard",
                scope: {
                    form: "="
                },
                templateUrl: "app/theme/components/baWizard/baWizardStep.html",
                link: function(e, a, t, i) {
                    function s(a) {
                        a ? e.selected = !0 : e.selected = !1
                    }

                    function l() {
                        e.form && e.form.$setSubmitted(!0)
                    }

                    function o() {
                        return !e.form || e.form.$valid
                    }

                    function n() {
                        return !d.prevTab || d.prevTab.isComplete()
                    }

                    function r(e) {
                        d.prevTab = e
                    }
                    e.selected = !0;
                    var d = {
                        title: t.title,
                        select: s,
                        submit: l,
                        isComplete: o,
                        isAvailiable: n,
                        prevTab: void 0,
                        setPrev: r
                    };
                    i.addTab(d)
                }
            }
        }
        angular.module("BlurAdmin.theme.components").directive("baWizardStep", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            return {
                restrict: "E",
                templateUrl: "app/theme/components/contentTop/contentTop.html",
                link: function(e) {
                    e.$watch(function() {
                        e.activePageTitle = a.current.title
                    })
                }
            }
        }
        e.$inject = ["$location", "$state"], angular.module("BlurAdmin.theme.components").directive("contentTop", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                templateUrl: "app/theme/components/msgCenter/msgCenter.html",
                controller: "MsgCenterCtrl"
            }
        }
        angular.module("BlurAdmin.theme.components").directive("msgCenter", e)
    }(),
    function() {
        "use strict";

        function e(e, a) {
            e.users = {
                0: {
                    name: "Vlad"
                },
                1: {
                    name: "Kostya"
                },
                2: {
                    name: "Andrey"
                },
                3: {
                    name: "Nasta"
                }
            }, e.notifications = [{
                userId: 0,
                template: "&name posted a new article.",
                time: "1 " + words["min"][lang] + " " + words["ago"][lang]
            }, {
                userId: 1,
                template: "&name changed his contact information.",
                time: "2 " + words["hrs"][lang] + " " + words["ago"][lang]
            }, {
                image: "assets/img/shopping-cart.svg",
                template: "New orders received.",
                time: "5 " + words["hrs"][lang] + " " + words["ago"][lang]
            }, {
                userId: 2,
                template: "&name replied to your comment.",
                time: "1 " + words["day"][lang] + " " + words["ago"][lang]
            }, {
                userId: 3,
                template: "Today is &name's birthday.",
                time: "2 " + words["days"][lang] + " " + words["ago"][lang]
            }, {
                image: "assets/img/comments.svg",
                template: "New comments on your post.",
                time: "3 " + words["days"][lang] + " " + words["ago"][lang]
            }, {
                userId: 1,
                template: "&name invited you to join the event.",
                time: "1 " + words["week"][lang] + " " + words["ago"][lang]
            }], e.messages = [{
                userId: 3,
                text: "After you get up and running, you can place Font Awesome icons just about...",
                time: "1 " + words["min"][lang] + " " + words["ago"][lang]
            }, {
                userId: 0,
                text: "You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.",
                time: "2 " + words["hrs"][lang] + " " + words["ago"][lang]
            }, {
                userId: 1,
                text: "Want to request new icons? Here's how. Need vectors or want to use on the...",
                time: "10 " + words["hrs"][lang] + " " + words["ago"][lang]
            }, {
                userId: 2,
                text: "Explore your passions and discover new ones by getting involved. Stretch your...",
                time: "1 " + words["day"][lang] + " " + words["ago"][lang]
            }, {
                userId: 3,
                text: "Get to know who we are - from the inside out. From our history and culture, to the...",
                time: "1 " + words["day"][lang] + " " + words["ago"][lang]
            }, {
                userId: 1,
                text: "Need some support to reach your goals? Apply for scholarships across a variety of...",
                time: "2 " + words["days"][lang] + " " + words["ago"][lang]
            }, {
                userId: 0,
                text: "Wrap the dropdown's trigger and the dropdown menu within .dropdown, or...",
                time: "1 " + words["week"][lang] + " " + words["ago"][lang]
            }], e.getMessage = function(t) {
                var i = t.template;
                return (t.userId || 0 === t.userId) && (i = i.replace("&name", "<strong>" + e.users[t.userId].name + "</strong>")), a.trustAsHtml(i)
            }
        }
        e.$inject = ["$scope", "$sce"], angular.module("BlurAdmin.theme.components").controller("MsgCenterCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                templateUrl: "app/theme/components/pageTop/pageTop.html"
            }
        }
        angular.module("BlurAdmin.theme.components").directive("pageTop", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                restrict: "E",
                templateUrl: "app/theme/components/progressBarRound/progressBarRound.html",
                link: function(a, t, i) {
                    function s() {
                        var i = t.find("#loader")[0];
                        i.setAttribute("stroke-dasharray", 180 * e.getProgress() * Math.PI / 100 + ", 20000"), a.progress = e.getProgress()
                    }
                    a.baProgressDialog = e, a.$watch(function() {
                        return e.getProgress()
                    }, s)
                }
            }
        }
        e.$inject = ["baProgressModal"], angular.module("BlurAdmin.theme.components").directive("progressBarRound", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "EA",
                scope: {
                    ngModel: "="
                },
                templateUrl: "app/theme/components/widgets/widgets.html",
                replace: !0
            }
        }
        angular.module("BlurAdmin.theme.components").directive("widgets", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return function(a) {
                return e.images.root + a
            }
        }
        e.$inject = ["layoutPaths"], angular.module("BlurAdmin.theme").filter("appImage", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return function(a) {
                return e.images.root + "theme/icon/kameleon/" + a + ".svg"
            }
        }
        e.$inject = ["layoutPaths"], angular.module("BlurAdmin.theme").filter("kameleonImg", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return function(a, t) {
                return t = t || "png", e.images.profile + a + "." + t
            }
        }
        e.$inject = ["layoutPaths"], angular.module("BlurAdmin.theme").filter("profilePicture", e)
    }(),
    function() {
        "use strict";

        function e() {
            return function(e) {
                return e ? String(e).replace(/<[^>]+>/gm, "") : ""
            }
        }
        angular.module("BlurAdmin.theme").filter("plainText", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                templateUrl: "app/theme/inputs/baSwitcher/baSwitcher.html",
                scope: {
                    switcherStyle: "@",
                    switcherValue: "="
                }
            }
        }
        angular.module("BlurAdmin.theme.inputs").directive("baSwitcher", e)
    }(),
    
    ! function(e) {
        e.fn.backTop = function(a) {
            var t = this,
                i = e.extend({
                    position: 400,
                    speed: 500,
                    color: "white"
                }, a),
                s = i.position,
                l = i.speed,
                o = i.color;
            t.addClass("white" == o ? "white" : "red" == o ? "red" : "green" == o ? "green" : "black"), t.css({
                right: 40,
                bottom: 40,
                position: "fixed"
            }), e(document).scroll(function() {
                var a = e(window).scrollTop();
                a >= s ? t.fadeIn(l) : t.fadeOut(l)
            }), t.click(function() {
                e("html, body").animate({
                    scrollTop: 0
                }, {
                    duration: 1200
                })
            })
        }
    }(jQuery),
    function() {
        "use strict";

        function e(e) {
            e.dt = new Date, e.options = {
                showWeeks: !1
            }
        }
        e.$inject = ["$scope"], angular.module("BlurAdmin.pages.form").controller("datepickerCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            function a() {
                e.opened = !0
            }
            e.open = a, e.opened = !1, e.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], e.format = e.formats[0], e.options = {
                showWeeks: !1
            }
        }
        e.$inject = ["$scope"], angular.module("BlurAdmin.pages.form").controller("datepickerpopupCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            var e = this;
            e.standardSelectItems = [{
                label: "Option 1",
                value: 1
            }, {
                label: "Option 2",
                value: 2
            }, {
                label: "Option 3",
                value: 3
            }, {
                label: "Option 4",
                value: 4
            }], e.selectWithSearchItems = [{
                label: "Hot Dog, Fries and a Soda",
                value: 1
            }, {
                label: "Burger, Shake and a Smile",
                value: 2
            }, {
                label: "Sugar, Spice and all things nice",
                value: 3
            }, {
                label: "Baby Back Ribs",
                value: 4
            }], e.groupedSelectItems = [{
                label: "Group 1 - Option 1",
                value: 1,
                group: "Group 1"
            }, {
                label: "Group 2 - Option 2",
                value: 2,
                group: "Group 2"
            }, {
                label: "Group 1 - Option 3",
                value: 3,
                group: "Group 1"
            }, {
                label: "Group 2 - Option 4",
                value: 4,
                group: "Group 2"
            }]
        }
        angular.module("BlurAdmin.pages.form").controller("OldSelectpickerPanelCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                require: "?ngOptions",
                priority: 1500,
                link: {
                    pre: function(e, a, t) {
                        a.append('<option data-hidden="true" disabled value="">' + (t.title || "Select something") + "</option>")
                    },
                    post: function(e, a, t) {
                        function i() {
                            a.selectpicker("refresh")
                        }
                        t.ngModel && e.$watch(t.ngModel, i), t.ngDisabled && e.$watch(t.ngDisabled, i), a.selectpicker({
                            dropupAuto: !1,
                            hideDisabled: !0
                        })
                    }
                }
            }
        }
        angular.module("BlurAdmin.pages.form").directive("selectpicker", e)
    }(),
    function() {
        "use strict";

        function e() {
            var e = this;
            e.switcherValues = {
                primary: !0,
                warning: !0,
                danger: !0,
                info: !0,
                success: !0
            }
        }
        angular.module("BlurAdmin.pages.form").controller("OldSwitchPanelCtrl", e)
    }(),
    function() {
        "use strict";

        function e(e) {
            return {
                restrict: "EA",
                replace: !0,
                scope: {
                    ngModel: "="
                },
                template: function(e, a) {
                    return '<div class="switch-container ' + (a.color || "") + '"><input type="checkbox" ng-model="ngModel"></div>'
                },
                link: function(e, a, t) {
                    var i = $(a).find("input");
                    i.bootstrapSwitch({
                        size: "small",
                        onColor: t.color
                    }), i.on("switchChange.bootstrapSwitch", function(a, t) {
                        e.ngModel = t, e.$apply()
                    })
                }
            }
        }
        e.$inject = ["$timeout"], angular.module("BlurAdmin.pages.form").directive("switch", e)
    }(),
    function() {
        "use strict";

        function e() {
            return function(e, a) {
                var t = [];
                if (angular.isArray(e)) {
                    var i = Object.keys(a);
                    e.forEach(function(e) {
                        for (var s = !1, l = 0; l < i.length; l++) {
                            var o = i[l],
                                n = a[o].toLowerCase();
                            if (e[o].toString().toLowerCase().indexOf(n) !== -1) {
                                s = !0;
                                break
                            }
                        }
                        s && t.push(e)
                    })
                } else t = e;
                return t
            }
        }
        angular.module("BlurAdmin.pages.form").filter("groupSelectpickerOptions", e)
    }(),
    function() {
        "use strict";

        function e() {
            var e = this;
            e.disabled = void 0, e.standardItem = {}, e.standardSelectItems = [{
                label: "Option 1",
                value: 1
            }, {
                label: "Option 2",
                value: 2
            }, {
                label: "Option 3",
                value: 3
            }, {
                label: "Option 4",
                value: 4
            }], e.withSearchItem = {}, e.selectWithSearchItems = [{
                label: "Hot Dog, Fries and a Soda",
                value: 1
            }, {
                label: "Burger, Shake and a Smile",
                value: 2
            }, {
                label: "Sugar, Spice and all things nice",
                value: 3
            }, {
                label: "Baby Back Ribs",
                value: 4
            }], e.groupedItem = {}, e.groupedSelectItems = [{
                label: "Group 1 - Option 1",
                value: 1,
                group: "Group 1"
            }, {
                label: "Group 2 - Option 2",
                value: 2,
                group: "Group 2"
            }, {
                label: "Group 1 - Option 3",
                value: 3,
                group: "Group 1"
            }, {
                label: "Group 2 - Option 4",
                value: 4,
                group: "Group 2"
            }], e.groupedByItem = {}, e.groupedBySelectItems = [{
                name: "Adam",
                country: "United States"
            }, {
                name: "Amalie",
                country: "Argentina"
            }, {
                name: "Estefanía",
                country: "Argentina"
            }, {
                name: "Adrian",
                country: "Ecuador"
            }, {
                name: "Wladimir",
                country: "Ecuador"
            }, {
                name: "Samantha",
                country: "United States"
            }, {
                name: "Nicole",
                country: "Colombia"
            }, {
                name: "Natasha",
                country: "Ecuador"
            }, {
                name: "Michael",
                country: "Colombia"
            }, {
                name: "Nicolás",
                country: "Colombia"
            }], e.someGroupFn = function(e) {
                return e.name[0] >= "A" && e.name[0] <= "M" ? "From A - M" : e.name[0] >= "N" && e.name[0] <= "Z" ? "From N - Z" : void 0
            }, e.disableItem = {}, e.disableItems = [], e.multipleItem = {}, e.multipleSelectItems = [{
                label: "Option 1",
                value: 1
            }, {
                label: "Option 2",
                value: 2
            }, {
                label: "Option 3",
                value: 3
            }, {
                label: "Option 4",
                value: 4
            }, {
                label: "Option 5",
                value: 5
            }, {
                label: "Option 6",
                value: 6
            }, {
                label: "Option 7",
                value: 7
            }, {
                label: "Option 8",
                value: 8
            }], e.withDeleteItem = {}, e.withDeleteSelectItems = [{
                label: "Option 1",
                value: 1
            }, {
                label: "Option 2",
                value: 2
            }, {
                label: "Option 3",
                value: 3
            }, {
                label: "Option 4",
                value: 4
            }, {
                label: "Option 5",
                value: 5
            }, {
                label: "Option 6",
                value: 6
            }, {
                label: "Option 7",
                value: 7
            }, {
                label: "Option 8",
                value: 8
            }]
        }
        angular.module("BlurAdmin.pages.form").controller("SelectpickerPanelCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            var e = this;
            e.switches = {
                s1: !0,
                s2: !1,
                s3: !0,
                s4: !0,
                s5: !1
            }
        }
        angular.module("BlurAdmin.pages.form").controller("SwitchDemoPanelCtrl", e)
    }(),
    function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                link: function(e, a, t) {
                    $(a).tagsinput({
                        tagClass: "label label-" + t.tagInput
                    })
                }
            }
        }
        angular.module("BlurAdmin.pages.form").directive("tagInput", e)
    }(), angular.module("BlurAdmin").run(["$templateCache", function(e) {



        e.put("app/pages/dashboard/dashboard.html", '<dashboard-pie-chart></dashboard-pie-chart><div class="row"><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="' + words["MUNICIPAL BUDGET"][lang] + '" ba-panel-class="medium-panel traffic-panel"><traffic-chart></traffic-chart></div><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="' + words["TO DO LIST TASKS"][lang] + '" ba-panel-class="medium-panel feed-comply-panel with-scroll todo-panel"><dashboard-todo></dashboard-todo></div></div><div class="row"><div class="col-xlg-9 col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class="row"><div class="col-xlg-8 col-lg-12 col-md-12 col-sm-7 col-xs-12" ba-panel="" ba-panel-title="' + words["REVENUE"][lang] + '" ba-panel-class="medium-panel"><dashboard-line-chart></dashboard-line-chart></div><div class="col-xlg-4 col-lg-12 col-md-12 col-sm-5 col-xs-12" ba-panel="" ba-panel-title="' + words["MY FORMS"][lang] + '" ba-panel-class="medium-panel feed-comply-panel with-scroll todo-panel"><dashboard-todo></dashboard-todo></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-12 col-xs-12" ba-panel="" ba-panel-title="' + words["MY TEMPLATES"][lang] +'" ba-panel-class="medium-panel feed-comply-panel with-scroll todo-panel"><dashboard-todo></dashboard-todo></div></div><div class="row"><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="' + words["CALENDER"][lang] + '" ba-panel-class="xmedium-panel feed-comply-panel with-scroll calendar-panel"><dashboard-calendar></dashboard-calendar></div><div class="col-lg-6 col-md-12 col-sm-12" ba-panel="" ba-panel-title="' + words["FEED"][lang] + '" ba-panel-class="large-panel with-scroll feed-panel"><blur-feed></blur-feed></div></div>'),



           // e.put("app/pages/maps/maps.html", '<div class="widgets"><div class="row"><div class="col-md-12" ui-view="" autoscroll="true" autoscroll-body-top=""></div></div></div>'),
           
            e.put("app/pages/form/fileupload/fileupload.html", '<div style="height:1200px; width:80%;"><iframe scrolling="No" height="100%" width="80%" id="myFrame1" src="fileupload/index.html"></iframe></div>'),
            e.put("app/pages/form/test/View.php", '<div style="height:1200px; width:80%"><iframe scrolling="No" height="100%" width="80%" id="myFrame1" src="fileupload/View.php"></iframe></div>'),

            e.put("app/pages/form/test/test.html", '<div style="height:1200px; width:80%"><iframe scrolling="No" height="100%" width="80%" id="myFrame1" src="fileupload/view_from.html"></iframe></div>'),
            //e.put("app/pages/form/test/test.html", '<style> #contant_form * {background: transparent !important; color:#fff !important;}</style><div class="widgets"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Form Collection" ba-panel-class="with-scroll" style="width: 1300px;"><form id="from_table"><div id="contant_form">' + Formdata_contant + '</div><button type="submit" title="Save" class="btn btn-danger" onclick="save_data_post()">Save</button></form></div></div></div>'),
            e.put("app/pages/profile/profile.html", '<div ba-panel="" ba-panel-class="profile-page"><div class="panel-content"><div class="progress-info">' + words["Your profile is 70% Complete"][lang] + '</div><div class="progress"><div class="progress-bar progress-bar-primary progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%"></div></div><h3 class="with-line">' + words["General Information"][lang] + '</h3><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputFirstName" class="col-sm-3 control-label">' + words["Picture"][lang] + '</label><div class="col-sm-9"><div class="userpic"><div class="userpic-wrapper"><img ng-src="{{ picture }}" ng-click="uploadPicture()"></div><i class="ion-ios-close-outline" ng-click="removePicture()" ng-if="!noPicture"></i> <a href="" class="change-userpic" ng-click="uploadPicture()">Change Profile Picture</a> <input type="file" ng-show="false" id="uploadFile" ng-file-select="onFileSelect($files)"></div></div></div></div><div class="col-md-6"></div></div><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputFirstName" class="col-sm-3 control-label">' + words["First Name"][lang] + '</label><div class="col-sm-9"><input type="text" class="form-control" id="inputFirstName" placeholder="" value="Anastasiya"></div></div><div class="form-group row clearfix"><label for="inputLastName" class="col-sm-3 control-label">' + words["Last Name"][lang] + '</label><div class="col-sm-9"><input type="text" class="form-control" id="inputLastName" placeholder="" value=""></div></div></div><div class="col-md-6"><div class="form-group row clearfix"><label class="col-sm-3 control-label">' + words["Department"][lang] + '</label><div class="col-sm-9"><select class="form-control" selectpicker=""><option>' + words["Web Development"][lang] + '</option><option>' + words["System Development"][lang] + '</option><option>' + words["Sales"][lang] + '</option><option>' + words["Human Resources"][lang] + '</option></select></div></div><div class="form-group row clearfix"><label for="inputOccupation" class="col-sm-3 control-label">' + words["Occupation"][lang] + '</label><div class="col-sm-9"><input type="text" class="form-control" id="inputOccupation" placeholder="" value="' + words["Front End Web Developer"][lang] + '"></div></div></div></div><h3 class="with-line">' + words["Change Password"][lang] + '</h3><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputPassword" class="col-sm-3 control-label">' + words["Password"][lang] + '</label><div class="col-sm-9"><input type="password" class="form-control" id="inputPassword" placeholder="" value="12345678"></div></div></div><div class="col-md-6"><div class="form-group row clearfix"><label for="inputConfirmPassword" class="col-sm-3 control-label">' + words["Confirm Password"][lang] + '</label><div class="col-sm-9"><input type="password" class="form-control" id="inputConfirmPassword" placeholder=""></div></div></div></div><h3 class="with-line">' + words["Contact Information"][lang] + '</h3><div class="row"><div class="col-md-6"><div class="form-group row clearfix"><label for="inputEmail3" class="col-sm-3 control-label">' + words['Email'][lang] + '</label><div class="col-sm-9"><input type="email" class="form-control" id="inputEmail3" placeholder="" value="contact@akveo.com"></div></div><div class="form-group row clearfix"><label for="inputPhone" class="col-sm-3 control-label">' + words['Phone'][lang] + '</label><div class="col-sm-9"><input type="text" class="form-control" id="inputPhone" placeholder="" value="+1 (23) 456 7890"></div></div></div><div class="col-md-6"><div class="form-group row clearfix"><label class="col-sm-3 control-label">' + words['Office Location'][lang] + '</label><div class="col-sm-9"><select class="form-control" title="Standard Select" selectpicker=""><option>San Francisco</option><option>London</option><option>Minsk</option><option>Tokio</option></select></div></div><div class="form-group row clearfix"><label for="inputRoom" class="col-sm-3 control-label">' + words['Room'][lang] + '</label><div class="col-sm-9"><input type="text" class="form-control" id="inputRoom" placeholder="" value="303"></div></div></div></div><h3 class="with-line">' + words['Social Profiles'][lang] + '</h3><div class="social-profiles row clearfix"><div class="col-md-3 col-sm-4" ng-repeat="item in socialProfiles"><a class="sn-link" href="" ng-click="showModal(item)" ng-if="!item.href"><i class="socicon {{ item.icon }}"></i> <span>{{ item.name }}</span></a> <a class="sn-link connected" href="{{ item.href }}" target="_blank" ng-if="item.href"><i class="socicon {{ item.icon }}"></i> <span>{{ item.name }}</span> <em class="ion-ios-close-empty sn-link-close" ng-mousedown="unconnect(item)"></em></a></div></div><h3 class="with-line">' + words['Send Email Notifications'][lang] + '</h3><div class="notification row clearfix"><div class="col-sm-6"><div class="form-group row clearfix"><label class="col-xs-8">' + words['When I receive a message'][lang] + '</label><div class="col-xs-4"><switch color="primary" ng-model="switches[0]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">' + words['When Someone sends me an invitation'][lang] + '</label><div class="col-xs-4"><switch color="primary" ng-model="switches[1]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">' + words['When profile information changes'][lang] + '</label><div class="col-xs-4"><switch color="primary" ng-model="switches[2]"></switch></div></div></div><div class="col-sm-6"><div class="form-group row clearfix"><label class="col-xs-8">' + words['When anyone logs into your account from a new device or browser'][lang] + '</label><div class="col-xs-4"><switch color="primary" ng-model="switches[3]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">' + words['Weekly Reports'][lang] + '</label><div class="col-xs-4"><switch color="primary" ng-model="switches[4]"></switch></div></div><div class="form-group row clearfix"><label class="col-xs-8">' + words['Daily Reports'][lang] + '</label><div class="col-xs-4"><switch color="primary" ng-model="switches[5]"></switch></div></div></div></div><button type="button" class="btn btn-primary btn-with-icon save-profile"><i class="ion-android-checkmark-circle"></i>' + words['Update Profile'][lang] + '</button></div></div>'),
            e.put("app/pages/profile/profileModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title" id="myModalLabel">Add Account</h4></div><form name="linkForm"><div class="modal-body"><p>Paste a link to your profile into the box below</p><div class="form-group"><input type="text" class="form-control" placeholder="Link to Profile" ng-model="link"></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="ok(link)">Save changes</button></div></form></div>'),
            e.put("app/theme/components/backTop/backTop.html", '<i class="fa fa-angle-up back-top" id="backTop" title="Back to Top"></i>'),
            e.put("app/theme/components/baSidebar/ba-sidebar.html", '<aside class="al-sidebar" ng-swipe-right="$baSidebarService.setMenuCollapsed(false)" ng-swipe-left="$baSidebarService.setMenuCollapsed(true)" ng-mouseleave="hoverElemTop=selectElemTop"><ul class="al-sidebar-list" slimscroll="{height: \'{{menuHeight}}px\'}" slimscroll-watch="menuHeight"><li ng-repeat="item in ::menuItems" class="al-sidebar-list-item" ng-class="::{\'with-sub-menu\': item.subMenu}" ui-sref-active="selected" ba-sidebar-toggling-item="item"><a ng-mouseenter="hoverItem($event, item)" ui-state="item.stateRef || \'\'" ng-href="{{::(item.fixedHref ? item.fixedHref: \'\')}}" ng-if="::!item.subMenu" class="al-sidebar-list-link"><i class="{{ ::item.icon }}"></i><span>{{ ::item.title }}</span></a> <a ng-mouseenter="hoverItem($event, item)" ng-if="::item.subMenu" class="al-sidebar-list-link" ba-ui-sref-toggler=""><i class="{{ ::item.icon }}"></i><span>{{ ::item.title }}</span> <b class="fa fa-angle-down" ui-sref-active="fa-angle-up" ng-if="::item.subMenu"></b></a><ul ng-if="::item.subMenu" class="al-sidebar-sublist" ng-class="{\'slide-right\': item.slideRight}" ba-ui-sref-toggling-submenu=""><li ng-repeat="subitem in ::item.subMenu" ng-class="::{\'with-sub-menu\': subitem.subMenu}" ui-sref-active="selected" ba-sidebar-toggling-item="subitem" class="ba-sidebar-sublist-item"><a ng-mouseenter="hoverItem($event, item)" ng-if="::subitem.subMenu" ba-ui-sref-toggler="" class="al-sidebar-list-link subitem-submenu-link"><span>{{ ::subitem.title }}</span> <b class="fa" ng-class="{\'fa-angle-up\': subitem.expanded, \'fa-angle-down\': !subitem.expanded}" ng-if="::subitem.subMenu"></b></a><ul ng-if="::subitem.subMenu" class="al-sidebar-sublist subitem-submenu-list" ng-class="{expanded: subitem.expanded, \'slide-right\': subitem.slideRight}" ba-ui-sref-toggling-submenu=""><li ng-mouseenter="hoverItem($event, item)" ng-repeat="subSubitem in ::subitem.subMenu" ui-sref-active="selected"><a ng-mouseenter="hoverItem($event, item)" href="" ng-if="::subSubitem.disabled" class="al-sidebar-list-link">{{ ::subSubitem.title }}</a> <a ng-mouseenter="hoverItem($event, item)" ui-state="subSubitem.stateRef || \'\'" ng-if="::!subSubitem.disabled" ng-href="{{::(subSubitem.fixedHref ? subSubitem.fixedHref: \'\')}}">{{::subSubitem.title }}</a></li></ul><a ng-mouseenter="hoverItem($event, item)" href="" ng-if="::(!subitem.subMenu && subitem.disabled)" class="al-sidebar-list-link">{{ ::subitem.title }}</a> <a ng-mouseenter="hoverItem($event, item)" target="{{::(subitem.blank ? \'_blank\' : \'_self\')}}" ng-if="::(!subitem.subMenu && !subitem.disabled)" ui-state="subitem.stateRef || \'\'" ng-href="{{::(subitem.fixedHref ? subitem.fixedHref: \'\')}}">{{ ::subitem.title}}</a></li></ul></li></ul><div class="sidebar-hover-elem" ng-style="{top: hoverElemTop + \'px\', height: hoverElemHeight + \'px\'}" ng-class="{\'show-hover-elem\': showHoverElem }"></div></aside>'),
            e.put("app/theme/components/baWizard/baWizard.html", '<div class="ba-wizard"><div class="ba-wizard-navigation-container"><div ng-repeat="t in $baWizardController.tabs" class="ba-wizard-navigation {{$baWizardController.tabNum == $index ? \'active\' : \'\'}}" ng-click="$baWizardController.selectTab($index)">{{t.title}}</div></div><div class="progress ba-wizard-progress"><div class="progress-bar progress-bar-danger active" role="progressbar" aria-valuemin="0" aria-valuemax="100" ng-style="{width: $baWizardController.progress + \'%\'}"></div></div><div class="steps" ng-transclude=""></div><nav><ul class="pager ba-wizard-pager"><li class="previous"><button ng-disabled="$baWizardController.isFirstTab()" ng-click="$baWizardController.previousTab()" type="button" class="btn btn-primary"><span aria-hidden="true">&larr;</span> previous</button></li><li class="next"><button ng-disabled="$baWizardController.isLastTab()" ng-click="$baWizardController.nextTab()" type="button" class="btn btn-primary">next <span aria-hidden="true">&rarr;</span></button></li></ul></nav></div>'),
            e.put("app/theme/components/baWizard/baWizardStep.html", '<section ng-show="selected" class="step" ng-transclude=""></section>'),
            e.put("app/theme/components/contentTop/contentTop.html", '<div class="content-top clearfix"><h1 class="al-title">{{ activePageTitle }}</h1><ul class="breadcrumb al-breadcrumb"><li><a href="#/dashboard">' + words["HOME"][lang] + '</a></li><li>{{ activePageTitle }}</li></ul></div>'),
            e.put("app/theme/components/msgCenter/msgCenter.html", '<ul class="al-msg-center clearfix"><li uib-dropdown=""><a href="" uib-dropdown-toggle=""><i class="fa fa-bell-o"></i><span>5</span><div class="notification-ring"></div></a><div uib-dropdown-menu="" class="top-dropdown-menu"><i class="dropdown-arr"></i><div class="header clearfix"><strong>' + words["Notifications"][lang] + '</strong> <a href="">' + words["Mark All as Read"][lang] + '</a> <a href="">' + words["Settings"][lang] + '</a></div><div class="msg-list"><a href="" class="clearfix" ng-repeat="msg in notifications"><div class="img-area"><img ng-class="{\'photo-msg-item\' : !msg.image}" ng-src="{{::( msg.image || (users[msg.userId].name | profilePicture) )}}"></div><div class="msg-area"><div ng-bind-html="getMessage(msg)"></div><span>{{ msg.time }}</span></div></a></div><a href="">' + words["See all notifications"][lang] + '</a></div></li><li uib-dropdown=""><a href="" class="msg" uib-dropdown-toggle=""><i class="fa fa-envelope-o"></i><span>5</span><div class="notification-ring"></div></a><div uib-dropdown-menu="" class="top-dropdown-menu"><i class="dropdown-arr"></i><div class="header clearfix"><strong>' + words["Messages"][lang] + '</strong> <a href="">' + words["Mark All as Read"][lang] + '</a> <a href="">' + words["Settings"][lang] + '</a></div><div class="msg-list"><a href="" class="clearfix" ng-repeat="msg in messages"><div class="img-area"><img class="photo-msg-item" ng-src="{{::( users[msg.userId].name | profilePicture )}}"></div><div class="msg-area"><div>{{ msg.text }}</div><span>{{ msg.time }}</span></div></a></div><a href="">' + words["See all messages"][lang] + '</a></div></li></ul>'),
            
            e.put("app/theme/components/pageTop/pageTop.html", '<div class="page-top clearfix" scroll-position="scrolled" max-height="50" ng-class="{\'scrolled\': scrolled}"><a href="#/dashboard" class="al-logo clearfix"><div><img style="max-width:100px;" ng-src="{{::( \'garago\' | profilePicture )}}"></div></a> <a href="" class="collapse-menu-link ion-navicon" ba-sidebar-toggle-menu=""></a><div class="search"><i class="ion-ios-search-strong" ng-click="startSearch()"></i> <input id="searchInput" type="text" placeholder="' + words["Search for"][lang] + '..."></div><div class="user-profile clearfix"><select id="language" onChange="changeLanguage()"></select><div class="al-user-profile" uib-dropdown=""><a uib-dropdown-toggle="" class="profile-toggle-link"><img ng-src="{{::( \'anmol\' | profilePicture )}}"></a><ul class="top-dropdown-menu profile-dropdown" uib-dropdown-menu=""><li><i class="dropdown-arr"></i></li><li><a href="#/profile"><i class="fa fa-user"></i>' + words['Profile'][lang] + '</a></li><li><a href=""><i class="fa fa-cog"></i>' + words['Settings'][lang] + '</a></li><li><a href="" class="signout"><i class="fa fa-power-off"></i>' + words['Sign out'][lang] + '</a></li></ul></div><msg-center></msg-center></div></div>'),
            e.put("app/theme/components/progressBarRound/progressBarRound.html", '<svg class="center-block progress-bar-round" width="200" height="200"><circle cx="100" cy="100" r="90" fill="none" stroke="#F8F8FF" stroke-width="8"></circle><circle cx="100" cy="100" r="90" fill="none" id="loader" class="" stroke="#209e91" stroke-width="8" stroke-dasharray="0,20000" transform="rotate(-90,100,100)" stroke-linecap="round"></circle><text text-anchor="middle" class="loading" x="100" y="90">Loading...</text><text class="percentage" text-anchor="middle" x="100" y="130">{{progress}}%</text></svg>'),
            e.put("app/theme/components/widgets/widgets.html", '<div class="widgets"><div ng-repeat="widgetBlock in ngModel" ng-class="{\'row\': widgetBlock.widgets.length > 1}"><div ng-repeat="widgetCol in widgetBlock.widgets" ng-class="{\'col-md-6\': widgetBlock.widgets.length === 2}" ng-model="widgetCol" class="widgets-block"><div ba-panel="" ba-panel-title="{{::widget.title}}" ng-repeat="widget in widgetCol" ba-panel-class="with-scroll {{widget.panelClass}}"><div ng-include="widget.url"></div></div></div></div></div>'),
            e.put("app/theme/inputs/baSwitcher/baSwitcher.html", '<label class="switcher-container"><input type="checkbox" ng-model="switcherValue"><div class="switcher" ng-class="::switcherStyle"><div class="handle-container"><span class="handle handle-on">ON</span> <span class="handle"></span> <span class="handle handle-off">OFF</span></div></div></label>'),
            e.put("app/pages/charts/amCharts/charts.html", '<div class="widgets"><div class="row"><div class="col-lg-4 col-md-6" ba-panel="" ba-panel-title="Bar Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/barChart/barChart.html\'"></div></div><div class="col-lg-4 col-md-6" ba-panel="" ba-panel-title="Area Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/areaChart/areaChart.html\'"></div></div><div class="col-lg-4 col-md-12" ba-panel="" ba-panel-title="Line Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/lineChart/lineChart.html\'"></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Pie Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/pieChart/pieChart.html\'"></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Funnel Chart" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/funnelChart/funnelChart.html\'"></div></div></div><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Combined bullet/column and line graphs with multiple value axes" ba-panel-class="with-scroll"><div ng-include="\'app/pages/charts/amCharts/combinedChart/combinedChart.html\'"></div></div></div></div>'),
            e.put("app/pages/charts/chartist/chartist.html", '<section ng-controller="chartistCtrl" class="chartist"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Lines" ba-panel-class="with-scroll"><h5>Simple line chart</h5><div id="line-chart" class="ct-chart"></div><h5>Line chart with area</h5><div id="area-chart" class="ct-chart"></div><h5>Bi-polar line chart with area only</h5><div id="bi-chart" class="ct-chart"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Bars" ba-panel-class="with-scroll"><h5>Simple bar chart</h5><div id="simple-bar" class="ct-chart"></div><h5>Multi-line labels bar chart</h5><div id="multi-bar" class="ct-chart"></div><h5>Stacked bar chart</h5><div id="stacked-bar" class="ct-chart stacked-bar"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Pies & Donuts" ba-panel-class="with-scroll"><div class="row"><div class="col-md-12 col-lg-4"><h5>Simple Pie</h5><div id="simple-pie" class="ct-chart"></div></div><div class="col-md-12 col-lg-4"><h5>Pie with labels</h5><div id="label-pie" class="ct-chart"></div></div><div class="col-md-12 col-lg-4"><h5>Donut</h5><div id="donut" class="ct-chart"></div></div></div></div></div></div></section>'),
            e.put("app/pages/charts/chartJs/chartJs.html", '<div class="row"><div class="col-md-4" ng-controller="chartJs1DCtrl"><div ba-panel="" ba-panel-title="' + words["PIE"][lang] + '" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-first-row"><canvas id="pie" class="chart chart-pie" chart-options="options" chart-data="data" chart-labels="labels" chart-click="changeData"></canvas></div></div></div><div class="col-md-4" ng-controller="chartJs1DCtrl"><div ba-panel="" ba-panel-title="' + words["DOUGHNUT"][lang] + '" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-first-row"><canvas id="doughnut" chart-options="options" class="chart chart-doughnut" chart-data="data" chart-labels="labels" chart-click="changeData"></canvas></div></div></div><div class="col-md-4" ng-controller="chartJs1DCtrl"><div ba-panel="" ba-panel-title="' + words["POLAR"][lang] + '" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-first-row"><canvas id="polar-area" class="chart chart-polar-area" chart-data="data" chart-options="options" chart-labels="labels" chart-click="changeData"></canvas></div></div></div></div><div class="row"><div class="col-md-6" ng-controller="chartJsWaveCtrl"><div ba-panel="" ba-panel-title="' + words["ANIMATED RADAR"][lang] + '" ba-panel-class="col-eq-height"><div class="chartjs-canvas-holder-second-row"><canvas id="waveLine" class="chart chart-radar" chart-data="[data]" chart-labels="labels"></canvas></div></div></div><div class="col-md-6" ng-controller="chartJsWaveCtrl"><div ba-panel="" ba-panel-title="' + words["ANIMATED BARS"][lang] + '" ba-panel-class="col-eq-height"><div class="chartjs-canvas-holder-second-row"><canvas id="waveBars" class="chart chart-bar" chart-data="[data]" chart-labels="labels"></canvas></div></div></div></div><div class="row"><div class="col-lg-4 col-md-6" ng-controller="chartJs2DCtrl"><div ba-panel="" ba-panel-title="' + words["RADAR"][lang] + '" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-third-row"><canvas id="radar" class="chart chart-radar" chart-series="series" chart-data="data" chart-labels="labels" chart-click="changeData"></canvas></div></div></div><div class="col-lg-4 col-md-6" ng-controller="chartJs2DCtrl"><div ba-panel="" ba-panel-title="' + words["LINE"][lang] + '" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-third-row"><canvas id="line" class="chart chart-line" chart-data="data" chart-labels="labels" chart-series="series" chart-click="changeData"></canvas></div></div></div><div class="col-lg-4 col-md-12" ng-controller="chartJs2DCtrl"><div ba-panel="" ba-panel-title="' + words["BARS"][lang] + '" ba-panel-class="with-scroll"><div class="chartjs-canvas-holder-third-row"><canvas id="bar" class="chart chart-bar" chart-data="data" chart-labels="labels" chart-series="series" chart-click="changeData" chart-update="updateC"></canvas></div></div></div></div>'),
            e.put("app/pages/charts/morris/morris.html", '<section ng-controller="morrisCtrl"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Line Chart" ba-panel-class="with-scroll"><div line-chart="" line-data="lineData" line-xkey="y" line-ykeys=\'["a", "b"]\' line-labels=\'["Serie A", "Serie B"]\' line-colors="colors"></div></div></div></div><div class="row"><div class="col-md-4"><div ba-panel="" ba-panel-title="Donut" ba-panel-class="with-scroll"><div donut-chart="" donut-data="donutData" donut-colors="colors" donut-formatter=\'"currency"\'></div></div></div><div class="col-md-8"><div ba-panel="" ba-panel-title="Bar Chart" ba-panel-class="with-scroll"><div bar-chart="" bar-data="barData" bar-x="y" bar-y=\'["a", "b"]\' bar-labels=\'["Series A", "Series B"]\' bar-colors="colors"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Area Chart" ba-panel-class="with-scroll"><div area-chart="" area-data="areaData" area-xkey="y" area-ykeys=\'["a", "b"]\' %="" area-labels=\'["Serie A", "Serie B"]\' line-colors="colors"></div></div></div></div></section>'),
            e.put("app/pages/components/mail/mail.html", '<div class="row mail-client-container transparent"><div class="col-md-12"><div ba-panel="" ba-panel-class="xmedium-panel mail-panel"><div class="letter-layout"><div class="mail-navigation-container" ng-class="{\'expanded\' : !tabCtrl.navigationCollapsed}"><div class="text-center"><button type="button" class="btn btn-default compose-button" ng-click="tabCtrl.showCompose(\'\',\'\',\'\')">Compose</button></div><div ng-repeat="t in tabCtrl.tabs" ui-sref-active="active" class="mail-navigation" ui-sref="components.mail.label({label: t.label})" ng-click="selectTab(t.label)">{{t.name}}<span class="new-mails" ng-show="t.newMails">{{t.newMails}}</span></div><div class="labels"><div class="labels-title"></div><div class="labels-container"><div class="label-item"><span class="tag label work">Work</span></div><div class="label-item"><span class="tag label family">Family</span></div><div class="label-item"><span class="tag label friend">Friend</span></div><div class="label-item"><span class="tag label study">Study</span></div></div></div><div class="add-label-container"><i class="ion-plus-round"></i><span class="label-input-stub">Add new label</span></div></div><ui-view></ui-view></div></div></div></div>'),
            e.put("app/pages/components/timeline/timeline.html", '<div ba-panel=""><section id="cd-timeline" class="cd-container cssanimations" ng-controller="TimelineCtrl"><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Euro-Coin\' | kameleonImg )}}"></div></div><div class="cd-timeline-content warning"><h5>Title of section 1</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p><span class="cd-date">Jan 14</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg danger"><img ng-src="{{::( \'Laptop-Signal\' | kameleonImg )}}"></div></div><div class="cd-timeline-content danger"><h5>Title of section 2</h5><p>Donec dapibus at leo eget volutpat. Praesent dolor tellus, ultricies venenatis molestie eu, luctus eget nibh. Curabitur ullamcorper eleifend nisl.</p><span class="cd-date">Jan 18</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg primary"><img ng-src="{{::( \'Checklist\' | kameleonImg )}}"></div></div><div class="cd-timeline-content primary"><h5>Title of section 3</h5><p>Phasellus auctor tellus eget lacinia condimentum. Cum sociis natoque penatibus et magnis dis parturient montes.</p><span class="cd-date">Feb 18</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Boss-3\' | kameleonImg )}}"></div></div><div class="cd-timeline-content warning"><h5>Title of section 4</h5><p>Morbi fringilla in massa ac posuere. Fusce non sagittis massa, id accumsan odio. Nullam eget tempor est. Etiam eu felis eu purus aliquam tristique id quis nisl. Nam eros nibh, consequat sed pulvinar eu, ultrices ornare ligula. Aenean interdum sed nunc sed hendrerit.</p><span class="cd-date">Feb 20</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg danger"><img ng-src="{{::( \'Online-Shopping\' | kameleonImg )}}"></div></div><div class="cd-timeline-content danger"><h5>Title of section 5</h5><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget mattis metus. Nullam egestas eros metus, quis fringilla urna accumsan sed. Aliquam ultrices at arcu vitae tincidunt.</p><span class="cd-date">Feb 21</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg primary"><img ng-src="{{::( \'Money-Increase\' | kameleonImg )}}"></div></div><div class="cd-timeline-content primary"><h5>Title of section 6</h5><p>Praesent bibendum ante mattis augue consectetur, ut commodo turpis consequat. Donec ligula eros, porta in iaculis vel, semper ac sem. Integer at mauris lorem.</p><span class="cd-date">Feb 23</span></div></div><div class="cd-timeline-block"><div class="cd-timeline-img"><div class="kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Vector\' | kameleonImg )}}"></div></div><div class="cd-timeline-content warning"><h5>Title of section 7</h5><p>Vivamus ut laoreet erat, vitae eleifend eros. Sed varius id tellus non lobortis. Sed dolor ante, cursus non scelerisque sed, euismod id eros.</p><span class="cd-date">Feb 24</span></div></div></section></div>'),
            e.put("app/pages/components/tree/tree.html", '<div class="row" ng-controller="treeCtrl"><div class="col-md-6"><div ba-panel="" ba-panel-title="Basic Action" ba-panel-class="with-scroll tree-panel"><div class="row"><div class="col-sm-4"><div class="control-side text-center"><div><button class="btn btn-primary" ng-click="addNewNode()">Add</button></div><div><button class="btn btn-primary" ng-click="collapse()">Collapse All</button></div><div><button class="btn btn-primary" ng-click="expand()">Expand All</button></div><div><button class="btn btn-primary" ng-click="refresh()">Refresh</button></div></div></div><div class="col-sm-8"><div js-tree="basicConfig" ng-model="treeData" should-apply="applyModelChanges()" tree="basicTree" tree-events="ready:readyCB"></div></div></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Creation" ba-panel-class="with-scroll tree-panel"><div js-tree="dragConfig" ng-model="dragData"></div></div></div></div>'),
            e.put("app/pages/dashboard/blurFeed/blurFeed.html", '<div class="feed-messages-container" track-width="smallContainerWidth" min-width="360"><div class="feed-message" ng-repeat="message in feed" ng-click="expandMessage(message)"><div class="message-icon" ng-if="message.type == \'text-message\'"><img class="photo-icon" ng-src="{{::( message.author | profilePicture )}}"></div><div class="message-icon" ng-if="message.type != \'text-message\'"><img class="photo-icon" ng-src="{{::( message.author | profilePicture )}}"> <span class="sub-photo-icon" ng-class="::message.type"></span></div><div class="text-block text-message"><div class="message-header"><span class="author">{{ ::message.author }} {{ ::message.surname}}</span></div><div class="message-content line-clamp" ng-class="{\'line-clamp-2\' : !message.expanded}"><span ng-if="message.preview">{{message.header}}</span>{{::message.text}}</div><div class="preview" ng-show="message.expanded" ng-if="message.preview"><a href="{{::message.link}}" target="_blank"><img ng-src="{{ ::( message.preview | appImage )}}"></a></div><div ng-show="message.expanded" class="message-time"><div class="post-time">{{::message.time}}</div><div class="ago-time">{{::message.ago}}</div></div></div></div></div>'),
            e.put("app/pages/dashboard/dashboardCalendar/dashboardCalendar.html", '<div id="calendar" class="blurCalendar"></div>'),
            e.put("app/pages/dashboard/dashboardLineChart/dashboardLineChart.html", '<div id="amchart"></div>'),
            e.put("app/pages/dashboard/dashboardMap/dashboardMap.html", '<div id="amChartMap"></div>'),
            e.put("app/pages/dashboard/dashboardPieChart/dashboardPieChart.html", '<div class="row pie-charts"><div class="pie-chart-item-container" ng-repeat="chart in charts"><div ba-panel=""><div class="pie-chart-item"><div class="chart" rel="{{ ::chart.color }}" data-percent="60"><span class="percent"></span></div><div class="description"><div>{{ ::chart.description }}</div><div class="description-stats">{{ ::chart.stats }}</div></div><i class="chart-icon i-{{ ::chart.icon }}"></i></div></div></div></div>'),
            e.put("app/pages/dashboard/dashboardTodo/dashboardTodo.html", '<div class="task-todo-container" ng-class="{\'transparent\': transparent}"><input type="text" value="" class="form-control task-todo" placeholder="' + words["Task to do"][lang] + '.." ng-keyup="addToDoItem($event)" ng-model="newTodoText"> <i ng-click="addToDoItem(\'\',true)" class="add-item-icon ion-plus-round"></i><div class="box-shadow-border"></div><ul class="todo-list" ui-sortable="" ng-model="todoList"><li ng-repeat="item in todoList" ng-if="!item.deleted" ng-init="activeItem=false" ng-class="{checked: isChecked, active: activeItem}" ng-mouseenter="activeItem=true" ng-mouseleave="activeItem=false"><div class="blur-container"><div class="blur-box"></div></div><i class="mark" style="background-color: {{::item.color}}"></i> <label class="todo-checkbox custom-checkbox custom-input-success"><input type="checkbox" ng-model="isChecked"> <span class="cut-with-dots">{{ item.text }}</span></label> <i class="remove-todo ion-ios-close-empty" ng-click="item.deleted = true"></i></li></ul></div>'),
            
            e.put("app/pages/dashboard/trafficChart/trafficChart.html", '<div class="channels-block" ng-class="{\'transparent\': transparent}"><div class="chart-bg"></div><div class="traffic-chart" id="trafficChart"><div class="canvas-holder"><canvas id="chart-area" width="280" height="280"></canvas><div class="traffic-text">$925,000 <span style = "font-size: smaller;">' + words["Expenses"][lang] +'</span></div></div></div><div class="channels-info"><div><div class="channels-info-item" ng-repeat="label in doughnutData.labels" ng-init="i = $index; data = doughnutData.datasets[0]"><div class="legend-color" style="background-color: {{::data.backgroundColor[i]}}"></div><p>{{::label}}<span class="channel-number">+{{data.percentage[i]}}%</span></p><div class="progress progress-sm channel-progress"><div class="progress-bar" role="progressbar" aria-valuenow="{{data.percentage[i]}}" aria-valuemin="0" aria-valuemax="100" style="width: {{item.percentage}}%"></div></div></div></div></div></div>'),
            e.put("app/pages/dashboard/weather/weather.html", '<div class="weather-wrapper"><div class="weather-main-info"><h5 class="city-date font-x1dot5"><div>{{geoData.geoplugin_city}} - {{geoData.geoplugin_countryName | uppercase}}</div><div>{{ weather.days[weather.current].date | date : \'EEEE h:mm\'}}</div></h5><div class="weather-description font-x1dot5"><i class="font-x3 {{weatherIcons[weather.days[weather.current].icon]}}"></i><div class="weather-info">{{weather.days[weather.current].main}} - {{weather.days[weather.current].description}}</div></div><div class="weather-temp font-x1dot5"><i class="font-x2 ion-thermometer"></i><div class="weather-info" ng-switch="" on="units"><span ng-switch-when="metric">{{weather.days[weather.current].temp}} °C | <a ng-click="switchUnits(\'imperial\')" href="">°F</a></span> <span ng-switch-when="imperial">{{weather.days[weather.current].temp}} °F | <a ng-click="switchUnits(\'metric\')" href="">°C</a></span></div></div></div><div id="tempChart" class="temp-by-time"></div><div class="select-day"><div class="day" ng-repeat="day in weather.days" ng-click="switchDay($index)"><div><span class="font-x1dot25">{{day.temp}}</span></div><div><i class="weatherIcon font-x2 {{weatherIcons[day.icon]}}"></i> <span class="select-day-info">{{day.main}}</span></div><div><span>{{day.date | date : \'EEE\'}}</span></div></div></div></div>'),
           
            e.put("app/pages/SmartLibrary/smartlibrary.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/SmartDocument/smartdocument.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),




         
            e.put("app/pages/tables/smart/tables.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="' + words["Editable Rows"][lang] + '" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="' + words["Editable Cells"][lang] + '" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="' + words["Smart Table With Filtering, Sorting And Pagination"][lang] + '" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
           // e.put("app/pages/tables/field/tables.html", '<div style="height:1200px; width:80%"><iframe scrolling="No" height="100%" width="80%" id="myFrame1" src="fileupload/CustomTable.html"></iframe></div>'),
            



            e.put("app/pages/tables/widgets/basicTable.html", '<div class="horizontal-scroll"><table class="table"><thead><tr><th class="browser-icons"></th><th>Browser</th><th class="align-right">Visits</th><th class="table-arr"></th><th class="align-right">Downloads</th><th class="table-arr"></th><th class="align-right">Purchases</th><th class="table-arr"></th><th class="align-right">DAU</th><th class="table-arr"></th><th class="align-right">MAU</th><th class="table-arr"></th><th class="align-right">LTV</th><th class="table-arr"></th><th class="align-right">Users %</th><th class="table-arr"></th></tr></thead><tbody><tr><td><img src="img/chrome.svg" width="20" height="20"></td><td class="nowrap">Google Chrome</td><td class="align-right">10,392</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">3,822</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">4,214</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">899</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">7,098</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">178</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">45%</td><td class="table-arr"><i class="icon-up"></i></td></tr><tr><td><img src="img/firefox.svg" width="20" height="20"></td><td class="nowrap">Mozilla Firefox</td><td class="align-right">7,873</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">6,003</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">3,031</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">897</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">8,997</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">102</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">28%</td><td class="table-arr"><i class="icon-up"></i></td></tr><tr><td><img src="img/ie.svg" width="20" height="20"></td><td class="nowrap">Internet Explorer</td><td class="align-right">5,890</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">3,492</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">2,102</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">27</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">4,039</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">99</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">17%</td><td class="table-arr"><i class="icon-down"></i></td></tr><tr><td><img src="img/safari.svg" width="20" height="20"></td><td class="nowrap">Safari</td><td class="align-right">4,001</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">2,039</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">1,001</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">104</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">3,983</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">209</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">14%</td><td class="table-arr"><i class="icon-down"></i></td></tr><tr><td><img src="img/opera.svg" width="20" height="20"></td><td class="nowrap">Opera</td><td class="align-right">1,833</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">983</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">83</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">19</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">1,099</td><td class="table-arr"><i class="icon-down"></i></td><td class="align-right">103</td><td class="table-arr"><i class="icon-up"></i></td><td class="align-right">5%</td><td class="table-arr"><i class="icon-up"></i></td></tr></tbody></table></div>'),
            e.put("app/pages/tables/widgets/borderedTable.html", '<div class="horizontal-scroll"><table class="table table-bordered"><thead><tr><th class="browser-icons"></th><th>Browser</th><th class="align-right">Visits</th><th class="align-right">Purchases</th><th class="align-right">%</th></tr></thead><tbody><tr ng-repeat="item in metricsTableData"><td><img ng-src="{{::( item.image | appImage )}}" width="20" height="20"></td><td ng-class="nowrap">{{item.browser}}</td><td class="align-right">{{item.visits}}</td><td class="align-right">{{item.purchases}}</td><td class="align-right">{{item.percent}}</td></tr></tbody></table></div>'),
            e.put("app/pages/tables/widgets/condensedTable.html", '<div class="horizontal-scroll"><table class="table table-condensed"><thead><tr><th class="table-id">#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Status</th></tr></thead><tbody><tr ng-repeat="item in peopleTableData"><td class="table-id">{{item.id}}</td><td>{{item.firstName}}</td><td>{{item.lastName}}</td><td>{{item.username}}</td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td><button class="status-button btn btn-xs btn-{{item.status}}">{{item.status}}</button></td></tr></tbody></table></div>'),
            e.put("app/pages/tables/widgets/contextualTable.html", '<table class="table"><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Age</th></tr><tr class="primary"><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td><td><a class="email-link" ng-href="mailto:mdo@gmail.com" href="mailto:mdo@gmail.com">mdo@gmail.com</a></td><td>28</td></tr><tr class="success"><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td><td><a class="email-link" ng-href="mailto:fat@yandex.ru" href="mailto:fat@yandex.ru">fat@yandex.ru</a></td><td>45</td></tr><tr class="warning"><td>3</td><td>Larry</td><td>Bird</td><td>@twitter</td><td><a class="email-link" ng-href="mailto:twitter@outlook.com" href="mailto:twitter@outlook.com">twitter@outlook.com</a></td><td>18</td></tr><tr class="danger"><td>4</td><td>John</td><td>Snow</td><td>@snow</td><td><a class="email-link" ng-href="mailto:snow@gmail.com" href="mailto:snow@gmail.com">snow@gmail.com</a></td><td>20</td></tr><tr class="info"><td>5</td><td>Jack</td><td>Sparrow</td><td>@jack</td><td><a class="email-link" ng-href="mailto:jack@yandex.ru" href="mailto:jack@yandex.ru">jack@yandex.ru</a></td><td>30</td></tr></table>'),
            e.put("app/pages/tables/widgets/editableRowTable.html", '<div  class="add-row-editable-table"><button class="btn btn-primary" ng-click="addUser()">Add row</button></div><table  class="table table-bordered table-hover table-condensed"><tr><td></td><td>Name</td><td>Status</td><td>Group</td><td>Actions</td></tr><tr ng-repeat="user in users" class="editable-row"><td>{{$index}}</td><td><span editable-text="user.name" e-name="name" e-form="rowform" e-required="">{{ user.name || \'empty\' }}</span></td><td class="select-td"><span editable-select="user.status" e-name="status" e-form="rowform" e-selectpicker="" e-ng-options="s.value as s.text for s in statuses">{{ showStatus(user) }}</span></td><td class="select-td"><span editable-select="user.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-selectpicker="" e-ng-options="g.id as g.text for g in groups">{{ showGroup(user) }}</span></td><td><form editable-form="" name="rowform" ng-show="rowform.$visible" class="form-buttons form-inline" shown="inserted == user"><button type="submit" ng-click="UpdateUser($index)" ng-disabled="rowform.$waiting" class="btn btn-primary editable-table-button btn-xs">Save</button> <button type="button" ng-disabled="rowform.$waiting" ng-click="rowform.$cancel()" class="btn btn-default editable-table-button btn-xs">Cancel</button></form><div class="buttons" ng-show="!rowform.$visible"><button class="btn btn-primary editable-table-button btn-xs" ng-click="rowform.$show()"> ' + words["Edit"][lang] + ' </button> <button class="btn btn-danger editable-table-button btn-xs" ng-click="removeUser($index)"> ' + words["Delete"][lang] + ' </button></div></td></tr></table>'),


// e.put("sm/languages", '<div>123123</div>'),

            e.put("app/pages/tables/widgets/editableTable.html", '<div class="horizontal-scroll"><table class="table table-hover" st-table="editableTableData"><thead><tr class="sortable"><th class="table-id" st-sort="id" st-sort-default="true">#</th><th st-sort="firstName">First Name</th><th st-sort="lastName">Last Name</th><th st-sort="username">Username</th><th st-sort="email">Email</th><th st-sort="age">Age</th></tr></thead><tbody><tr ng-repeat="item in editableTableData" class="editable-tr-wrap"><td class="table-id">{{item.id}}</td><td><span editable-text="item.firstName" blur="cancel">{{item.firstName}}</span></td><td><span editable-text="item.lastName" blur="cancel">{{item.lastName}}</span></td><td><span editable-text="item.username" blur="cancel">{{item.username}}</span></td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td><span editable-text="item.age" blur="cancel">{{item.age}}</span></td></tr></tbody><tfoot><tr><td colspan="6" class="text-center"><div st-pagination="" st-items-by-page="12" st-displayed-pages="5"></div></td></tr></tfoot></table></div>'),
            e.put("app/pages/tables/widgets/hoverRows.html", '<div class="horizontal-scroll"><table class="table table-hover"><thead><tr class="black-muted-bg"><th class="browser-icons"></th><th>Browser</th><th class="align-right">Visits</th><th class="table-arr"></th><th class="align-right">Purchases</th><th class="table-arr"></th><th class="align-right">%</th><th class="table-arr"></th></tr></thead><tbody><tr ng-repeat="item in metricsTableData" class="no-top-border"><td><img ng-src="{{::( item.image | appImage )}}" width="20" height="20"></td><td ng-class="nowrap">{{item.browser}}</td><td class="align-right">{{item.visits}}</td><td class="table-arr"><i ng-class="{\'icon-up\': item.isVisitsUp, \'icon-down\': !item.isVisitsUp }"></i></td><td class="align-right">{{item.purchases}}</td><td class="table-arr"><i ng-class="{\'icon-up\': item.isPurchasesUp, \'icon-down\': !item.isPurchasesUp }"></i></td><td class="align-right">{{item.percent}}</td><td class="table-arr"><i ng-class="{\'icon-up\': item.isPercentUp, \'icon-down\': !item.isPercentUp }"></i></td></tr></tbody></table></div>'),
            e.put("app/pages/tables/widgets/responsiveTable.html", '<div class="table-responsive"><table class="table"><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Age</th></tr><tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td><td><a class="email-link" ng-href="mailto:mdo@gmail.com" href="mailto:mdo@gmail.com">mdo@gmail.com</a></td><td>28</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td><td><a class="email-link" ng-href="mailto:fat@yandex.ru" href="mailto:fat@yandex.ru">fat@yandex.ru</a></td><td>45</td></tr><tr><td>3</td><td>Larry</td><td>Bird</td><td>@twitter</td><td><a class="email-link" ng-href="mailto:twitter@outlook.com" href="mailto:twitter@outlook.com">twitter@outlook.com</a></td><td>18</td></tr><tr><td>4</td><td>John</td><td>Snow</td><td>@snow</td><td><a class="email-link" ng-href="mailto:snow@gmail.com" href="mailto:snow@gmail.com">snow@gmail.com</a></td><td>20</td></tr><tr><td>5</td><td>Jack</td><td>Sparrow</td><td>@jack</td><td><a class="email-link" ng-href="mailto:jack@yandex.ru" href="mailto:jack@yandex.ru">jack@yandex.ru</a></td><td>30</td></tr></table></div>'),
            e.put("app/pages/tables/widgets/smartTable.html", '<div class="horizontal-scroll"><div class="form-group select-page-size-wrap"><label>Rows on page<select class="form-control selectpicker show-tick" title="Rows on page" selectpicker="" ng-model="smartTablePageSize" ng-options="i for i in [5,10,15,20,25]"></select></label></div><table class="table" st-table="smartTableData"><thead><tr class="sortable"><th class="table-id" st-sort="id" st-sort-default="true">#</th><th st-sort="firstName">First Name</th><th st-sort="lastName">Last Name</th><th st-sort="username">Username</th><th st-sort="email">Email</th><th st-sort="age">Age</th></tr><tr><th></th><th><input st-search="firstName" placeholder="Search First Name" class="input-sm form-control search-input" type="search"></th><th><input st-search="lastName" placeholder="Search Last Name" class="input-sm form-control search-input" type="search"></th><th><input st-search="username" placeholder="Search Username" class="input-sm form-control search-input" type="search"></th><th><input st-search="email" placeholder="Search Email" class="input-sm form-control search-input" type="search"></th><th><input st-search="age" placeholder="Search Age" class="input-sm form-control search-input" type="search"></th></tr></thead><tbody><tr ng-repeat="item in smartTableData"><td class="table-id">{{item.id}}</td><td>{{item.firstName}}</td><td>{{item.lastName}}</td><td>{{item.username}}</td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td>{{item.age}}</td></tr></tbody><tfoot><tr><td colspan="6" class="text-center"><div st-pagination="" st-items-by-page="smartTablePageSize" st-displayed-pages="5"></div></td></tr></tfoot></table></div>'),
            e.put("app/pages/tables/widgets/stripedRows.html", '<div class="vertical-scroll"><table class="table table-striped"><thead><tr><th class="table-id">#</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Email</th><th>Age</th></tr></thead><tbody><tr ng-repeat="item in smartTableData"><td class="table-id">{{item.id}}</td><td>{{item.firstName}}</td><td>{{item.lastName}}</td><td>{{item.username}}</td><td><a class="email-link" ng-href="mailto:{{item.email}}">{{item.email}}</a></td><td>{{item.age}}</td></tr></tbody></table></div>'),
            e.put("app/pages/ui/alerts/alerts.html", '<div class="widgets"><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Basic" ba-panel-class="with-scroll"><div><div class="alert bg-success"><strong>Well done!</strong> You successfully read this important alert message.</div><div class="alert bg-info"><strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.</div><div class="alert bg-warning"><strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div><div class="alert bg-danger"><strong>Oh snap!</strong> Change a few things up and try submitting again.</div></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Dismissible alerts" ba-panel-class="with-scroll"><div><div class="alert bg-success closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Well done!</strong> You successfully read this important alert message.</div><div class="alert bg-info closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.</div><div class="alert bg-warning closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Warning!</strong> Better check yourself, you\'re not looking too good.</div><div class="alert bg-danger closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> <strong>Oh snap!</strong> Change a few things up and try submitting again.</div></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Links in alerts" ba-panel-class="with-scroll"><div><div class="alert bg-success"><strong>Well done!</strong> You successfully read <a href="" class="alert-link">this important alert message</a>.</div><div class="alert bg-info"><strong>Heads up!</strong> This <a href="" class="alert-link">alert needs your attention</a>, but it\'s not super important.</div><div class="alert bg-warning"><strong>Warning!</strong> Better check yourself, you\'re <a href="" class="alert-link">not looking too good</a>.</div><div class="alert bg-danger"><strong>Oh snap!</strong> <a href="" class="alert-link">Change a few things up</a> and try submitting again.</div></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Composite alerts" ba-panel-class="with-scroll"><div><div class="alert bg-warning"><h4>Warning!</h4><strong>Pay attention.</strong> Change a few things up and try submitting again.<div class="control-alert"><button type="button" class="btn btn-danger">Pay Attention</button> <button type="button" class="btn btn-primary">Ignore</button></div></div></div></div></div></div>'),
            e.put("app/pages/ui/buttons/buttons.html", '<div class="widgets"><div class="row"><div class="col-md-3" ba-panel="" ba-panel-title="Flat Buttons" ba-panel-class="with-scroll button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger">Danger</button></div></div><div class="col-md-3" ba-panel="" ba-panel-title="Raised Buttons" ba-panel-class="with-scroll button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default btn-raised">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary btn-raised">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success btn-raised">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info btn-raised">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning btn-raised">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger btn-raised">Danger</button></div></div><div class="col-md-3" ba-panel="" ba-panel-title="Different sizes" ba-panel-class="with-scroll button-panel df-size-button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default btn-xs">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary btn-sm">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success btn-mm">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info btn-md">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning btn-xm">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger btn-lg">Danger</button></div></div><div class="col-md-3" ba-panel="" ba-panel-title="Disabled" ba-panel-class="with-scroll button-panel"><div class="button-wrapper"><button type="button" class="btn btn-default" disabled="disabled">Default</button></div><div class="button-wrapper"><button type="button" class="btn btn-primary" disabled="disabled">Primary</button></div><div class="button-wrapper"><button type="button" class="btn btn-success" disabled="disabled">Success</button></div><div class="button-wrapper"><button type="button" class="btn btn-info" disabled="disabled">Info</button></div><div class="button-wrapper"><button type="button" class="btn btn-warning" disabled="disabled">Warning</button></div><div class="button-wrapper"><button type="button" class="btn btn-danger" disabled="disabled">Danger</button></div></div></div><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Icon Buttons" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/iconButtons.html\'"></div></div><div ba-panel="" ba-panel-title="Large Buttons" ba-panel-class="with-scroll large-buttons-panel"><div ng-include="\'app/pages/ui/buttons/widgets/largeButtons.html\'"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Button Dropdowns" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/dropdowns.html\'"></div></div><div ba-panel="" ba-panel-title="Button Groups" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/buttonGroups.html\'"></div></div></div></div><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Progress Buttons" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/buttons/widgets/progressButtons.html\'"></div></div></div></div>'),
            e.put("app/pages/ui/grid/baseGrid.html", '<h4 class="grid-h">Stacked to horizontal</h4><div class="row show-grid"><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div><div class="col-md-1"><div>.col-md-1</div></div></div><div class="row show-grid"><div class="col-md-8"><div>.col-md-8</div></div><div class="col-md-4"><div>.col-md-4</div></div></div><div class="row show-grid"><div class="col-md-4"><div>.col-md-4</div></div><div class="col-md-4"><div>.col-md-4</div></div><div class="col-md-4"><div>.col-md-4</div></div></div><div class="row show-grid"><div class="col-md-6"><div>.col-md-6</div></div><div class="col-md-6"><div>.col-md-6</div></div></div><h4 class="grid-h">Mobile and desktop</h4><div class="row show-grid"><div class="col-xs-12 col-md-8"><div>xs-12 .col-md-8</div></div><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div></div><div class="row show-grid"><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div><div class="col-xs-6 col-md-4"><div>xs-6 .col-md-4</div></div></div><div class="row show-grid"><div class="col-xs-6"><div>.col-xs-6</div></div><div class="col-xs-6"><div>.col-xs-6</div></div></div><h4 class="grid-h">Mobile, tablet, desktop</h4><div class="row show-grid"><div class="col-xs-12 col-sm-6 col-md-8"><div>.col-xs-12 .col-sm-6 .col-md-8</div></div><div class="col-xs-6 col-md-4"><div>.col-xs-6 .col-md-4</div></div></div><div class="row show-grid"><div class="col-xs-6 col-sm-4"><div>.col-xs-6 .col-sm-4</div></div><div class="col-xs-6 col-sm-4"><div>.col-xs-6 .col-sm-4</div></div><div class="clearfix visible-xs-block"></div><div class="col-xs-6 col-sm-4"><div>.col-xs-6 .col-sm-4</div></div></div><h4 class="grid-h">Column wrapping</h4><div class="row show-grid"><div class="col-xs-9"><div>.col-xs-9</div></div><div class="col-xs-4"><div>.col-xs-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div></div><div class="col-xs-6"><div>.col-xs-6<br>Subsequent columns continue along the new line.</div></div></div><h4 class="grid-h">Responsive column resets</h4><div class="row show-grid"><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3<p>Resize your viewport or check it out on your phone for an example.</p></div></div><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3</div></div><div class="clearfix visible-xs-block"></div><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3</div></div><div class="col-xs-6 col-sm-3"><div>.col-xs-6 .col-sm-3</div></div></div><h4 class="grid-h">Offsetting columns</h4><div class="row show-grid"><div class="col-md-4"><div>.col-md-4</div></div><div class="col-md-4 col-md-offset-4"><div>.col-md-4 .col-md-offset-4</div></div></div><div class="row show-grid"><div class="col-md-3 col-md-offset-3"><div>.col-md-3 .col-md-offset-3</div></div><div class="col-md-3 col-md-offset-3"><div>.col-md-3 .col-md-offset-3</div></div></div><div class="row show-grid"><div class="col-md-6 col-md-offset-3"><div>.col-md-6 .col-md-offset-3</div></div></div><h4 class="grid-h">Grid options</h4><div class="table-responsive"><table class="table table-bordered table-striped"><thead><tr><th></th><th>Extra small devices <small>Phones (&lt;768px)</small></th><th>Small devices <small>Tablets (≥768px)</small></th><th>Medium devices <small>Desktops (≥992px)</small></th><th>Large devices <small>Desktops (≥1200px)</small></th></tr></thead><tbody><tr><th class="text-nowrap" scope="row">Grid behavior</th><td>Horizontal at all times</td><td colspan="3">Collapsed to start, horizontal above breakpoints</td></tr><tr><th class="text-nowrap" scope="row">Container width</th><td>None (auto)</td><td>750px</td><td>970px</td><td>1170px</td></tr><tr><th class="text-nowrap" scope="row">Class prefix</th><td><code>.col-xs-</code></td><td><code>.col-sm-</code></td><td><code>.col-md-</code></td><td><code>.col-lg-</code></td></tr><tr><th class="text-nowrap" scope="row"># of columns</th><td colspan="4">12</td></tr><tr><th class="text-nowrap" scope="row">Column width</th><td class="text-muted">Auto</td><td>~62px</td><td>~81px</td><td>~97px</td></tr><tr><th class="text-nowrap" scope="row">Gutter width</th><td colspan="4">30px (15px on each side of a column)</td></tr><tr><th class="text-nowrap" scope="row">Nestable</th><td colspan="4">Yes</td></tr><tr><th class="text-nowrap" scope="row">Offsets</th><td colspan="4">Yes</td></tr><tr><th class="text-nowrap" scope="row">Column ordering</th><td colspan="4">Yes</td></tr></tbody></table></div>'),
            e.put("app/pages/ui/grid/grid.html", '<div class="widgets"><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Inline Form" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/grid/baseGrid.html\'"></div></div></div></div>'),
            e.put("app/pages/ui/icons/icons.html", '<div class="widgets"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Kameleon SVG Icons" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/kameleon.html"></div></div><div ba-panel="" ba-panel-title="Socicon" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/socicon.html"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="Icons With Rounded Background" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/kameleonRounded.html"></div></div><div ba-panel="" ba-panel-title="ionicons" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/ionicons.html"></div></div><div ba-panel="" ba-panel-title="Font Awesome Icons" ba-panel-class="with-scroll"><div include-with-scope="app/pages/ui/icons/widgets/fontAwesomeIcons.html"></div></div></div></div></div>'),
            e.put("app/pages/ui/modals/modals.html", '<div class="widgets"><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Modals" ba-panel-class="with-scroll"><div class="modal-buttons clearfix"><button type="button" class="btn btn-primary" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/basicModal.html\', \'md\')">Default modal</button> <button type="button" class="btn btn-success" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/largeModal.html\', \'lg\')">Large modal</button> <button type="button" class="btn btn-warning" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/smallModal.html\', \'sm\')">Small modal</button></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Message Modals" ba-panel-class="with-scroll"><div class="modal-buttons same-width clearfix"><button type="button" class="btn btn-success" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/successModal.html\')">Success Message</button> <button type="button" class="btn btn-info" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/infoModal.html\')">Info Message</button> <button type="button" class="btn btn-warning" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/warningModal.html\')">Warning Message</button> <button type="button" class="btn btn-danger" data-toggle="modal" ng-click="open(\'app/pages/ui/modals/modalTemplates/dangerModal.html\')">Danger Message</button></div></div><div class="col-md-6" ba-panel="" ba-panel-title="Notifications" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/modals/notifications/notifications.html\'"></div></div></div><div class="row"><div class="col-md-6" ba-panel="" ba-panel-title="Progress dialogs" ba-panel-class="with-scroll"><div class="modal-buttons same-width clearfix"><button type="button" class="btn btn-info" data-toggle="modal" ng-click="openProgressDialog()">Progress dialog</button></div></div></div></div>'),
            e.put("app/pages/ui/notifications/notifications.html", '<div ba-panel="" ba-panel-class="with-scroll notification-panel"><div class="row"><div class="col-md-3 col-sm-4"><div class="control"><label for="title">Title</label> <input ng-model="options.title" type="text" class="form-control" id="title" placeholder="Enter a title ..."></div><div class="control"><label for="message">Message</label> <textarea ng-model="options.msg" class="form-control" id="message" rows="3" placeholder="Enter a message ..."></textarea></div><div class="control-group"><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.closeButton" type="checkbox" id="closeButton"> <span>Close Button</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.allowHtml" type="checkbox" id="html"> <span>Allow html</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.progressBar" type="checkbox" id="progressBar"> <span>Progress bar</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.preventDuplicates" type="checkbox" id="preventDuplicates"> <span>Prevent duplicates</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.preventOpenDuplicates" type="checkbox" id="preventOpenDuplicates"> <span>Prevent open duplicates</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.tapToDismiss" type="checkbox" id="tapToDismiss"> <span>Tap to dismiss</span></label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.newestOnTop" type="checkbox" id="newestOnTop"> <span>Newest on top</span></label></div></div></div><div class="col-md-2 col-sm-3 toastr-radio-setup"><div id="toastTypeGroup"><div class="controls radio-controls"><label class="radio-header">Toast Type</label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="success"><span>Success</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="info"><span>Info</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="warning"><span>Warning</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.type" name="toasts" value="error"><span>Error</span></label></div></div><div id="positionGroup"><div class="controls radio-controls"><label class="radio-header position-header">Position</label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-right"> <span>Top Right</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-right"> <span>Bottom Right</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-left"> <span>Bottom Left</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-left"> <span>Top Left</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-full-width"> <span>Top Full Width</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-full-width"> <span>Bottom Full Width</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-top-center"> <span>Top Center</span></label> <label class="radio custom-radio"><input type="radio" ng-model="options.positionClass" name="positions" value="toast-bottom-center"> <span>Bottom Center</span></label></div></div></div><div class="col-md-2 col-sm-3"><div class="control"><label for="timeOut">Time out</label> <input type="text" class="form-control" id="timeOut" ng-model="options.timeOut" placeholder="ms"> <label class="sub-label" for="timeOut">If you set it to 0, it will stick</label></div><div class="control"><label for="extendedTimeOut">Extended time out</label> <input type="text" class="form-control" id="extendedTimeOut" ng-model="options.extendedTimeOut" placeholder="ms"></div><div class="control"><label for="maxOpened">Maximum number of toasts</label> <input type="text" class="form-control" id="maxOpened" ng-model="options.maxOpened" value="0"> <label for="maxOpened" class="sub-label">0 means no limit</label></div><div class="control"><label class="checkbox-inline custom-checkbox nowrap"><input ng-model="options.autoDismiss" type="checkbox" id="autoDismiss"> <span>Auto dismiss</span></label></div></div><div class="col-md-5 col-sm-12"><label>Result:</label><pre class="result-toastr" id="toastrOptions">{{optionsStr}}</pre></div></div><div class="row"><div class="col-md-12 button-row"><button ng-click="openToast()" class="btn btn-primary">Open Toast</button> <button ng-click="openRandomToast()" class="btn btn-primary">Random Toast</button> <button ng-click="clearToasts()" class="btn btn-danger">Clear Toasts</button> <button ng-click="clearLastToast()" class="btn btn-danger">Clear Last Toast</button></div></div></div>'),
            e.put("app/pages/ui/panels/panels.html", '<h2>Default panels</h2><div class="row"><div class="col-md-12 col-lg-4"><div ba-panel="" ba-panel-class="xsmall-panel light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac mi erat. Phasellus placerat, elit a laoreet semper, enim ipsum ultricies orci, ac tincidunt tellus massa eu est. Nam non porta purus, sed facilisis justo. Nam pulvinar sagittis quam.</div></div><div class="col-md-12 col-lg-4"><div ba-panel="" ba-panel-title="Panel with header" ba-panel-class="xsmall-panel light-text">Phasellus maximus venenatis augue, et vestibulum neque aliquam ut. Morbi mattis libero vitae vulputate dignissim. Praesent placerat, sem non dapibus cursus, lacus nisi blandit quam, vitae porttitor lectus lacus non turpis. Donec suscipit consequat tellus.</div></div><div class="col-md-12 col-lg-4"><div ba-panel="" ba-panel-title="Panel with header & scroll" ba-panel-class="xsmall-panel with-scroll light-text"><p>Suspendisse nec tellus urna. Sed id est metus. Nullam sit amet dolor nec ipsum dictum suscipit. Mauris sed nisi mauris. Nulla iaculis nisl ut velit ornare imperdiet. Suspendisse potenti. In tempor leo sed sem malesuada pellentesque. Maecenas faucibus metus lacus, ac egestas diam vulputate vitae.</p><p>Sed dapibus, purus vel hendrerit consectetur, lectus orci gravida massa, sed bibendum dui mauris et eros. Nulla dolor massa, posuere et dictum sit amet, dignissim quis odio. Fusce mollis finibus dignissim. Integer sodales augue erat. Pellentesque laoreet vestibulum urna at iaculis. Nulla libero augue, euismod at diam eget, aliquam condimentum ligula. Donec a leo eu est molestie lacinia hendrerit sed lorem. Duis id diam eu metus sodales consequat vel eu elit. Praesent dolor nibh, convallis eleifend feugiat a, finibus porttitor nibh. Ut non libero vel velit pulvinar scelerisque non vel lorem. Integer porta tempor nulla. Sed nibh erat, ultrices vel lorem eu, rutrum vehicula sem.</p><p>Donec nec tellus urna. Sed id est metus. Nullam sit amet dolor nec ipsum dictum suscipit. Mauris sed nisi mauris. Nulla iaculis nisl ut velit ornare imperdiet. Suspendisse potenti. In tempor leo sed sem malesuada pellentesque. Maecenas faucibus metus lacus, ac egestas diam vulputate vitae.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum nec ligula egestas rhoncus. Sed dignissim, augue vel scelerisque vulputate, nisi ante posuere lorem, quis iaculis eros dolor eu nisl. Etiam sagittis, ipsum ac tempor iaculis, justo neque mattis ante, ac maximus sapien risus eu sapien. Morbi erat urna, varius et lectus vel, porta dictum orci. Duis bibendum euismod elit, et lobortis purus venenatis in. Mauris eget lacus enim. Cras quis sem et magna fringilla convallis. Proin hendrerit nulla vel gravida mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consectetur quis purus vel aliquam.</p></div></div></div><h2>Bootstrap panels</h2><div class="row"><div class="col-md-12 col-lg-4"><div class="panel panel-default bootstrap-panel xsmall-panel"><div class="panel-body"><p>A panel in bootstrap is a bordered box with some padding around its content.</p><p class="p-with-code">Panels are created with the <code>.panel</code> class, and content inside the panel has a <code>.panel-body</code> class. The <code>.panel-default .panel-primary .panel-danger</code> and other classes are used to style the color of the panel. See the next example on this page for more contextual classes.</p></div></div></div><div class="col-md-12 col-lg-4"><div class="panel panel-default bootstrap-panel xsmall-panel"><div class="panel-heading">Panel Heading</div><div class="panel-body"><p class="p-with-code">The <code>.panel-heading</code> class adds a heading to the panel.Easily add a heading container to your panel with .panel-heading. You may also include any <code>h1-h6</code> with a <code>.panel-title</code> class to add a pre-styled heading.</p></div></div></div><div class="col-md-12 col-lg-4"><div class="panel panel-default bootstrap-panel"><div class="panel-body footer-panel"><p class="p-with-code">Wrap buttons or secondary text in <code>.panel-footer</code>. Note that panel footers do not inherit colors and borders when using contextual variations as they are not meant to be in the foreground.</p></div><div class="panel-footer">Panel Footer</div></div></div></div><h2>Panels with Contextual Classes</h2><div class="row"><div class="col-md-6 col-lg-4"><div class="panel panel-default contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-default class</div><div class="panel-body">To color the panel, use contextual classes. This is sample <code>.panel-default</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-primary contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-primary class</div><div class="panel-body">Sample <code>.panel-primary</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-success contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-success class</div><div class="panel-body">Sample <code>.panel-success</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-info contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-info class</div><div class="panel-body">Sample <code>.panel-info</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-warning contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-warning class</div><div class="panel-body">Sample <code>.panel-warning</code> panel</div></div></div><div class="col-md-6 col-lg-4"><div class="panel panel-danger contextual-example-panel bootstrap-panel"><div class="panel-heading">Panel with panel-danger class</div><div class="panel-body">Sample <code>.panel-danger</code> panel</div></div></div></div><div class="row"><div class="col-md-12"><h2>Panel Group</h2><div class="panel-group"><div class="panel panel-default bootstrap-panel"><div class="panel-heading">Panel group 1</div><div class="panel-body"><p>To group many panels together, wrap a <code>&lt;div&gt;</code> with class <code>\r\n            .panel-group</code> around them.</p></div></div><div class="panel panel-default bootstrap-panel"><div class="panel-heading">Panel group 2</div><div class="panel-body"><p>The <code>.panel-group</code> class clears the bottom-margin of each panel.</p></div></div></div></div></div>'),
            e.put("app/pages/ui/progressBars/progressBars.html", '<div class="widgets"><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-title="Basic" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/basic.html\'"></div></div><div ba-panel="" ba-panel-title="Striped" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/striped.html\'"></div></div></div><div class="col-md-6"><div ba-panel="" ba-panel-title="With label" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/label.html\'"></div></div><div ba-panel="" ba-panel-title="Animated" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/animated.html\'"></div></div></div></div><div class="row"><div class="col-md-12" ba-panel="" ba-panel-title="Stacked" ba-panel-class="with-scroll"><div ng-include="\'app/pages/ui/progressBars/widgets/stacked.html\'"></div></div></div></div>'),
            e.put("app/pages/ui/slider/slider.html", '<div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Ion Range Slider" ba-panel-class="with-scroll"><div class="slider-box"><h5>Basic</h5><ion-slider type="single" grid="false" min="0" max="100" from="45" disable="false"></ion-slider></div><div class="slider-box"><h5>With prefix</h5><ion-slider type="single" grid="true" min="100" max="1200" prefix="$" from="420" disable="false"></ion-slider></div><div class="slider-box"><h5>With postfix</h5><ion-slider type="single" grid="true" min="-90" max="90" postfix="°" from="36" disable="false"></ion-slider></div><div class="slider-box"><h5>Two way range</h5><ion-slider type="double" grid="true" min="100" max="1200" from="420" to="900" disable="false"></ion-slider></div><div class="slider-box"><h5>With Steps</h5><ion-slider type="single" grid="true" min="0" max="1000" from="300" step="50" disable="false"></ion-slider></div><div class="slider-box"><h5>Decorating numbers</h5><ion-slider type="single" grid="true" min="0" max="1000000" from="300000" step="1000" prettify-separator="." prettify="true" disable="false"></ion-slider></div><div class="slider-box"><h5>Using custom values array</h5><ion-slider type="single" grid="true" from="5" step="1000" values="[\'' + words["January"][lang] + '\', \'' + words["February"][lang] + '\', \'March\', \'April\', \'May\', \'June\', \'July\', \'August\', \'September\', \'October\', \'November\', \'December\']" disable="false"></ion-slider></div><div class="slider-box"><h5>Disabled</h5><ion-slider type="single" grid="false" min="0" max="100" from="45" disable="true"></ion-slider></div></div></div></div>'),
            e.put("app/pages/ui/tabs/contextualAccordion.html", '<uib-accordion><uib-accordion-group heading="Primary" panel-class="panel-primary bootstrap-panel accordion-panel">Primary <i class="ion-heart"></i></uib-accordion-group><uib-accordion-group heading="Success" panel-class="panel-success bootstrap-panel accordion-panel">Success <i class="ion-checkmark-round"></i></uib-accordion-group><uib-accordion-group heading="Info" panel-class="panel-info bootstrap-panel accordion-panel">Info <i class="ion-information-circled"></i></uib-accordion-group><uib-accordion-group heading="Warning" panel-class="panel-warning bootstrap-panel accordion-panel">Warning <i class="ion-alert"></i></uib-accordion-group><uib-accordion-group heading="Danger" panel-class="panel-danger bootstrap-panel accordion-panel">Danger <i class="ion-nuclear"></i></uib-accordion-group></uib-accordion>'),
            e.put("app/pages/ui/tabs/mainTabs.html", '<uib-tabset active="$tabSetStatus.activeTab"><uib-tab heading="Start"><p>Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.</p><p>People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.</p><div class="text-center"><div class="kameleon-icon with-round-bg primary inline-icon"><img ng-src="{{::( \'Shop\' | kameleonImg )}}"></div><div class="kameleon-icon with-round-bg primary inline-icon"><img ng-src="{{::( \'Programming\' | kameleonImg )}}"></div><div class="kameleon-icon with-round-bg primary inline-icon"><img ng-src="{{::( \'Dna\' | kameleonImg )}}"></div></div><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab heading="Getting Done"><p>You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab ng-init="$dropdownTabActive = 1" class="with-dropdown"><uib-tab-heading uib-dropdown=""><a uib-dropdown-toggle="" ng-click="$event.stopPropagation()">Dropdown tab <i class="caret"></i></a><ul class="dropdown-menu" uib-dropdown-menu=""><li><a ng-click="$dropdownTabActive = 1; $tabSetStatus.activeTab = 3">Tab 1</a></li><li><a ng-click="$dropdownTabActive = 2; $tabSetStatus.activeTab = 3">Tab 2</a></li></ul></uib-tab-heading><div ng-show="$dropdownTabActive == 1"><p>Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.</p><p>Failure is the condiment that gives success its flavor.</p></div><div ng-show="$dropdownTabActive == 2"><p class="text-center"><button class="btn btn-danger">I\'m just a dummy button</button></p></div></uib-tab></uib-tabset>'),
            e.put("app/pages/ui/tabs/sampleAccordion.html", '<uib-accordion><uib-accordion-group is-open="true" heading="Static Header, initially expanded" panel-class="bootstrap-panel accordion-panel panel-default">This content is straight in the template.</uib-accordion-group><uib-accordion-group heading="Dynamic Body Content" panel-class="bootstrap-panel accordion-panel panel-default"><p>The body of the uib-accordion group grows to fit the contents</p><button type="button" class="btn btn-primary btn-sm">Add Item</button></uib-accordion-group><uib-accordion-group heading="Custom template" panel-class="bootstrap-panel accordion-panel panel-default">Hello</uib-accordion-group><uib-accordion-group panel-class="bootstrap-panel accordion-panel panel-default"><uib-accordion-heading>I can have markup, too! <i class="fa pull-right ion-settings"></i></uib-accordion-heading>This is just some content to illustrate fancy headings.</uib-accordion-group></uib-accordion>'),
            e.put("app/pages/ui/tabs/sideTabs.html", '<div ba-panel="" ba-panel-class="tabs-panel xsmall-panel with-scroll"><uib-tabset class="tabs-left"><uib-tab heading="Start"><p class="text-center">Take up one idea.</p><div class="kameleon-icon-tabs kameleon-icon with-round-bg danger"><img ng-src="{{::( \'Key\' | kameleonImg )}}"></div><p>People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed.</p></uib-tab><uib-tab heading="Get it done"><p>You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab heading="Achieve"><p>Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.</p><p>Failure is the condiment that gives success its flavor.</p></uib-tab></uib-tabset></div><div ba-panel="" ba-panel-class="tabs-panel xsmall-panel with-scroll"><uib-tabset class="tabs-right"><uib-tab heading="Start"><p class="text-center">Take up one idea.</p><div class="kameleon-icon-tabs kameleon-icon with-round-bg warning"><img ng-src="{{::( \'Phone-Booth\' | kameleonImg )}}"></div><p>People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed.</p></uib-tab><uib-tab heading="Get it done"><p>You can\'t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.</p><p>The reason most people never reach their goals is that they don\'t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.</p></uib-tab><uib-tab heading="Achieve"><p>Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.</p><p>Failure is the condiment that gives success its flavor.</p></uib-tab></uib-tabset></div>'),
            e.put("app/pages/ui/tabs/tabs.html", '<div><div class="row"><div class="col-md-6"><div ba-panel="" ba-panel-class="with-scroll horizontal-tabs tabs-panel medium-panel"><div ng-include="\'app/pages/ui/tabs/mainTabs.html\'"></div></div></div><div class="col-md-6 tabset-group" ng-include="\'app/pages/ui/tabs/sideTabs.html\'"></div></div><div class="row accordions-row"><div class="col-md-6" ng-include="\'app/pages/ui/tabs/sampleAccordion.html\'"></div><div class="col-md-6" ng-include="\'app/pages/ui/tabs/contextualAccordion.html\'"></div></div></div>'),
            e.put("app/pages/ui/typography/typography.html", '<div class="typography-document-samples row-fluid"><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll heading-widget" ba-panel-title="Text Size"><div class="section-block"><h1>H1. Heading 1</h1><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat vestibulum eleifend pellentesque.</p></div><div class="section-block"><h2>H2. Heading 2</h2><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat vestibulum eleifend pellentesque.</p></div><div class="section-block"><h3>H3. Heading 3</h3><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra, placerat vestibulum eleifend pellentesque.</p></div><div class="section-block"><h4>H4. Heading 4</h4><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra,.</p></div><div class="section-block"><h5>H5. Heading 5</h5><p>Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra.</p></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll more-text-widget" ba-panel-title="Some more text"><div class="section-block light-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis.</p></div><div class="section-block regular-text"><p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id.</p></div><div class="section-block upper-text bold-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.</p></div><div class="section-block bold-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullam-corper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla.</p></div><div class="section-block small-text"><p>Secondary text. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar,</p><p>lacinia scelerisque pharetra, placerat vestibulum eleifend</p><p>pellentesque, mi nam.</p></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll lists-widget" ba-panel-title="Lists"><div class="section-block"><h5 class="list-header">Unordered list:</h5><ul class="blur"><li>Lorem ipsum dolor sit amet</li><li>Сlacinia scelerisque pharetra<ul><li>Dui rhoncus quisque integer lorem<ul><li>Libero iaculis vestibulum eu vitae</li></ul></li></ul></li><li>Nisl lectus nibh habitasse suspendisse ut</li><li><span>Posuere cursus hac, vestibulum wisi nulla bibendum</span></li></ul><h5 class="list-header">Ordered Lists:</h5><ol class="blur"><li><span>Eu non nec cursus quis mollis, amet quam nec</span></li><li><span>Et suspendisse, adipiscing fringilla ornare sit ligula sed</span><ol><li><span>Interdum et justo nulla</span><ol><li><span>Magna amet, suscipit suscipit non amet</span></li></ol></li></ol></li><li><span>Metus duis eu non eu ridiculus turpis</span></li><li><span>Neque egestas id fringilla consectetuer justo curabitur, wisi magna neque commodo volutpat</span></li></ol><div class="accent">Important text fragment. Lorem ipsum dolor sit amet, id mollis iaculis mi nisl pulvinar, lacinia scelerisque pharetra.</div></div></div></div><div class="col-xlg-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 typography-widget"><div ba-panel="" ba-panel-class="with-scroll color-widget" ba-panel-title="Text Color"><div class="section-block red-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed ornare nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p></div><div class="section-block yellow-text"><p>Curabitur bibendum ornare dolor, quis ullamcorper ligula dfgz`zzsodales at. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. In sed ornare nulla.</p></div><div class="section-block links"><p>Lorem ipsum <a href="">dolor</a> sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis <a href="">ullamcorper</a> ligula sodales at. Nulla tellus elit, varius non commodo eget, <a href="">mattis</a> vel eros. In sed ornare nulla.</p></div><div class="section-block links"><p><a href="">Active link — #209e91</a></p><p class="hovered"><a href="">Hover link — #17857a</a></p></div></div></div></div><div class="row-fluid"><div class="col-lg-12 col-sm-12 col-xs-12"><div ba-panel="" ba-panel-class="banner-column-panel"><div class="banner"><div class="large-banner-wrapper"><img ng-src="{{::( \'app/typography/banner.png\' | appImage )}}" alt=""></div><div class="banner-text-wrapper"><div class="banner-text"><h1>Simple Banner Text</h1><p>Lorem ipsum dolor sit amet</p><p>Odio amet viverra rutrum</p></div></div></div><div class="section"><h2>Columns</h2><div class="row"><div class="col-sm-6"><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo03.png\' | appImage )}}" alt="" title=""></div><p>Vel elit, eros elementum, id lacinia, duis non ut ut tortor blandit. Mauris <a href="">dapibus</a> magna rutrum. Ornare neque suspendisse <a href="">phasellus wisi</a>, quam cras pede rutrum suspendisse, <a href="">felis amet eu</a>. Congue magna elit quisque quia, nullam justo sagittis, ante erat libero placerat, proin condimentum consectetuer lacus. Velit condimentum velit, sed penatibus arcu nulla.</p></div><div class="col-sm-6"><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo01.png\' | appImage )}}" alt="" title=""></div><p>Et suspendisse, adipiscing fringilla ornare sit ligula sed, vel nam. Interdum et justo nulla, fermentum lobortis purus ut eu, duis nibh dolor massa tristique elementum, nibh iste potenti risus fusce aliquet fusce, ullamcorper debitis primis arcu tellus vestibulum ac.</p></div></div><div class="separator"></div><div class="row"><div class="col-sm-4"><h4>Column heading example</h4><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo04.png\' | appImage )}}" alt=""></div><p>Eget augue, lacus erat ante egestas scelerisque aliquam, metus molestie leo in habitasse magna maecenas</p><a href="" class="learn-more">Lean more</a></div><div class="col-sm-4"><h4>Yet another column heading example</h4><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo05.png\' | appImage )}}" alt=""></div><p>Augue massa et parturient, suspendisse orci nec scelerisque sit, integer nam mauris pede consequat in velit</p><a href="" class="learn-more">Lean more</a></div><div class="col-sm-4"><h4>Third column heading example</h4><div class="img-wrapper"><img ng-src="{{::( \'app/typography/typo06.png\' | appImage )}}" alt=""></div><p>Eget turpis, tortor lobortis porttitor, vestibulum nullam vehicula aliquam</p><a href="" class="learn-more">Lean more</a></div></div><div class="separator"></div></div></div></div></div>'),
            e.put("app/pages/charts/amCharts/areaChart/areaChart.html", '<div id="areaChart" class="admin-chart" ng-controller="AreaChartCtrl"></div>'),
            e.put("app/pages/charts/amCharts/barChart/barChart.html", '<div id="barChart" class="admin-chart" ng-controller="BarChartCtrl"></div>'),
            e.put("app/pages/charts/amCharts/combinedChart/combinedChart.html", '<div id="zoomAxisChart" class="admin-chart" ng-controller="combinedChartCtrl"></div>'),
            e.put("app/pages/charts/amCharts/funnelChart/funnelChart.html", '<div id="funnelChart" class="admin-chart" ng-controller="FunnelChartCtrl"></div>'),
            e.put("app/pages/charts/amCharts/ganttChart/ganttChart.html", '<div id="gnattChart" class="admin-chart" ng-controller="ganttChartCtrl"></div>'),
            e.put("app/pages/charts/amCharts/lineChart/lineChart.html", '<div id="lineChart" class="admin-chart" ng-controller="LineChartCtrl"></div>'),
            e.put("app/pages/charts/amCharts/pieChart/pieChart.html", '<div id="pieChart" class="admin-chart" ng-controller="PieChartCtrl"></div>'),
            e.put("app/pages/components/mail/composeBox/compose.html", '<div class="compose-header"><span>New message</span> <span class="header-controls"><i class="ion-minus-round"></i> <i class="ion-arrow-resize"></i> <i ng-click="$dismiss()" class="ion-close-round"></i></span></div><div><input type="text" class="form-control compose-input default-color" placeholder="To" ng-model="boxCtrl.to"> <input type="text" class="form-control compose-input default-color" placeholder="Subject" ng-model="boxCtrl.subject"><div class="compose-container"><text-angular-toolbar ta-toolbar-class="toolbarMain" name="toolbarMain" ta-toolbar="[[\'h1\',\'h2\',\'h3\',\'bold\',\'italics\', \'underline\', \'justifyLeft\', \'justifyCenter\', \'justifyRight\', \'justifyFull\']]"></text-angular-toolbar><text-angular name="htmlcontent" ta-target-toolbars="toolbarMain,toolbarFooter" ng-model="boxCtrl.text"></text-angular></div></div><div class="compose-footer clearfix"><button type="button" ng-click="$dismiss()" class="btn btn-send">Send</button><text-angular-toolbar ta-toolbar-class="toolbarFooter" name="toolbarFooter" ta-toolbar="[[\'insertLink\', \'insertImage\', \'html\', \'quote\',\'insertVideo\']]"></text-angular-toolbar><div class="footer-controls"><i class="footer-control-first compose-footer-icon ion-arrow-down-b"></i> <i ng-click="$dismiss()" class="compose-footer-icon ion-android-delete"></i></div></div>'),
            e.put("app/pages/components/mail/detail/mailDetail.html", '<div class="message-container" ng-class="{\'expanded\': tabCtrl.navigationCollapsed}"><div class="message"><div class="row"><div class="toggle-navigation-container detail-page"><a href="" class="collapse-navigation-link ion-navicon" ng-click="tabCtrl.navigationCollapsed=!tabCtrl.navigationCollapsed"></a></div><button ui-sref="components.mail.label({label : detailCtrl.label})" type="button" class="back-button btn btn-default btn-with-icon"><i class="ion-chevron-left"></i>Back</button></div><div class="person-info row"><div class="col-lg-4 col-md-12 no-padding"><img ng-src="{{detailCtrl.mail.name.split(\' \')[0] | profilePicture}}" class="human-picture"><div class="name"><h2 class="name-h">{{detailCtrl.mail.name.split(\' \')[0]}}</h2><h2 class="name-h second-name">{{detailCtrl.mail.name.split(\' \')[1]}}</h2><div><span class="mail-tag tag label {{detailCtrl.mail.tag}}">{{detailCtrl.mail.tag}}</span></div></div></div><div class="col-lg-4 col-md-6 col-xs-12 no-padding"><div class="contact-info phone-email"><div><i class="ion-iphone"></i> <span class="phone">777-777-7777</span></div><div><i class="ion-email"></i> <span class="email">{{detailCtrl.mail.email}}</span></div></div></div><div class="col-lg-4 col-md-6 col-xs-12 no-padding"><div class="contact-info position-address"><div><span class="position">{{detailCtrl.mail.position}}</span></div><div><span class="address">12 Nezavisimosti st. Vilnius, Lithuania</span></div></div></div></div><div class="row"></div><div class="line"></div><div class="message-details"><span class="subject">{{detailCtrl.mail.subject}}</span> <span class="date">• {{detailCtrl.mail.date | date : \'h:mm a MMMM d \'}}</span></div><div class="line"></div><div ng-bind-html="detailCtrl.mail.body" class="message-body"></div><div class="line"></div><div class="attachment" ng-show="detailCtrl.mail.attachment"><span class="file-links">1 Attachment - <a href="">View</a> | <a href="">Download</a></span><div><i class="file-icon ion-document"></i> <span class="file-name">{{detailCtrl.mail.attachment}}</span></div></div><div class="line" ng-show="detailCtrl.mail.attachment"></div><div class="answer-container"><button type="button" class="btn btn-with-icon" ng-click="tabCtrl.showCompose(detailCtrl.mail.subject,detailCtrl.mail.email,\'\')"><i class="ion-reply"></i>Reply</button> <button type="button" class="btn btn-with-icon" ng-click="tabCtrl.showCompose(detailCtrl.mail.subject,\'\',detailCtrl.mail.body)"><i class="ion-forward"></i>Forward</button> <button type="button" class="btn btn-with-icon"><i class="ion-printer"></i>Print</button> <button type="button" class="btn btn-with-icon"><i class="ion-android-remove-circle"></i>Spam</button> <button type="button" class="btn btn-with-icon"><i class="ion-android-delete"></i>Delete</button></div></div><div ng-show="!detailCtrl.mail"><h5 ng-class="text-center">Nothing to show</h5></div></div>'),
            e.put("app/pages/components/mail/list/mailList.html", '<div class="side-message-navigation" ng-class="{\'expanded\': tabCtrl.navigationCollapsed}"><div class="mail-messages-control side-message-navigation-item"><div class="toggle-navigation-container"><a href="" class="collapse-navigation-link ion-navicon" ng-click="tabCtrl.navigationCollapsed=!tabCtrl.navigationCollapsed"></a></div><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox01" value="option1"> <span class="select-all-label">Select All</span></label> <button type="button" class="btn btn-icon refresh-button"><i class="ion-refresh"></i></button><div class="btn-group" uib-dropdown=""><button type="button" class="btn more-button" uib-dropdown-toggle="">More <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="messages"><table><tr ng-repeat="m in listCtrl.messages track by m.id | orderBy:\'-date\'" class="side-message-navigation-item little-human shineHover {{m.tag}}"><td class="check-td"><div class="mail-checkbox"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox"> <span></span></label></div></td><td class="photo-td" ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><img ng-src="{{m.name.split(\' \')[0] | profilePicture}}" class="little-human-picture"></td><td ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><div class="name-container"><div><span class="name">{{m.name}}</span></div><div><span class="tag label label-primary {{m.tag}}">{{m.tag}}</span></div></div></td><td ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><div class="additional-info"><span class="subject">{{m.subject}}</span></div></td><td ui-sref="components.mail.detail({id: m.id, label: listCtrl.label})"><div class="mail-body-part">{{m.body | plainText}}</div></td><td class="date"><span>{{m.date | date : \'MMM d HH:mm\'}}</span></td></tr></table></div></div>'),
            e.put("app/pages/form/inputs/widgets/checkboxesRadios.html", '<div class="checkbox-demo-row"><div class="input-demo checkbox-demo row"><div class="col-md-4"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox01" value="option1"> <span>Check 1</span></label></div><div class="col-md-4"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox02" value="option2"> <span>Check 2</span></label></div><div class="col-md-4"><label class="checkbox-inline custom-checkbox nowrap"><input type="checkbox" id="inlineCheckbox03" value="option3"> <span>Check 3</span></label></div></div><div class="input-demo radio-demo row"><div class="col-md-4"><label class="radio-inline custom-radio nowrap"><input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> <span>Option 1</span></label></div><div class="col-md-4"><label class="radio-inline custom-radio nowrap"><input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> <span>Option 2</span></label></div><div class="col-md-4"><label class="radio-inline custom-radio nowrap"><input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> <span>Option3</span></label></div></div></div><div><div class="checkbox disabled"><label class="custom-checkbox nowrap"><input type="checkbox" value="" disabled=""> <span>Checkbox is disabled</span></label></div><div class="radio disabled"><label class="custom-radio nowrap"><input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled=""> <span>Disabled option</span></label></div></div>'),
            
            e.put("app/pages/form/inputs/widgets/inputGroups.html", '<div class="input-group"><span class="input-group-addon input-group-addon-primary addon-left" id="basic-addon1">@</span> <input type="text" class="form-control with-primary-addon" placeholder="Username" aria-describedby="basic-addon1"></div><div class="input-group"><input type="text" class="form-control with-warning-addon" placeholder="Recipient\'s username" aria-describedby="basic-addon2"> <span class="input-group-addon input-group-addon-warning addon-right" id="basic-addon2">@example.com</span></div><div class="input-group"><span class="input-group-addon addon-left input-group-addon-success">$</span> <input type="text" class="form-control with-success-addon" aria-label="Amount (to the nearest dollar)"> <span class="input-group-addon addon-right input-group-addon-success">.00</span></div><div class="input-group"><input type="text" class="form-control with-danger-addon" placeholder="Search for..."> <span class="input-group-btn"><button class="btn btn-danger" type="button">Go!</button></span></div>'),


            e.put("app/pages/form/inputs/widgets/standardFields.html", '<form><div class="form-group"><label for="input01">Text</label> <input type="text" class="form-control" id="input01" placeholder="Text"></div><div class="form-group"><label for="input02">Password</label> <input type="password" class="form-control" id="input02" placeholder="Password"></div><div class="form-group"><label for="input03">Rounded Corners</label> <input type="text" class="form-control form-control-rounded" id="input03" placeholder="Rounded Corners"></div><div class="form-group"><label for="input04">With help</label> <input type="text" class="form-control" id="input04" placeholder="With help"> <span class="help-block sub-little-text">A block of help text that breaks onto a new line and may extend beyond one line.</span></div><div class="form-group"><label for="input05">Disabled Input</label> <input type="text" class="form-control" id="input05" placeholder="Disabled Input" disabled=""></div><div class="form-group"><label for="textarea01">Textarea</label> <textarea placeholder="Default Input" class="form-control" id="textarea01"></textarea></div><div class="form-group"><input type="text" class="form-control input-sm" id="input2" placeholder="Small Input"></div><div class="form-group"><input type="text" class="form-control input-lg" id="input4" placeholder="Large Input"></div></form>'),
            e.put("app/pages/form/inputs/widgets/validationStates.html", '<div class="form-group has-success"><label class="control-label" for="inputSuccess1">Input with success</label> <input type="text" class="form-control" id="inputSuccess1"></div><div class="form-group has-warning"><label class="control-label" for="inputWarning1">Input with warning</label> <input type="text" class="form-control" id="inputWarning1"></div><div class="form-group has-error"><label class="control-label" for="inputError1">Input with error</label> <input type="text" class="form-control" id="inputError1"></div><div class="has-success"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox" id="checkboxSuccess" value="option1"> <span>Checkbox with success</span></label></div></div><div class="has-warning"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox" id="checkboxWarning" value="option1"> <span>Checkbox with warning</span></label></div></div><div class="has-error"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox" id="checkboxError" value="option1"> <span>Checkbox with error</span></label></div></div><div class="form-group has-success has-feedback"><label class="control-label" for="inputSuccess2">Input with success</label> <input type="text" class="form-control" id="inputSuccess2" aria-describedby="inputSuccess2Status"> <i class="ion-checkmark-circled form-control-feedback" aria-hidden="true"></i> <span id="inputSuccess2Status" class="sr-only">(success)</span></div><div class="form-group has-warning has-feedback"><label class="control-label" for="inputWarning2">Input with warning</label> <input type="text" class="form-control" id="inputWarning2" aria-describedby="inputWarning2Status"> <i class="ion-alert-circled form-control-feedback" aria-hidden="true"></i> <span id="inputWarning2Status" class="sr-only">(warning)</span></div><div class="form-group has-error has-feedback"><label class="control-label" for="inputError2">Input with error</label> <input type="text" class="form-control" id="inputError2" aria-describedby="inputError2Status"> <i class="ion-android-cancel form-control-feedback" aria-hidden="true"></i> <span id="inputError2Status" class="sr-only">(error)</span></div><div class="form-group has-success has-feedback"><label class="control-label" for="inputGroupSuccess1">Input group with success</label><div class="input-group"><span class="input-group-addon addon-left">@</span> <input type="text" class="form-control" id="inputGroupSuccess1" aria-describedby="inputGroupSuccess1Status"></div><i class="ion-checkmark-circled form-control-feedback" aria-hidden="true"></i> <span id="inputGroupSuccess1Status" class="sr-only">(success)</span></div>'),
            e.put("app/pages/form/layouts/widgets/basicForm.html", '<form><div class="form-group"><label for="exampleInputEmail1">Email address</label> <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></div><div class="form-group"><label for="exampleInputPassword1">Password</label> <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></div><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Check me out</span></label></div><button type="submit" class="btn btn-danger">Submit</button></form>'),
            e.put("app/pages/form/layouts/widgets/blockForm.html", '<div class="row"><div class="col-sm-6"><div class="form-group"><label for="inputFirstName">First Name</label> <input type="text" class="form-control" id="inputFirstName" placeholder="First Name"></div></div><div class="col-sm-6"><div class="form-group"><label for="inputLastName">Last Name</label> <input type="text" class="form-control" id="inputLastName" placeholder="Last Name"></div></div></div><div class="row"><div class="col-sm-6"><div class="form-group"><label for="inputFirstName">Email</label> <input type="email" class="form-control" id="inputEmail" placeholder="Email"></div></div><div class="col-sm-6"><div class="form-group"><label for="inputWebsite">Website</label> <input type="text" class="form-control" id="inputWebsite" placeholder="Website"></div></div></div><button type="submit" class="btn btn-primary">Submit</button>'),
            e.put("app/pages/form/layouts/widgets/formWithoutLabels.html", '<form><div class="form-group"><input type="text" class="form-control" placeholder="Recipients"></div><div class="form-group"><input type="text" class="form-control" placeholder="Subject"></div><div class="form-group"><textarea class="form-control" placeholder="Message"></textarea></div><button type="submit" class="btn btn-success">Send</button></form>'),
            e.put("app/pages/form/layouts/widgets/horizontalForm.html", '<form class="form-horizontal"><div class="form-group"><label for="inputEmail3" class="col-sm-2 control-label">Email</label><div class="col-sm-10"><input type="email" class="form-control" id="inputEmail3" placeholder="Email"></div></div><div class="form-group"><label for="inputPassword3" class="col-sm-2 control-label">Password</label><div class="col-sm-10"><input type="password" class="form-control" id="inputPassword3" placeholder="Password"></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Remember me</span></label></div></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-warning">Sign in</button></div></div></form>'),
            e.put("app/pages/form/layouts/widgets/inlineForm.html", '<form class="row form-inline"><div class="form-group col-sm-3 col-xs-6"><input type="text" class="form-control" id="exampleInputName2" placeholder="Name"></div><div class="form-group col-sm-3 col-xs-6"><input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email"></div><div class="checkbox"><label class="custom-checkbox"><input type="checkbox"> <span>Remember me</span></label></div><button type="submit" class="btn btn-primary">Send invitation</button></form>'),
            e.put("app/pages/ui/buttons/widgets/buttonGroups.html", '<div class="btn-group-example"><div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-danger">Left</button> <button type="button" class="btn btn-danger">Middle</button> <button type="button" class="btn btn-danger">Right</button></div></div><div class="btn-toolbar-example"><div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><div class="btn-group" role="group" aria-label="First group"><button type="button" class="btn btn-primary">1</button> <button type="button" class="btn btn-primary">2</button> <button type="button" class="btn btn-primary">3</button> <button type="button" class="btn btn-primary">4</button></div><div class="btn-group" role="group" aria-label="Second group"><button type="button" class="btn btn-primary">5</button> <button type="button" class="btn btn-primary">6</button> <button type="button" class="btn btn-primary">7</button></div><div class="btn-group" role="group" aria-label="Third group"><button type="button" class="btn btn-primary">8</button></div></div></div>'),
            e.put("app/pages/ui/buttons/widgets/buttons.html", '<div class="basic-btns"><div class="row"><div class="col-md-2"><h5>Default button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger">Danger</button></div></div></div></div><div class="row"><div class="col-md-2"><h5 class="row-sm">Small button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary btn-sm">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default btn-sm">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success btn-sm">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info btn-sm">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning btn-sm">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger btn-sm">Danger</button></div></div></div></div><div class="row"><div class="col-md-2"><h5 class="row-xs">Extra small button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary btn-xs">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default btn-xs">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success btn-xs">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info btn-xs">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning btn-xs">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger btn-xs">Danger</button></div></div></div></div><div class="row"><div class="col-md-2"><h5>Disabled button</h5></div><div class="col-md-10"><div class="row btns-row btns-same-width-md"><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-primary" disabled="disabled">Primary</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-default" disabled="disabled">Default</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-success" disabled="disabled">Success</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-info" disabled="disabled">Info</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-warning" disabled="disabled">Warning</button></div><div class="col-sm-2 col-xs-4"><button type="button" class="btn btn-danger" disabled="disabled">Danger</button></div></div></div></div></div>'),
            e.put("app/pages/ui/buttons/widgets/dropdowns.html", '<div class="row btns-row"><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-primary" uib-dropdown-toggle="">Primary <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-success" uib-dropdown-toggle="">Success <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-info" uib-dropdown-toggle="">Info <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-default" uib-dropdown-toggle="">Default <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-warning" uib-dropdown-toggle="">Warning <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-danger" uib-dropdown-toggle="">Danger <span class="caret"></span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div></div><h5 class="panel-subtitle">Split button dropdowns</h5><div class="row btns-row"><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-primary">Primary</button> <button type="button" class="btn btn-primary" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-success">Success</button> <button type="button" class="btn btn-success" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-info">Info</button> <button type="button" class="btn btn-info" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-default">Default</button> <button type="button" class="btn btn-default" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-warning">Warning</button> <button type="button" class="btn btn-warning" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div><div class="col-sm-4 col-xs-6"><div class="btn-group" uib-dropdown="" dropdown-append-to-body=""><button type="button" class="btn btn-danger">Danger</button> <button type="button" class="btn btn-danger" uib-dropdown-toggle=""><span class="caret"></span> <span class="sr-only">Toggle Dropdown</span></button><ul uib-dropdown-menu=""><li><a href="">Action</a></li><li><a href="">Another action</a></li><li><a href="">Something else here</a></li><li role="separator" class="divider"></li><li><a href="">Separated link</a></li></ul></div></div></div>'),
            e.put("app/pages/ui/buttons/widgets/iconButtons.html", '<ul class="btn-list clearfix"><li><button type="button" class="btn btn-primary btn-icon"><i class="ion-android-download"></i></button></li><li><button type="button" class="btn btn-default btn-icon"><i class="ion-stats-bars"></i></button></li><li><button type="button" class="btn btn-success btn-icon"><i class="ion-android-checkmark-circle"></i></button></li><li><button type="button" class="btn btn-info btn-icon"><i class="ion-information"></i></button></li><li><button type="button" class="btn btn-warning btn-icon"><i class="ion-android-warning"></i></button></li><li><button type="button" class="btn btn-danger btn-icon"><i class="ion-nuclear"></i></button></li></ul><h5 class="panel-subtitle">Buttons with icons</h5><ul class="btn-list clearfix"><li><button type="button" class="btn btn-primary btn-with-icon"><i class="ion-android-download"></i>Primary</button></li><li><button type="button" class="btn btn-default btn-with-icon"><i class="ion-stats-bars"></i>Default</button></li><li><button type="button" class="btn btn-success btn-with-icon"><i class="ion-android-checkmark-circle"></i>Success</button></li><li><button type="button" class="btn btn-info btn-with-icon"><i class="ion-information"></i>Info</button></li><li><button type="button" class="btn btn-warning btn-with-icon"><i class="ion-android-warning"></i>Warning</button></li><li><button type="button" class="btn btn-danger btn-with-icon"><i class="ion-nuclear"></i>Danger</button></li></ul>'),
            e.put("app/pages/ui/buttons/widgets/largeButtons.html", '<div class="row btns-row btns-same-width-lg"><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-primary btn-lg">Primary</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-success btn-lg">Success</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-info btn-lg">Info</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-default btn-lg">Default</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-warning btn-lg">Warning</button></div><div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-danger btn-lg">Danger</button></div></div>'),
            e.put("app/pages/ui/buttons/widgets/progressButtons.html", '<div class="progress-buttons-container text-center default-text"><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">fill horizontal</span> <button progress-button="progressFunction()" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">fill vertical</span> <button progress-button="progressFunction()" pb-direction="vertical" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">shrink horizontal</span> <button progress-button="progressFunction()" pb-style="shrink" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">shrink vertical</span> <button progress-button="progressFunction()" pb-style="shrink" pb-direction="vertical" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-bottom<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-bottom" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-top<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-top" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-left<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-left" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-angle-right<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-angle-right" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-down<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-down" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-up<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-up" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-left<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-left" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">rotate-side-right<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-side-right" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6 col-lg-3"><span class="button-title">rotate-back<br>perspective</span> <button progress-button="progressFunction()" pb-style="rotate-back" class="btn btn-success">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">flip-open<br>perspective</span> <button progress-button="progressFunction()" pb-style="flip-open" class="btn btn-danger">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">slide-down<br>horizontal</span> <button progress-button="progressFunction()" pb-style="slide-down" class="btn btn-warning">Submit</button></section><section class="col-md-6 col-lg-3"><span class="button-title">move-up<br>horizontal</span> <button progress-button="progressFunction()" pb-style="move-up" class="btn btn-info">Submit</button></section></div><div class="row"><section class="col-md-6"><span class="button-title">top-line<br>horizontal</span> <button progress-button="progressFunction()" pb-style="top-line" class="btn btn-success">Submit</button></section><section class="col-md-6"><span class="button-title">lateral-lines<br>vertical</span> <button progress-button="progressFunction()" pb-style="lateral-lines" class="btn btn-info">Submit</button></section></div></div>'),
            e.put("app/pages/ui/icons/widgets/fontAwesomeIcons.html", '<div class="row icons-list success awesomeIcons"><div class="col-xs-2" ng-repeat="icon in icons.fontAwesomeIcons"><i class="fa {{icon}}"></i></div></div><a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank" class="see-all-icons">See all Font Awesome icons</a>'),
            e.put("app/pages/ui/icons/widgets/ionicons.html", '<div class="row icons-list primary"><div class="col-xs-2" ng-repeat="icon in icons.ionicons"><i class="{{icon}}"></i></div></div><a href="http://ionicons.com/" target="_blank" class="see-all-icons">See all ionicons icons</a>'),
            e.put("app/pages/ui/icons/widgets/kameleon.html", '<div class="row clearfix"><div class="kameleon-row" ng-repeat="icon in icons.kameleonIcons"><div class="kameleon-icon"><img ng-src="{{:: (icon.img | kameleonImg )}}"><span>{{icon.name}}</span></div></div></div><a href="http://www.kameleon.pics/" target="_blank" class="see-all-icons">See all Kamaleon icons</a>'),
            e.put("app/pages/ui/icons/widgets/kameleonRounded.html", '<div class="row clearfix"><div class="kameleon-row" ng-repeat="icon in icons.kameleonRoundedIcons"><div class="kameleon-icon with-round-bg {{icon.color}}"><img ng-src="{{::( icon.img | kameleonImg )}}"><span>{{ icon.name }}</span></div></div></div><a href="http://www.kameleon.pics/" target="_blank" class="see-all-icons">See all Kamaleon icons</a>'),
            e.put("app/pages/ui/icons/widgets/socicon.html", '<div class="row icons-list danger"><div class="col-xs-2" ng-repeat="icon in icons.socicon"><i class="socicon">{{ icon }}</i></div></div><a href="http://www.socicon.com/chart.php" target="_blank" class="see-all-icons">See all Socicon icons</a>'),
            e.put("app/pages/ui/modals/modalTemplates/basicModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>'),
            e.put("app/pages/ui/modals/modalTemplates/dangerModal.html", '<div class="modal-content"><div class="modal-header bg-danger"><i class="ion-flame modal-icon"></i><span>Error</span></div><div class="modal-body text-center">Your information hasn\'t been saved!</div><div class="modal-footer"><button type="button" class="btn btn-danger" ng-click="$dismiss()">OK</button></div></div>'),
            e.put("app/pages/ui/modals/modalTemplates/infoModal.html", '<div class="modal-content"><div class="modal-header bg-info"><i class="ion-information-circled modal-icon"></i><span>Information</span></div><div class="modal-body text-center">You\'ve got a new email!</div><div class="modal-footer"><button type="button" class="btn btn-info" ng-click="$dismiss()">OK</button></div></div>'),
            e.put("app/pages/ui/modals/modalTemplates/largeModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>'),
            e.put("app/pages/ui/modals/modalTemplates/smallModal.html", '<div class="modal-content"><div class="modal-header"><button type="button" class="close" ng-click="$dismiss()" aria-label="Close"><em class="ion-ios-close-empty sn-link-close"></em></button><h4 class="modal-title">Modal title</h4></div><div class="modal-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div><div class="modal-footer"><button type="button" class="btn btn-primary" ng-click="$dismiss()">Save changes</button></div></div>'),
            e.put("app/pages/ui/modals/modalTemplates/successModal.html", '<div class="modal-content"><div class="modal-header bg-success"><i class="ion-checkmark modal-icon"></i><span>Success</span></div><div class="modal-body text-center">Your information has been saved successfully</div><div class="modal-footer"><button type="button" class="btn btn-success" ng-click="$dismiss()">OK</button></div></div>'),
            e.put("app/pages/ui/modals/modalTemplates/warningModal.html", '<div class="modal-content"><div class="modal-header bg-warning"><i class="ion-android-warning modal-icon"></i><span>Warning</span></div><div class="modal-body text-center">Your computer is about to explode!</div><div class="modal-footer"><button type="button" class="btn btn-warning" ng-click="$dismiss()">OK</button></div></div>'),
            e.put("app/pages/ui/modals/notifications/notifications.html", '<div class="modal-buttons same-width clearfix" ng-controller="NotificationsCtrl"><button type="button" class="btn btn-success" ng-click="showSuccessMsg()">Success Notification</button> <button type="button" class="btn btn-info" ng-click="showInfoMsg()">Info Notification</button> <button type="button" class="btn btn-warning" ng-click="showWarningMsg()">Warning Notification</button> <button type="button" class="btn btn-danger" ng-click="showErrorMsg()">Danger Notification</button></div>'),
            e.put("app/pages/ui/modals/progressModal/progressModal.html", '<div class="modal-content" ng-controller="ProgressModalCtrl"><div class="modal-body"><progress-bar-round></progress-bar-round></div><div class="modal-footer"></div></div>'),
            e.put("app/pages/ui/progressBars/widgets/animated.html", '<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div></div><div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div></div><div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div></div><div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div></div>'),
            e.put("app/pages/ui/progressBars/widgets/basic.html", '<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div></div><div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div></div><div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div></div><div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div></div>'),
            e.put("app/pages/ui/progressBars/widgets/label.html", '<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">40% Complete (success)</div></div><div class="progress"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">20% Complete</div></div><div class="progress"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">60% Complete (warning)</div></div><div class="progress"><div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">80% Complete (danger)</div></div>'),
            e.put("app/pages/ui/progressBars/widgets/stacked.html", '<div class="progress"><div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span></div><div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div><div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only">10% Complete (danger)</span></div><div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 20%"><span class="sr-only">20% Complete (warning)</span></div></div>'),
            e.put("app/pages/ui/progressBars/widgets/striped.html", '<div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span></div></div><div class="progress"><div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span></div></div><div class="progress"><div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span></div></div><div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span></div></div>'),
            e.put("app/pages/form/inputs/widgets/datePickers/datePickers.html", '<div class="datepicker row"><div class="col-xlg-6 col-md-12 col-sm-6" ng-controller="datepickerCtrl"><h4>Inline</h4><label>Selected date is: <em>{{dt | date:\'fullDate\' }}</em></label><div class="uib-datepicker-wrap"><uib-datepicker ng-model="dt" datepicker-options="options"></uib-datepicker></div></div><div class="col-xlg-6 col-md-12 col-sm-6" ng-controller="datepickerpopupCtrl"><h4>Popup</h4><label>Selected date is: <em>{{dt | date:\'fullDate\' }}</em></label><p class="input-group"><input type="text" class="form-control" uib-datepicker-popup="{{format}}" datepicker-options="options" ng-model="dt" is-open="opened" ng-required="true" close-text="Close" alt-input-formats="altInputFormats" show-button-bar="false"> <span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="open()"><i class="glyphicon glyphicon-calendar"></i></button></span></p><label>Format: <span class="muted-text">(manual alternate <em>{{altInputFormats[0]}}</em>)</span></label><select class="form-control" ng-model="format" ng-options="f for f in formats"><option></option></select></div></div>'),
            e.put("app/pages/form/inputs/widgets/oldSelect/select.html", '<div ng-controller="OldSelectpickerPanelCtrl as selectpickerVm"><div class="form-group"><select class="form-control selectpicker" selectpicker="" title="Standard Select" ng-model="selectpickerVm.standardSelected" ng-options="item as item.label for item in selectpickerVm.standardSelectItems"></select></div><div class="form-group"><select class="form-control selectpicker with-search" data-live-search="true" title="Select With Search" selectpicker="" ng-model="selectpickerVm.searchSelectedItem" ng-options="item as item.label for item in selectpickerVm.selectWithSearchItems"></select></div><div class="form-group"><select class="form-control selectpicker" title="Option Types" selectpicker=""><option>Standard option</option><option data-subtext="option subtext">Option with subtext</option><option disabled="">Disabled Option</option><option data-icon="glyphicon-heart">Option with cion</option></select></div><div class="form-group"><select class="form-control selectpicker" disabled="" title="Disabled Select" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div><div class="row"><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Select with Option Groups" selectpicker="" ng-model="selectpickerVm.groupedSelectedItem" ng-options="item as item.label group by item.group for item in selectpickerVm.groupedSelectItems"></select></div></div><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Select with Divider" selectpicker=""><option>Group 1 - Option 1</option><option>Group 1 - Option 2</option><option data-divider="true"></option><option>Group 2 - Option 1</option><option>Group 2 - Option 2</option></select></div></div></div><div class="form-group"><select class="form-control" title="Multiple Select" multiple="" selectpicker="" ng-model="selectpickerVm.multipleSelectedItems" ng-options="item as item.label for item in selectpickerVm.standardSelectItems"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div><div class="form-group"><select class="form-control" title="Multiple Select with Limit" multiple="" data-max-options="2" selectpicker="" ng-model="selectpickerVm.multipleSelectedItems2" ng-options="item as item.label for item in selectpickerVm.standardSelectItems"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div><div class="row"><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Primary Select" data-style="btn-primary" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Success Select" data-style="btn-success" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Warning Select" data-style="btn-warning" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div></div><div class="col-sm-6"><div class="form-group"><select class="form-control" title="Info Select" data-style="btn-info" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Danger Select" data-style="btn-danger" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div><div class="form-group"><select class="form-control" title="Inverse Select" data-style="btn-inverse" data-container="body" selectpicker=""><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select></div></div></div></div>'),

            e.put("app/pages/form/inputs/widgets/oldSwitches/switch.html", '<div ng-controller="OldSwitchPanelCtrl as switchPanelVm" class="switches clearfix"><switch color="primary" ng-model="switchPanelVm.switcherValues.primary"></switch><switch color="warning" ng-model="switchPanelVm.switcherValues.warning"></switch><switch color="danger" ng-model="switchPanelVm.switcherValues.danger"></switch><switch color="info" ng-model="switchPanelVm.switcherValues.info"></switch><switch color="success" ng-model="switchPanelVm.switcherValues.success"></switch></div>'),
            e.put("app/pages/form/inputs/widgets/select/select.html", '<div class="ng-cloak" ng-controller="SelectpickerPanelCtrl as selectpickerVm"><div class="form-group"><ui-select ng-model="selectpickerVm.selectedItem.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="false"><ui-select-match placeholder="Standard Select"><span>{{$select.selected.label}}</span></ui-select-match><ui-select-choices repeat="standardItem in selectpickerVm.standardSelectItems | filter: $select.search"><span ng-bind-html="standardItem.label"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.withSearchItem.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="true"><ui-select-match placeholder="Select With Search">{{$select.selected.label}}</ui-select-match><ui-select-choices repeat="withSearchItem in selectpickerVm.selectWithSearchItems | filter: $select.search"><span ng-bind-html="withSearchItem.label"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.disableItem.selected" class="btn-group bootstrap-select form-control" ng-disabled="true" append-to-body="true" search-enabled="false"><ui-select-match placeholder="Disabled Selection"><span>{{$select.selected.label}}</span></ui-select-match><ui-select-choices repeat="disableItem in selectpickerVm.disableItems | filter: $select.search"><span ng-bind-html="disableItem.label"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.groupedItems.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="true"><ui-select-match placeholder="Select With Option Groups">{{$select.selected.label}}</ui-select-match><ui-select-choices repeat="groupedItems in selectpickerVm.groupedSelectItems | groupSelectpickerOptions: {label: $select.search}" group-by="\'group\'"><span ng-bind-html="groupedItems.label | highlight: $select.search"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select ng-model="selectpickerVm.groupedByItems.selected" class="btn-group bootstrap-select form-control" ng-disabled="false" append-to-body="true" search-enabled="true"><ui-select-match placeholder="Select With Option Groups Function">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="groupedByItems in selectpickerVm.groupedBySelectItems | filter: $select.search" group-by="selectpickerVm.someGroupFn"><span ng-bind-html="groupedByItems.name | highlight: $select.search"></span></ui-select-choices></ui-select></div><div class="form-group"><ui-select multiple="" ng-model="selectpickerVm.multipleItem.selected" ng-disabled="false" search-enabled="true" append-to-body="true" class="form-control"><ui-select-match placeholder="Multiple Select">{{$item.label}}</ui-select-match><ui-select-choices repeat="multipleItem in selectpickerVm.multipleSelectItems | filter: $select.search">{{multipleItem.label}}</ui-select-choices></ui-select></div><div class="form-group"><div class="input-group"><ui-select multiple="" ng-model="selectpickerVm.withDeleteItem.selected" ng-disabled="false" search-enabled="true" append-to-body="true" class="form-control form-control"><ui-select-match placeholder="Select With Clear Button">{{$item.label}}</ui-select-match><ui-select-choices repeat="withDeleteItem in selectpickerVm.withDeleteSelectItems | filter: $select.search">{{withDeleteItem.label}}</ui-select-choices></ui-select><span class="input-group-btn"><button type="button" ng-click="selectpickerVm.withDeleteItem.selected = undefined" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></span></div></div></div>'),
            e.put("app/pages/form/inputs/widgets/switches/switch.html", '<div ng-controller="SwitchDemoPanelCtrl as vm"><ba-switcher switcher-style="primary" switcher-value="vm.switches.s1"></ba-switcher><ba-switcher switcher-style="success" switcher-value="vm.switches.s2"></ba-switcher><ba-switcher switcher-style="warning" switcher-value="vm.switches.s3"></ba-switcher><ba-switcher switcher-style="danger" switcher-value="vm.switches.s4"></ba-switcher><ba-switcher switcher-style="info" switcher-value="vm.switches.s5"></ba-switcher></div>'),
            e.put("app/pages/form/inputs/widgets/tagsInput/tagsInput.html", '<div class="form-group"><div class="form-group"><input type="text" tag-input="primary" value="Amsterdam,Washington,Sydney,Beijing,Cairo" data-role="tagsinput" placeholder="Add Tag"></div><div class="form-group"><input type="text" tag-input="warning" value="Minsk,Prague,Vilnius,Warsaw" data-role="tagsinput" placeholder="Add Tag"></div><div class="form-group"><input type="text" tag-input="danger" value="London,Berlin,Paris,Rome,Munich" data-role="tagsinput" placeholder="Add Tag"></div></div>'),
            e.put("app/pages/administration/sector/sector.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/language/language.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/clientele/clientele.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/category/category.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/component/component.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/questionnaire/questionnaire.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/item/item.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/offre/offre.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/personaloffer/personaloffer.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>'),
            e.put("app/pages/administration/permissionaccess/permissionaccess.html", '<div class="widgets"><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Rows" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableRowTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Editable Cells" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/editableTable.html"></div></div></div></div><div class="row"><div class="col-md-12"><div ba-panel="" ba-panel-title="Smart Table With Filtering, Sorting And Pagination" ba-panel-class="with-scroll"><div include-with-scope="app/pages/tables/widgets/smartTable.html"></div></div></div></div></div>')

    }]);


var input_radio_field_value;
var input_chartjs_value;
var input_textarea_field_value;

function save_data_post() {
    var x = $("#from_table").serializeArray();
    $.each(x, function(i, field) {
        if (field.name == "text-preview")
            input_radio_field_value = field.value;

        if (field.name == "number-preview")
            input_chartjs_value = field.value;

        if (field.name == "text1-preview")
            input_textarea_field_value = field.value;
    });
    
    $.post("scripts/Update.php", {
        input_radio_field: input_radio_field_value,
        input_chartjs: input_chartjs_value,
        input_textarea_field: input_textarea_field_value
    }, function(result) {
        alert("save Ok!")
    }, 'json');
}


function smartTableData() {
    //$.getJSON("scripts/Connection.php", function(result){
    //var myJSON = JSON.stringify(result);
    //smartTableData_val=myJSON.replace(/"(\w+)"\s*:/g, '$1:');
    //smartTableData_val = result;
    //smartTableData_val=[{"id":"1","firstName":"asd","lastName":"asd","username":"asd","email":"asd@asd.com","age":"12"},{"id":"2","firstName":"dfg","lastName":"dfg","username":"dfg","email":"dfg@dfg.com","age":"25"},{"id":"3","firstName":"qwe","lastName":"qwe","username":"qwe","email":"qwe@qwe.com","age":"45"}];
    //});
}

function datatest() {

    $.post(
        "scripts/Connection.php", {
            table_name: 'smarttable'
        },
        function(result) {

            smartTableData_val = result;

        },
        'json'
    );


    $.post(
        "scripts/Connection.php", {
            table_name: 'user_data'
        },
        function(result) {

            userData_val = result;

        },
        'json'
    );


    $.post(
        "scripts/Connection.php", {
            table_name: 'chart_js'
        },
        function(result) {

            count = result.length;

            for (var i = 0; i < count; ++i) {
                chartjs_labels.push(result[i].labels);
                chartjs_data.push(result[i].data);
                chartjs_mlabels.push(result[i].mlabels);
            }

            //console.log(chartjs_labels);

        },
        'json'
    );



    $.post("scripts/Connection.php", {
        table_name: 'fileupload'
    }, function(result) {
        Formdata_contant = result[0].str_con;

    }, 'json');




}