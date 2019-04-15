# Installation instructions
[![Build Status](https://travis-ci.org/iotlearner0level/ESP8266-Chart.svg?branch=master)](https://travis-ci.org/iotlearner0level/ESP8266-Chart)

1. Download the zip and unzip it.
2. Using the ESP8266 Sketch data upload, all the files in the data directory are uploaded to the esp flash 
3. The pages are served from the flash of the esp8266
4. Fire a browser and point to esp address and the page loads automatically

## To test the HTML/javascript, check below:

Running instance:

<a href="https://iotlearner0level.github.io/ESP8266-Chart/SVGChart.html">SVG Charts on Github.io</a>

<a href="https://iotlearner0level.github.io/ESP8266-Chart/data/chart.html">Arduino Version of Charts</a>


Source Code

<a href="SVGChart 2.html">SVG Charts</a>

## Display data in a buffer in a moving/dynamic graph

This experiment is to display a fast moving graph inside the browser window like google chrome and firefox etc. Graph uses SVG  and written in Javascript/HTML. It just displays the content of a buffer array in the SVG window.

This data buffer could be filled from various sources like an esp8266 through websocket as we will investigate later...

### Work in progress

It is a work in progress. Only a few parts work:
```markdown
- SVG Graph window
- ESP server is able to render the page 
- A websocket connection is also established



### What doesn't work (yet)
- Many things
- The buffer variable is filled by random data at present
- We need to fill it using more realistic source
- Setting parameters and storing them somewhere which can be retreived later

# Header 1
## Header 2

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```



