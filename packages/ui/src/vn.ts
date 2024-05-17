import XEUtils from 'xe-utils'

import { VxeComponentSlot } from '../../../types'

export function getOnName (type: string) {
  return 'on' + type.substring(0, 1).toLocaleUpperCase() + type.substring(1)
}

export function getModelEvent (renderOpts: any) {
  switch (renderOpts.name) {
    case 'input':
    case 'textarea':
      return 'input'
  }
  return 'update:modelValue'
}

export function getChangeEvent (renderOpts: any) {
  switch (renderOpts.name) {
    case 'input':
    case 'textarea':
    case 'VxeInput':
    case 'VxeTextarea':
    case '$input':
    case '$textarea':
      return 'input'
  }
  return 'change'
}

export function getSlotVNs (vns: VxeComponentSlot | VxeComponentSlot[]) {
  if (XEUtils.isArray(vns)) {
    return vns
  }
  return [vns]
}
