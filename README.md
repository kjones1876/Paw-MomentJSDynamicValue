# MomentJS Dynamic Value (Paw Extension)

A [Paw Extension](http://luckymarmot.com/paw/extensions/) which returns the current date time formatted using the [moment.js date format method](http://momentjs.com/docs/#/parsing/string-format/). 

## Installation

```
wget 
```

## Development

### Build & Install

```
# Download code
git clone https://github.com/kjones1876/Paw-MomentJSDynamicValue
cd Paw-MomentJSDynamicValue

# Symlink the build folder to Paw Extensions folder
ln -s \
"`pwd`/bin" \
"/Users/`whoami`/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions/me.kjones.PawExtensions.MomentJSDynamicValue"

# Install deps and build
npm install
webpack --watch
```

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!