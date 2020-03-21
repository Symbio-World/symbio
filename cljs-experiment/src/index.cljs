(ns index
  (:require [parser :as parser]))

(defn exports []
  #js {:parse parser/parse})
