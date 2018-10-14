let points = document.querySelector("#points");

let scores = 0;
let a = document.querySelector("#answer");
let b = document.querySelector("#no");
let c = document.querySelector("#no2");

    a.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
        if(points.innerHTML >=1000) {
            alert('WINNER')
        }            
        })
    b.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    c.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let d = document.querySelector("#wrong");
    let e = document.querySelector("#right");
    let f = document.querySelector("#wrong2");

    d.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    e.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })
    f.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let g = document.querySelector("#nope");
    let h = document.querySelector("#nope2");
    let i = document.querySelector("#correct");

    g.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    h.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    i.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })

    let j = document.querySelector("#correct2");
    let k = document.querySelector("#incorrect");
    let l = document.querySelector("#incorrect2");

    j.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    k.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    l.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let m = document.querySelector("#bad");
    let n = document.querySelector("#good");
    let o = document.querySelector("#bad2");

    m.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    n.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })
    o.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let p = document.querySelector("#green");
    let q = document.querySelector("#red2");
    let r = document.querySelector("#red");

    p.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    q.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    r.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let s = document.querySelector("#stop");
    let t = document.querySelector("#go");
    let u = document.querySelector("#stop2");

    s.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    t.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })
    u.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let v = document.querySelector("#true");
    let w = document.querySelector("#false");
    let x = document.querySelector("#false2");

    v.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    w.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    x.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let y = document.querySelector("#null");
    let z = document.querySelector("#null2");
    let zz = document.querySelector("#truth");

    y.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    z.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    zz.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })

    let a1 = document.querySelector("#nice");
    let a2 = document.querySelector("#mal");
    let a3 = document.querySelector("#mad");

    a1.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    a2.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    a3.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let b1 = document.querySelector("#gg");
    let b2 = document.querySelector("#bb");
    let b3 = document.querySelector("#bw");

    b1.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    b2.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    b3.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let c1 = document.querySelector("#ll");
    let c2 = document.querySelector("#gg");
    let c3 = document.querySelector("#ls");

    c1.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    c2.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })
    c3.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let cc1 = document.querySelector("#aa");
    let cc2 = document.querySelector("#flunk");
    let cc3 = document.querySelector("#ff");

    cc1.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
                     
        })
    cc2.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    cc3.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })

    let dd = document.querySelector("#lame");
    let d2 = document.querySelector("#lame2");
    let d3 = document.querySelector("#cool");

    dd.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    d2.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })
    d3.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })

    let ee = document.querySelector("#ccc");
    let e2 = document.querySelector("#xxx");
    let e3 = document.querySelector("#vvv");

    ee.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
                     
        })
    e2.addEventListener('click', function(){
        scores += 100
        points.innerHTML = scores
    })
    e3.addEventListener('click', function(){
        scores -= 100
        points.innerHTML = scores
    })