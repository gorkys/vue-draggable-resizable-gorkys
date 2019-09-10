import ParentBasicCase from './parent-basic-case'
import ParentBasicCaseNotes from './notes/parent-basic-case.md'
import ParentMaxWidthMaxHeight from './parent-maxw-maxh'
import ParentMaxWidthMaxHeightNotes from './notes/parent-maxw-maxh.md'
import ParentGrid from './parent-grid'
import ParentGridNotes from './notes/parent-grid.md'
import ParentGridWithOffset from './parent-grid-with-offset'
import ParentGridWithOffsetNotes from './notes/parent-grid-with-offset.md'
import ParentGridWithEvenOffset from './parent-grid-with-even-offset'
import ParentGridWithEvenOffsetNotes from './notes/parent-grid-with-even-offset.md'
import ParentGridMaxWidthMaxHeight from './parent-grid-maxw-maxh'
import ParentGridMaxWidthMaxHeightNotes from './notes/parent-grid-maxw-maxh.md'
import ParentControlledComponent from './parent-controlled-component'
import ParentControlledComponentNotes from './notes/parent-controlled-component.md'
import ParentUserSelect from './parent-user-select'

export default {
  '父级基本案例' : [() => new ParentBasicCase, ParentBasicCaseNotes],
  '父级MaxWidth MaxHeight' : [() => new ParentMaxWidthMaxHeight, ParentMaxWidthMaxHeightNotes],
  '父级网格' : [() => new ParentGrid, ParentGridNotes],
  '具有偏移的父级网格' : [() => new ParentGridWithOffset, ParentGridWithOffsetNotes],
  '父级网格甚至偏移' : [() => new ParentGridWithEvenOffset, ParentGridWithEvenOffsetNotes],
  '具有MaxWidth MaxHeight的父级网格' : [() => new ParentGridMaxWidthMaxHeight, ParentGridMaxWidthMaxHeightNotes],
  '父级控制组件' : [() => new ParentControlledComponent, ParentControlledComponentNotes],
  '父级用户选择': [() => new ParentUserSelect]
}
