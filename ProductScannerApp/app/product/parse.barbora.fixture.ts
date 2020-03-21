export const link = 'https://www.barbora.ee/toode/kiirkaerahelbed-nordic-500-g'
export const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />

    <meta name="apple-itunes-app" content="app-id=1339130115">
    <meta name="description" content="Kiirkaerahelbed" />
    <meta name="og:description" content="Kiirkaerahelbed" />
    <meta name="og:type" content="website" />
    <meta name="og:title" content="Kiirkaerahelbed NORDIC 500g" />
    <meta name="og:sitename" content="Barbora" />


    <link rel="image_src" href="/Assets/Images/logo-square.png" />
    <meta name="og:image" content="/Assets/Images/logo-square-min-EE.png" />

    <link rel="shortcut icon" href="/Assets/Images/favicon.ico" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=latin,latin-ext" rel="stylesheet" type="text/css">



    <link rel="stylesheet" type="text/css" href="/Assets/Styles/main.css?v=202003141221" />

    <title>Kiirkaerahelbed NORDIC 500g</title>

    <script type="text/javascript">
        window.currentPage = "allPages";
    </script>

    <script type="text/javascript">
        function showNetworkErrorAlert() {
            alert('Viimane toiming ebaõnnestus. Proovige uuesti või laadige leht uuesti');
        }
    </script>

    <script type="text/javascript" onerror="showNetworkErrorAlert()" src="/shared/translations?languageId=b06b0c92-7d3d-4ac4-87df-27dfdb6ca69d"></script>

    <script type="text/javascript">
        if (!document.location.origin) {
            document.location.origin = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ':' + document.location.port : '');
        }
        // these are needed in order not to have to hardcode urls in JavaScript
        // and to be able to change route names and not to break links



        window.b_urls = {
            home: "/",
            cart: "/ostukorv",
            search: "/otsing",
            searchSuggestions: "/otsingu-abi",
            product: "/toode",
            timeslots: "/tarneaknad",
            payment: "/maksmine",
            termsAndConditions: "/info/termsandconditions",
            whatisfavourite: "/info/whatisfavourite",
            userInfoNew: "/uus-minu-andmed",
            eShopApiBaseUrl: document.location.origin + "/api/eshop/v1/",
            popUpCampaignImageUrlTemplate: document.location.origin + "/api/images/GetPopUpCampaignImage?id=",
            privacyPolicy: "/info/privacypolicy",
            serviceZones: "/info/teeninduspiirkonnad",
            recommendations: "/soovitused",
            recipes: "receptai",
            recipesStandalone: "receptai-programelems",
            driveInPlaces: "/info/driveinplaces",
        };

        window.b_data = {
            enviromentLocation: "EE",
            loyaltyCardInfoLink: "http://www.maxima.ee",
            customerSupportEmail: "info@barbora.ee",
            customerSupportPhone: "555 66 369",
            jobApplicationsEmail:"karjera@barbora.lt",
            androidAppDownloadLink: "https://play.google.com/store/apps/details?id=ee.barbora",
            iOsAppDownloadLink: "https://itunes.apple.com/us/app/appname/id1339130115?ls=1&amp;mt=8",
            customerDataRouteName: "uus-minu-andmed",
            TranslationsPlaceholderMatchingRegex: /{([0-9])+:(.+?)}/g,
                authCookieName: ".BRBAUTH",
            javaScriptTimeoutMilliseconds: 30000,
            eShopDisplayUrl: "barbora.ee",
            mainDonationsCategoryId: "fad338a7-5773-4bc4-bd24-aa2b00d49f8a",
            donationsUrlFragment: "annetused",
            deliveryMethodType: {"Address":1,"Locker":2,"PickupPoint":3,"DriveIn":4},
            packagingTypes: {"PlasticBag":1,"PaperBag":2},
            enviromentLocations: {"Lithuania":"LT","Latvia":"LV","Estonia":"EE"},
            recipesRecommendationsCategoryId: "9daad16a-8e7f-4b24-9e79-faf8af9055c9",
            recipesSlugToIgnore: "kategorija",
            shouldShowRecipesForLT: "False",
            shouldShowExpressDeliveryZones: "False",
            confettiPopUpCampaignId: ""
        };

        window.b_js_routes = [{"RouteName":"customerDataPagesList","Url":"/","ControllerName":null,"ActionName":null,"SequenceInRouting":39,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataAddressList","Url":"/kohaletoimetamise-aadress","ControllerName":null,"ActionName":null,"SequenceInRouting":40,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataAddressEdit","Url":"/kohaletoimetamise-aadress/:id","ControllerName":null,"ActionName":null,"SequenceInRouting":41,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataAddressAdd","Url":"/kohaletoimetamise-aadress/lisa-aadress","ControllerName":null,"ActionName":null,"SequenceInRouting":42,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataOrderHistory","Url":"/tellimuste-ajalugu","ControllerName":null,"ActionName":null,"SequenceInRouting":43,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataAciuCard","Url":"/minu-aitah-kaart","ControllerName":null,"ActionName":null,"SequenceInRouting":44,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataUserSettings","Url":"/kasutaja-seaded","ControllerName":null,"ActionName":null,"SequenceInRouting":45,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataChangeEmail","Url":"/kasutaja-seaded/muuda-epost","ControllerName":null,"ActionName":null,"SequenceInRouting":46,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataChangePassword","Url":"/kasutaja-seaded/muuda-parool","ControllerName":null,"ActionName":null,"SequenceInRouting":47,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataOrderHistoryDetails","Url":"/ostude-ajalugu/:id","ControllerName":null,"ActionName":null,"SequenceInRouting":48,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataSavedBaskets","Url":"/salvestatud-ostukorv","ControllerName":null,"ActionName":null,"SequenceInRouting":49,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataPaymentCards","Url":"/maksekaardid","ControllerName":null,"ActionName":null,"SequenceInRouting":50,"Active":true,"IsReactRoute":false},{"RouteName":"customerDataSavedBasketsItem","Url":"/salvestatud-ostukorv/:id","ControllerName":null,"ActionName":null,"SequenceInRouting":51,"Active":true,"IsReactRoute":false}];

        window.b_js_urls = {};
        window.b_js_routes.forEach(function(route) {
            window.b_js_urls[route.RouteName] = window.b_urls.userInfoNew + route.Url;
        });

        window.b_react_routes = [{"RouteName":"recipesRecipe","Url":"/kategorija/:categoryUrlSlug/:recipeUrlSlug","ControllerName":null,"ActionName":null,"SequenceInRouting":67,"Active":true,"IsReactRoute":true},{"RouteName":"recipesCategory","Url":"/kategorija/:categoryUrlSlug","ControllerName":null,"ActionName":null,"SequenceInRouting":68,"Active":true,"IsReactRoute":true},{"RouteName":"recipesSavedRecipe","Url":"/issaugoti-receptai/:recipeUrlSlug","ControllerName":null,"ActionName":null,"SequenceInRouting":69,"Active":true,"IsReactRoute":true},{"RouteName":"recipesSaved","Url":"/issaugoti-receptai","ControllerName":null,"ActionName":null,"SequenceInRouting":70,"Active":true,"IsReactRoute":true}];

        // google analytics
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga("create", "UA-45214439-9", "auto");
        ga("require", "ec");


            ga('set', 'dimension1', '000000000000140325'); // dynx_itemid == Data Feed ID
            ga('set', 'dimension2', ''); // dynx_itemid2 == Data Feed ID2
            ga('set', 'dimension3', 'offerdetail'); // dynx_pagetype
            ga('set', 'dimension4', '0,8000'); // dynx_totalvalue == Data Feed Sale Price / Price (jeigu yra - akcijos kaina, jeigu ne, įprasta kaina)


        ga('send', 'pageview');

        // facebook pixel code
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }; if (!f._fbq) f._fbq = n;
            n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', '//connect.facebook.net/en_US/fbevents.js');

        fbq('init', '231057490908594');
        fbq('track', "PageView");

        var userActions = {
            click: "click",
            detail: "detail",
            addToCart: "addToCart",
            removeFromCart: "removeFromCart",
            checkoutStepViewBasket: "checkout-step-view-basket",
            checkoutStepShipping: "checkout-step-shipping",
            checkoutStepPayment: "checkout-step-payment",
            checkoutStepReceipt: "checkout-step-receipt",
            purchase: "purchase",
            completeRegistration: "CompleteRegistration",
            impression: "impression",
            internalPromotionClick: "internalPromotionClick",
            promotionView: "promotionView",
            promotionClick: "promotionClick"
        };

        var gaEventCategories = {
            product: "product",
            cart: "cart",
            checkout: "checkout",
            customer: "customer",
            promotions: "promotions"
        };

        var reportToFacebook = function (action, data) {
            if (data === undefined) {
                fbq('track', action);
            }
            else {
                fbq('track', action, data);
            }
        };

        var getInfoForFacebookFromProductList = function(products) {
            return {
                "content_ids": products.map(function(inv) { return inv.id; }),
                "content_type": "product",
                "contents": products.map(function(inv) {
                    var sUnit = inv.units ? inv.units.find(function(obj) { return obj.unit === 'kg' }) : undefined;
                    if (sUnit === undefined) {
                        sUnit = inv.unit;
                    }
                    return {
                        "id": inv.id,
                        "quantity": inv.quantity_unit_independent ? inv.quantity_unit_independent : inv.quantity,
                        "item_price": sUnit ? sUnit.price : inv.price
                    }
                })
            };
        }

        var getInfoForFacebookFromProduct = function(product, value, currency) {
            return {
                "content_ids": product.id,
                "content_type": "product",
                "value": value,
                "currency": currency
            }
        }

        var getInfoForGoogleAnalyticsFromProductInfo = function (product, isImpression) {

            if (isImpression !== true) {
                isImpression = false;
            }



            var productData = {};

            var missingFields = [];

            if (product.id !== null && product.id !== undefined) {
                productData.id = product.id;
            }
            else {
                missingFields.push("id");
            }

            if (product.title !== null && product.title !== undefined) {
                productData.name = product.title;
            }
            else {
                missingFields.push("title");
            }

            if (product.brand_name !== null && product.brand_name !== undefined) {
                productData.brand = product.brand_name;
            }

            if (product.category_name_full_path !== null && product.category_name_full_path !== undefined) {
                productData.category = product.category_name_full_path;
            }
            else {
                missingFields.push("category_name_full_path");
            }

            if (
                (
                        product.unit !== null
                            && product.unit !== undefined
                            && product.unit.price !== null
                            && product.unit.price !== undefined
                    )
                    ||
                    (
                        product.price !== null
                            && product.price !== undefined
                    )
            ) {
                try {
                    productData.price = product.unit.price;
                }
                catch (e) {
                    productData.price = product.price;
                }
            }
            else {
                missingFields.push("price");
            }

            if (product.product_position_in_list !== null && product.product_position_in_list !== undefined) {
                productData.position = product.product_position_in_list;
            }

            if (isImpression === false) {
                if (product.quantity_unit_independent !== null && product.quantity_unit_independent !== undefined) {
                    productData.quantity = product.quantity_unit_independent < 1 ? 1 : product.quantity_unit_independent;
                }
                else if (product.quantity !== null && product.quantity !== undefined) {
                    productData.quantity = product.quantity < 1 ? 1 : product.quantity;
                }
            }

            if (isImpression === true) {
                if (product.list !== null && product.list !== undefined) {
                    productData.list = product.list;
                }
                else {
                    missingFields.push("list");
                }
            }

            if (missingFields.length > 0) {
                console.warn("missing fields: " + missingFields.join(", "));
            }

            return productData;
        };

        var gaIntercept = function () {
            var argumentsExcludingFirst = Array.prototype.slice.call(arguments, 1);

            ga.apply(this, argumentsExcludingFirst);
        };

        var reportUserActionToThirdParty = function (action, data) {
            var defaultCurrency = "EUR";
            var dataForFb = null;

            switch (action) {
                case userActions.click:
                    gaIntercept(userActions.click, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                    gaIntercept(userActions.click, "ec:setAction", "click", {
                        list: data.list
                    });
                    gaIntercept(userActions.click, "send", "event", gaEventCategories.product, action);
                    break;

                case userActions.detail:
                    //gaIntercept(userActions.detail, "ec:addImpression", getInfoForGoogleAnalyticsFromProductInfo(data, true));
                    gaIntercept(userActions.detail, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                    gaIntercept(userActions.detail, "ec:setAction", "detail");
                    gaIntercept(userActions.detail, "send", "event", gaEventCategories.product, action);
                    dataForFb = getInfoForFacebookFromProduct(data, data.price, defaultCurrency);
                    reportToFacebook("ViewContent", dataForFb);
                    break;

                case userActions.addToCart:
                    gaIntercept(userActions.addToCart, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                    gaIntercept(userActions.addToCart, "ec:setAction", "add", {
                        list: data.list
                    });
                    gaIntercept(userActions.addToCart, "send", "event", gaEventCategories.cart, action);
                    dataForFb = getInfoForFacebookFromProductList([data]);
                    reportToFacebook("AddToCart", dataForFb);
                    break;

                case userActions.removeFromCart:
                    gaIntercept(userActions.removeFromCart, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                    gaIntercept(userActions.removeFromCart, "ec:setAction", "remove");
                    gaIntercept(userActions.removeFromCart, "send", "event", gaEventCategories.cart, action);
                    break;

                case userActions.checkoutStepViewBasket:
                    data.forEach(function (product) {
                        gaIntercept(userActions.checkoutStepViewBasket, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                    });
                    gaIntercept(userActions.checkoutStepViewBasket, "ec:setAction", "checkout", { "step": 1 });
                    gaIntercept(userActions.checkoutStepViewBasket, "send", "event", gaEventCategories.checkout, action);
                    break;

                case userActions.checkoutStepShipping:
                    data.forEach(function (product) {
                        gaIntercept(userActions.checkoutStepShipping, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                    });
                    gaIntercept(userActions.checkoutStepShipping, "ec:setAction", "checkout", { "step": 2 });
                    gaIntercept(userActions.checkoutStepShipping, "send", "event", gaEventCategories.checkout, action);
                    break;

                case userActions.checkoutStepPayment:
                    data.forEach(function (product) {
                        gaIntercept(userActions.checkoutStepPayment, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                    });
                    gaIntercept(userActions.checkoutStepPayment, "ec:setAction", "checkout", { "step": 3 });
                    gaIntercept(userActions.checkoutStepPayment, "send", "event", gaEventCategories.checkout, action);
                    break;

                case userActions.checkoutStepReceipt:
                    try {
                        data.inventoryInfo.forEach(function (product) {
                            gaIntercept(userActions.checkoutStepReceipt, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                        });
                        gaIntercept(userActions.checkoutStepReceipt, "ec:setAction", "checkout", { "step": 4, "option": data.paymentSource });
                        gaIntercept(userActions.checkoutStepReceipt, "send", "event", gaEventCategories.checkout, action);

                    } catch (e) {
                        try {
                            // extra logging
                            Sentry.captureException(e, {
                                extraData: {
                                    data: JSON.stringify(data),
                                },
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    break;

                case userActions.purchase:
                    dataForFb = getInfoForFacebookFromProductList(data.products);
                    dataForFb["value"] = data.orderPrice;
                    dataForFb["currency"] = defaultCurrency;
                    reportToFacebook("Purchase", dataForFb);

                    // report to ga

                    if (data.products !== null && data.products !== undefined && Array.isArray(data.products)) {
                        data.products.forEach(function (product) {
                            gaIntercept(userActions.purchase, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                        });

                        var purchaseData = {
                            "id": data.orderId,
                            "affiliation": data.shopCode,
                            "revenue": data.orderPrice,
                            "shipping": data.deliveryPrice,
                        };

                        if (data.coupon !== undefined && data.coupon !== null) {
                            purchaseData.coupon = data.coupon;
                        }

                        gaIntercept(userActions.purchase, "ec:setAction", "purchase", purchaseData);

                        gaIntercept(userActions.purchase, "send", "event", gaEventCategories.checkout, action);
                    }

                    break;

                case userActions.internalPromotionClick:

                    gaIntercept(userActions.internalPromotionClick, "ec:addPromo", {
                        "id": data.id,
                        "name": data.name,
                        "position": data.position
                    });
                    gaIntercept(userActions.internalPromotionClick, "ec:setAction", "promo_click");
                    gaIntercept(userActions.internalPromotionClick, "send", "event", "Internal Promotions", "click", data.name);
                    break;

                case userActions.impression:
                    data.forEach(function (product) {
                        gaIntercept(userActions.impression, "ec:addImpression", getInfoForGoogleAnalyticsFromProductInfo(product, true));
                    });
                    gaIntercept(userActions.impression, "send", "event", gaEventCategories.product, action);
                    break;

                case userActions.completeRegistration:
                    gaIntercept(userActions.completeRegistration, "send", "event", gaEventCategories.customer, action);
                    reportToFacebook(action, data);
                    break;

                default:
                    reportToFacebook(action, data);
            }
        };


        var reportUserActionToGtm = function (action, ecommerceObj) {
            var currentDevEnviroment = "PRD";
            if (currentDevEnviroment !== null && currentDevEnviroment !== "" && currentDevEnviroment === "PRD")
            {
                return;
            }

            var customerId = "";
            window.dataLayer = window.dataLayer || [];

            switch (action) {
                //case userActions.click:
                //    gaIntercept(userActions.click, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                //    gaIntercept(userActions.click, "ec:setAction", "click", {
                //        list: data.list
                //    });
                //    gaIntercept(userActions.click, "send", "event", gaEventCategories.product, action);
                //    break;

                //case userActions.detail:
                //    //gaIntercept(userActions.detail, "ec:addImpression", getInfoForGoogleAnalyticsFromProductInfo(data, true));
                //    gaIntercept(userActions.detail, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                //    gaIntercept(userActions.detail, "ec:setAction", "detail");
                //    gaIntercept(userActions.detail, "send", "event", gaEventCategories.product, action);
                //    dataForFb = getInfoForFacebookFromProduct(data, data.price, defaultCurrency);
                //    reportToFacebook("ViewContent", dataForFb);
                //    break;

                case userActions.addToCart:
                    window.dataLayer.push({
                        event: "eec.add",
                        userID: customerId,
                        ecommerce: ecommerceObj,
                    });
                    break;

                case userActions.promotionView:
                    window.dataLayer.push({
                        event: "eec.promotionView",
                        ecommerce: ecommerceObj,
                    });
                    break;

                case userActions.promotionClick:
                    window.dataLayer.push({
                        event: "eec.promotionClick",
                        ecommerce: ecommerceObj,
                    });
                    break;

                //case userActions.removeFromCart:
                //    gaIntercept(userActions.removeFromCart, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(data));
                //    gaIntercept(userActions.removeFromCart, "ec:setAction", "remove");
                //    gaIntercept(userActions.removeFromCart, "send", "event", gaEventCategories.cart, action);
                //    break;

                //case userActions.checkoutStepViewBasket:
                //    data.forEach(function (product) {
                //        gaIntercept(userActions.checkoutStepViewBasket, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                //    });
                //    gaIntercept(userActions.checkoutStepViewBasket, "ec:setAction", "checkout", { "step": 1 });
                //    gaIntercept(userActions.checkoutStepViewBasket, "send", "event", gaEventCategories.checkout, action);
                //    break;

                //case userActions.checkoutStepShipping:
                //    data.forEach(function (product) {
                //        gaIntercept(userActions.checkoutStepShipping, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                //    });
                //    gaIntercept(userActions.checkoutStepShipping, "ec:setAction", "checkout", { "step": 2 });
                //    gaIntercept(userActions.checkoutStepShipping, "send", "event", gaEventCategories.checkout, action);
                //    break;

                //case userActions.checkoutStepPayment:
                //    data.forEach(function (product) {
                //        gaIntercept(userActions.checkoutStepPayment, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                //    });
                //    gaIntercept(userActions.checkoutStepPayment, "ec:setAction", "checkout", { "step": 3 });
                //    gaIntercept(userActions.checkoutStepPayment, "send", "event", gaEventCategories.checkout, action);
                //    break;

                //case userActions.checkoutStepReceipt:
                //    try {
                //        data.inventoryInfo.forEach(function (product) {
                //            gaIntercept(userActions.checkoutStepReceipt, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                //        });
                //        gaIntercept(userActions.checkoutStepReceipt, "ec:setAction", "checkout", { "step": 4, "option": data.paymentSource });
                //        gaIntercept(userActions.checkoutStepReceipt, "send", "event", gaEventCategories.checkout, action);

                //    } catch (e) {
                //        try {
                //            // extra logging
                //            Sentry.captureException(e, {
                //                extraData: {
                //                    data: JSON.stringify(data),
                //                },
                //            });
                //        } catch (e) {
                //            console.log(e);
                //        }
                //    }
                //    break;

                //case userActions.purchase:
                //    dataForFb = getInfoForFacebookFromProductList(data.products);
                //    dataForFb["value"] = data.orderPrice;
                //    dataForFb["currency"] = defaultCurrency;
                //    reportToFacebook("Purchase", dataForFb);

                //    // report to ga

                //    if (data.products !== null && data.products !== undefined && Array.isArray(data.products)) {
                //        data.products.forEach(function (product) {
                //            gaIntercept(userActions.purchase, "ec:addProduct", getInfoForGoogleAnalyticsFromProductInfo(product));
                //        });

                //        var purchaseData = {
                //            "id": data.orderId,
                //            "affiliation": data.shopCode,
                //            "revenue": data.orderPrice,
                //            "shipping": data.deliveryPrice,
                //        };

                //        if (data.coupon !== undefined && data.coupon !== null) {
                //            purchaseData.coupon = data.coupon;
                //        }

                //        gaIntercept(userActions.purchase, "ec:setAction", "purchase", purchaseData);

                //        gaIntercept(userActions.purchase, "send", "event", gaEventCategories.checkout, action);
                //    }

                //    break;

                //case userActions.internalPromotionClick:

                //    gaIntercept(userActions.internalPromotionClick, "ec:addPromo", {
                //        "id": data.id,
                //        "name": data.name,
                //        "position": data.position
                //    });
                //    gaIntercept(userActions.internalPromotionClick, "ec:setAction", "promo_click");
                //    gaIntercept(userActions.internalPromotionClick, "send", "event", "Internal Promotions", "click", data.name);
                //    break;

                //case userActions.impression:
                //    data.forEach(function (product) {
                //        gaIntercept(userActions.impression, "ec:addImpression", getInfoForGoogleAnalyticsFromProductInfo(product, true));
                //    });
                //    gaIntercept(userActions.impression, "send", "event", gaEventCategories.product, action);
                //    break;

                //case userActions.completeRegistration:
                //    gaIntercept(userActions.completeRegistration, "send", "event", gaEventCategories.customer, action);
                //    reportToFacebook(action, data);
                //    break;

                default:
                    break;
            }
        }
    </script>



    <script>
        var reportToAdWords = function (action, conversionData) {
            gtag("event", action, conversionData);
        }
    </script>

    <!-- Google Tag Manager -->
    <script>
                (function(w,d,s,l,i) {
                    w[l]=w[l]||[];
                    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                    f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M7W8FBT');
        </script>
    <!-- End Google Tag Manager -->



    <!-- Hotjar Tracking Code for www.barbora.lt, added 2019-09-02, ordered by MONOTWO  -->
    <script>
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1453166, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    </script>
</head>



<body class=" b-page--product">
    <script type="text/javascript">
        // load svg icons, cached by browser
        var ajax = new XMLHttpRequest();
        ajax.open("GET", "/Assets/Images/svg-compiled/symbol/svg/sprite.symbol.svg" + "?v=202003141221", true);
        ajax.send();
        ajax.onload = function () {
            var div = document.createElement("div");
            div.style.display = "none";
            div.innerHTML = ajax.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
        }
    </script>

    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7W8FBT"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div class="b-app">
        <div class="b-app-bg">

            <ul class="b-top-menu b-top-menu-mobile" id="b-mobile-sticky-menu" style="position:absolute;">
                <li class="b-top-menu-item"><button class="b-top-menu-item-link b-trgigger-mobile-menu"></button></li>
                <li class="b-top-menu-item"><a href="/" class="b-logo--single-letter-wrap"><svg
    class="b-icon b-logo--single-letter"

    style=""
>
    <use xlink:href="#logo-small"></use>
</svg></a></li>
                <li class="b-top-menu-item"><button class="b-top-menu-item-link b-search--open b-search--toggle b-top-menu-item-link--colored-bg"><svg
    class="b-icon"

    style=""
>
    <use xlink:href="#search"></use>
</svg></button></li>


                <li class="b-top-menu-item b-mobile-app-download-link" style="display:none;"><a href="" class="b-top-menu-item-link b-top-menu-item-link--colored-bg"><svg
    class="b-icon"

    style=""
>
    <use xlink:href="#person"></use>
</svg></a></li>
                <li class="b-top-menu-item pull-right b-cart--mobile-cart-btn-placeholder"></li>
                <li class="b-search b-search-mobile"></li>
            </ul>

            <div class="container-fluid">



                    <div class="b-cookie-warning">
                        <span class="b-cookie-warning--text">
                            Käesoleval veebilehel kasutatakse küpsiseid (ingl. k cookies). Jätkates sirvimist veebilehel või klõpsates nupul Nõustun, nõustute küpsiste kasutamisega. Oma nõusoleku võite igal ajal tühistada, muutes oma internetibrauseri seadeid ja kustutades salvestatud küpsised. Rohkem teavet küpsiste kohta leiate <a href="/info/faq#privacy-policy">siit</a>.
                        </span>
                        <button class="btn b-btn-transparent-white b-cookie-warning--agree">Nõustun</button>
                    </div>
                <!--[if lt IE 10]>
                                    <div class="b-warning">
                                       Kasutate vananenud internetibrauserit Et veebileht töötaks korrektselt, soovitame kasutada uusimat <a href="https://www.google.com/chrome/browser/desktop/index.html" target="blank">Google Chrome</a> või <a href="https://www.mozilla.org/lt/firefox/new/" target="_blank">Mozilla Firefox</a> internetibrauseri versiooni.
                                    </div>
                                <![endif]-->

                <div class="b-main-content ">

                    <header class="b-header">





<div class="clearfix">

    <div class="b-login-register b-header--links pull-right">

        <div class="b-header--links--item">
            <div class="app-promo-icons">
                <span class="app-promo-icons--label">Laadige alla</span>
                <ul>
                    <li>
                        <a href="https://itunes.apple.com/us/app/appname/id1339130115?ls=1&amp;mt=8" target="_blank"><img src="/Assets/Images/icons/apple-icon.png" alt="Laadige alla iPhone’i versioon" /></a>
                    </li>
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=ee.barbora" target="_blank"><img src="/Assets/Images/icons/android-icon.png" alt="Laadige alla Androidi versioon" /></a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="b-header--links--item b-header--home">
            <a class="link-gray-lighter" href="/" aria-label="Avaleht">
                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#home"></use>
</svg>
            </a>
        </div>


        <div class="b-header--links--item b-select-lang">
            <svg
    class="b-icon b-select-lang--icon"

    style=""
>
    <use xlink:href="#globe"></use>
</svg>
            <select class="b-select-lang--input">
                    <option value="b06b0c92-7d3d-4ac4-87df-27dfdb6ca69d" selected>Eesti</option>
                    <option value="1595dc26-9ecc-4c7d-b26e-badffc19c6b5" >English</option>
                    <option value="909b6b59-bf29-497c-80e4-1c844f1849c7" >Русский</option>
            </select>
        </div>

            <div class="b-header--links--item b-header--links--register">
                <button type="button" class="btn btn-sm btn-link link-red-no-underline b-login-register--button b-login-register--register">
                    Registreerun
                </button>
            </div>
            <div class="b-header--links--item b-header--links--login">
                <button type="button" class="btn btn-sm btn-link link-red-no-underline b-login-register--button b-login-register--key b-login-register--login">
                    <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#key"></use>
</svg>
                    Login sisse
                </button>
            </div>
            <!-- Modal -->
            <div class="modal b-zigzag-modal b-login-register--modal" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content" role="tabpanel">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Sulge"></button>
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active"><a href="#b-user-login" aria-controls="b-user-login" role="tab" data-toggle="tab">Login sisse</a></li>
                                <li role="presentation"><a href="#b-user-register" aria-controls="b-user-register" role="tab" data-toggle="tab">Registreerun</a></li>
                            </ul>
                        </div>
                        <div class="modal-body">

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="b-user-login">
                                    <p class="help-block">Tere tulemast tagasi Barborasse. Rõõmsaid oste!</p>
                                    <p class="b-caps-lock-on">Suurt&auml;helukk on peal<p>

                                    <form class="form-horizontal b-login-form">
                                        <div class="form-group">
                                            <label for="b-login-email" class="col-sm-4 control-label">E-post</label>
                                            <div class="col-sm-8">
                                                <input type="email" required class="form-control" id="b-login-email" name="email" placeholder="nimi@mail.ee">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="b-login-password" class="col-sm-4 control-label">Parool</label>
                                            <div class="col-sm-8">
                                                <div class="input-group">
                                                    <input type="password" required class="form-control" id="b-login-password" name="password" placeholder="********">
                                                    <span class="input-group-btn">
                                                        <button id="b-login-password--toggle-visibility-button" class="btn btn-default" type="button">
                                                            <svg
    class="b-icon b-icon--eye"

    style="width: 1em; height: 1em;"
>
    <use xlink:href="#eye"></use>
</svg>
                                                            <svg
    class="b-icon b-icon--eye-crossed"
    style='display: none'
    style="width: 1em; height: 1em;"
>
    <use xlink:href="#eye-crossed"></use>
</svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-8 col-sm-push-4">
                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox" id="b-login-remember-me" checked="checked"> Jäta mind meelde
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-4 col-sm-8">
                                                <button type="submit" class="btn btn-default b-login-form--login-button">Login sisse</button>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-4 col-sm-8">
                                                <a href="/parooli-meeldetuletus">Parooli meeldetuletus</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div role="tabpanel" class="tab-pane ui-front" id="b-user-register">
                                    <form class="form-horizontal b-register-form">
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">E-post</label>
                                            <div class="col-sm-7">
                                                <input type="email" required class="form-control" name="email" placeholder="nimi@mail.ee">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Parool</label>
                                            <div class="col-sm-7">
                                                <div class="input-group">
                                                    <input type="password" required class="form-control" name="password" placeholder="********">
                                                    <span class="input-group-btn">
                                                        <button id="b-register-password--toggle-visibility-button" class="btn btn-default" type="button">
                                                            <svg
    class="b-icon b-icon--eye"

    style="width: 1em; height: 1em;"
>
    <use xlink:href="#eye"></use>
</svg>
                                                            <svg
    class="b-icon b-icon--eye-crossed"
    style='display: none'
    style="width: 1em; height: 1em;"
>
    <use xlink:href="#eye-crossed"></use>
</svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Linn/Asula</label>
                                            <div class="col-sm-7">
                                                <select class="form-control b-register--city" name="city">
                                                        <option value=1>Tallinn</option>
                                                        <option value=2>Viimsi vald</option>
                                                        <option value=3>Maardu</option>
                                                        <option value=4>Harku vald</option>
                                                        <option value=5>Saku vald</option>
                                                        <option value=6>L&#228;&#228;ne-Harju vald</option>
                                                        <option value=7>Keila linn</option>
                                                        <option value=8>Raasiku vald</option>
                                                        <option value=9>Rae vald</option>
                                                        <option value=10>Saue vald</option>
                                                        <option value=11>Kiili vald</option>
                                                        <option value=12>J&#245;el&#228;htme vald</option>
                                                        <option value=13>Saue linn</option>
                                                </select>
                                            </div>
                                        </div>
                                            <div class="form-group">
                                                <div class="col-sm-5"></div>
                                                <div class="col-sm-7">
                                                    <a href="/info/teeninduspiirkonnad"
                                                       target="_blank"
                                                       style="font-size: 12px;">
                                                        Meie teeninduspiirkonnad
                                                    </a>
                                                </div>
                                            </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Tänav ja maja number</label>
                                            <div class="col-sm-7">
                                                <div class="b-register--street-wrap">
                                                    <div class="b-loader"></div>
                                                    <input type="text" required class="form-control b-register--street" name="street" placeholder="Asuge sisestama ja valige nimekirjast" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Korteri number</label>
                                            <div class="col-sm-7">
                                                <input type="text" maxlength="20" class="form-control" name="flat" placeholder="00">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Nimi</label>
                                            <div class="col-sm-7">
                                                <input type="text" required class="form-control" name="name" placeholder="Eesnimi">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Perekonnanimi</label>
                                            <div class="col-sm-7">
                                                <input type="text" required class="form-control" name="surname" placeholder="Perekonnanimi">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-5 control-label">Telefoninumber</label>
                                            <div class="col-sm-7">
                                                <input type="text" required class="form-control" name="phone" placeholder="+37250000000">
                                            </div>
                                        </div>
                                         <div class="form-group">
                                            <div class="col-sm-offset-5 col-sm-7">
                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="agreetorules" />
                                                        Nõustun <a href="/info/termsandconditions" target="_blank">ostutingimustega</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-5 col-sm-7">
                                                <div class="checkbox">
                                                    <label>
                                                        <input id="b-agree-profiling--input-checkbox" type="checkbox" name="profiling"/> Nõustun saama personaalseid, minu ostuajalugu arvestavaid pakkumisi
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="b-agree-profiling--additional-newsletters" style="display: none">
                                            <div class="form-group">
                                                <div class="col-sm-offset-5 col-sm-7">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="newslettersViaEmail" /> Nõustun uudiskirja saamisega e-posti teel
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-offset-5 col-sm-7">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="pushNotifications" /> Nõustun saama pakkumisi mobiilirakenduses
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-sm-offset-5 col-sm-7">
                                                    <div class="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="newslettersViaSms" /> Nõustun uudiste saamisega SMS-i teel
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-5 col-sm-7">
                                                <button type="submit" class="btn btn-default">Registreerun</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div class="b-header--links--item b-header--links--tel">
            <a href="tel:555 66 369">
                <svg class="b-icon" style="top:2px;"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#phone"></use></svg> 555 66 369
            </a>
        </div>

    </div>

</div>

                        <a href="/" class="b-logo--main">
<svg
    class="b-icon"
    style='width: 100%; height: 100%'
    style=""
>
    <use xlink:href="#barbora-logo-red-EE"></use>
</svg>
                        </a>

                            <div class="b-search--placeholder"></div>

                        <ul class="b-top-menu b-top-menu-desktop">
                            <li class="b-top-menu-item">            <a href="/" class="b-top-menu-item-link b-top-menu-item-link-active">Kaubavalik</a>
</li>
                            <li class="b-top-menu-item">            <a href="/minu-andmed/favourites" class="b-top-menu-item-link">Minu ostud</a>
</li>
                            <li class="b-top-menu-item">            <a href="/pakkumised" class="b-top-menu-item-link">Kampaaniad</a>
</li>
                                <li class="b-top-menu-item">            <a href="/oko" class="b-top-menu-item-link">Öko</a>
</li>
                            <li class="b-top-menu-item">            <a href="/uudistooted" class="b-top-menu-item-link">Uudistooted</a>
</li>
                            <li class="b-top-menu-item">
                                            <a href="/puhkus-vaba-aeg/lego-ehituskomplektid" class="b-top-menu-item-link b-top-menu-item-link--lego">
                <svg
    class="b-icon"

    style="width: 2.5em; height: 2.5em;"
>
    <use xlink:href="#lego-logo"></use>
</svg>
            </a>

                            </li>
                        </ul>






    <div class="b-categories">
        <ul class="b-categories-list">
                <li class="b-categories-root-category" data-b-cat-id="2456a910-eacb-4537-b214-17ed21682888" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/koogiviljad-puuviljad">K&#246;&#246;giviljad, puuviljad</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="4285f7d7-5d92-4eb2-a85c-4772fed50091" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/piimatooted-rasv-munad">Piimatooted, rasv, munad</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="770818ff-4c23-42f6-a00a-e7f58add4a10" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/leivad-saiad-kondiitritooted">Leivad, saiad, kondiitritooted</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="1271e464-f471-4dc6-b286-7ea771a218a8" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/liha-kala-valmistoit">Liha, kala, valmistoit</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="acb55842-a24c-44d1-b948-082e2cdb596b" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/kauasailivad-toidukaubad">Kauas&#228;ilivad toidukaubad</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="189d9e1a-a880-4f6f-8c51-b12852ba50d4" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/kulmutatud-tooted">K&#252;lmutatud tooted</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="4a1f4362-1822-49c3-bdda-b8fd2d3171dc" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/joogid">Joogid</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="5ebed6d5-9f7d-4ddf-a5bf-ab5692ae5d54" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/enesehooldustooted">Enesehooldustooted</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="a70ae192-1bd4-435f-a809-b54f530b4415" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/kodukaubad-lemmikloomatooted">Kodukaubad, lemmikloomatooted</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="850717a1-fa2c-4b5f-a8f7-bae8bf068f7e" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/lastekaubad">Lastekaubad</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
                <li class="b-categories-root-category" data-b-cat-id="b9e60e2e-6007-4317-862b-faffae53b082" data-b-category-api-action-name="categories" data-b-controller="products">

                    <button class="b-category-state"></button>

                        <a href="/puhkus-vaba-aeg">Puhkus, vaba aeg</a>

                            <ul class="b-categories-child b-categories-child--loading">
                                <li>
                                    <div class="b-loader"></div>
                                </li>
                            </ul>

                </li>
        </ul>
    </div>


    <ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">



<a itemprop="item" href="https://www.barbora.ee/" title="Pealeht">
    <span itemprop="name">
        Pealeht
    </span>
</a>
            </li>
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">



<a itemprop="item" href="https://www.barbora.ee/kauasailivad-toidukaubad" title="Kauas&#228;ilivad toidukaubad">
    <span itemprop="name">
        Kauasäilivad toidukaubad
    </span>
</a>
            </li>
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">



<a itemprop="item" href="https://www.barbora.ee/kauasailivad-toidukaubad/hommikusoogid-ja-batoonid" title="Hommikus&#246;&#246;gid ja batoonid">
    <span itemprop="name">
        Hommikusöögid ja batoonid
    </span>
</a>
            </li>
            <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">



<a itemprop="item" href="https://www.barbora.ee/kauasailivad-toidukaubad/hommikusoogid-ja-batoonid/pudruhelbed" title="Pudruhelbed">
    <span itemprop="name">
        Pudruhelbed
    </span>
</a>
            </li>
            <li class="active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">



<a itemprop="item" href="https://www.barbora.ee/toode/kiirkaerahelbed-nordic-500-g" title="Kiirkaerahelbed NORDIC 500g">
    <span itemprop="name">
        Kiirkaerahelbed NORDIC 500g
    </span>
</a>
            </li>
    </ol>

                    </header>



    <div class="b-sidebar">

        <div class="b-customer-service">
	<a href="tel:555 66 369" class="b-customer-service--phone">555 66 369</a>
    <div class="b-customer-service--text1">
        E-P  9:00-21:00
    </div>
    <div class="b-customer-service--text2">
        E-post: <a href="mailto:info@barbora.ee" class="b-customer-service--email">info@barbora.ee</a>

    </div>
</div>


        <div class="b-cart--placeholder"></div>

    </div>


                    <div class="b-page-specific-content">






<script type="text/javascript">
    window.ageLimitationWarningValue = 0;
</script>

    <div class="b-page-container" style="position: relative;text-align: justify;">

        <div class="b-product-info b-product--js-hook"
             data-b-root-cat-id="acb55842-a24c-44d1-b948-082e2cdb596b"
             data-b-item-id="000000000000140325"
             data-b-units='{"units": [{"id":0,"price":0.8000,"retail_price":1.1500,"unit":"tk","min":2.0,"max":3.0,"step":2.0,"defaultValue":2.0}]}'
             data-b-for-cart='{&quot;id&quot;:&quot;000000000000140325&quot;,&quot;product_position_in_list&quot;:null,&quot;title&quot;:&quot;Kiirkaerahelbed NORDIC 500g&quot;,&quot;category_id&quot;:&quot;44eb3adb-f7c8-4244-bca8-b4db47c235d7&quot;,&quot;category_name_full_path&quot;:&quot;Kauas&#228;ilivad toidukaubad/Hommikus&#246;&#246;gid ja batoonid/Pudruhelbed&quot;,&quot;root_category_id&quot;:&quot;acb55842-a24c-44d1-b948-082e2cdb596b&quot;,&quot;brand_name&quot;:&quot;Nordic&quot;,&quot;price&quot;:0.8000,&quot;image&quot;:&quot;/api/Images/GetInventoryImage?id=06ca74d8-d0b8-4b35-9b81-953a326a7d76&quot;,&quot;comparative_unit&quot;:&quot;kg&quot;,&quot;comparative_unit_price&quot;:1.60,&quot;status&quot;:&quot;suspended&quot;,&quot;popUpText&quot;:null,&quot;age_limitation&quot;:null,&quot;picking_actions&quot;:[],&quot;list&quot;:&quot;Prekės kortelė&quot;,&quot;quantity&quot;:2.0}'
             itemscope itemtype="http://schema.org/Product">
            <div class="b-products-allow-desktop-view b-products-allow-mobile-view">

                <div class="b-product-promo-labels">



        <div class="b-product-promo-label-primary" data-toggle='tooltip' title='Kampaania kehtib kuni 2020-03-23 või kuni kaupa jätkub.'>

<svg
    class="b-icon"

    style=""
>
    <use xlink:href="#label-offer"></use>
</svg>                    <span class="b-product-promo-label-primary--percent b-product-promo-label--buy-one-get-x">
                        Osta 2 <span style="display: block; font-weight: bold;">€1.60</span> eest

                    </span>

        </div>





</div>


                <div class="row" style="padding-bottom: 20px;">
                    <div class="col-md-6">
                        <div class="b-product-goalgroups b-product-goalgroup--product-info-vertical  clearfix">

                        </div>


    <div class="b-product-out-of-stock-backdrop"></div>
        <a class="b-product-out-of-stock" tabindex="-1">Hetkel toodet kahjuks ei ole.</a>




                        <div class="b-product-info--pictures-wrap">

                            <div class="b-carousel b-product-info--pictures" data-b-carousel-params='{}'>

                                <div class="b-carousel--pager">
                                        <button></button>
                                </div>

                                <div class="b-carousel--inner">
<div class="b-carousel--slide">
                                         <img itemprop="image" src="/api/Images/GetInventoryImage?id=ae02e676-930d-4d9b-9205-9eb066aa9ca4"/>
                                     </div>                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6" style="position:static">
                        <h1 class="b-product-info--title" itemprop="name">Kiirkaerahelbed NORDIC 500g</h1>

                        <hr class="b-hr-solid" />




    <div class="b-product-promo-labels--mobile">



    </div>

    <div class="b-product-goalgroups clearfix">











        <svg
    class="b-icon b-icon-favourite"
    data-toggle='tooltip' title='Salvestatud ostukorvid'
    style=""
>
    <use xlink:href="#heart"></use>
</svg>

    </div>

<div class="b-product-goalgroups b-product-goalgroup--vertical clearfix">

</div>


                        <div class="b-product-info--price-and-quantity">

<div class="b-product-prices-block" itemprop="offers" itemscope itemtype="http://schema.org/Offer">


        <del class="b-product-crossed-out-price">€1.15</del>
    <div class="b-product-price-current" itemprop="priceCurrency" content="EUR">

        <span
              class="b-product-price-current-number"
              itemprop="price"
              content="0.8">
            €0.80
        </span>

        <link rel="external" itemprop="availability" href="https://schema.org/OutOfStock"/>
    </div>

    <div class="b-product-price--extra">


        <div>€1.60/kg</div>
    </div>

</div>


                                <div class="b-product-info--offer-valid-to">Kampaania kehtib kuni 2020-03-23 v&#245;i kuni kaupa j&#228;tkub.</div>

                                <div class="b-product-unavailable--product-page--wrap clearfix">
                                        <a href="/kauasailivad-toidukaubad/hommikusoogid-ja-batoonid/pudruhelbed" class="c-btn c-btn--center c-btn--round-corners">Sarnased tooted</a>
                                </div>
                        </div>

                        <dl class="b-dl-align-left b-product-info--info1">
                                <dt>P&#228;ritoluriik:</dt>
                                <dd>Soome</dd>
                                <dt>Netokogus (g/ml):</dt>
                                <dd>500</dd>
                                <dt>Kaubam&#228;rk:</dt>
                                <dd>Nordic</dd>

                                <dt>Tarnija:</dt>
                                <dd><img src="/Assets/Images/maxima-logo.gif" alt="maxima" /></dd>

                        </dl>



                    </div>
                </div>

            </div>

            <div class="b-product-info-recommendations--wrap">
                <div id="b-product-info-recommendations--placeholder"></div>
            </div>
        </div>

        <hr class="b-zigzag-gray hr-double-vertical-spacing" />
        <dl class="b-product-info--info-2">
            <dt class="b-product-info--info-3-title">Kirjeldus</dt>
            <dd itemprop="description">Kiirkaerahelbed</dd>


            <dt class="b-product-info--info-3-title">Koostisosad</dt>
            <dd>T&#228;istera KAERAhelbed</dd>


            <dt class="b-product-info--info-3-title">ALLERGEENID</dt>
            <dd>Sisaldab: gluteeni sisaldavad teraviljad</dd>



            <dt class="b-product-info--info-3-title" style="text-transform:uppercase;">Tootja kontaktid</dt>
            <dd>RAISIO</dd>
            <dt class="b-product-info--info-3-title" style="text-transform:uppercase;">S&#228;ilitamistingimused</dt>
            <dd>Hoida kuivas ja jahedas, tugevate l&#245;hnade eest kaitstult.
S&#228;ilitamistemperatuur: alates 5&#176;C kuni 25&#176;C.</dd>
        </dl>

        <h3 class="b-product-info--info-3-title">TOITEVÄÄRTUS (100 g/ml)</h3>
        <div class="row">
            <div class="col-md-4">
                <table class="table table-striped table-condensed" style="margin-bottom:0">
                    <tbody>
                        <tr>
                            <td>Energiat</td>
                            <td class="b-text-right">1548,10 kJ / 370,00 Kcal</td>
                        </tr>
                        <tr>
                            <td>Rasvad</td>
                            <td class="b-text-right">8,00 g</td>
                        </tr>
                        <tr>
                            <td>K&#252;llastunud rasvhappeid</td>
                            <td class="b-text-right">1,60 g</td>
                        </tr>
                        <tr>
                            <td>S&#252;sivesikud</td>
                            <td class="b-text-right">55,00 g</td>
                        </tr>
                        <tr>
                            <td>Suhkrud</td>
                            <td class="b-text-right">1,20 g</td>
                        </tr>
                        <tr>
                            <td>Valgud</td>
                            <td class="b-text-right">14,00 g</td>
                        </tr>
                        <tr>
                            <td>Sool</td>
                            <td class="b-text-right">0,00 g</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h3 class="b-product-info--info-3-title">Soovituslik ööpäevane norm</h3>
        <ul class="b-nutrients row">



                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">Energiat</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount b-nutrients--amount-small">
370 Kcal                                <br />
1548,1 kJ                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">18,5%</span>
                    </span>
                </li>
                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">Rasvad</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount">
8 g                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">11,4%</span>
                    </span>
                </li>
                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">K&#252;llastunud rasvhappeid</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount">
1,6 g                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">8%</span>
                    </span>
                </li>
                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">S&#252;sivesikud</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount">
55 g                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">21,2%</span>
                    </span>
                </li>
                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">Suhkrud</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount">
1,2 g                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">1,3%</span>
                    </span>
                </li>
                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">Valgud</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount">
14 g                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">28%</span>
                    </span>
                </li>
                <li class="col-xs-6" data-toggle='tooltip' title='Vastavalt keskmise täiskasvanud inimese soovituslikule ööpäevasele toiteainete vajadusele (8400 kj/2000 kcal)'>
                    <span class="b-nutrients--item">
                        <span class="b-nutrients--name">Sool</span>
                        <span class="b-nutrients--amount-wrap">
                            <span class="b-nutrients--amount">
0 g                                <br />
                            </span>
                        </span>
                        <span class="b-nutrients--gda">0%</span>
                    </span>
                </li>

        </ul>

        <div class="b-opacity50">
            <h3 class="b-product-info--info-3-title">TOOTEINFO JA KIRJELDUS</h3>

            <p class="b-product-info--disclaimer">
                Toote välimus võib erineda fotol oleva toote välimusest. Saadavad tooted võivad olla teistsuguses pakendis või erineva välimuse/kujuga. E-kaupluses esitatav tootekirjeldus on üldise iseloomuga ega pruugi seetõttu langeda kokku tootepakendil oleva teabegal. Tootepakendil olev info on põhjalikum ja võib erineda vähesel määral teabest, mis on esitatud e-kaupluse toodete kirjeldustes. Soovitame alati lugeda ja juhinduda teabest, mis on esitatud tootepakendil. Kampaaniatoodete kogus on piiratud.
            </p>
        </div>

    </div>


    <script>/* <![CDATA[ /;var gtagData={"send_to":"AW-798931061","dynx_itemid":"000000000000140325","dynx_pagetype":"product"};/ ]]> */</script>



                    </div>
                </div>




<div class="b-footer">

    <hr class="b-zig-zag-fat hr-double-vertical-spacing" />

    <div class="row">
        <div class="col-xs-12 col-lg-7">
            <div class="row b-footer--info-links-row">
                <div class="col-xs-6 col-md-3">
                    <ul class="b-footer--info-links">
                        <li>
                            <a href="/info/kkk">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                KKK
                            </a>
                        </li>
                        <li>
                            <a href="/info/ostu-muugitingimused">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Ostu-m&#252;&#252;gitingimused
                            </a>
                        </li>
                        <li>
                            <a href="/info/privaatsuspoliitika">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Privaatsuspoliitika
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="b-footer--info-links">
                        <li>
                            <a href="/info/kaupade-kohaletoimetamine">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Kaupade kohaletoimetamine
                            </a>
                        </li>
                        <li>
                            <a href="/info/kauba-tagastamine">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Kauba tagastamine
                            </a>
                        </li>
                        <li>
                            <a href="/info/tasumine">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Tasumine
                            </a>
                        </li>
                        <li>
                            <a href="/info/uudised">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Uudised
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="b-footer--info-links">
                        <li>
                            <a href="/info/aitah-konto-tingimused">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                AIT&#196;H konto tingimused
                            </a>
                        </li>
                        <li>
                            <a href="/info/minu-ostud">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Minu ostud
                            </a>
                        </li>
                        <li>
                            <a href="/info/teeninduspiirkonnad">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Teeninduspiirkonnad
                            </a>
                        </li>
                        <li>
                            <a href="/info/kampaania-tingimused">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Kampaania tingimused
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-6 col-md-3">
                    <ul class="b-footer--info-links">
                        <li>
                            <a href="/info/sarnased-tooted">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Sarnased tooted
                            </a>
                        </li>
                        <li>
                            <a href="/info/karjaar">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Karj&#228;&#228;r
                            </a>
                        </li>
                        <li>
                            <a href="/info/mobiilirakendus">
                                <svg
    class="b-icon"

    style=""
>
    <use xlink:href="#chevron-right"></use>
</svg>
                                Mobiilirakendus
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-lg-5 b-footer--social">
            <div class="row">
                <div class="col-xs-6 b-footer-social">
                    <h4 class="b-footer-heading">Jälgige meid</h4>
                    <a href="https://www.facebook.com/BarboraEesti"><svg
    class="b-icon"

    style=""
>
    <use xlink:href="#fb-square"></use>
</svg></a>
                </div>
            </div>
        </div>
    </div>

    <hr class="b-hr-fat b-hr-solid b-hr-darker" />

    <div id="footer-payment-sources-placeholder"></div>

    <div class="b-copyright">
        © 2020 Supersa OÜ. Kõik õigused on kaitstud.
    </div>
</div>

            </div>
        </div>
    </div>

    <div class="b-mobile-menu">
        <div class="b-minimenu--wrap">
            <div class="b-minimenu">
                            <a href="/" class="b-minimenu--link b-minimenu--link-active">Kaubavalik</a>


                            <a href="/minu-andmed/favourites" class="b-minimenu--link">Minu ostud</a>


                            <a href="/pakkumised" class="b-minimenu--link">Kampaaniad</a>


            <a href="/oko" class="b-minimenu--link">Öko</a>

                            <a href="/uudistooted" class="b-minimenu--link">Uudistooted</a>


                            <a href="/puhkus-vaba-aeg/lego-ehituskomplektid" class="b-minimenu--link b-top-menu-item-link--lego">
                <svg
    class="b-icon"
    style='width: 1.87em; height: 1.87em; top: 0em'
    style=""
>
    <use xlink:href="#lego-logo"></use>
</svg>
            </a>

            </div>
        </div>
    </div>

    <div id="modal-placeholder"></div>








    <script src="https://browser.sentry-cdn.com/5.1.1/bundle.min.js" crossorigin="anonymous" onerror="shownetworkerroralert()"></script>

    <script type="text/javascript" onerror="showNetworkErrorAlert()">
        var isDebug = "True".toLowerCase() === "true";

        Sentry.init({
            dsn: "http://7fca11b6f99643d6b782452509a955d9@172.31.252.8:9000/9",
            release: "202003141221",
	        environment: "PRD",
	        logger: "EShop.Client-JavaScript",
            ignoreUrls: [],
            captureUnhandledRejections: false, //ignore UnhandledRejection errors
            debug: isDebug
        });

        var userId = "";
	    if (userId.length > 0) {
            Sentry.configureScope(function (scope) {
                scope.setUser({ "id": userId });
            });
        }

        //Sentry.captureException(new Error("Test error to catch"));
    </script>

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.11/core.js"></script>
        <script type="text/javascript" src="/Assets/Libraries/jquery-2.2.0.js"></script>





<script type="text/javascript">
    window.b_categories = {"categories":[{"id":"2456a910-eacb-4537-b214-17ed21682888","title":"Köögiviljad, puuviljad","product_count":138,"children_count":5,"BannerModel":null,"category_code":"2456a910-eacb-4537-b214-17ed21682888","rootCategory":"2456a910-eacb-4537-b214-17ed21682888","products":[],"url":"koogiviljad-puuviljad","url_parent":"","url_root":"","icon_name":"tomato","RootCategoryProducts":null},{"id":"4285f7d7-5d92-4eb2-a85c-4772fed50091","title":"Piimatooted, rasv, munad","product_count":898,"children_count":8,"banner":"/api/Images/GetBannerImage?id=2ffe4d11-619e-4f1c-a5e7-7119c540479d","externalResourceUrl":"","BannerModel":{"id":"00000000-0000-0000-0000-000000000000","imgId":"00000000-0000-0000-0000-000000000000","banner_category_id":"00000000-0000-0000-0000-000000000000","no_action":false,"name":null,"img":"/api/Images/GetBannerImage?id=2ffe4d11-619e-4f1c-a5e7-7119c540479d","category_id":"40956cf9-dd22-4337-9b46-2137da7290d2","externalResourceUrl":"","UseForSubCategory":true,"urlType":0,"sequenceNo":0},"category_code":"4285f7d7-5d92-4eb2-a85c-4772fed50091","rootCategory":"4285f7d7-5d92-4eb2-a85c-4772fed50091","products":[],"url":"piimatooted-rasv-munad","url_parent":"","url_root":"","icon_name":"cheese2","RootCategoryProducts":null},{"id":"770818ff-4c23-42f6-a00a-e7f58add4a10","title":"Leivad, saiad, kondiitritooted","product_count":293,"children_count":4,"banner":"/api/Images/GetBannerImage?id=85199509-97cf-4d28-834b-cf9113bb657a","externalResourceUrl":"","BannerModel":{"id":"00000000-0000-0000-0000-000000000000","imgId":"00000000-0000-0000-0000-000000000000","banner_category_id":"00000000-0000-0000-0000-000000000000","no_action":false,"name":null,"img":"/api/Images/GetBannerImage?id=85199509-97cf-4d28-834b-cf9113bb657a","category_id":"6ade9a6e-f862-45f7-805a-e8127b1dd83f","externalResourceUrl":"","UseForSubCategory":true,"urlType":0,"sequenceNo":0},"category_code":"770818ff-4c23-42f6-a00a-e7f58add4a10","rootCategory":"770818ff-4c23-42f6-a00a-e7f58add4a10","products":[],"url":"leivad-saiad-kondiitritooted","url_parent":"","url_root":"","icon_name":"bread2","RootCategoryProducts":null},{"id":"1271e464-f471-4dc6-b286-7ea771a218a8","title":"Liha, kala, valmistoit","product_count":971,"children_count":6,"BannerModel":null,"category_code":"1271e464-f471-4dc6-b286-7ea771a218a8","rootCategory":"1271e464-f471-4dc6-b286-7ea771a218a8","products":[],"url":"liha-kala-valmistoit","url_parent":"","url_root":"","icon_name":"steakMeat2","RootCategoryProducts":null},{"id":"acb55842-a24c-44d1-b948-082e2cdb596b","title":"Kauasäilivad toidukaubad","product_count":3052,"children_count":17,"BannerModel":null,"category_code":"acb55842-a24c-44d1-b948-082e2cdb596b","rootCategory":"acb55842-a24c-44d1-b948-082e2cdb596b","products":[],"url":"kauasailivad-toidukaubad","url_parent":"","url_root":"","icon_name":"bowlAndChopstick","RootCategoryProducts":null},{"id":"189d9e1a-a880-4f6f-8c51-b12852ba50d4","title":"Külmutatud tooted","product_count":459,"children_count":6,"banner":"/api/Images/GetBannerImage?id=1a7c61e9-e235-4b52-8800-0f7e27d050ef","externalResourceUrl":"","BannerModel":{"id":"00000000-0000-0000-0000-000000000000","imgId":"00000000-0000-0000-0000-000000000000","banner_category_id":"00000000-0000-0000-0000-000000000000","no_action":true,"name":null,"img":"/api/Images/GetBannerImage?id=1a7c61e9-e235-4b52-8800-0f7e27d050ef","externalResourceUrl":"","UseForSubCategory":false,"urlType":0,"sequenceNo":0},"category_code":"189d9e1a-a880-4f6f-8c51-b12852ba50d4","rootCategory":"189d9e1a-a880-4f6f-8c51-b12852ba50d4","products":[],"url":"kulmutatud-tooted","url_parent":"","url_root":"","icon_name":"plasticBottle","RootCategoryProducts":null},{"id":"4a1f4362-1822-49c3-bdda-b8fd2d3171dc","title":"Joogid","product_count":2464,"children_count":8,"BannerModel":null,"category_code":"4a1f4362-1822-49c3-bdda-b8fd2d3171dc","rootCategory":"4a1f4362-1822-49c3-bdda-b8fd2d3171dc","products":[],"url":"joogid","url_parent":"","url_root":"","icon_name":null,"RootCategoryProducts":null},{"id":"5ebed6d5-9f7d-4ddf-a5bf-ab5692ae5d54","title":"Enesehooldustooted","product_count":2246,"children_count":9,"banner":"/api/Images/GetBannerImage?id=b0cdb1e3-691d-448d-8121-995ebb13eeda","externalResourceUrl":"","BannerModel":{"id":"00000000-0000-0000-0000-000000000000","imgId":"00000000-0000-0000-0000-000000000000","banner_category_id":"00000000-0000-0000-0000-000000000000","no_action":true,"name":null,"img":"/api/Images/GetBannerImage?id=b0cdb1e3-691d-448d-8121-995ebb13eeda","externalResourceUrl":"","UseForSubCategory":false,"urlType":0,"sequenceNo":0},"category_code":"5ebed6d5-9f7d-4ddf-a5bf-ab5692ae5d54","rootCategory":"5ebed6d5-9f7d-4ddf-a5bf-ab5692ae5d54","products":[],"url":"enesehooldustooted","url_parent":"","url_root":"","icon_name":"toiletPaper","RootCategoryProducts":null},{"id":"a70ae192-1bd4-435f-a809-b54f530b4415","title":"Kodukaubad, lemmikloomatooted","product_count":2141,"children_count":10,"BannerModel":null,"category_code":"a70ae192-1bd4-435f-a809-b54f530b4415","rootCategory":"a70ae192-1bd4-435f-a809-b54f530b4415","products":[],"url":"kodukaubad-lemmikloomatooted","url_parent":"","url_root":"","icon_name":"sprayBottle","RootCategoryProducts":null},{"id":"850717a1-fa2c-4b5f-a8f7-bae8bf068f7e","title":"Lastekaubad","product_count":499,"children_count":3,"BannerModel":null,"category_code":"850717a1-fa2c-4b5f-a8f7-bae8bf068f7e","rootCategory":"850717a1-fa2c-4b5f-a8f7-bae8bf068f7e","products":[],"url":"lastekaubad","url_parent":"","url_root":"","icon_name":"babyHead","RootCategoryProducts":null},{"id":"b9e60e2e-6007-4317-862b-faffae53b082","title":"Puhkus, vaba aeg","product_count":483,"children_count":5,"BannerModel":null,"category_code":"b9e60e2e-6007-4317-862b-faffae53b082","rootCategory":"b9e60e2e-6007-4317-862b-faffae53b082","products":[],"url":"puhkus-vaba-aeg","url_parent":"","url_root":"","icon_name":"bottleAndGlass","RootCategoryProducts":null}]};
    window.b_cart = null;
</script>




<script type="text/javascript">
    window.b_favoriteRecipesIds = [];
</script>






        <script type="text/javascript" src="/Assets/Scripts/main.concat.js?v=202003141221" onerror="showNetworkErrorAlert()"></script>




    <script type="text/javascript">
        window.reportUserActionToThirdParty("detail", {"id":"000000000000140325","product_position_in_list":null,"title":"Kiirkaerahelbed NORDIC 500g","category_id":"44eb3adb-f7c8-4244-bca8-b4db47c235d7","category_name_full_path":"Kauasäilivad toidukaubad/Hommikusöögid ja batoonid/Pudruhelbed","root_category_id":"acb55842-a24c-44d1-b948-082e2cdb596b","brand_name":"Nordic","price":0.8000,"image":"/api/Images/GetInventoryImage?id=06ca74d8-d0b8-4b35-9b81-953a326a7d76","comparative_unit":"kg","comparative_unit_price":1.60,"status":"suspended","popUpText":null,"age_limitation":null,"picking_actions":[],"list":"Prekės kortelė","quantity":2.0});
    </script>






</body>
</html>
`
