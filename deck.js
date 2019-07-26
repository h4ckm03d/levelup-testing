export { shadesOfPurpleFull as theme } from 'code-surfer'

import { slides as introduction } from './introduction.mdx'
import { slides as mistakes } from './common-mistakes.mdx'
import { slides as design } from './design.mdx'
import { slides as tips } from './tips.mdx'
import { slides as recap } from './recap.mdx'

export const slides = [
    ...introduction,
    ...mistakes,
    ...design,
    ...tips,
    ...recap,
]
