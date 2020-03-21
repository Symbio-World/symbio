(ns parser-test
  (:require [cljs.test :refer (deftest is)]
            ["fs" :as fs]
            ["path" :as path]))

(deftest parses-foodie
  (let [foodie-html (fs/readFileSync "./src/parser_fixture_foodie.html")
        product (parser/parse-prisma foodie-html)]
    (is (= product {:ingredients "Vesi, rypsiöljy, kasvirasvat (palmu, kookos), suola, emulgointiaineet (E 471 kasviperäinen, E 476), säilöntäaine (E 202), happamuudensäätöaine (E 330, E 500), aromit, väri (E 160a), A- ja D-vitamiini."
                    :allergens "Maito ja maitotuotteet, myös laktoosi, Soijapavut ja soijapaputuotteet"
                    :origin "Suomi"}))))

(deftest parses-prisma
  (let [prisma-html (fs/readFileSync "./src/parser_fixture_prisma.html")
        product (parser/parse-prisma prisma-html)]
    (is (= product {:ingredients "Vesi, rypsiöljy, kasvirasvat (palmu, kookos), suola, emulgointiaineet (E 471 kasviperäinen, E 476), säilöntäaine (E 202), happamuudensäätöaine (E 330, E 500), aromit, väri (E 160a), A- ja D-vitamiini."
                    :allergens [{"Ei sisällä" "Maito ja maitotuotteet, myös laktoosi, Soijapavut ja soijapaputuotteet"}]
                    :origin "Suomi"}))))

(comment
  (let [foodie-html (fs/readFileSync "./src/parser_fixture_foodie.html")
        product (parser/parse-prisma "s")]
    product))
