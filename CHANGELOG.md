## [0.0.2] - 05-10-2017
### Description

Optimizations and improvements. Raspistill now outputs the image to stdout, nodejs reads from the pipe, processes the buffer to an image and sends it to the clients. This greatly reduces the cpu usage (20%-30%) and gets the fps up to 8-9.

## [0.0.1] - 04-10-2017
### Description

Quick and dirty. Raspistill saves a file, nodejs reads it and sends it to the clients through a socket. On my rasberry pi zero this spikes the cpu to 100% and allows for 2-3 fps