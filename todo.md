# Project TODO

## Phase 1: Project Setup and Configuration
- [x] Initialize project with Vite and React
- [x] Install and configure Tailwind CSS
- [x] Set up shadcn/ui components
- [x] Configure TypeScript and ESLint
- [x] Install required dependencies (react-markdown, framer-motion, lucide-react)

## Phase 2: Core Components Development
- [x] Create Navbar component with logo and theme toggle
- [x] Implement ThemeToggle component with smooth transitions
- [x] Build ContentCard component with expandable sections
- [x] Develop LoadingSpinner component with animations
- [x] Create ScrollToTop button with fade-in effect
- [x] Create HeroSection component with feature pills

## Phase 3: Theme and Styling
- [x] Implement dark/light theme switching with context
- [x] Configure theme persistence in localStorage
- [x] Set up color variables using ICPC brand palette
- [x] Create responsive design system with Tailwind
- [x] Add custom animations (fadeInUp, slideInRight, pulse-glow, bounce-soft)
- [x] Create comprehensive CSS utilities and component classes

## Phase 4: Content Management
- [x] Fetch GitHub Wiki data from raw URLs
- [x] Parse and render markdown content with react-markdown
- [x] Implement content cards for each week module
- [x] Add expandable/collapsible sections with smooth animations
- [x] Handle loading and error states gracefully
- [x] Implement markdown component overrides for custom styling

## Phase 5: User Experience
- [x] Add smooth scroll animations to all sections
- [x] Implement page transitions and staggered animations
- [x] Create responsive navigation with sticky navbar
- [x] Add hover and focus states with transitions
- [x] Optimize performance with lazy loading
- [x] Create footer with social media links

## Phase 6: Documentation and Finalization
- [x] Create comprehensive userGuide.md
- [x] Test all features (dark mode, expandable cards, links)
- [x] Verify responsive design on mobile and desktop
- [x] Test markdown rendering and content loading
- [x] Optimize for SEO and accessibility
- [x] Final testing and bug fixes

## Completed Features Summary

### Design & Styling
- Modern, kid-friendly UI with rounded corners and soft shadows
- ICPC ANU brand colors: Teal (#5CC8D1) and Yellow (#FFC107)
- Gradient accents on buttons, headers, and highlights
- Smooth transitions and animations throughout

### Functionality
- Dark/Light mode toggle with localStorage persistence
- Expandable content cards for each week
- GitHub Wiki content fetching and rendering
- Markdown support with custom component styling
- Loading spinners and error handling
- Scroll-to-top button
- Responsive design for all devices

### Components Created
- Navbar.jsx - Sticky header with logo and theme toggle
- ThemeToggle.jsx - Dark/light mode switcher
- ContentCard.jsx - Expandable week content cards
- LoadingSpinner.jsx - Animated loading indicator
- ScrollToTop.jsx - Scroll-to-top button
- HeroSection.jsx - Landing area with feature pills
- Home.jsx - Main page with all sections
- ThemeContext.jsx - Global theme management

### Styling
- index.css - Comprehensive brand colors and animations
- Tailwind CSS integration
- Custom animations: fadeInUp, slideInRight, pulse-glow, bounce-soft
- Responsive typography and spacing
- Dark mode CSS variables


## Phase 7: Dashboard Redesign
- [x] Create StatCard component for key metrics
- [x] Build ResourcesTable component for displaying resources
- [x] Create ProblemsTable component for practice problems
- [x] Design dashboard grid layout with cards
- [x] Implement filter and search functionality
- [x] Create week overview cards with progress indicators
- [x] Design responsive dashboard for mobile
- [x] Add interactive elements and hover effects


## Bugs to Fix
- [x] Dark mode not working properly - theme colors not applying (FIXED: Changed ThemeContext to apply .dark class instead of data-theme attribute)
