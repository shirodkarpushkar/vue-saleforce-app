const grid = 25
const backgroundColor = '#f8f8f8'
const lineStroke = '#ebebeb'
const tableFill = 'rgba(150, 111, 51, 0.7)'
const tableStroke = '#694d23'
const tableShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px'
const chairFill = 'rgba(67, 42, 4, 0.7)'
const chairStroke = '#32230b'
const chairShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px'
const barFill = 'rgba(0, 93, 127, 0.7)'
const barStroke = '#003e54'
const barShadow = 'rgba(0, 0, 0, 0.4) 3px 3px 7px'
const barText = 'Reception'
const wallFill = 'rgba(136, 136, 136, 0.7)'
const wallStroke = '#686868'
const wallShadow = 'rgba(0, 0, 0, 0.4) 5px 5px 20px'
export default {
  data() {
    return {
      canvas: null,
      number: 0,
    }
  },
  mounted() {
    this.canvas = new this.$fabric.Canvas('canvas')
    this.addDefaultObjects()
    // this.$nextTick(() => {
    //   this.canvas.on('object:moving', (e) => {})
    // })
  },
  methods: {
    addRect(left, top, width, height) {
      const id = generateId()
      const o = new this.$fabric.Rect({
        width: width,
        height: height,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
      })
      const t = new this.$fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
      })
      const g = new this.$fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })
      this.canvas.add(g)
      this.number++
      return g
    },
    addCircle(left, top, radius) {
      const id = generateId()
      const o = new this.$fabric.Circle({
        radius: radius,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
      })
      const t = new this.$fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
      })
      const g = new this.$fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })
      this.canvas.add(g)
      this.number++
      return g
    },
    addChair(left, top, width, height) {
      const o = new this.$fabric.Rect({
        left: left,
        top: top,
        width: 30,
        height: 30,
        fill: chairFill,
        stroke: chairStroke,
        strokeWidth: 2,
        shadow: chairShadow,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'chair',
        id: generateId(),
      })
      this.canvas.add(o)

      return o
    },
    addBar(left, top, width, height) {
      const o = new this.$fabric.Rect({
        width: width,
        height: height,
        fill: barFill,
        stroke: barStroke,
        strokeWidth: 2,
        shadow: barShadow,
        originX: 'center',
        originY: 'center',
        type: 'bar',
        id: generateId(),
      })
      const t = new this.$fabric.IText(barText, {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
      })
      const g = new this.$fabric.Group([o, t], {
        left: left,
        top: top,
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'bar',
      })
      this.canvas.add(g)
      return g
    },
    addWall(left, top, width, height) {
      const o = new this.$fabric.Rect({
        left: left,
        top: top,
        width: width,
        height: height,
        fill: wallFill,
        stroke: wallStroke,
        strokeWidth: 2,
        shadow: wallShadow,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'wall',
        id: generateId(),
      })
      this.canvas.add(o)
      return o
    },
    addDefaultObjects() {
      this.addChair(15, 105)
      this.addChair(15, 135)
      this.addChair(75, 105)
      this.addChair(75, 135)
      this.addChair(225, 75)
      this.addChair(255, 75)
      this.addChair(225, 135)
      this.addChair(255, 135)
      this.addChair(225, 195)
      this.addChair(255, 195)
      this.addChair(225, 255)
      this.addChair(255, 255)
      this.addChair(15, 195)
      this.addChair(45, 195)
      this.addChair(15, 255)
      this.addChair(45, 255)
      this.addChair(15, 315)
      this.addChair(45, 315)
      this.addChair(15, 375)
      this.addChair(45, 375)
      this.addChair(225, 315)
      this.addChair(255, 315)
      this.addChair(225, 375)
      this.addChair(255, 375)
      this.addChair(15, 435)
      this.addChair(15, 495)
      this.addChair(15, 555)
      this.addChair(15, 615)
      this.addChair(225, 615)
      this.addChair(255, 615)
      this.addChair(195, 495)
      this.addChair(195, 525)
      this.addChair(255, 495)
      this.addChair(255, 525)
      this.addChair(225, 675)
      this.addChair(255, 675)

      this.addRect(0, 90, 90, 60)
      this.addRect(210, 90, 90, 60)
      this.addRect(210, 210, 90, 60)
      this.addRect(0, 210, 90, 60)
      this.addRect(0, 330, 90, 60)
      this.addRect(210, 330, 90, 60)
      this.addRect(0, 450, 60, 60)
      this.addRect(0, 570, 60, 60)
      this.addRect(210, 480, 60, 90)
      this.addRect(210, 630, 90, 60)
      this.addBar(120, 0, 180, 60)
      this.addWall(120, 510, 60, 60)
    },
    remove() {
      const o = this.canvas.getActiveObject()
      if (o) {
        o.remove()
        this.canvas.remove(o)
        this.canvas.discardActiveObject()
        this.canvas.renderAll()
      }
    },
    viewMode() {
      this.canvas.getObjects().map((o) => {
        o.hasControls = false
        o.lockMovementX = true
        o.lockMovementY = true
        if (o.type === 'chair' || o.type === 'bar' || o.type === 'wall') {
          o.selectable = false
        }
        o.borderColor = '#38A62E'
        o.borderScaleFactor = 2.5
      })
      this.canvas.selection = false
      this.canvas.hoverCursor = 'pointer'
      this.canvas.discardActiveObject()
      this.canvas.renderAll()
    },
  },
}

function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 8)
}
