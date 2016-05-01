# MomentJS Dynamic Value (Paw Extension)

A [Paw Extension](http://luckymarmot.com/paw/extensions/) which returns the current date time formatted using the [moment.js date format method](http://momentjs.com/docs/#/parsing/string-format/). 

## Installation

```
PAW_EXT="/Users/`whoami`/Library/Containers/com.luckymarmot.Paw/Data/Library/Application Support/com.luckymarmot.Paw/Extensions"

mkdir "$PAW_EXT"
cd "$PAW_EXT"

curl -Ls \
	https://github.com/kjones1876/Paw-MomentJSDynamicValue/releases/download/1.0.1/io.kjones.PawExtensions.MomentJSDynamicValue.tar.gz \
	| tar -zxf -

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