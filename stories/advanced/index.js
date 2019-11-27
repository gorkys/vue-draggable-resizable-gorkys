
import ParentResize from './parent-resize'
import conflictDetection from './conflict-detection'
import adsorptionAlignment from './adsorption-alignment'
import refLineAlign from'./refLine-align'
import refLineAlignNotes from './notes/refLine-align.md'

export default {
  '父级调整大小' : [() => new ParentResize],
  '冲突检测' : [() => new conflictDetection],
  '吸附对齐' : [() => new adsorptionAlignment],
  '元素对齐与辅助线' : [() => new refLineAlign, refLineAlignNotes]
}
