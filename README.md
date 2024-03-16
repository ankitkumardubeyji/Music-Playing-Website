# This is the pure frontend project using the basic HTML CSS AND JS

# 1. alignitems
for applying alignitems to the container height must be given to the container.


# 2  script file should be attached above the body tag.
Syntax : <script src="script.js"></script>

# 3 QuerySelector returns the nodelist -
forEach function can be applied but the map function cannot be applied on the nodelist, hence we convert the nodelist to array using `Array.from`

# 4. selecting by className returns the htmlCollections.
Neither the map nor the foreach functionality can be applied on the html collections


# 5. How the audioElement is created in the js 
`let audioElement = new Audio("")`

# 6.  Different functionalities provided by the audio element in the js
play() - `audioElement.play()`
pause()- `audioElement.pause()`

# 7. Different properties provided by the audioElement in the js 
The HTMLAudioElement interface provides access to the properties and methods of an <audio> element in JavaScript. Some of the commonly used properties of the HTMLAudioElement include:

audio.currentTime: Gets or sets the current playback position in seconds.
audio.duration: Returns the length of the audio in seconds.
audio.paused: Returns a boolean indicating whether the audio is paused.
audio.volume: Gets or sets the volume of the audio (a value between 0 and 1).
audio.muted: Gets or sets a boolean indicating whether the audio is muted.
audio.src: Gets or sets the URL of the audio file.
audio.loop: Gets or sets a boolean indicating whether the audio should loop.
audio.playbackRate: Gets or sets the playback rate of the audio.
audio.ended: Returns a boolean indicating whether the audio has ended.
audio.controls: Returns a boolean indicating whether the audio should display controls.


# 8.  How to extract the child elements of the div by dom
const parentDiv = document.getElementById('parentDiv');

// Get all child elements of the div
const childElements = `parentDiv.children`;
We use the `.children` property of the parent <div> element to get a collection of all its child elements.

# 9. How to strings can be compared in js
== : only values compared
=== : checking done with the type

# 10. How to find the last occurence of the chracter in the string
const lastIndex = str.lastIndexOf("hello");

#  11 . How to check a particular element has the class present or not
`contains` : element.classList.contains('exampleClass')


