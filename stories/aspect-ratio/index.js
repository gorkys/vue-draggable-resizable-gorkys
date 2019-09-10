import AspectRatio from './aspect-ratio'
import AspectRatioNotes from './notes/aspect-ratio.md'
import AspectRatioParent from './aspect-ratio-in-parent'
import AspectRatioParentNotes from './notes/aspect-ratio-in-parent.md'
import AspectRatioMinWidthMinHeight from './aspect-ratio-with-minw-minh'
import AspectRatioMinWidthMinHeightNotes from './notes/aspect-ratio-with-minw-minh.md'
import AspectRatioMaxWidthMaxHeight from './aspect-ratio-with-maxw-maxh'
import AspectRatioMaxWidthMaxHeightNotes from './notes/aspect-ratio-with-maxw-maxh.md'
import AspectRatioGrid from './aspect-ratio-with-grid'
import AspectRatioGridNotes from './notes/aspect-ratio-with-grid.md'
import AspectRatioGridOffsetMin from './aspect-ratio-grid-with-offset-and-min'
import AspectRatioGridParent from './aspect-ratio-with-grid-in-parent'

export default {
  '基本纵横比' : [() => new AspectRatio, AspectRatioNotes],
  '在父级中限制' : [() => new AspectRatioParent, AspectRatioParentNotes],
  '使用minHeight和minWidth' : [() => new AspectRatioMinWidthMinHeight, AspectRatioMinWidthMinHeightNotes],
  '使用maxWidth和maxHeight' : [() => new AspectRatioMaxWidthMaxHeight, AspectRatioMaxWidthMaxHeightNotes],
  '强迫网格' : [() => new AspectRatioGrid, AspectRatioGridNotes],
  '在偏移和最小值的网格上强制' : [() => new AspectRatioGridOffsetMin],
  '在父级的网格上强制' : [() => new AspectRatioGridParent]
}
