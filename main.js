let points = document.querySelector("#points");

let scores = 0;
let a = document.querySelector("#answer");
let b = document.querySelector("#no");
let c = document.querySelector("#no2");

// function to check if the game is over or not



function disableButton(target) {
    const targetButton = document.getElementById(target);
    targetButton.classList.add("disabled");
}


a.addEventListener('click', function (event) {
    scores += 100
    points.innerHTML = scores
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
b.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
c.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});

let d = document.querySelector("#wrong");
let e = document.querySelector("#right");
let f = document.querySelector("#wrong2");

d.addEventListener('click', function (event) {
    scores -= 100;
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
e.addEventListener('click', function (event) {
    scores += 100;
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
f.addEventListener('click', function (event) {
    scores -= 100;
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});

let g = document.querySelector("#nope");
let h = document.querySelector("#nope2");
let i = document.querySelector("#correct");

g.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

});
h.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
i.addEventListener('click', function (event) {
    scores += 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});

let j = document.querySelector("#correct2");
let k = document.querySelector("#incorrect");
let l = document.querySelector("#incorrect2");

j.addEventListener('click', function (event) {
    scores += 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

});
k.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
l.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});

let m = document.querySelector("#bad");
let n = document.querySelector("#good");
let o = document.querySelector("#bad2");

m.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

});
n.addEventListener('click', function (event) {
    scores += 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
o.addEventListener('click', function (event) {
    scores -= 100
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});

let p = document.querySelector("#green");
let q = document.querySelector("#red2");
let r = document.querySelector("#red");

p.addEventListener('click', function (event) {
    scores += 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

});
q.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});
r.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
});

let s = document.querySelector("#stop");
let t = document.querySelector("#go");
let u = document.querySelector("#stop2");

s.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
t.addEventListener('click', function (event) {
    scores += 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
u.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let v = document.querySelector("#true");
let w = document.querySelector("#false");
let x = document.querySelector("#false2");

v.addEventListener('click', function (event) {
    scores += 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
w.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
x.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let y = document.querySelector("#null");
let z = document.querySelector("#null2");
let zz = document.querySelector("#truth");

y.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
z.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
zz.addEventListener('click', function (event) {
    scores += 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let a1 = document.querySelector("#nice");
let a2 = document.querySelector("#mal");
let a3 = document.querySelector("#mad");

a1.addEventListener('click', function (event) {
    scores += 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
a2.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
a3.addEventListener('click', function (event) {
    scores -= 200
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let b1 = document.querySelector("#gg");
let b2 = document.querySelector("#bb");
let b3 = document.querySelector("#bw");

b1.addEventListener('click', function (event) {
    scores += 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
b2.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
b3.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let c1 = document.querySelector("#ll");
let c2 = document.querySelector("#gg");
let c3 = document.querySelector("#ls");

c1.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
c2.addEventListener('click', function (event) {
    scores += 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
c3.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let cc1 = document.querySelector("#aa");
let cc2 = document.querySelector("#flunk");
let cc3 = document.querySelector("#ff");

cc1.addEventListener('click', function (event) {
    scores += 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
cc2.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
cc3.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let dd = document.querySelector("#lame");
let d2 = document.querySelector("#lame2");
let d3 = document.querySelector("#cool");

dd.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
d2.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
d3.addEventListener('click', function (event) {
    scores += 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

let ee = document.querySelector("#ccc");
let e2 = document.querySelector("#xxx");
let e3 = document.querySelector("#vvv");

ee.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);

})
e2.addEventListener('click', function (event) {
    scores += 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})
e3.addEventListener('click', function (event) {
    scores -= 300
    points.innerHTML = scores;
    checkWin();

    const eventTarget = event.target.getAttribute("data-parent");
    disableButton(eventTarget);
})

function checkWin() {
    if (points.innerHTML >= 1000) {
        swal({
            type: 'success',
            title: 'WINNER',
            showConfirmButton: false
        })
    }
    else if (points.innerHTML <= 0) {
        swal({
            type: 'fail',
            Title: 'LOSER',
            showConfirmButton: false
        })
    }
}