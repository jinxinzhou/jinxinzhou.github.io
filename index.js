window.onload = function() {
    var exp_down = false
    var pub_down = false
    var tae_down = false
    var award_down = false


    function dispButton(button) {
        hideAll()
        if (button === "exp") {
            exp_down = !exp_down
            pub_down = false
            tae_down = false
            award_down = false
   
            if (!exp_down) {
                showAll()
                document.getElementById("exp_but").classList.remove("pressed")
            } else {
                document.getElementById("res_exp").style.display = "block"
                removeButton()
                document.getElementById("exp_but").classList.add("pressed")
            }
        } else if (button == "pub") {
            pub_down = !pub_down
            exp_down = false
            tae_down = false
            award_down = false

            if (!pub_down) {
                showAll()
                document.getElementById("pub_but").classList.remove("pressed")
            } else {
                document.getElementById("pub").style.display = "block"
                removeButton()
                document.getElementById("pub_but").classList.add("pressed")
            }
        } else if (button === "tae") {
            tae_down = !tae_down
            exp_down = false
            pub_down = false
            award_down = false

            if (!tae_down) {
                showAll()
                document.getElementById("tae_but").classList.remove("pressed")
            } else {
                document.getElementById("ed").style.display = "block"
                removeButton()
                document.getElementById("tae_but").classList.add("pressed")
            }
        } else if (button === "award") {
            award_down = !award_down
            exp_down = false
            pub_down = false
            tae_down = false

            if (!award_down) {
                showAll()
                document.getElementById("award_but").classList.remove("pressed")
            } else {
                document.getElementById("award").style.display = "block"
                removeButton()
                document.getElementById("award_but").classList.add("pressed")
            }
        }  
    }

    document.getElementById("pub_but").onclick = function() {
        dispButton('pub');
    }
    document.getElementById("exp_but").onclick = function() {
        dispButton('exp');
    }
    document.getElementById("tae_but").onclick = function() {
        dispButton('tae');
    }
    document.getElementById("award_but").onclick = function() {
        dispButton('award');
    }


    function showAll() {
        document.getElementById("res_exp").style.display = "block"
        document.getElementById("pub").style.display = "block"
        document.getElementById("ed").style.display = "block"
        document.getElementById("award").style.display = "block"

        var cards = document.getElementsByClassName("hide_on_all")
        for (var i=0; i<cards.length; i++) {
            cards[i].style.display = "none"
        }
    }

    function hideAll() {
        document.getElementById("res_exp").style.display = "none"
        document.getElementById("prof_exp").style.display = "none"
        document.getElementById("pub").style.display = "none"
        document.getElementById("ed").style.display = "none"
        document.getElementById("award").style.display = "none""
        document.getElementById("tab_details").style.display = "none"
        document.getElementById("pub_title").style.marginTop = "25px"
    }

    function removeButton() {
        document.getElementById("exp_but").classList.remove("pressed")
        document.getElementById("pub_but").classList.remove("pressed")
        document.getElementById("tae_but").classList.remove("pressed")
        document.getElementById("award_but").classList.remove("pressed")

        var cards = document.getElementsByClassName("hide_on_all")
        for (var i=0; i<cards.length; i++) {
            cards[i].style.display = "block"
        }
    }

    // crab logic
    var clicked = [];
    var element = document.getElementById("c");
    element.onclick = function() {
        clicked = [];
        clicked.push("c");
    }
    var element = document.getElementById("r");
    element.onclick = function() {
        if (clicked.length == 1 && clicked[0] == "c") {
            clicked.push("r");
        } else {
            clicked = [];
        }
    }
    var element = document.getElementById("a");
    element.onclick = function() {
        if (clicked.length == 2 && clicked[0] == "c" && clicked[1] == "r") {
            clicked.push("a");
        } else {
            clicked = [];
        }
    }
    var element = document.getElementById("b");
    element.onclick = function() {
        if (clicked.length == 3 && clicked[0] == "c" && clicked[1] == "r" &&
            clicked[2] == "a") {
            window.open("https://www.youtube.com/watch?v=LDU_Txk06tM", "_blank");
        }
        clicked = [];
    }
}
