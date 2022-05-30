let bp = require("./balanceParens");

// Add more test cases!...
console.log(balanceParens("abc(d)e(fgh))(i)j)k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("abc((d)e(fgh)(i)j(k") === "abc(d)e(fgh)(i)jk")

// Challenge: nested parentheses...
console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p") === "abc(d)(ef(g(h))ij)klm()op")

/*
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
