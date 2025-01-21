# Unfuck.js
### `!+()[] => abc()`  
Revert JavaScript code obfuscated with JSFuck.  
  
This is an *extremely* **lightweight** JavaScript project, cause the compressed code is **only `219`** bytes!
# Usage
Please attention: Please **reference it *after* JSFuck**, or it **cannot be used**
```javascript
/* Ordinary method */
JSUnFuck(CODEHERE);
//Or JSFuck.decode(CODEHERE)

/* Conservative method */
(JSFuck.decode||JSUnFuck)(CODEHERE);
```