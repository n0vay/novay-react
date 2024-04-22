Yoo Wassup

# Parcel Bundler
- Dev Build
- Local Server
- HMR : Hot Module Replacement
- File Watching Algo used fro HMR written in C++
- Caching - Faster Builds
- Image Optimization
- Minification Bundle and Compress Files
- Consistant Hashing
- Code Splitting
- Differential Bundling - support old browsers
- Diagnostics
- Error handling
- HTTPS support
- Tree Shaking - remove unsused code from build
- Different build for dev and production


# Basic Layout
// Header Component - Logo, nav
// Body Component - Search, Results, Resturant Cards
// Footer Component - Socials, Contact, CopyRight

# Two types of import export
- Default : export default FxName : import FxName from "./utils"
- Named : export FxName : import {FxName} from "./utils"

# Whenever state variable changes, react triggers reconcilliation cycle