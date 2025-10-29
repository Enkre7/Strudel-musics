$: sound("jazz:0 jazz:0 jazz:0 [hh hh] jazz:0 [hh bd] [hh cp]")

$: note("c2 <eb2 <g2 g1>>".fast(2)).sound("sawtooth").lpf(500)

$: note("{f4 g4 g4 c5 d5 a4 a#4 c5}%7").s("sawtooth").lpenv(10).lpf(1000).ftype("<0 1 2>").lpq(1)
