this.canvas.on('mouse:down', (e) => {
  if (e.target) {
    console.log('an object was clicked! ', e.target.type)
    console.log('object location left, top===>', e.target.left, e.target.top)
    const origX = e.pointer.x
    const origY = e.pointer.y
    console.log(
      '🚀 ~ file: seatingTool.js ~ line 90 ~ this.canvas.on ~ origX,origY',
      origX,
      origY
    )

    const grpObjects = e.target._objects
    console.log(
      '🚀 ~ file: seatingTool.js ~ line 94 ~ this.canvas.on ~ grpObjects',
      grpObjects
    )
  }
})
this.canvas.on('dragenter', (dragEvent) => {
  console.log('dragenter! ', dragEvent)
})
this.canvas.on('dragleave', (dragEvent) => {
  console.log('dragleave! ', dragEvent)
})
