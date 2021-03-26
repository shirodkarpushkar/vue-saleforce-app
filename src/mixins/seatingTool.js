import { fabric } from 'fabric'
const canvasWidth = 980
const canvasHeight = 620
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
      dialog: false,
      items: [
        {
          title: 'Rectangular table (both sides)',
          type: 'rect_tbl_two_sides',
        },
        {
          title: 'Rectangular table (one side)',
          type: 'rect_tbl_one_side',
        },
        {
          title: 'Round table',
          type: 'round_tbl',
        },
        {
          title: 'Square table',
          type: 'square_tbl',
        },
        {
          title: 'Square',
          type: 'square',
        },
      ],
      item: {
        title: '',
        type: '',
        chairs: 0,
      },
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas('canvas', {
      width: canvasWidth,
      height: canvasHeight,
    })
    this.addDefaultObjects()
    // this.$nextTick(() => {
    //   this.canvas.on('object:moving', (e) => {})
    // })
  },
  methods: {
    addRect(left, top, width, height) {
      const id = generateId()
      const o = new fabric.Rect({
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
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
      })
      const g = new fabric.Group([o, t], {
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
      const o = new fabric.Circle({
        radius: radius,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
      })
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
      })
      const g = new fabric.Group([o, t], {
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
      const o = new fabric.Rect({
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
      const o = new fabric.Rect({
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
      const t = new fabric.IText(barText, {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
      })
      const g = new fabric.Group([o, t], {
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
      const o = new fabric.Rect({
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
    addRoundTable(chairNumber) {
      const id = generateId()
      const n = chairNumber
      const theta = (2 * Math.PI) / n
      const xo = 100
      const yo = 100
      const ro = 50
      const rc = ro / 5

      var chairs = []

      const c = new fabric.Circle({
        left: xo,
        top: yo,
        radius: ro,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
      })

      for (let i = 0; i < n; i++) {
        const x = xo + ro * Math.cos(i * theta)
        const y = yo - ro * Math.sin(i * theta)
        const chair = new fabric.Circle({
          left: x,
          top: y,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: 2,
          shadow: chairShadow,
          originX: 'center',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        chairs.push(chair)
      }
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const g = new fabric.Group([...chairs, c, t], {
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })
      this.canvas.add(g)
      this.number++
    },
    addRectTbltwoSided(chairNumber) {
      const id = generateId()
      const n = parseInt(chairNumber)
      const delta = 20
      const x1 = 100
      const y1 = 100
      const ro = 50
      const rc = ro / 5
      const wo =
        n % 2 === 0 ? (n + 1) * delta + 2 * n * rc : n * delta + 2 * n * rc
      const ho = 3 * delta
      const xo = x1 + wo / 2
      const yo = y1 + ho / 2

      var chairs = []

      const rect = new fabric.Rect({
        left: x1,
        top: y1,
        width: wo,
        height: ho,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
      })

      for (let i = 0; i < n; i++) {
        const x = x1 + (i + 1) * (delta + rc)
        const y = y1
        const yb = y1 + ho
        const chairTop = new fabric.Circle({
          left: x,
          top: y,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: 2,
          shadow: chairShadow,
          originX: 'center',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        chairs.push(chairTop)
        const chairBottom = new fabric.Circle({
          left: x,
          top: yb,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: 2,
          shadow: chairShadow,
          originX: 'center',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        chairs.push(chairBottom)
      }
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const g = new fabric.Group([...chairs, rect, t], {
        centeredRotation: true,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })
      this.canvas.add(g)
      this.number++
    },
    addRectTblOneSided(chairNumber) {
      const id = generateId()
      const n = parseInt(chairNumber)
      const delta = 20
      const x1 = 100
      const y1 = 100
      const ro = 50
      const rc = ro / 5
      const wo =
        n % 2 === 0 ? (n + 1) * delta + 2 * n * rc : n * delta + 2 * n * rc
      const ho = 3 * delta
      const xo = x1 + wo / 2
      const yo = y1 + ho / 2

      var chairs = []

      const rect = new fabric.Rect({
        left: x1,
        top: y1,
        width: wo,
        height: ho,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: 2,
        shadow: tableShadow,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
      })

      for (let i = 0; i < n; i++) {
        const x = x1 + (i + 1) * (delta + rc)
        const y = y1
        const yb = y1 + ho
        const chairTop = new fabric.Circle({
          left: x,
          top: y,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: 2,
          shadow: chairShadow,
          originX: 'center',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        chairs.push(chairTop)
      }
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: '#fff',
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const g = new fabric.Group([...chairs, rect, t], {
        centeredRotation: true,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })
      this.canvas.add(g)
      this.number++
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
    openDialog(item) {
      this.dialog = true
      this.item = {
        title: item.title,
        type: item.type,
        chairs: 0,
      }
    },
    addItem() {
      switch (this.item.type) {
        case 'round_tbl':
          this.addRoundTable(this.item.chairs)
          this.dialog = false
          break
        case 'rect_tbl_two_sides':
          this.addRectTbltwoSided(this.item.chairs)
          this.dialog = false
          break
        case 'rect_tbl_one_side':
          this.addRectTblOneSided(this.item.chairs)
          this.dialog = false
          break
        case 'square':
          this.addRect(150, 150, 80, 80)
          this.dialog = false
          break

        default:
          this.dialog = false

          break
      }
    },
  },
}

function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 8)
}
