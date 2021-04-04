import { fabric } from 'fabric'
fabric.Object.prototype.set({
  transparentCorners: true,
  borderColor: '#38A62E',
  borderScaleFactor: 2,
  cornerColor: '#003784',
  cornerSize: 2,
  selectionColor: '#007cd6',
  hasControls: false,
  preserveObjectStacking: true,
})
const multiply = fabric.util.multiplyTransformMatrices
const invert = fabric.util.invertTransform
const decompose = fabric.util.qrDecompose

const textfill = '#000'

const selectionStroke = '#38A62E'
const selectionStrokeWidth = 2.5
const objectStrokeWidth = 1

const canvasWidth = 980
const canvasHeight = 620
const grid = 25
const backgroundColor = '#f8f8f8'
const lineStroke = '#ebebeb'

const tableFill = '#fff'
const tableStroke = '#694d23'

const chairRadius = 15
const chairFill = '#fff'
const chairStroke = '#694d23'

const barFill = 'rgba(0, 93, 127, 0.7)'
const barStroke = '#003e54'
const barText = 'Reception'

const wallFill = 'rgba(136, 136, 136, 0.7)'
const wallStroke = '#686868'

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
          chairSelection: true,
        },
        {
          title: 'Rectangular table (one side)',
          type: 'rect_tbl_one_side',
          chairSelection: true,
        },
        {
          title: 'Round table',
          type: 'round_tbl',
          chairSelection: true,
        },
        {
          title: 'Square table',
          type: 'square_tbl',
          chairSelection: false,
        },
        {
          title: 'Square',
          type: 'square',
          chairSelection: false,
        },
      ],
      item: {
        title: '',
        type: '',
        chairs: 0,
      },
      guests: [
        { name: 'Vipul' },
        { name: 'John' },
        { name: 'Tom' },
        { name: 'Jerry' },
      ],
      draggedItem: null,
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas('canvas', {
      width: canvasWidth,
      height: canvasHeight,
    })
  },
  methods: {
    addRect(left, top, width, height) {
      const id = generateId()
      const o = new fabric.Rect({
        width: width,
        height: height,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: objectStrokeWidth,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
      })
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
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
        strokeWidth: objectStrokeWidth,

        originX: 'center',
        originY: 'center',
        centeredRotation: true,
      })
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
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
        strokeWidth: objectStrokeWidth,
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
        strokeWidth: objectStrokeWidth,

        originX: 'center',
        originY: 'center',
        type: 'bar',
        id: generateId(),
      })
      const t = new fabric.IText(barText, {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
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
        strokeWidth: objectStrokeWidth,
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
      const rc = chairRadius
      var chairs = []
      const table = new fabric.Circle({
        left: xo,
        top: yo,
        radius: ro,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: objectStrokeWidth,
        originX: 'center',
        originY: 'center',
        centeredRotation: true,
      })
      const text = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const c = new fabric.Group([table, text], {
        centeredRotation: true,
        snapAngle: 45,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
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
          strokeWidth: objectStrokeWidth,
          originX: 'center',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        this.addDragDropEvents(chair)
        chairs.push(chair)
      }
      const g = [c, ...chairs]
      setParentChildRelationship(c, chairs)
      c.on('moving', (e) => moveChildren(c, chairs))
      this.canvas.add(...g)
      this.number++
    },
    addRectTbltwoSided(chairNumber) {
      const id = generateId()
      const n = parseInt(chairNumber)
      const delta = 20
      const x1 = 100
      const y1 = 100
      const ro = 50
      const rc = chairRadius
      const wo = (n + 1) * delta + 2 * n * rc
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
        strokeWidth: objectStrokeWidth,

        originX: 'left',
        originY: 'top',
        centeredRotation: true,
      })
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const c = new fabric.Group([rect, t], {
        centeredRotation: true,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })

      for (let i = 0; i < n; i++) {
        const x = x1 + (i + 1) * delta + 2 * i * rc

        const y = y1
        const yb = y1 + ho
        const chairTop = new fabric.Circle({
          left: x,
          top: y,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: objectStrokeWidth,
          originX: 'left',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        this.addDragDropEvents(chairTop)
        chairs.push(chairTop)
        const chairBottom = new fabric.Circle({
          left: x,
          top: yb,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: objectStrokeWidth,
          originX: 'left',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        this.addDragDropEvents(chairBottom)
        chairs.push(chairBottom)
      }
      const g = [c, ...chairs]
      setParentChildRelationship(c, chairs)
      c.on('moving', (e) => moveChildren(c, chairs))
      this.canvas.add(...g)
      this.number++
    },
    addRectTblOneSided(chairNumber) {
      const id = generateId()
      const n = parseInt(chairNumber)
      const delta = 20
      const x1 = 100
      const y1 = 100
      const ro = 50
      const rc = chairRadius
      const wo = (n + 1) * delta + 2 * n * rc

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
        strokeWidth: objectStrokeWidth,
        originX: 'left',
        originY: 'top',
        centeredRotation: true,
      })
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const c = new fabric.Group([rect, t], {
        centeredRotation: true,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
      })
      for (let i = 0; i < n; i++) {
        const x = x1 + (i + 1) * delta + 2 * i * rc
        const y = y1
        const yb = y1 + ho
        const chairTop = new fabric.Circle({
          left: x,
          top: y,
          radius: rc,
          fill: chairFill,
          stroke: chairStroke,
          strokeWidth: objectStrokeWidth,

          originX: 'left',
          originY: 'center',
          selectable: false,
          type: 'chair',
          id: generateId(),
        })
        this.addDragDropEvents(chairTop)
        chairs.push(chairTop)
      }

      const g = [c, ...chairs]
      setParentChildRelationship(c, chairs)
      c.on('moving', (e) => moveChildren(c, chairs))
      this.canvas.add(...g)
      this.number++
    },
    addSqaureTbl(chairNumber) {
      const id = generateId()
      const n = 4
      const delta = 20
      const xo = 100
      const yo = 100
      const ro = 50
      const rc = chairRadius
      const wo = 2 * ro
      const ho = 2 * ro
      const theta = (2 * Math.PI) / n

      var chairs = []

      const rect = new fabric.Rect({
        left: xo,
        top: yo,
        width: wo,
        height: ho,
        fill: tableFill,
        stroke: tableStroke,
        strokeWidth: objectStrokeWidth,

        originX: 'center',
        originY: 'center',
        centeredRotation: true,
      })
      const t = new fabric.IText(this.number.toString(), {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
        textAlign: 'center',
        left: xo,
        top: yo,
        originX: 'center',
        originY: 'center',
      })
      const c = new fabric.Group([rect, t], {
        centeredRotation: true,
        selectable: true,
        type: 'table',
        id: id,
        number: this.number,
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
          strokeWidth: objectStrokeWidth,
          originX: 'center',
          originY: 'center',
          selectable: true,
          type: 'chair',
          id: generateId(),
        })
        this.addDragDropEvents(chair)
        chairs.push(chair)
      }

      const g = [c, ...chairs]
      setParentChildRelationship(c, chairs)
      c.on('moving', (e) => moveChildren(c, chairs))
      this.canvas.add(...g)
      this.number++
    },
    remove() {
      const o = this.canvas.getActiveObject()

      if (o) {
        // o.remove()
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
        chairSelection: item.chairSelection,
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
        case 'square_tbl':
          this.addSqaureTbl()
          this.dialog = false
          break

        default:
          this.dialog = false

          break
      }
    },
    addDragDropEvents(chair) {
      chair.on('dragenter', this.chairDragEnterEvent)
      chair.on('dragover', this.chairDragOverEvent)
      chair.on('dragleave', this.chairDragLeaveEvent)
      chair.on('drop', this.chairDropEvent)
    },
    chairDragEnterEvent(e) {
      const o = e.target
      o.set('stroke', selectionStroke)
      o.set('strokeWidth', selectionStrokeWidth)
      this.canvas.renderAll()
    },
    chairDragOverEvent(e) {
      const o = e.target
      o.set('stroke', selectionStroke)
      o.set('strokeWidth', selectionStrokeWidth)
      this.canvas.renderAll()
    },
    chairDragLeaveEvent(e) {
      const o = e.target
      o.set('stroke', chairStroke)
      o.set('strokeWidth', objectStrokeWidth)
      this.canvas.renderAll()
    },
    chairDropEvent(e) {
      const chair = e.target
      chair.set('stroke', chairStroke)
      chair.set('strokeWidth', objectStrokeWidth)

      const guest = new fabric.IText(this.draggedItem.name, {
        fontFamily: 'Calibri',
        fontSize: 14,
        fill: textfill,
        textAlign: 'center',
        originX: 'left',
        originY: 'center',
        left: chair.left,
        top: chair.top,
        type: 'guest',
      })
      const parent = this.canvas
        .getObjects()
        .find((el) => el.id === chair.parent_id)
      console.log(
        '🚀 ~ file: seatingTool.js ~ line 640 ~ chairDropEvent ~ parent',
        parent
      )

      setParentChildRelationship(parent, [guest])
      parent.on('moving', (e) => moveChildren(parent, [guest]))
      this.canvas.add(guest)
      this.canvas.bringToFront(guest)
      this.canvas.renderAll()
    },
    setDragStartData(item) {
      this.draggedItem = item
    },
  },
}

function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 8)
}

function setParentChildRelationship(parent, childrens) {
  var bossTransform = parent.calcTransformMatrix()
  var invertedBossTransform = invert(bossTransform)
  childrens.forEach((o) => {
    var desiredTransform = multiply(
      invertedBossTransform,
      o.calcTransformMatrix()
    )

    o.set('relationship', desiredTransform)
    o.set('parent_id', parent.id)
  })
}
function moveChildren(parent, children) {
  if (parent.type === 'chair') {
    console.log(
      '🚀 ~ file: seatingTool.js ~ line 680 ~ moveChildren ~ children',
      children
    )
  }
  children.forEach((el) => {
    if (!el.relationship) {
      return
    }
    var relationship = el.relationship
    var newTransform = multiply(parent.calcTransformMatrix(), relationship)
    const opt = decompose(newTransform)
    el.set({
      flipX: false,
      flipY: false,
    })
    el.setPositionByOrigin(
      { x: opt.translateX, y: opt.translateY },
      'center',
      'center'
    )
    el.set(opt)
    el.setCoords()
  })
}
