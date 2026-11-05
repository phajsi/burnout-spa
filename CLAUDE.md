# Code conventions

## TypeScript props

Inline prop types directly in the destructured parameter — no separate `type Props` alias.

```tsx
// ✗
type Props = {
  open: boolean
  onClose: () => void
}
const Modal = ({ open, onClose }: Props) => { ... }

// ✓
const Modal = ({ open, onClose }: {
  open: boolean
  onClose: () => void
}) => { ... }
```
