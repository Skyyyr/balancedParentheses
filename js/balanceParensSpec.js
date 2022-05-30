let bp = require("./balanceParens");

// Add more test cases!...
console.log(balanceParens("abc(d)e(fgh))(i)j)k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("abc((d)e(fgh)(i)j(k") === "abc(d)e(fgh)(i)jk")

// Challenge: nested parentheses...
console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p") === "abc(d)(ef(g(h))ij)klm()op")

/*
* Similar to a stack we want to only push ) when we are at the correct idx
* If )[idx] > rightIdx then skip
* When scouting if nested = 0 and element is ) break out of scout, set rightidx to this idx
* The rightidx (scout) always starts scouting at the next idx to the right of the current idx
* If the scout idx reaches the end and nested > 0 then not possible so move current++ and no push

KEY:
-> = push to answer array
x = skip
~> = scout
^ = initiate scout/end scout
n++ = nested increment

a   b   c   (   d   )   (   e   f   (   g   (   h   )   )   i   j   )   k   )   l   m   (   )   o   )   p
->  ->  ->  ^
                ~>  ^
            ->  ->  ->  ^
                            ~>  ~>  n++ ~>  n++ ~>  n-- n-- ~>  ~>  ^
                        ->  ->  ->  ->  ->  ->  ->  ->  ->  ->  ->  ->  ->  x   ->  ->  ^
                                                                                            ^
                                                                                        ->  ->  ->  x   ->/end


a   b   c   (   (   d   )   e   (   f   g   h   )   (   i   )   j   (   k
->  ->  ->  ^
                n++ ~>  n-- ~>  n++ ~>  ~>  ~>  n-- n++ ~>  n-- ~>  n++ ~> (NOT POSSIBLE nested = 1 and reached end)
            x   ^
                    ~>  ^
                ->  ->  ->  ->  ^
                                    ~>  ~>  ~>  ^
                                ->  ->  ->  ->  ->  ^
                                                        ~>  ^
                                                    ->  ->  ->  ->  x   ->

*/
