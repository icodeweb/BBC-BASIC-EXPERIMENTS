**BBC BASIC CHEATSHEET**

---

### **Screen Modes (`MODE n`)**

- `MODE 0` → Text mode, 40x25 characters, 2 colors
- `MODE 1` → Graphics mode, 320x256, 4 colors
- `MODE 2` → Graphics mode, 640x256, 16 colors
- `MODE 3` → Text mode, 80x25 characters, 2 colors
- `MODE 4` → Graphics mode, 160x256, 2 colors
- `MODE 5` → Graphics mode, 320x256, 2 colors
- `MODE 6` → Text mode, 40x25 characters, 2 colors (smaller screen area)
- `MODE 7` → Teletext mode, 40x25 characters, 8 colors

---

### **Colors (`GCOL action, color`)**

- `GCOL action, color` → Sets the drawing color.
  - **Action Modes:**
    - `0` → Normal color (default drawing mode)
    - `1` → OR mode (blends with existing colors)
    - `2` → AND mode (only draws where pixels already exist)
    - `3` → XOR mode (inverts colors where overlapping)
    - `4` → Invert mode (flips colors on screen)
  - **Available Colors (MODE 2, 16 colors)**
    - `0` → Black
    - `1` → Blue
    - `2` → Green
    - `3` → Cyan
    - `4` → Red
    - `5` → Magenta
    - `6` → Yellow
    - `7` → White
    - `8` → Gray
    - `9` → Light Blue
    - `10` → Light Green
    - `11` → Light Cyan
    - `12` → Light Red
    - `13` → Light Magenta
    - `14` → Light Yellow
    - `15` → Bright White

---

### **Drawing Commands**

- `MOVE x, y` → Moves the pen to (x, y) **without drawing**.
- `DRAW x, y` → Draws a line **from the last position** to (x, y).
- `PLOT action, x, y` → Advanced drawing mode (dots, lines, shapes).
  - **PLOT Actions:**
    - `85` → Plot a single point
    - `86` → Draw a horizontal line
    - `87` → Draw a vertical line
    - `88` → Draw a line from (x, y) to last position
    - `89` → Fill a triangle to the last two points
    - `90` → Draw a rectangle from (x, y)
    - `91` → Fill a rectangle
- **Example: Draw a triangle**

  ```basic
  MODE 2
  GCOL 0, 6  ' Yellow color
  MOVE 100, 100
  DRAW 200, 200
  DRAW 50, 200
  DRAW 100, 100  ' Closes the triangle
  ```

---

### **Text Commands**

- `PRINT "Hello"` → Displays text on screen.
- `VDU 30` → Clears the screen.
- `VDU 31, x, y` → Moves cursor to position (x, y).
- `VDU 17, color` → Sets text color.

---

### **Loops & Animation**

- `FOR i = start TO end STEP x : NEXT i` → Loop structure.
- `REPEAT ... UNTIL condition` → Repeats until the condition is true.
- **Example: Moving a Line**

  ```basic
  MODE 2
  GCOL 0, 4  ' Red
  FOR i = 50 TO 200 STEP 10
    MOVE i, 100
    DRAW i, 200
  NEXT i
  ```

---
