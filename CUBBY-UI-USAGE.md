# Cubby UI Components - Usage Guide

All 60 Cubby UI components have been successfully installed in your project at `components/ui/cubby-ui/`.

## Import Examples

### Single-File Components
Most components are single files and can be imported directly:

```tsx
import { Button } from '@/components/ui/cubby-ui/button'
import { Input } from '@/components/ui/cubby-ui/input'
import { Card } from '@/components/ui/cubby-ui/card'
import { Badge } from '@/components/ui/cubby-ui/badge'
import { Avatar } from '@/components/ui/cubby-ui/avatar'
import { Calendar } from '@/components/ui/cubby-ui/calendar'
import { Checkbox } from '@/components/ui/cubby-ui/checkbox'
import { Select } from '@/components/ui/cubby-ui/select'
import { Tabs } from '@/components/ui/cubby-ui/tabs'
```

### Multi-File Components (with subdirectories)
8 components have multiple files organized in subdirectories:

```tsx
import { Drawer } from '@/components/ui/cubby-ui/drawer/drawer'
import { CircularSlider } from '@/components/ui/cubby-ui/circular-slider/circular-slider'
import { CodeBlock } from '@/components/ui/cubby-ui/code-block/code-block'
import { Combobox } from '@/components/ui/cubby-ui/combobox/combobox'
import { CopyButton } from '@/components/ui/cubby-ui/copy-button/copy-button'
import { ScrollArea } from '@/components/ui/cubby-ui/scroll-area/scroll-area'
import { Toast } from '@/components/ui/cubby-ui/toast/toast'
import { Tree } from '@/components/ui/cubby-ui/tree/tree'
```

## Component Categories

### Form & Input (17 components)
- Input, Textarea, Checkbox, Radio Group, Switch
- Select, Combobox, Autocomplete
- Date Picker, Date Range Picker, Calendar
- Input OTP, Input Group
- Checkbox Group, Label

### Layout & Navigation (12 components)
- Navigation Menu, Menubar, Breadcrumbs
- Tabs, Toolbar, Pagination
- Accordion, Collapsible
- Carousel, Resizable, Scroll Area

### Overlay & Modal (9 components)
- Dialog, Alert Dialog, Sheet, Drawer
- Popover, Tooltip
- Context Menu, Dropdown Menu, Command

### Feedback & Display (11 components)
- Alert, Toast, Progress, Meter
- Skeleton, Badge, Avatar
- Card, Table, Timeline, Preview Card

### Interactive (8 components)
- Button, Fancy Button, Button Group
- Toggle, Toggle Group
- Slider, Circular Slider, Copy Button

### Utilities (3 components)
- Separator, Kbd, Aspect Ratio
- Code Block, Cropper, Tree

## Quick Start Example

```tsx
// app/page.tsx
import { Button } from '@/components/ui/cubby-ui/button'
import { Card } from '@/components/ui/cubby-ui/card'
import { Input } from '@/components/ui/cubby-ui/input'

export default function Home() {
  return (
    <div className="p-8">
      <Card className="p-6 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <Input placeholder="Enter your email" className="mb-4" />
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </Card>
    </div>
  )
}
```

## Button Variants
```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

## Button Sizes
```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## Components with Special Features

### Drawer (with CSS animations)
The drawer component includes `drawer.css` with scroll-driven animations.

### Code Block (with Shiki syntax highlighting)
Includes transformers for diff, focus, and line highlighting.

### Combobox (with async/creatable hooks)
Supports async data fetching and creating new items.

## CSS Requirements

Three components have accompanying CSS files that are automatically imported:
- `drawer/drawer.css` - Scroll-driven animations
- `scroll-area/scroll-area.css` - Custom scrollbar styles
- `toast/toast.css` - Toast animation styles

## Dependencies Installed

All required dependencies have been installed:
- Icon libraries: `@hugeicons/core-free-icons`, `@hugeicons/react`, `@icons-pack/react-simple-icons`, `lucide-react`
- UI utilities: `class-variance-authority`, `embla-carousel-react`, `react-day-picker`, `react-resizable-panels`
- Specialized: `@origin-space/image-cropper`, `input-otp`, `motion`, `shiki`, `dayjs`, `hast-util-to-jsx-runtime`

## Documentation

For detailed component documentation, props, and examples, visit:
https://www.cubby-ui.dev/docs/components

## Notes

- All components use Tailwind CSS for styling
- Built on @base-ui/react foundation (already configured)
- Components support dark mode via CSS variables
- TypeScript types are included with all components
