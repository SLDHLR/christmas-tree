# 🎄 Grand Luxury Interactive Christmas Tree

An immersive, high-fidelity 3D Christmas tree experience featuring hand gesture control, dynamic chaos-to-order assembly, and luxurious emerald and gold aesthetics.

## 📝 Project Overview

An interactive 3D Christmas tree experience built with React 19, TypeScript, and Three.js:

**Key Features:**
- **State Machine:** Transitions between CHAOS (scattered elements) and FORMED (assembled tree) states
- **Dual-Position System:** Elements dynamically interpolate between chaotic and structured positions
- **Foliage System:** Particle-based rendering using THREE.Points and custom shaders
- **Ornaments:** Optimized InstancedMesh rendering with gift boxes, baubles, and lights
- **Post-Processing:** Bloom effects for cinematic golden glow (threshold 0.8, intensity 1.2)
- **Polaroid Decorations:** Multiple photo frames scattered throughout the scene
- **Gesture Control:** Hand tracking enables camera control and state transitions
- **Visual Style:** Luxurious emerald green and gold color scheme

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd grand-luxury-interactive-christmas-tree
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:3010`
   - Allow camera access for gesture control
   - Click "Upload Photos" to upload your photos


## 🎯 Usage

### Gesture Controls

1. **Position your hand** in front of the webcam (visible in top-right preview)
2. **Move your hand** to control the camera angle:
   - Left/Right: Horizontal rotation
   - Up/Down: Vertical tilt
3. **Open your hand** (spread all fingers): Unleash chaos mode
4. **Close your fist**: Restore tree to formed mode

### Mouse Controls

When no hand is detected, you can:
- **Click and drag** to rotate the view
- **Scroll** to zoom in/out
- **Right-click and drag** to pan (disabled by default)

## 🎅 Happy Holidays!

May your code be merry and bright! 🎄✨

---

## 👨‍💻 Credits

Developed by **CodeXpert**  
A luxury interactive 3D experience combining modern web technologies with festive creativity.
