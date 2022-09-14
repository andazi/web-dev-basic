function rgb(r, g, b) {
    rHEX = r.toString(16).toUpperCase()
    gHEX = g.toString(16).toUpperCase()
    bHEX = b.toString(16).toUpperCase()

    return `#${rHEX}${gHEX}${bHEX}`
}
rgb(222, 46, 120)