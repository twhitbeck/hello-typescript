const TWO_PI = 2 * Math.PI

class TrigApp {
  private drawing = false

  constructor(private canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')

    canvas.addEventListener('mousemove', e => {
      if (!this.drawing) return

      const x = e.offsetX,
        y = e.offsetY

      ctx.beginPath()
      ctx.arc(x, y, Math.random() * 10 + 5, 0, TWO_PI)
      ctx.fill()
    })

    canvas.addEventListener('mousedown', e => {
      this.drawing = true
    })

    canvas.addEventListener('mouseup', e => {
      this.drawing = false
    })

    canvas.addEventListener('mouseleave', e => {
      this.drawing = false
    })
  }
}
