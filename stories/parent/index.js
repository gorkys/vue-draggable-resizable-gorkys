import { withMarkdownNotes } from '@storybook/addon-notes';

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
  '父级基本案例' : withMarkdownNotes(ParentBasicCaseNotes)(() => (new ParentBasicCase)),
  '父级MaxWidth MaxHeight' : withMarkdownNotes(ParentMaxWidthMaxHeightNotes)(() => (new ParentMaxWidthMaxHeight)),
  '父级网格' : withMarkdownNotes(ParentGridNotes)(() => (new ParentGrid)),
  '具有偏移的父级网格' : withMarkdownNotes(ParentGridWithOffsetNotes)(() => (new ParentGridWithOffset)),
  '父级网格甚至偏移' : withMarkdownNotes(ParentGridWithEvenOffsetNotes)(() => (new ParentGridWithEvenOffset)),
  '具有MaxWidth MaxHeight的父级网格' : withMarkdownNotes(ParentGridMaxWidthMaxHeightNotes)(() => (new ParentGridMaxWidthMaxHeight)),
  '父级控制组件' : withMarkdownNotes(ParentControlledComponentNotes)(() => (new ParentControlledComponent)),
  '父级用户选择': () => new ParentUserSelect
}
