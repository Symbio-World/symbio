(ns parser
  (:require ["cheerio" :as cheerio]
            [parser-test :as test]))

(defn parse-prisma [html]
  (let [$ (cheerio/load html)
        ingredients (-> ($ "[id$='ingredients']")
                        (.text))
        allergens (-> ($ "#info")
                      (.find "table")
                      (.find "td")
                      (.eq 1)
                      (.text))
        origin (-> ($ "#origin")
                   (.find "p")
                   (.text))]
    {:ingredients ingredients
     :allergens allergens
     :origin origin}))

(comment
  (let [fs (js/require "fs")
        html (.readFileSync fs "./src/parser_fixture_foodie.html")
        $ (cheerio/load html)
        ingredients (-> ($ "[id$='ingredients']")
                        (.text))
        allergens (-> ($ "#info")
                      (.find "table")
                      (.eq 0)
                      (.find "td")
                      ()
                      ;; (.eq 1)
                      ;; (.text)
                      )
        origin (-> ($ "#origin")
                   (.find "p")
                   (.text))]
    {:ingredients ingredients
     :allergens allergens
     :origin origin}))
