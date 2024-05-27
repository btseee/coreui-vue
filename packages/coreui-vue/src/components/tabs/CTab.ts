import { defineComponent, h, inject, Ref } from 'vue'

const CTab = defineComponent({
  name: 'CTab',
  props: {
    /**
     * Item key.
     */
    itemKey: {
      type: [Number, String],
      required: true,
    },
  },
  setup(props, { slots }) {
    const activeItemKey = inject('activeItemKey') as Ref<number | string>
    const id = inject('id') as Ref<number | string>
    const setActiveItemKey = inject('setActiveItemKey') as (key: number | string) => void

    const isActive = () => props.itemKey === activeItemKey.value

    return () =>
      h(
        'button',
        {
          class: [
            'nav-link',
            {
              active: isActive(),
            },
          ],
          id: `${id.value}${props.itemKey}-tab`,
          role: 'tab',
          tabindex: isActive() ? 0 : -1,
          type: 'button',
          'aria-controls': `${id.value}${props.itemKey}-tab-pane`,
          'aria-selected': isActive(),
          onClick: () => setActiveItemKey(props.itemKey),
          onFocus: () => setActiveItemKey(props.itemKey),
        },
        slots.default && slots.default(),
      )
  },
})

export { CTab }
