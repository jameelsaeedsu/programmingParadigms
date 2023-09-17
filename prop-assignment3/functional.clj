; Authors of the assignment
; Jameel Saeed     --> jasa6359
; Rasmus Rodriguez --> raer3426

;my-max function

(defn my-max  ([inputList] (my-max (first inputList) (rest inputList))) 
  ([theFirst restOfTheList] 
    (cond (empty? restOfTheList) theFirst 
      (> (first restOfTheList) theFirst) (recur (first restOfTheList) (rest restOfTheList)) 
        :else (recur theFirst (rest restOfTheList))))) 

(my-max '(1 2 3 55 4 5 6))

(my-max '(36))

(my-max '())

; my-map function

(defn my-map  [listArgs func] 
    (for [list listArgs] 
      (func list))) 

(my-map '(1 2 3 4 5 6) inc)

(my-map '(-3 6 -9 12) pos?)

; my-checksum-1 function

(defn my-max  ([inputList] (my-max (first inputList) (rest inputList))) 
  ([theFirst restOfTheList] 
    (cond (empty? restOfTheList) theFirst 
      (> (first restOfTheList) theFirst) (recur (first restOfTheList) (rest restOfTheList)) 
        :else (recur theFirst (rest restOfTheList))))) 

(defn my-min  ([inputList] (my-min (first inputList) (rest inputList))) 
  ([theFirst restOfTheList] 
      (cond (empty? restOfTheList) theFirst 
          (< (first restOfTheList) theFirst) (recur (first restOfTheList) (rest restOfTheList)) 
            :else (recur theFirst (rest restOfTheList)))))

(defn my-checksum1 ([listArgs] (my-checksum1 listArgs 0)) 
    ([listArgs totalSum] 
      (if(empty? listArgs) 
        totalSum 
      (recur (rest listArgs) (+ totalSum (- (my-max (first listArgs)) (my-min (first listArgs))))))))

(my-checksum1 '((9 1 3 9 5) (0) (6 8 5 4) (1 3 4 6 10) (7 7 7 7)))

; my-checksum-2 function

(defn my-checksum2 ([listArgs func op] (my-checksum2 listArgs func op (my-max(first listArgs)))) 
  ([listArgs func op totalSum] 
    (if(empty? (rest listArgs)) 
      totalSum 
        (recur (rest listArgs) func op (op totalSum (func (first(rest listArgs)))))))) 

(my-checksum2 '((9 1 3 9 5) (6 8 5 4) (7 7 7 7)) my-max -)

(my-checksum2 '((1 3 9 5) (6 5 4 3) (3 5 1)) my-max -)

;my-reverse function

(defn my-reverse [listArgs] 
(if (empty? listArgs)
  listArgs
    (concat
      (my-reverse (rest listArgs))
        (list (first listArgs)))))

(my-reverse '(1 2 3 55 4 5 6))

(my-reverse '(36))

(my-reverse '())










