function preview() {
    const A = document.getElementById("A").value;
    const B = document.getElementById("B").value;
    const C = document.getElementById("C").value;
    const D = document.getElementById("D").value;
    const unit = document.getElementById("unit").value;

    document.getElementById("box").style.borderTopLeftRadius = A + unit;
    document.getElementById("box").style.borderTopRightRadius = B + unit;
    document.getElementById("box").style.borderBottomRightRadius = C + unit;
    document.getElementById("box").style.borderBottomLeftRadius = D + unit;
}

function copy() {
    const box = document.getElementById("box");
    const computedStyle = getComputedStyle(box);
    const borderRadius = "border-radius : " + computedStyle.borderRadius + ";";

    navigator.clipboard.writeText(borderRadius)
  .then(() => {
    alert('Copied to clipboard!');
  })
}